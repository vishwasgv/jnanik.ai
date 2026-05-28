"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import gsap from "gsap";

/* ─────────────────────────────────────────────────────────────────
   Module-level mutable state — GSAP writes, useFrame reads.
   Singleton pattern is fine: splash shows once per session.
───────────────────────────────────────────────────────────────── */
const A = {
  webAlpha:   0,
  nodeAlpha:  0,
  ptAlpha:    0,
  cameraZ:    9,
  rotY:       0,
  collapse:   1,
  burstR:     0.01,
  burstAlpha: 0,
};

const resetA = () =>
  Object.assign(A, {
    webAlpha: 0, nodeAlpha: 0, ptAlpha: 0,
    cameraZ: 9, rotY: 0, collapse: 1,
    burstR: 0.01, burstAlpha: 0,
  });

/* ── Service node definitions ─────────────────────────────────── */
const NODES: { color: string; pos: [number, number, number] }[] = [
  { color: "#00D4FF", pos: [-2.2,  1.3,  0.5] },
  { color: "#7C3AED", pos: [ 2.2,  1.3, -0.5] },
  { color: "#00FF9C", pos: [ 0,    2.8,  0  ] },
  { color: "#F59E0B", pos: [-2.2, -1.3, -0.5] },
  { color: "#FF006E", pos: [ 2.2, -1.3,  0.5] },
  { color: "#60A5FA", pos: [ 0,   -2.8,  0  ] },
];

const PALETTE_HEX = ["#00D4FF","#7C3AED","#00FF9C","#F59E0B","#FF006E","#60A5FA","#FFFFFF"];

/* ── Neural web of fiber-optic CatmullRom lines ───────────────── */
function NeuralWeb() {
  const groupRef = useRef<THREE.Group>(null!);
  const matRef   = useRef<THREE.LineBasicMaterial>(null!);

  const geo = useMemo(() => {
    const pos: number[] = [];
    const col: number[] = [];
    const cols = PALETTE_HEX.map(h => {
      const c = new THREE.Color(h);
      c.multiplyScalar(1.9);
      return c;
    });

    for (let i = 0; i < 240; i++) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3((Math.random()-.5)*12,(Math.random()-.5)*9,(Math.random()-.5)*6),
        new THREE.Vector3((Math.random()-.5)*10,(Math.random()-.5)*8,(Math.random()-.5)*5),
        new THREE.Vector3((Math.random()-.5)*11,(Math.random()-.5)*9,(Math.random()-.5)*6),
        new THREE.Vector3((Math.random()-.5)*12,(Math.random()-.5)*9,(Math.random()-.5)*6),
      ]);
      const pts = curve.getPoints(20);
      const c   = cols[i % cols.length];
      for (let j = 0; j < pts.length - 1; j++) {
        pos.push(pts[j].x,   pts[j].y,   pts[j].z);
        pos.push(pts[j+1].x, pts[j+1].y, pts[j+1].z);
        col.push(c.r, c.g, c.b, c.r, c.g, c.b);
      }
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("color",    new THREE.Float32BufferAttribute(col, 3));
    return g;
  }, []);

  useFrame(() => {
    if (!groupRef.current || !matRef.current) return;
    groupRef.current.rotation.y = A.rotY;
    groupRef.current.scale.setScalar(A.collapse);
    matRef.current.opacity = A.webAlpha;
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={geo}>
        <lineBasicMaterial
          ref={matRef}
          vertexColors
          blending={THREE.AdditiveBlending}
          transparent
          opacity={0}
          depthWrite={false}
          toneMapped={false}
        />
      </lineSegments>
    </group>
  );
}

/* ── Six pulsing service-node orbs ───────────────────────────── */
function ServiceNodes() {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t   = clock.getElapsedTime();
    const opa = Math.max(0, Math.min(1, A.nodeAlpha));
    groupRef.current.scale.setScalar(A.collapse);
    groupRef.current.rotation.y = A.rotY * 0.5;

    meshRefs.current.forEach((m, i) => {
      if (!m) return;
      const mat = m.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = (2.8 + Math.sin(t * 2 + i * 1.1) * 0.9) * opa;
      mat.opacity           = opa;
      m.scale.setScalar(1 + Math.sin(t * 1.8 + i * 0.9) * 0.07);
    });
  });

  return (
    <group ref={groupRef}>
      {NODES.map((n, i) => (
        <mesh
          key={i}
          position={n.pos}
          ref={el => { meshRefs.current[i] = el; }}
        >
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial
            color={n.color}
            emissive={n.color}
            emissiveIntensity={0}
            transparent
            opacity={0}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Floating ambient particles ──────────────────────────────── */
function Particles() {
  const ptRef  = useRef<THREE.Points>(null!);
  const matRef = useRef<THREE.PointsMaterial>(null!);

  const geo = useMemo(() => {
    const N   = 900;
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    const pal = [
      [0,0.83,1],[0.49,0.23,0.93],[0,1,0.61],
      [0.96,0.62,0.04],[1,0,0.43],[0.38,0.64,0.98],
    ];
    for (let i = 0; i < N; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 1.5 + Math.random() * 5.5;
      pos[i*3]   = Math.cos(a) * r;
      pos[i*3+1] = (Math.random() - 0.5) * 9;
      pos[i*3+2] = Math.sin(a) * r;
      const c = pal[Math.floor(Math.random() * pal.length)];
      col[i*3] = c[0]; col[i*3+1] = c[1]; col[i*3+2] = c[2];
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("color",    new THREE.BufferAttribute(col, 3));
    return g;
  }, []);

  useFrame(({ clock }) => {
    if (!ptRef.current || !matRef.current) return;
    ptRef.current.rotation.y = clock.getElapsedTime() * 0.07;
    ptRef.current.scale.setScalar(A.collapse);
    matRef.current.opacity = A.ptAlpha;
  });

  return (
    <points ref={ptRef} geometry={geo}>
      <pointsMaterial
        ref={matRef}
        vertexColors
        size={0.055}
        blending={THREE.AdditiveBlending}
        transparent
        opacity={0}
        depthWrite={false}
        toneMapped={false}
        sizeAttenuation
      />
    </points>
  );
}

/* ── Bright origin point — flickers during Phase 1 ───────────── */
function OriginLight() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    const p   = 0.5 + Math.sin(clock.getElapsedTime() * 14) * 0.5;
    mat.emissiveIntensity = A.webAlpha < 0.35 ? p * 12 : Math.max(1.5, p * 3);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.04, 16, 16]} />
      <meshStandardMaterial
        color="#FFFFFF"
        emissive="#FFFFFF"
        emissiveIntensity={12}
        toneMapped={false}
      />
    </mesh>
  );
}

/* ── Expanding burst shockwave ───────────────────────────────── */
function BurstRing() {
  const r1 = useRef<THREE.Mesh>(null!);
  const r2 = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (!r1.current || !r2.current) return;
    const s = Math.max(0.01, A.burstR);
    r1.current.scale.setScalar(s);
    r2.current.scale.setScalar(s * 0.72);
    (r1.current.material as THREE.MeshBasicMaterial).opacity = A.burstAlpha;
    (r2.current.material as THREE.MeshBasicMaterial).opacity = A.burstAlpha * 0.55;
  });

  return (
    <>
      <mesh ref={r1} scale={0.01}>
        <sphereGeometry args={[1, 48, 24]} />
        <meshBasicMaterial
          color="#FFFFFF"
          transparent
          opacity={0}
          wireframe
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
      <mesh ref={r2} scale={0.01}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshBasicMaterial
          color="#00D4FF"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
}

/* ── Camera rig — GSAP drives cameraZ ────────────────────────── */
function CameraRig() {
  const { camera } = useThree();
  useFrame(() => { camera.position.z = A.cameraZ; });
  return null;
}

/* ── Post-processing ─────────────────────────────────────────── */
function FX() {
  return (
    <EffectComposer>
      <Bloom
        intensity={1.6}
        luminanceThreshold={0.06}
        luminanceSmoothing={0.35}
        mipmapBlur
      />
    </EffectComposer>
  );
}

/* ── Full 3-D scene ──────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.04} />
      <CameraRig />
      <NeuralWeb />
      <ServiceNodes />
      <Particles />
      <OriginLight />
      <BurstRing />
      <FX />
    </>
  );
}

/* ── Main export ─────────────────────────────────────────────── */
export default function SplashScreen() {
  const [visible,  setVisible]  = useState(false);
  const [showText, setShowText] = useState(false);
  const [white,    setWhite]    = useState(false);
  const [exiting,  setExiting]  = useState(false);
  const [gone,     setGone]     = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem("jnanik-intro")) return;
    sessionStorage.setItem("jnanik-intro", "1");

    resetA();
    setVisible(true);

    const tl = gsap.timeline();

    /* Phase 1: 0–1.2 s — void, single origin light */
    tl.to(A, { webAlpha: 0.78, duration: 1.6, ease: "power2.out" }, 0.35);

    /* Phase 2: 1.2–3.8 s — neural genesis, slow rotation */
    tl.to(A, { rotY: Math.PI * 0.7, duration: 9.5, ease: "none" }, 0);
    tl.to(A, { nodeAlpha: 1,  duration: 1.3, ease: "power2.out" }, 1.9);
    tl.to(A, { ptAlpha:  0.9, duration: 1.6, ease: "power1.out" }, 2.4);

    /* Phase 3–4: 3.8–6.8 s — data rivers, cinematic dolly-back */
    tl.to(A, { cameraZ: 13.5, duration: 3.2, ease: "power1.inOut" }, 3.6);

    /* Phase 5a: 6.8–7.2 s — collapse inward */
    tl.to(A, {
      collapse: 0.01, webAlpha: 0, nodeAlpha: 0, ptAlpha: 0,
      duration: 0.5, ease: "power3.in",
    }, 6.8);

    /* Phase 5b: 7.2–8.0 s — explosive burst */
    tl.to(A, {
      burstR: 24, burstAlpha: 0,
      duration: 0.9, ease: "power2.out",
      onStart() { A.burstAlpha = 1; },
    }, 7.2);

    /* Phase 6: 7.6 s — wordmark reveal */
    tl.call(() => setShowText(true), [], 7.6);

    /* Phase 7: 9.3 s — white flood */
    tl.call(() => setWhite(true),   [], 9.25);
    tl.call(() => setExiting(true), [], 9.95);

    return () => { tl.kill(); };
  }, []);

  if (!visible || gone) return null;

  return (
    <AnimatePresence onExitComplete={() => setGone(true)}>
      {!exiting && (
        <motion.div
          key="jnanik-splash"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65 }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "#020617", overflow: "hidden",
          }}
        >
          {/* ── 3-D canvas ─────────────────────────────────────── */}
          <Canvas
            camera={{ fov: 60, position: [0, 0, 9], near: 0.1, far: 200 }}
            gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
            dpr={[1, 2]}
            style={{ position: "absolute", inset: 0 }}
          >
            <Scene />
          </Canvas>

          {/* ── Wordmark (z:1, below white) ─────────────────────── */}
          <AnimatePresence>
            {showText && !white && (
              <motion.div
                key="wordmark"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute", inset: 0, zIndex: 1,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  pointerEvents: "none",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, position: "relative" }}>
                  {/* Ambient glow halo */}
                  <div style={{
                    position: "absolute", inset: "-90px -140px",
                    background: "radial-gradient(ellipse at center, rgba(0,212,255,0.22) 0%, rgba(124,58,237,0.13) 42%, transparent 68%)",
                    filter: "blur(38px)",
                  }} />

                  {/* JNANIK · AI — per-letter stagger */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: 2, position: "relative" }}>
                    {["J","N","A","N","I","K"].map((ch, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.065, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          fontFamily: "var(--font-playfair)",
                          fontWeight: 700,
                          fontSize: "clamp(2.8rem, 6.5vw, 5.2rem)",
                          color: "#F0F9FF",
                          letterSpacing: "0.01em",
                          textShadow: "0 0 30px rgba(0,212,255,0.5), 0 0 80px rgba(0,212,255,0.2)",
                        }}
                      >
                        {ch}
                      </motion.span>
                    ))}

                    <motion.span
                      initial={{ opacity: 0, scale: 0.65 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontWeight: 700,
                        fontSize: "clamp(2.8rem, 6.5vw, 5.2rem)",
                        color: "#00D4FF",
                        letterSpacing: "0.01em",
                        marginLeft: 18,
                        textShadow: "0 0 20px #00D4FF, 0 0 55px rgba(0,212,255,0.7), 0 0 110px rgba(0,212,255,0.3)",
                      }}
                    >
                      AI
                    </motion.span>
                  </div>

                  {/* Gradient separator line */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.65, delay: 0.62, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                      height: 1, width: 230,
                      background: "linear-gradient(90deg, transparent, #00D4FF 32%, #818CF8 68%, transparent)",
                      transformOrigin: "center",
                    }}
                  />

                  {/* Tagline */}
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 0.82, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      margin: 0,
                      fontSize: "0.6rem",
                      letterSpacing: "0.38em",
                      color: "#7DD3FC",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontFamily: "var(--font-inter)",
                      textShadow: "0 0 12px rgba(0,212,255,0.55)",
                    }}
                  >
                    Intelligence · Production
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── White exit flood (z:2, covers everything) ────────── */}
          <AnimatePresence>
            {white && (
              <motion.div
                key="white-flood"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeIn" }}
                style={{
                  position: "absolute", inset: 0, zIndex: 2,
                  background: "#FFFFFF",
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
