"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, ArrowRight, Shield, Zap, Lock } from "lucide-react";
import { ease, dur } from "@/lib/motionConfig";

/* ── Platform Architecture Card ─────────────────────────── */
const ROWS = [
  {
    label: "Your Data",
    items: ["Documents", "Databases", "APIs & ERP"],
    accentColor: "#6E8DB0",
    itemBg: "rgba(255,255,255,0.04)",
    itemBd: "rgba(255,255,255,0.08)",
    itemText: "#B8CEEA",
  },
  {
    label: "AI Engine",
    items: ["RAG Pipeline", "AI Agents", "Custom SLMs"],
    accentColor: "#60A5FA",
    itemBg: "rgba(59,130,246,0.09)",
    itemBd: "rgba(59,130,246,0.22)",
    itemText: "#93C5FD",
  },
  {
    label: "For Your Teams",
    items: ["Instant Answers", "Automation", "Insights"],
    accentColor: "#34D399",
    itemBg: "rgba(52,211,153,0.07)",
    itemBd: "rgba(52,211,153,0.18)",
    itemText: "#6EE7B7",
  },
];

function FlowArrow({ delay }: { delay: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
      <div style={{ flex: 1, height: "1px", background: "rgba(59,130,246,0.12)" }} />
      <svg width="44" height="14" viewBox="0 0 44 14" fill="none" style={{ flexShrink: 0, margin: "0 8px" }}>
        <motion.path
          d="M2 7 L34 7 M28 2 L38 7 L28 12"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="5 3"
          animate={{ strokeDashoffset: [24, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear", delay }}
        />
      </svg>
      <div style={{ flex: 1, height: "1px", background: "rgba(59,130,246,0.12)" }} />
    </div>
  );
}

function PlatformCard() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: dur.cinematic, delay: 0.4, ease: ease.out }}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(12,22,44,0.88)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "20px",
        padding: "24px",
        backdropFilter: "blur(20px)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,130,246,0.08)",
      }}
    >
      {/* One-time scan sweep — signals "system initialising" */}
      {!reduced && (
        <motion.div
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "64px",
            background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.07), transparent)",
            pointerEvents: "none",
            zIndex: 10,
          }}
          initial={{ top: "-64px" }}
          animate={{ top: "115%" }}
          transition={{ duration: 1.2, delay: 1.0, ease: ease.cinematic }}
        />
      )}

      {/* Card header */}
      <div style={{
        display: "flex", alignItems: "center", gap: "10px",
        marginBottom: "20px", paddingBottom: "14px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <motion.span
          style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34D399", display: "block", flexShrink: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#60A5FA" }}>
          Jnanik AI Platform
        </span>
        <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "4px", fontSize: "10px", fontWeight: 600, color: "#34D399" }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#34D399", display: "inline-block" }} />
          Live
        </span>
      </div>

      {/* Architecture rows */}
      {ROWS.map((row, ri) => (
        <div key={ri}>
          {ri > 0 && <FlowArrow delay={ri * 0.5} />}
          <div>
            <p style={{
              fontSize: "9px", fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: row.accentColor, marginBottom: "8px",
            }}>
              {row.label}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px" }}>
              {row.items.map((item, ii) => (
                <motion.div
                  key={ii}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + ri * 0.22 + ii * 0.07, duration: 0.35 }}
                  style={{
                    padding: "8px 6px",
                    background: row.itemBg,
                    border: `1px solid ${row.itemBd}`,
                    borderRadius: "8px",
                    fontSize: "11px",
                    fontWeight: 500,
                    color: row.itemText,
                    textAlign: "center",
                    lineHeight: 1.3,
                  }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Deployment bar */}
      <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#445E7A", marginBottom: "10px" }}>
          Deployment Options
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "5px" }}>
          {[
            { label: "Cloud",   featured: false },
            { label: "On-Prem", featured: true  },
            { label: "Air-Gap", featured: false  },
            { label: "Hybrid",  featured: false  },
          ].map((mode, mi) => (
            <motion.div
              key={mi}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 + mi * 0.06 }}
              style={{
                padding: "5px 4px",
                background: mode.featured ? "rgba(59,130,246,0.14)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${mode.featured ? "rgba(59,130,246,0.32)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: "6px",
                fontSize: "10px",
                fontWeight: 600,
                color: mode.featured ? "#93C5FD" : "#445E7A",
                textAlign: "center" as const,
              }}
            >
              {mode.featured ? "● " : ""}{mode.label}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Hero Section ────────────────────────────────────────── */
const badges = [
  { icon: Shield, text: "On-prem deployable" },
  { icon: Lock,   text: "Air-gapped ready"   },
  { icon: Zap,    text: "60–80% cost saving" },
];

export default function HeroSection() {
  const reduced = useReducedMotion();
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ minHeight: "100svh", background: "#0F1C33" }}
    >
      {/* Subtle dot grid — very low opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(59,130,246,0.14) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.35,
        }}
      />

      {/* Single soft ambient glow — top right, static */}
      <div
        className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 68%)",
          filter: "blur(80px)",
          transform: "translate(20%, -25%)",
        }}
      />

      {/* Bottom-left accent glow — static */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 65%)",
          filter: "blur(60px)",
          transform: "translate(-25%, 25%)",
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label mb-7 inline-flex"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-glow" />
              Enterprise AI Solutions · Bengaluru, India
            </motion.div>

            {/* Headline — clean fade-up, no blur */}
            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur.smooth, delay: 0.18, ease: ease.out }}
              className="font-serif font-bold leading-[1.07] tracking-tight mb-3"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", color: "#EEF4FF" }}
            >
              Enterprise AI built<br />for production.
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur.smooth, delay: 0.36, ease: ease.out }}
              className="font-serif font-bold leading-[1.07] tracking-tight mb-7 shimmer-text"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
            >
              Not for demos.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "#B8CEEA" }}
            >
              Custom Knowledge Hubs, AI agents, and on-prem deployments — engineered for real data, real workloads, and real accountability. No slide decks. No pilots that never ship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-9"
            >
              <motion.a
                whileHover={{ scale: 1.04, boxShadow: "0 10px 36px rgba(59,130,246,0.55)" }}
                whileTap={{ scale: 0.97 }}
                href="https://calendly.com/contact-jnanikai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm"
                style={{ background: "linear-gradient(135deg, #2563EB, #4F46E5)", color: "#fff", boxShadow: "0 6px 28px rgba(59,130,246,0.38)" }}
              >
                <Calendar size={16} />
                Talk to Our Team
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.28)" }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm group"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#EEF4FF", backdropFilter: "blur(12px)" }}
              >
                See Our Services
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
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", color: "#B8CEEA" }}
                >
                  <b.icon size={12} style={{ color: "#60A5FA" }} />
                  {b.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Platform architecture card */}
          <div className="hidden lg:block">
            <PlatformCard />
          </div>
        </div>
      </div>
    </section>
  );
}
