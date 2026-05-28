"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import gsap from "gsap";

/* ─────────────────────────────────────────────────────────────────────
   Animation state — lives in a useRef so GSAP can mutate it without
   triggering React re-renders. Passed as a prop to every 3-D component.
───────────────────────────────────────────────────────────────────── */
interface S {
  /* core */
  coreI:        number;   // origin sphere emissive intensity
  /* shock rings */
  r1: number; a1: number;
  r2: number; a2: number;
  r3: number; a3: number;
  /* neural tubes */
  tubeProgress: number;   // 0 → 1: drives setDrawRange on every tube
  tubeAlpha:    number;   // overall tube opacity
  /* service nodes */
  nodeAlpha:    number;
  nodeScale:    number;
  /* ambient particles */
  cloudAlpha:   number;
  /* pulse wave */
  pulse:        number;   // 0 → 1 → 0: synchronised brightness spike
  /* group transform */
  rotY:         number;
  collapse:     number;   // 1 → 0 on implosion
  /* burst */
  burstR:       number;
  burstA:       number;
  /* camera */
  camZ:         number;
  /* bloom */
  bloomI:       number;
}
type SR = React.MutableRefObject<S>;

function freshState(): S {
  return {
    coreI: 0,
    r1: 0, a1: 0, r2: 0, a2: 0, r3: 0, a3: 0,
    tubeProgress: 0, tubeAlpha: 0,
    nodeAlpha: 0, nodeScale: 0,
    cloudAlpha: 0,
    pulse: 0,
    rotY: 0, collapse: 1,
    burstR: 0.01, burstA: 0,
    camZ: 8,
    bloomI: 1.8,
  };
}

/* ─── Service-node definitions ────────────────────────────────────── */
const NODES = [
  { color: "#00D4FF", pos: new THREE.Vector3(-2.0,  1.2,  0.8) },
  { color: "#7C3AED", pos: new THREE.Vector3( 2.0,  1.2, -0.8) },
  { color: "#00FF9C", pos: new THREE.Vector3( 0,    2.6,  0  ) },
  { color: "#F59E0B", pos: new THREE.Vector3(-2.0, -1.2, -0.8) },
  { color: "#FF006E", pos: new THREE.Vector3( 2.0, -1.2,  0.8) },
  { color: "#60A5FA", pos: new THREE.Vector3( 0,   -2.6,  0  ) },
];
const PALETTE = ["#00D4FF","#7C3AED","#00FF9C","#F59E0B","#FF006E","#60A5FA","#FFFFFF"];

/* ─── Pulsing origin sphere ───────────────────────────────────────── */
function OriginCore({ s }: { s: SR }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const flicker = 0.55 + Math.sin(clock.getElapsedTime() * 75) * 0.45; // 12 Hz
    const mat     = ref.current.material as THREE.MeshStandardMaterial;
    const peakBoost = 1 + s.current.pulse * 1.8;
    mat.emissiveIntensity = s.current.coreI * (s.current.collapse < 0.5 ? peakBoost : flicker * peakBoost);
    ref.current.scale.setScalar(s.current.collapse);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.045, 16, 16]} />
      <meshStandardMaterial
        color="#FFFFFF" emissive="#FFFFFF"
        emissiveIntensity={0} toneMapped={false}
      />
    </mesh>
  );
}

/* ─── Three expanding shockwave torus rings ───────────────────────── */
function ShockRings({ s }: { s: SR }) {
  const m1 = useRef<THREE.Mesh>(null!);
  const m2 = useRef<THREE.Mesh>(null!);
  const m3 = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    const { r1,a1,r2,a2,r3,a3 } = s.current;
    const upd = (m: THREE.Mesh, r: number, a: number) => {
      if (!m) return;
      m.scale.setScalar(Math.max(0.001, r));
      (m.material as THREE.MeshBasicMaterial).opacity = Math.max(0, a);
    };
    upd(m1.current, r1, a1);
    upd(m2.current, r2, a2);
    upd(m3.current, r3, a3);
  });

  const ring = (
    ref: React.RefObject<THREE.Mesh>,
    color: string,
  ) => (
    <mesh ref={ref} scale={0.001}>
      <torusGeometry args={[1, 0.007, 8, 80]} />
      <meshBasicMaterial
        color={color} transparent opacity={0}
        blending={THREE.AdditiveBlending}
        depthWrite={false} toneMapped={false}
      />
    </mesh>
  );

  return (
    <>
      {ring(m1, "#FFFFFF")}
      {ring(m2, "#00D4FF")}
      {ring(m3, "#7C3AED")}
    </>
  );
}

/* ─── Neural tubes — TubeGeometry so they have real 3-D width ────── */
/* Uses setDrawRange to grow each tube tip-first from the centre.      */
function NeuralTubes({ s }: { s: SR }) {
  const groupRef = useRef<THREE.Group>(null!);
  const matRefs  = useRef<THREE.MeshStandardMaterial[]>([]);

  /* Build all tube geometries once */
  const tubes = useMemo(() => {
    const O = new THREE.Vector3(0, 0, 0);
    const pal = PALETTE;
    const list: { geo: THREE.TubeGeometry; color: string; total: number }[] = [];

    const addTube = (pts: THREE.Vector3[], color: string, r = 0.013, segs = 40) => {
      const geo  = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), segs, r, 7, false);
      const total = geo.index ? geo.index.count : 0;
      geo.setDrawRange(0, 0); // start hidden
      list.push({ geo, color, total });
    };

    /* 6 centre → node tubes */
    NODES.forEach(n => {
      const mid = n.pos.clone().lerp(O, 0.5);
      mid.x += (Math.random() - 0.5) * 1.2;
      mid.y += (Math.random() - 0.5) * 0.9;
      mid.z += (Math.random() - 0.5) * 0.7;
      addTube([O.clone(), mid, n.pos.clone()], n.color, 0.014, 44);
    });

    /* 6 node → adjacent-node tubes (hexagonal ring) */
    NODES.forEach((n, i) => {
      const m  = NODES[(i + 1) % NODES.length];
      const mid = n.pos.clone().lerp(m.pos, 0.5);
      mid.x += (Math.random() - 0.5) * 0.9;
      mid.y += (Math.random() - 0.5) * 0.8;
      addTube([n.pos.clone(), mid, m.pos.clone()], pal[i % pal.length], 0.009, 32);
    });

    /* 20 decorative branches — grow into the void */
    for (let i = 0; i < 20; i++) {
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 5,
      );
      const m1 = end.clone().multiplyScalar(0.38);
      m1.x += (Math.random() - 0.5) * 1.0;
      m1.y += (Math.random() - 0.5) * 0.8;
      const m2 = end.clone().multiplyScalar(0.72);
      m2.z += (Math.random() - 0.5) * 0.6;
      addTube([O.clone(), m1, m2, end], pal[Math.floor(Math.random() * pal.length)], 0.007, 28);
    }

    return list;
  }, []);

  const N = tubes.length;

  useFrame(() => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y = s.current.rotY;
    groupRef.current.scale.setScalar(s.current.collapse);

    const tp  = s.current.tubeProgress;  // 0 → 1
    const opa = s.current.tubeAlpha;

    tubes.forEach(({ geo, total }, i) => {
      /* Each tube gets a staggered start — earlier tubes draw first */
      const start = (i / N) * 0.55;
      const p     = Math.max(0, Math.min(1, (tp - start) / 0.45));
      geo.setDrawRange(0, Math.floor(p * total));

      const mat = matRefs.current[i];
      if (mat) {
        mat.opacity         = opa * Math.min(1, p * 2);
        mat.emissiveIntensity = (3 + s.current.pulse * 2.5) * opa;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {tubes.map((t, i) => (
        <mesh key={i} geometry={t.geo}>
          <meshStandardMaterial
            ref={el => { if (el) matRefs.current[i] = el as THREE.MeshStandardMaterial; }}
            color={t.color}
            emissive={t.color}
            emissiveIntensity={0}
            transparent
            opacity={0}
            toneMapped={false}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ─── Six glowing service-node orbs ──────────────────────────────── */
function ServiceNodes({ s }: { s: SR }) {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.scale.setScalar(s.current.collapse);
    groupRef.current.rotation.y = s.current.rotY; // match NeuralTubes so endpoints stay aligned

    const t   = clock.getElapsedTime();
    const opa = Math.max(0, Math.min(1, s.current.nodeAlpha));
    const sc  = Math.max(0, Math.min(1, s.current.nodeScale));

    meshRefs.current.forEach((m, i) => {
      if (!m) return;
      const mat = m.material as THREE.MeshStandardMaterial;
      const freq = 1.6 + i * 0.22;
      mat.emissiveIntensity = (4 + Math.sin(t * freq + i * 1.1) * 1.2 + s.current.pulse * 3) * opa;
      mat.opacity = opa;
      m.scale.setScalar(sc * (1 + Math.sin(t * freq + i * 0.9) * 0.06));
    });
  });

  return (
    <group ref={groupRef}>
      {NODES.map((n, i) => (
        <mesh
          key={i}
          position={[n.pos.x, n.pos.y, n.pos.z]}
          ref={el => { meshRefs.current[i] = el; }}
        >
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial
            color={n.color} emissive={n.color}
            emissiveIntensity={0} transparent opacity={0}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ─── Ambient particle cloud ──────────────────────────────────────── */
function AmbientCloud({ s }: { s: SR }) {
  const ptRef  = useRef<THREE.Points>(null!);
  const matRef = useRef<THREE.PointsMaterial>(null!);

  const geo = useMemo(() => {
    const N   = 1500;
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    const pal = [
      [0, 0.83, 1], [0.49, 0.23, 0.93], [0, 1, 0.61],
      [0.96, 0.62, 0.04], [1, 0, 0.43], [0.38, 0.64, 0.98],
    ];
    for (let i = 0; i < N; i++) {
      const θ = Math.random() * Math.PI * 2;
      const r = 1.5 + Math.random() * 5;
      pos[i*3]   = Math.cos(θ) * r;
      pos[i*3+1] = (Math.random() - 0.5) * 8;
      pos[i*3+2] = Math.sin(θ) * r;
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
    ptRef.current.rotation.y = clock.getElapsedTime() * 0.055;
    ptRef.current.scale.setScalar(s.current.collapse);
    matRef.current.opacity = s.current.cloudAlpha;
  });

  return (
    <points ref={ptRef} geometry={geo}>
      <pointsMaterial
        ref={matRef}
        vertexColors size={0.05}
        blending={THREE.AdditiveBlending}
        transparent opacity={0}
        depthWrite={false} toneMapped={false} sizeAttenuation
      />
    </points>
  );
}

/* ─── White burst flash sphere ────────────────────────────────────── */
function BurstFlash({ s }: { s: SR }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    if (!ref.current) return;
    ref.current.scale.setScalar(Math.max(0.001, s.current.burstR));
    (ref.current.material as THREE.MeshBasicMaterial).opacity = Math.max(0, s.current.burstA);
  });
  return (
    <mesh ref={ref} scale={0.001}>
      <sphereGeometry args={[1, 32, 16]} />
      <meshBasicMaterial
        color="#FFFFFF" transparent opacity={0}
        blending={THREE.AdditiveBlending}
        depthWrite={false} toneMapped={false}
      />
    </mesh>
  );
}

/* ─── Camera ──────────────────────────────────────────────────────── */
function CameraRig({ s }: { s: SR }) {
  const { camera } = useThree();
  useFrame(() => { camera.position.z = s.current.camZ; });
  return null;
}

/* ─── Post-processing — static intensity, no ref mutation ────────── */
function FX() {
  return (
    <EffectComposer>
      <Bloom intensity={2.2} luminanceThreshold={0.05} luminanceSmoothing={0.3} mipmapBlur />
    </EffectComposer>
  );
}

/* ─── Full scene ──────────────────────────────────────────────────── */
function Scene({ s }: { s: SR }) {
  return (
    <>
      <ambientLight intensity={0.03} />
      <CameraRig s={s} />
      <ShockRings s={s} />
      <NeuralTubes s={s} />
      <ServiceNodes s={s} />
      <AmbientCloud s={s} />
      <OriginCore s={s} />
      <BurstFlash s={s} />
      <FX />
    </>
  );
}

/* ─── Error boundary — catches any WebGL / R3F crash silently ─────── */
class SplashBoundary extends React.Component<
  { children: React.ReactNode },
  { crashed: boolean }
> {
  state = { crashed: false };
  static getDerivedStateFromError() { return { crashed: true }; }
  componentDidCatch(err: Error) {
    console.warn("[SplashScreen] WebGL init failed (non-fatal):", err.message);
  }
  render() { return this.state.crashed ? null : this.props.children; }
}

/* ─── Main export ─────────────────────────────────────────────────── */
export default function SplashScreen() {
  const s = useRef<S>(freshState());

  const [visible,  setVisible]  = useState(false);
  const [showText, setShowText] = useState(false);
  const [white,    setWhite]    = useState(false);
  const [exiting,  setExiting]  = useState(false);
  const [gone,     setGone]     = useState(false);
  const [webglOk,  setWebglOk]  = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem("jnanik-intro")) return;

    // Detect WebGL support before committing to the animation
    try {
      const probe = document.createElement("canvas");
      const gl = probe.getContext("webgl2") || probe.getContext("webgl");
      if (!gl) return;
      setWebglOk(true);
    } catch {
      return;
    }

    sessionStorage.setItem("jnanik-intro", "1");

    Object.assign(s.current, freshState());
    setVisible(true);

    const S = s.current;
    const tl = gsap.timeline();

    /* ── Phase 1: Void → origin (0 – 1.2 s) ─────────────────── */
    tl.to(S, { coreI: 15, duration: 0.4, ease: "power2.out" },          0.1);
    /* Ring 1 — white */
    tl.to(S, { r1: 7,  duration: 0.75, ease: "power1.out" },             0.2);
    tl.to(S, { a1: 0,  duration: 0.7, ease: "power1.in"  },             0.25);
    tl.set(S, { a1: 0.8 },                                                0.2);
    /* Ring 2 — cyan */
    tl.to(S, { r2: 7,  duration: 0.8, ease: "power1.out" },             0.42);
    tl.to(S, { a2: 0,  duration: 0.7, ease: "power1.in"  },             0.45);
    tl.set(S, { a2: 0.65 },                                               0.42);
    /* Ring 3 — violet */
    tl.to(S, { r3: 7,  duration: 0.85, ease: "power1.out" },            0.64);
    tl.to(S, { a3: 0,  duration: 0.7,  ease: "power1.in" },             0.68);
    tl.set(S, { a3: 0.45 },                                               0.64);

    /* ── Phase 2: Neural genesis (1.2 – 4.0 s) ──────────────── */
    tl.to(S, { tubeProgress: 1, tubeAlpha: 1,
               duration: 2.4, ease: "power2.out" },                      1.1);
    /* Slow rotation throughout entire animation */
    tl.to(S, { rotY: Math.PI * 0.85, duration: 9, ease: "none" },        0);

    /* ── Phase 3: Nodes & particles (3.0 – 5.5 s) ───────────── */
    tl.set(S, { nodeScale: 0 },                                           3.0);
    tl.to(S, { nodeAlpha: 1, duration: 1.1, ease: "power2.out" },        3.0);
    tl.to(S, { nodeScale: 1, duration: 0.7, ease: "back.out(2.2)" },     3.05);
    tl.to(S, { cloudAlpha: 0.85, duration: 1.5, ease: "power1.out" },   3.3);
    /* Camera pulls back */
    tl.to(S, { camZ: 13, duration: 3.5, ease: "power1.inOut" },         3.0);

    /* ── Phase 4: Intelligence peak pulse (5.5 – 6.8 s) ─────── */
    tl.to(S, { pulse: 1, duration: 0.35, ease: "power2.in"  },          5.6);
    tl.to(S, { pulse: 0, duration: 0.4,  ease: "power2.out" },          5.95);

    /* ── Phase 5: Collapse & burst (6.8 – 7.8 s) ────────────── */
    tl.to(S, {
      collapse: 0.01, tubeAlpha: 0, nodeAlpha: 0,
      cloudAlpha: 0, coreI: 0,
      duration: 0.52, ease: "power3.in",
    }, 6.8);
    /* Burst flash */
    tl.to(S, {
      burstR: 22, burstA: 0,
      duration: 0.55, ease: "expo.out",
      onStart() { S.burstA = 1; },
    }, 7.3);

    /* ── Phase 6: Wordmark (7.8 s) ───────────────────────────── */
    tl.call(() => setShowText(true), [], 7.75);

    /* ── Phase 7: White exit (9.3 s) ─────────────────────────── */
    tl.call(() => setWhite(true),   [], 9.25);
    tl.call(() => setExiting(true), [], 10.0);

    return () => { tl.kill(); };
  }, []);

  if (!visible || gone) return null;

  return (
    <AnimatePresence onExitComplete={() => setGone(true)}>
      {!exiting && (
        <motion.div
          key="splash"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ position: "fixed", inset: 0, zIndex: 9999,
                   background: "#020617", overflow: "hidden" }}
        >
          {/* 3-D scene — guarded by WebGL check + error boundary */}
          {webglOk && (
            <SplashBoundary>
              <Canvas
                camera={{ fov: 55, position: [0, 0, 8], near: 0.1, far: 200 }}
                gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
                dpr={[1, 1.5]}
                style={{ position: "absolute", inset: 0 }}
              >
                <Scene s={s} />
              </Canvas>
            </SplashBoundary>
          )}

          {/* Wordmark — z:1, sits above canvas, below white flood */}
          <AnimatePresence>
            {showText && !white && (
              <motion.div
                key="wm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute", inset: 0, zIndex: 1,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  pointerEvents: "none",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center",
                              gap: 14, position: "relative" }}>

                  {/* Ambient glow behind text */}
                  <div style={{
                    position: "absolute", inset: "-100px -150px",
                    background: "radial-gradient(ellipse at center, rgba(0,212,255,0.18) 0%, rgba(124,58,237,0.10) 44%, transparent 68%)",
                    filter: "blur(40px)",
                  }} />

                  {/* JNANIK — per-letter stagger */}
                  <div style={{ display: "flex", alignItems: "baseline",
                                gap: 1, position: "relative" }}>
                    {["J","N","A","N","I","K"].map((ch, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.55,
                          delay: i * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                          fontFamily: "var(--font-playfair)",
                          fontWeight: 700,
                          fontSize: "clamp(3rem, 7vw, 5.5rem)",
                          color: "#F0F9FF",
                          letterSpacing: "0.01em",
                          textShadow:
                            "0 0 30px rgba(0,212,255,0.5), 0 0 80px rgba(0,212,255,0.2)",
                        }}
                      >
                        {ch}
                      </motion.span>
                    ))}

                    {/* AI — elastic pop after last letter */}
                    <motion.span
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.65,
                        delay: 0.95, // after K finishes (0.40s delay + 0.55s duration ≈ 0.95s)
                        ease: [0.34, 1.56, 0.64, 1],  // spring overshoot
                      }}
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontWeight: 700,
                        fontSize: "clamp(3rem, 7vw, 5.5rem)",
                        color: "#00D4FF",
                        letterSpacing: "0.01em",
                        marginLeft: 20,
                        textShadow:
                          "0 0 20px #00D4FF, 0 0 55px rgba(0,212,255,0.7), 0 0 110px rgba(0,212,255,0.3)",
                      }}
                    >
                      AI
                    </motion.span>
                  </div>

                  {/* Separator — sweeps from centre */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.65, delay: 0.65, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                      height: 1, width: 234,
                      background: "linear-gradient(90deg, transparent, #00D4FF 30%, #818CF8 70%, transparent)",
                      transformOrigin: "center",
                    }}
                  />

                  {/* Tagline */}
                  <motion.p
                    initial={{ opacity: 0, letterSpacing: "0.5em" }}
                    animate={{ opacity: 0.82, letterSpacing: "0.32em" }}
                    transition={{ duration: 0.7, delay: 0.82, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      margin: 0, fontSize: "0.58rem",
                      color: "#7DD3FC", fontWeight: 600,
                      textTransform: "uppercase",
                      fontFamily: "var(--font-inter)",
                      textShadow: "0 0 14px rgba(0,212,255,0.55)",
                    }}
                  >
                    Enterprise AI for Industrial Excellence
                  </motion.p>

                  {/* Core services — staggered chips */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.3 }}
                    style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: 8 }}
                  >
                    {[
                      { label: "Knowledge Hub",        color: "#00D4FF" },
                      { label: "Agentic AI",           color: "#7C3AED" },
                      { label: "Small Language Models", color: "#00FF9C" },
                      { label: "Sovereign Deployment", color: "#60A5FA" },
                    ].map((svc, i) => (
                      <motion.span
                        key={svc.label}
                        initial={{ opacity: 0, y: 8, scale: 0.88 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.4, delay: 1.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          fontSize: "0.6rem", fontWeight: 700,
                          letterSpacing: "0.08em", textTransform: "uppercase",
                          fontFamily: "var(--font-inter)",
                          color: svc.color,
                          padding: "4px 10px",
                          borderRadius: 999,
                          border: `1px solid ${svc.color}44`,
                          background: `${svc.color}12`,
                          textShadow: `0 0 10px ${svc.color}80`,
                          boxShadow: `0 0 8px ${svc.color}22`,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {svc.label}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* White flood — z:2, covers everything at the end */}
          <AnimatePresence>
            {white && (
              <motion.div
                key="flood"
                initial={{ opacity: 0, scale: 0.01 }}
                animate={{ opacity: 1, scale: 6 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  top: "50%", left: "50%",
                  width: "100vmax", height: "100vmax",
                  marginLeft: "-50vmax", marginTop: "-50vmax",
                  borderRadius: "50%",
                  zIndex: 2,
                  background: "#FFFFFF",
                  transformOrigin: "center center",
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
