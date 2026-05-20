"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, BookOpen, Shield, Zap } from "lucide-react";

const metrics = [
  { icon: BookOpen, value: "10×",    label: "Faster knowledge retrieval" },
  { icon: Shield,   value: "100%",   label: "On-prem deployable" },
  { icon: Zap,      value: "60–80%", label: "Lower AI cost vs cloud" },
];

const badges = [
  "Ex-AWS engineering",
  "Ex-Bosch industrial roots",
  "On-prem & air-gapped ready",
  "No generic SaaS",
];

const words = ["Your", "business", "runs", "on", "knowledge."];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ background: "#070F1D", minHeight: "100svh" }}
    >
      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute animate-orb1"
          style={{
            width: "clamp(300px,50vw,640px)", height: "clamp(300px,50vw,640px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
            top: "-10%", right: "-10%", filter: "blur(60px)",
          }}
        />
        <div
          className="absolute animate-orb2"
          style={{
            width: "clamp(200px,35vw,480px)", height: "clamp(200px,35vw,480px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            bottom: "5%", left: "-5%", filter: "blur(60px)",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-28 sm:py-36">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label mb-6 sm:mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-glow" />
              Enterprise AI Solutions
            </motion.div>

            <h1
              className="font-serif font-bold leading-[1.08] tracking-tight mb-5 sm:mb-6"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.75rem)", color: "#EEF2FF" }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.25em]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                className="shimmer-text"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.65 }}
              >
                We help it act on it.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.75 }}
              className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md"
              style={{ color: "#94A3B8" }}
            >
              Jnanik AI builds custom AI systems — Knowledge Hubs, AI agents, and secure on-prem deployments — for businesses that need AI that works in the real world, not just in demos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.88 }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.04, boxShadow: "0 10px 36px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.97 }}
                href="https://calendly.com/contact-jnanikai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm"
                style={{ background: "#3B82F6", color: "#fff", boxShadow: "0 8px 28px rgba(59,130,246,0.38)" }}
              >
                <Calendar size={16} />
                Talk to Our Team
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, borderColor: "rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                className="flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm group transition-colors"
                style={{ background: "rgba(255,255,255,0.05)", border: "1.5px solid rgba(255,255,255,0.12)", color: "#EEF2FF" }}
              >
                See Our Services
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.05 }}
              className="flex flex-wrap gap-x-5 gap-y-2.5"
            >
              {badges.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#3B82F6", opacity: 0.7 }} />
                  <span className="text-xs font-medium" style={{ color: "#64748B" }}>{b}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — metric cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.12 }}
                whileHover={{ scale: 1.02, borderColor: "rgba(59,130,246,0.45)" }}
                className="flex items-center gap-5 px-6 py-5 rounded-2xl transition-colors"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="shrink-0 flex items-center justify-center rounded-xl animate-float"
                  style={{
                    width: "48px", height: "48px",
                    background: "rgba(59,130,246,0.14)",
                    border: "1px solid rgba(59,130,246,0.28)",
                    animationDelay: `${i * 0.7}s`,
                  }}
                >
                  <m.icon size={20} style={{ color: "#60A5FA" }} />
                </div>
                <div>
                  <p
                    className="font-extrabold text-2xl leading-none mb-1"
                    style={{ color: "#EEF2FF", fontFamily: "var(--font-playfair)" }}
                  >
                    {m.value}
                  </p>
                  <p className="text-sm" style={{ color: "#64748B" }}>{m.label}</p>
                </div>
                <div
                  className="ml-auto w-1 self-stretch rounded-full"
                  style={{ background: "linear-gradient(to bottom, #3B82F6, transparent)" }}
                />
              </motion.div>
            ))}

            {/* Bottom accent card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="px-6 py-5 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.08) 100%)",
                border: "1px solid rgba(59,130,246,0.25)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#60A5FA" }}>
                Deployment modes
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Cloud", "On-Prem", "Air-Gapped", "Hybrid"].map((mode) => (
                  <span
                    key={mode}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(255,255,255,0.07)", color: "#94A3B8", border: "1px solid rgba(255,255,255,0.09)" }}
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #070F1D)" }}
      />
    </section>
  );
}
