"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EP: [number, number, number, number] = [0.22, 1, 0.36, 1];
const ES: [number, number, number, number] = [0.4, 0, 0.2, 1];

const PALETTE = [
  "#00D4FF", // electric cyan
  "#818CF8", // indigo
  "#A78BFA", // violet
  "#38BDF8", // sky blue
  "#22D3EE", // cyan
  "#C084FC", // purple
  "#F0ABFC", // pink
  "#67E8F9", // light cyan
] as const;

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  alpha: number;
  delay: number;
}

export default function SplashScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  const [visible,  setVisible]  = useState(false);
  const [showText, setShowText] = useState(false);
  const [exiting,  setExiting]  = useState(false);
  const [gone,     setGone]     = useState(false);

  /* ─── Init — once per session ────────────────────────────── */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem("jnanik-intro")) return;
    sessionStorage.setItem("jnanik-intro", "1");

    setVisible(true);
    const t1 = setTimeout(() => setShowText(true), 2600);
    const t2 = setTimeout(() => setExiting(true),  4400);
    return () => [t1, t2].forEach(clearTimeout);
  }, []);

  /* ─── Canvas animation ───────────────────────────────────── */
  useEffect(() => {
    if (!visible || gone) {
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width  = W;
    canvas.height = H;
    const cx = W / 2, cy = H / 2;
    const dim = Math.min(W, H);

    /* ── Build particle nodes ── */
    const count = Math.min(70, Math.floor((W * H) / 12000));
    const nodes: Node[] = Array.from({ length: count }, () => {
      const angle = Math.random() * Math.PI * 2;
      const dist  = (0.3 + Math.random() * 0.55) * dim * 0.5;
      return {
        x:     cx + Math.cos(angle) * dist * (W / dim),
        y:     cy + Math.sin(angle) * dist,
        vx:    (Math.random() - 0.5) * 0.2,
        vy:    (Math.random() - 0.5) * 0.2,
        r:     1.2 + Math.random() * 2.4,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        alpha: 0,
        delay: 100 + Math.random() * 950,
      };
    });

    let t0: number | null = null;

    /* ── Helpers ── */
    const hex = (a: number) =>
      Math.round(Math.max(0, Math.min(1, a)) * 255).toString(16).padStart(2, "0");

    const glowDot = (x: number, y: number, r: number, color: string, a: number) => {
      // Layered soft glow halos
      for (let i = 3; i >= 0; i--) {
        const gr = r * (1 + i * 4.5);
        const ga = a * (0.08 / (i + 1));
        const g  = ctx.createRadialGradient(x, y, 0, x, y, gr);
        g.addColorStop(0, color + hex(ga));
        g.addColorStop(1, `${color}00`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, gr, 0, Math.PI * 2);
        ctx.fill();
      }
      // Bright core
      ctx.fillStyle = color + hex(a);
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    };

    const pulseRing = (t: number, t0r: number, color: string, alpha0: number, speed = 0.65) => {
      const age = t - t0r;
      if (age < 0) return;
      const maxR  = Math.sqrt(W * W + H * H) * 0.6;
      const ringR = Math.min(maxR, (age / 1000) * dim * speed);
      const a     = Math.max(0, alpha0 - age / 1700);
      if (a <= 0) return;
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      ctx.strokeStyle = color + hex(a);
      ctx.lineWidth   = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    };

    /* ── Render loop ── */
    const frame = (now: number) => {
      if (!t0) t0 = now;
      const t = now - t0;

      ctx.clearRect(0, 0, W, H);

      /* Background — deep space navy */
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, W, H);

      /* Ambient radial background */
      const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, dim * 0.7);
      bg.addColorStop(0,   "rgba(30,58,138,0.30)");
      bg.addColorStop(0.45,"rgba(76,29,149,0.16)");
      bg.addColorStop(1,   "rgba(2,6,23,0)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      /* Nodes */
      for (const n of nodes) {
        const age = t - n.delay;
        n.alpha = age < 0 ? 0 : Math.min(1, age / 500);
        n.x += n.vx;
        n.y += n.vy;
        if (n.alpha > 0.02) glowDot(n.x, n.y, n.r, n.color, n.alpha);
      }

      /* Neural connections */
      const maxDist = dim * 0.21;
      for (let i = 0; i < nodes.length; i++) {
        const na = nodes[i];
        if (na.alpha < 0.1) continue;
        for (let j = i + 1; j < nodes.length; j++) {
          const nb = nodes[j];
          if (nb.alpha < 0.1) continue;
          const dx = na.x - nb.x, dy = na.y - nb.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d > maxDist) continue;
          const la = (1 - d / maxDist) * 0.35 * Math.min(na.alpha, nb.alpha);
          const gl = ctx.createLinearGradient(na.x, na.y, nb.x, nb.y);
          gl.addColorStop(0, na.color + hex(la));
          gl.addColorStop(1, nb.color + hex(la));
          ctx.strokeStyle = gl;
          ctx.lineWidth   = 0.6;
          ctx.beginPath();
          ctx.moveTo(na.x, na.y);
          ctx.lineTo(nb.x, nb.y);
          ctx.stroke();
        }
      }

      ctx.restore();

      /* Expanding pulse rings — staggered, multi-color */
      pulseRing(t,  350,  "#06B6D4", 0.55, 0.68);
      pulseRing(t,  850,  "#7C3AED", 0.45, 0.60);
      pulseRing(t,  1400, "#00D4FF", 0.38, 0.55);
      pulseRing(t,  1950, "#EC4899", 0.30, 0.50);
      pulseRing(t,  2500, "#A78BFA", 0.22, 0.45);

      /* Centre cluster glow — builds as scene matures */
      const cga = Math.min(0.28, t / 7000);
      if (cga > 0.01) {
        const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 150);
        cg.addColorStop(0, `rgba(6,182,212,${cga})`);
        cg.addColorStop(0.5, `rgba(124,58,237,${cga * 0.5})`);
        cg.addColorStop(1, "transparent");
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = cg;
        ctx.beginPath();
        ctx.arc(cx, cy, 150, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, [visible, gone]);

  if (!visible || gone) return null;

  return (
    <AnimatePresence initial={false} onExitComplete={() => setGone(true)}>
      {!exiting && (
        <motion.div
          key="jnanik-splash"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: EP }}
          style={{ position: "fixed", inset: 0, zIndex: 9999 }}
        >
          {/* Neural canvas */}
          <canvas
            ref={canvasRef}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
          />

          {/* Wordmark overlay */}
          <div
            style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.86 }}
              animate={showText ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: EP }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, position: "relative" }}
            >
              {/* Behind-text radial glow */}
              <div style={{
                position: "absolute",
                inset: "-70px -100px",
                background: "radial-gradient(ellipse at center, rgba(6,182,212,0.22) 0%, rgba(124,58,237,0.14) 40%, transparent 68%)",
                filter: "blur(28px)",
                zIndex: -1,
                pointerEvents: "none",
              }} />

              {/* JNANIK + AI */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 700,
                    fontSize: "clamp(2.8rem, 6.5vw, 5rem)",
                    color: "#F0F9FF",
                    letterSpacing: "-0.02em",
                    textShadow: "0 0 28px rgba(0,212,255,0.45), 0 0 70px rgba(0,212,255,0.18)",
                  }}
                >
                  JNANIK
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 700,
                    fontSize: "clamp(2.8rem, 6.5vw, 5rem)",
                    color: "#00D4FF",
                    letterSpacing: "-0.02em",
                    textShadow:
                      "0 0 16px rgba(0,212,255,1), 0 0 40px rgba(0,212,255,0.7), 0 0 85px rgba(0,212,255,0.35)",
                  }}
                >
                  AI
                </span>
              </div>

              {/* Separator — sweeps from center */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={showText ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.55, ease: ES, delay: 0.32 }}
                style={{
                  height: 1,
                  width: 200,
                  background: "linear-gradient(90deg, transparent, #00D4FF 30%, #818CF8 70%, transparent)",
                  transformOrigin: "center",
                }}
              />

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={showText ? { opacity: 0.78, y: 0 } : {}}
                transition={{ duration: 0.5, ease: EP, delay: 0.52 }}
                style={{
                  margin: 0,
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  color: "#7DD3FC",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  fontFamily: "var(--font-inter)",
                  textShadow: "0 0 10px rgba(0,212,255,0.45)",
                }}
              >
                Intelligence · Production
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
