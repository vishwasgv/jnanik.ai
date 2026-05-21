"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Calendar, ArrowRight, Shield, Zap, Lock } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

/* ── Neural network data ─────────────────────────────── */
const NODES = [
  { id: 0, cx: 6,  cy: 15 }, { id: 1,  cx: 20, cy: 60 },
  { id: 2, cx: 35, cy: 22 }, { id: 3,  cx: 50, cy: 72 },
  { id: 4, cx: 65, cy: 18 }, { id: 5,  cx: 82, cy: 55 },
  { id: 6, cx: 12, cy: 45 }, { id: 7,  cx: 43, cy: 52 },
  { id: 8, cx: 58, cy: 38 }, { id: 9,  cx: 76, cy: 80 },
  { id: 10, cx: 28, cy: 10 }, { id: 11, cx: 91, cy: 25 },
  { id: 12, cx: 4,  cy: 88 }, { id: 13, cx: 48, cy: 6 },
  { id: 14, cx: 74, cy: 48 }, { id: 15, cx: 92, cy: 70 },
  { id: 16, cx: 62, cy: 90 }, { id: 17, cx: 18, cy: 82 },
];

const EDGES = NODES.flatMap((a, i) =>
  NODES.slice(i + 1).reduce<{ from: typeof a; to: typeof a; i: number }[]>((acc, b, j) => {
    const dist = Math.hypot(b.cx - a.cx, b.cy - a.cy);
    if (dist < 30) acc.push({ from: a, to: b, i: i * 10 + j });
    return acc;
  }, [])
);

/* ── Tilt card ───────────────────────────────────────── */
function TiltCard({ children, delay = 0 }: {
  children: React.ReactNode; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-60, 60], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="animate-float-card"
    >
      {children}
    </motion.div>
  );
}

const badges = [
  { icon: Shield, text: "On-prem deployable" },
  { icon: Lock,   text: "Air-gapped ready"   },
  { icon: Zap,    text: "60–80% cost saving" },
];

const words = ["Your", "business", "runs", "on", "knowledge."];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ minHeight: "100svh", background: "#0F172A" }}
    >
      {/* ── Background photo — industrial AI facility at very low opacity ── */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          priority
          style={{ opacity: 0.09 }}
        />
      </div>

      {/* ── Aurora gradient background ── */}
      <div
        className="absolute inset-0 animate-aurora pointer-events-none"
        style={{
          background: "linear-gradient(-45deg, #0F172A, #172554, #1E1B4B, #0F172A, #162032, #0F172A)",
          opacity: 0.92,
        }}
      />

      {/* ── Neural network SVG ── */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-45">
          <defs>
            <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#818CF8" stopOpacity="0.35" />
            </linearGradient>
            <filter id="nodeGlow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {EDGES.map(({ from, to, i }) => (
            <motion.line
              key={i}
              x1={`${from.cx}%`} y1={`${from.cy}%`}
              x2={`${to.cx}%`} y2={`${to.cy}%`}
              stroke="url(#edgeGrad)"
              strokeWidth="0.6"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 3 + (i % 7) * 0.6, repeat: Infinity, delay: (i % 11) * 0.28 }}
            />
          ))}

          {NODES.map((node, i) => (
            <g key={node.id}>
              <motion.circle
                cx={`${node.cx}%`} cy={`${node.cy}%`} r="3"
                fill="none" stroke="#3B82F6" strokeWidth="0.5" strokeOpacity="0.3"
                animate={{ r: [3, 5, 3], strokeOpacity: [0.3, 0.06, 0.3] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
              />
              <motion.circle
                cx={`${node.cx}%`} cy={`${node.cy}%`} r="1.4"
                fill="#60A5FA" filter="url(#nodeGlow)"
                animate={{ r: [1.4, 2, 1.4], fillOpacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2.5 + i * 0.35, repeat: Infinity, delay: i * 0.25 }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* ── Ambient glow orbs ── */}
      <div className="absolute top-[-10%] right-[-5%] w-[650px] h-[650px] rounded-full pointer-events-none animate-orb-a"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 65%)", filter: "blur(70px)" }} />
      <div className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[550px] rounded-full pointer-events-none animate-orb-b"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.18) 0%, transparent 65%)", filter: "blur(70px)" }} />
      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full pointer-events-none animate-orb-c"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 65%)", filter: "blur(40px)" }} />

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24 sm:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label mb-6 sm:mb-8 inline-flex"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-glow" />
              Enterprise AI Solutions · Bengaluru
            </motion.div>

            {/* Headline — word by word */}
            <h1
              className="font-serif font-bold leading-[1.06] tracking-tight mb-3"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)", color: "#FFFFFF" }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.22em]"
                  initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.09, ease: "easeOut" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, delay: 0.7, ease: "easeOut" }}
            >
              <h1
                className="font-serif font-bold leading-[1.06] tracking-tight mb-6 sm:mb-7 shimmer-text"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)" }}
              >
                We help it act on it.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.82 }}
              className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg"
              style={{ color: "#CBD5E1" }}
            >
              Custom AI systems — Knowledge Hubs, AI agents, and secure on-prem deployments — for businesses that need AI that works in the real world, not just in demos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-10"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="https://calendly.com/contact-jnanikai"
                target="_blank" rel="noopener noreferrer"
                className="btn-shimmer flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm"
                style={{ background: "linear-gradient(135deg, #3B82F6, #6366F1)", color: "#fff", boxShadow: "0 8px 32px rgba(59,130,246,0.5), 0 0 0 1px rgba(255,255,255,0.1) inset" }}
              >
                <Calendar size={16} />
                Talk to Our Team
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, borderColor: "rgba(99,102,241,0.6)" }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                className="flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm group"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "#FFFFFF", backdropFilter: "blur(12px)", transition: "all 0.25s" }}
              >
                See Our Services
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-3"
            >
              {badges.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#CBD5E1" }}
                >
                  <b.icon size={12} style={{ color: "#60A5FA" }} />
                  {b.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — 3D tilt metric cards */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {/* Card 1: Knowledge speed */}
            <TiltCard delay={0.55}>
              <div
                className="card-glow p-5 sm:p-6 rounded-2xl"
                style={{ background: "rgba(15,23,42,0.8)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(99,102,241,0.18))", border: "1px solid rgba(59,130,246,0.35)" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold" style={{ color: "#FFFFFF", fontFamily: "var(--font-playfair)" }}>10×</p>
                    <p className="text-sm mt-0.5" style={{ color: "#94A3B8" }}>Faster knowledge retrieval</p>
                  </div>
                  <div className="ml-auto w-1.5 self-stretch rounded-full" style={{ background: "linear-gradient(to bottom, #3B82F6, #818CF8)" }} />
                </div>
                <div className="mt-4 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #3B82F6, #818CF8)" }}
                    initial={{ width: "0%" }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1.2, delay: 1.3, ease: "easeOut" }}
                  />
                </div>
              </div>
            </TiltCard>

            {/* Card 2: Cost saving */}
            <TiltCard delay={0.7}>
              <div
                className="card-glow p-5 sm:p-6 rounded-2xl"
                style={{ background: "rgba(15,23,42,0.8)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(59,130,246,0.12))", border: "1px solid rgba(34,211,238,0.3)" }}
                  >
                    <Zap size={22} style={{ color: "#22D3EE" }} />
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold" style={{ color: "#FFFFFF", fontFamily: "var(--font-playfair)" }}>60–80%</p>
                    <p className="text-sm mt-0.5" style={{ color: "#94A3B8" }}>Lower AI cost vs cloud LLMs</p>
                  </div>
                  <div className="ml-auto w-1.5 self-stretch rounded-full" style={{ background: "linear-gradient(to bottom, #22D3EE, #3B82F6)" }} />
                </div>
                <div className="mt-4 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #22D3EE, #3B82F6)" }}
                    initial={{ width: "0%" }}
                    animate={{ width: "78%" }}
                    transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </TiltCard>

            {/* Card 3: Deployment modes */}
            <TiltCard delay={0.85}>
              <div
                className="card-glow p-5 sm:p-6 rounded-2xl"
                style={{ background: "rgba(15,23,42,0.8)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#60A5FA" }}>
                  Deployment modes
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Cloud", "On-Prem", "Air-Gapped", "Hybrid VPC"].map((mode, i) => (
                    <motion.span
                      key={mode}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, delay: 1.5 + i * 0.1 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                      style={{
                        background: i === 1 ? "rgba(59,130,246,0.22)" : "rgba(255,255,255,0.08)",
                        color: i === 1 ? "#93C5FD" : "#CBD5E1",
                        border: `1px solid ${i === 1 ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.1)"}`,
                      }}
                    >
                      {mode}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: "#22D3EE" }} />
                  <span className="text-xs" style={{ color: "#94A3B8" }}>All modes production-certified</span>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0F172A)" }} />
    </section>
  );
}
