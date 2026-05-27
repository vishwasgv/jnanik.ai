"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Factory, TrendingUp, ShieldCheck, Cpu } from "lucide-react";
import { ease, dur } from "@/lib/motionConfig";

const badges = [
  { icon: ShieldCheck, text: "On-prem deployable" },
  { icon: Factory,     text: "Manufacturing-first" },
  { icon: TrendingUp,  text: "60–80% cost saving" },
];

/* Animated flow visualization — SVG-based, story-driven */
function AIFlowVisual() {
  return (
    <div className="relative w-full" style={{ maxWidth: 480, margin: "0 auto" }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
      />

      {/* Central card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        className="relative rounded-2xl p-6"
        style={{ background: "#FFFFFF", border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 20px 60px rgba(15,23,42,0.1), 0 4px 16px rgba(15,23,42,0.06)" }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.16)" }}>
              <Cpu size={15} style={{ color: "#2563EB" }} />
            </div>
            <span className="text-xs font-bold" style={{ color: "#0F172A" }}>Jnanik AI Engine</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-glow" />
            <span className="text-[10px] font-semibold" style={{ color: "#64748B" }}>Live</span>
          </div>
        </div>

        {/* Data flow — 3 input nodes */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { label: "Shop Floor", color: "#2563EB", bg: "rgba(37,99,235,0.06)" },
            { label: "Quality Data", color: "#0EA5E9", bg: "rgba(14,165,233,0.06)" },
            { label: "SOPs & Docs", color: "#6366F1", bg: "rgba(99,102,241,0.06)" },
          ].map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
              className="rounded-xl px-2 py-2.5 text-center"
              style={{ background: node.bg, border: `1px solid ${node.color}22` }}
            >
              <span className="text-[10px] font-semibold" style={{ color: node.color }}>{node.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Animated connector line */}
        <div className="relative flex items-center justify-center mb-4" style={{ height: 24 }}>
          <div className="absolute w-px h-full" style={{ background: "linear-gradient(to bottom, rgba(37,99,235,0.2), rgba(37,99,235,0.6))" }} />
          <motion.div
            className="w-2 h-2 rounded-full z-10"
            style={{ background: "#2563EB" }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Output metrics */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { metric: "99.2%", label: "Defect Accuracy", delta: "↑ 42%" },
            { metric: "72%",   label: "Less Downtime",   delta: "↓ unplanned" },
            { metric: "3.2×",  label: "Faster Queries",  delta: "vs. manual search" },
            { metric: "80%",   label: "Cost Reduction",  delta: "vs. cloud LLMs" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
              className="rounded-xl p-3"
              style={{ background: "#F8FAFD", border: "1px solid rgba(15,23,42,0.06)" }}
            >
              <p className="text-base font-extrabold leading-none mb-0.5" style={{ color: "#0F172A", fontFamily: "var(--font-playfair)" }}>{item.metric}</p>
              <p className="text-[9px] font-semibold leading-tight" style={{ color: "#64748B" }}>{item.label}</p>
              <p className="text-[9px] font-bold mt-0.5" style={{ color: "#2563EB" }}>{item.delta}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating badge — Manufacturing */}
      <motion.div
        className="absolute -left-6 top-12 rounded-xl px-3 py-2 animate-float-card"
        style={{ background: "#FFFFFF", border: "1px solid rgba(37,99,235,0.12)", boxShadow: "0 8px 24px rgba(15,23,42,0.1)" }}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <Factory size={12} style={{ color: "#2563EB" }} />
          <span className="text-[10px] font-bold" style={{ color: "#0F172A" }}>Automotive · FMCG</span>
        </div>
      </motion.div>

      {/* Floating badge — Deployment */}
      <motion.div
        className="absolute -right-4 bottom-16 rounded-xl px-3 py-2 animate-float-card-b"
        style={{ background: "#FFFFFF", border: "1px solid rgba(14,165,233,0.15)", boxShadow: "0 8px 24px rgba(15,23,42,0.08)" }}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.25, duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <ShieldCheck size={12} style={{ color: "#0EA5E9" }} />
          <span className="text-[10px] font-bold" style={{ color: "#0F172A" }}>On-Prem · Cloud</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ minHeight: "100svh", background: "#FFFFFF" }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(37,99,235,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.6,
        }}
      />

      {/* Ambient glow — top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)",
          filter: "blur(60px)",
          transform: "translate(15%, -20%)",
        }}
      />

      {/* Ambient glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 65%)",
          filter: "blur(60px)",
          transform: "translate(-25%, 20%)",
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label mb-7 inline-flex"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse-glow" />
              Manufacturing &amp; Industrial AI · Bengaluru, India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur.smooth, delay: 0.18, ease: ease.out }}
              className="font-serif font-bold leading-[1.07] tracking-tight mb-3"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.25rem)", color: "#0F172A" }}
            >
              Enterprise AI built<br />for production.
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur.smooth, delay: 0.36, ease: ease.out }}
              className="font-serif font-bold leading-[1.07] tracking-tight mb-7 shimmer-text"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.25rem)" }}
            >
              Not for demos.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "#475569" }}
            >
              AI Knowledge Hubs, intelligent agents, and on-premise deployments — purpose-built for Automotive, FMCG, and Industrial operations. Real data. Real workloads. Real accountability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-9"
            >
              <motion.a
                whileHover={{ scale: 1.03, boxShadow: "0 12px 36px rgba(37,99,235,0.4)" }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="btn-shimmer flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm"
                style={{ background: "linear-gradient(135deg, #2563EB, #4F46E5)", color: "#fff", boxShadow: "0 6px 24px rgba(37,99,235,0.32)" }}
              >
                Talk to Our Team
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02, borderColor: "rgba(37,99,235,0.3)" }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm group"
                style={{ background: "transparent", border: "1.5px solid rgba(15,23,42,0.12)", color: "#0F172A" }}
              >
                What We Build
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.82 }}
              className="flex flex-wrap gap-2.5"
            >
              {badges.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{ background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.12)", color: "#334155" }}
                >
                  <b.icon size={12} style={{ color: "#2563EB" }} />
                  {b.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Animated visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <AIFlowVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
