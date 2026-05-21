"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, ArrowRight, Shield, Zap, Lock } from "lucide-react";
import { ease, dur } from "@/lib/motionConfig";

/* ── Platform Architecture Card ─────────────────────────── */
const ROWS = [
  {
    label: "Your Data",
    items: ["Documents", "Databases", "APIs & ERP"],
    accentColor: "#64748B",
    itemBg: "rgba(255,255,255,0.05)",
    itemBd: "rgba(255,255,255,0.09)",
    itemText: "#94A3B8",
  },
  {
    label: "AI Engine",
    items: ["RAG Pipeline", "AI Agents", "Custom SLMs"],
    accentColor: "#3B82F6",
    itemBg: "rgba(59,130,246,0.1)",
    itemBd: "rgba(59,130,246,0.25)",
    itemText: "#93C5FD",
  },
  {
    label: "For Your Teams",
    items: ["Instant Answers", "Automation", "Insights"],
    accentColor: "#22D3EE",
    itemBg: "rgba(34,211,238,0.07)",
    itemBd: "rgba(34,211,238,0.18)",
    itemText: "#67E8F9",
  },
];

function FlowArrow({ delay }: { delay: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
      <div style={{ flex: 1, height: "1px", background: "rgba(59,130,246,0.15)" }} />
      <svg width="44" height="14" viewBox="0 0 44 14" fill="none" style={{ flexShrink: 0, margin: "0 8px" }}>
        <motion.path
          d="M2 7 L34 7 M28 2 L38 7 L28 12"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="5 3"
          animate={{ strokeDashoffset: [24, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear", delay }}
        />
      </svg>
      <div style={{ flex: 1, height: "1px", background: "rgba(59,130,246,0.15)" }} />
    </div>
  );
}

function PlatformCard() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, x: reduced ? 0 : 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: dur.cinematic, delay: 0.35, ease: ease.out }}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(6,12,26,0.92)",
        border: "1px solid rgba(255,255,255,0.11)",
        borderRadius: "20px",
        padding: "24px",
        backdropFilter: "blur(24px)",
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
            height: "72px",
            background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.09), transparent)",
            pointerEvents: "none",
            zIndex: 10,
          }}
          initial={{ top: "-72px" }}
          animate={{ top: "115%" }}
          transition={{ duration: 1.1, delay: 0.9, ease: ease.cinematic }}
        />
      )}
      {/* Card header */}
      <div style={{
        display: "flex", alignItems: "center", gap: "10px",
        marginBottom: "20px", paddingBottom: "16px",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <motion.span
          style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22D3EE", display: "block", flexShrink: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#60A5FA" }}>
          Jnanik AI Platform
        </span>
        <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "4px", fontSize: "10px", fontWeight: 600, color: "#22D3EE" }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#22D3EE", display: "inline-block" }} />
          Live
        </span>
      </div>

      {/* Architecture rows with animated connectors */}
      {ROWS.map((row, ri) => (
        <div key={ri}>
          {ri > 0 && <FlowArrow delay={ri * 0.4} />}
          <div>
            <p style={{
              fontSize: "9px", fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", color: row.accentColor, marginBottom: "8px",
            }}>
              {row.label}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px" }}>
              {row.items.map((item, ii) => (
                <motion.div
                  key={ii}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + ri * 0.25 + ii * 0.08, duration: 0.4 }}
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
      <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569", marginBottom: "10px" }}>
          Deployment Options
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "5px" }}>
          {[
            { label: "Cloud", featured: false },
            { label: "On-Prem", featured: true },
            { label: "Air-Gap", featured: false },
            { label: "Hybrid", featured: false },
          ].map((mode, mi) => (
            <motion.div
              key={mi}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + mi * 0.07 }}
              style={{
                padding: "5px 4px",
                background: mode.featured ? "rgba(59,130,246,0.16)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${mode.featured ? "rgba(59,130,246,0.38)" : "rgba(255,255,255,0.08)"}`,
                borderRadius: "6px",
                fontSize: "10px",
                fontWeight: 600,
                color: mode.featured ? "#93C5FD" : "#64748B",
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

const words = ["Enterprise AI", "built", "for", "production."];

export default function HeroSection() {
  const reduced = useReducedMotion();
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ minHeight: "100svh", background: "#070F1E" }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(59,130,246,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.45,
        }}
      />

      {/* Aurora gradient overlay */}
      <div
        className="absolute inset-0 animate-aurora pointer-events-none"
        style={{
          background: "linear-gradient(-45deg, #070F1E, #0E1B38, #12183A, #070F1E, #0B182E, #070F1E)",
          opacity: 0.88,
        }}
      />

      {/* Ambient glow orbs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none animate-orb-a"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 65%)", filter: "blur(72px)" }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb-b"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.16) 0%, transparent 65%)", filter: "blur(72px)" }}
      />
      <div
        className="absolute top-[40%] left-[35%] w-[280px] h-[280px] rounded-full pointer-events-none animate-orb-c"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 65%)", filter: "blur(40px)" }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label mb-7 inline-flex"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-glow" />
              Enterprise AI Solutions · Bengaluru, India
            </motion.div>

            {/* Headline — word by word (blur only when motion is OK) */}
            <h1
              className="font-serif font-bold leading-[1.06] tracking-tight mb-3"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", color: "#FFFFFF" }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.22em]"
                  initial={{ opacity: 0, y: reduced ? 0 : 22, filter: reduced ? "none" : "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: dur.smooth, delay: 0.15 + i * 0.1, ease: ease.out }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 20, filter: reduced ? "none" : "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: dur.smooth, delay: 0.62, ease: ease.out }}
            >
              <h1
                className="font-serif font-bold leading-[1.06] tracking-tight mb-7 shimmer-text"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
              >
                Not for demos.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "#94A3B8" }}
            >
              Custom Knowledge Hubs, AI agents, and on-prem deployments — engineered for real data, real workloads, and real accountability. No slide decks. No pilots that never ship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-9"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(59,130,246,0.6)" }}
                whileTap={{ scale: 0.96 }}
                href="https://calendly.com/contact-jnanikai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm"
                style={{ background: "linear-gradient(135deg, #3B82F6, #6366F1)", color: "#fff", boxShadow: "0 8px 32px rgba(59,130,246,0.45)" }}
              >
                <Calendar size={16} />
                Talk to Our Team
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm group"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", backdropFilter: "blur(12px)" }}
              >
                See Our Services
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.15 }}
              className="flex flex-wrap gap-3"
            >
              {badges.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.11)", color: "#CBD5E1" }}
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
