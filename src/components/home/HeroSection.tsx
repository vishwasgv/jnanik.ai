"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, ArrowRight, Shield, Zap, Lock } from "lucide-react";
import { ease, dur } from "@/lib/motionConfig";

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
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/hero-reel.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay — keeps text readable over the video */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(8,16,34,0.72)", zIndex: 1 }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(59,130,246,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.28,
          zIndex: 2,
        }}
      />

      {/* Ambient glow — top right */}
      <div
        className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 68%)",
          filter: "blur(80px)",
          transform: "translate(20%, -25%)",
          zIndex: 2,
        }}
      />

      {/* Ambient glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)",
          filter: "blur(60px)",
          transform: "translate(-25%, 25%)",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24 sm:py-32">
        <div className="max-w-3xl">
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

        </div>
      </div>
    </section>
  );
}
