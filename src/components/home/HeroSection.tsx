"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Factory, TrendingUp, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { dur, ease } from "@/lib/motionConfig";

/* ─── Set this path once the image is ready ───────────────── */
const HERO_IMAGE: string | null = "/images/hero-industry.png";

const badges = [
  { icon: ShieldCheck, text: "On-prem deployable" },
  { icon: Factory,     text: "Manufacturing-first" },
  { icon: TrendingUp,  text: "60–80% cost saving" },
];

function HeroVisual() {
  return (
    <div className="relative w-full" style={{ height: "540px", borderRadius: "24px", overflow: "hidden" }}>

      {/* Background — image or industrial gradient fallback */}
      {HERO_IMAGE ? (
        <Image src={HERO_IMAGE} alt="AI in industrial operations" fill className="object-cover" sizes="50vw" priority />
      ) : (
        <div className="absolute inset-0" style={{ background: "linear-gradient(145deg, #0F172A 0%, #0C2340 50%, #102444 100%)" }}>
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }} />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 65%)", filter: "blur(40px)" }} />
        </div>
      )}

      {/* Subtle bottom vignette — depth only, not smog */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(10,18,35,0.35) 100%)" }} />
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
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.7 }} />
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)", filter: "blur(60px)", transform: "translate(15%, -20%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-28 sm:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label mb-7 inline-flex"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse-glow" />
              Manufacturing · Automotive · FMCG
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur.smooth, delay: 0.18, ease: ease.out }}
              className="font-serif font-bold leading-[1.07] tracking-tight mb-3"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.25rem)", color: "#0C1A2E" }}
            >
              Enterprise AI built<br />for production.
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur.smooth, delay: 0.36, ease: ease.out }}
              className="font-serif font-bold leading-[1.07] tracking-tight mb-6 shimmer-text"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.25rem)" }}
            >
              Not for demos.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "#3D5472" }}
            >
              AI that works where precision is non-negotiable — built for Automotive, FMCG, and Industrial operations.
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
                style={{ background: "linear-gradient(135deg, #2563EB, #4F46E5)", color: "#fff", boxShadow: "0 6px 24px rgba(37,99,235,0.3)" }}
              >
                Talk to Our Team
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm group"
                style={{ background: "transparent", border: "1.5px solid rgba(15,23,42,0.12)", color: "#0F172A" }}
              >
                What We Build
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.82 }}
              className="flex flex-wrap gap-2.5"
            >
              {badges.map((b, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium" style={{ background: "rgba(26,86,219,0.05)", border: "1px solid rgba(26,86,219,0.11)", color: "#2A3E58" }}>
                  <b.icon size={12} style={{ color: "#1A56DB" }} />
                  {b.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Story-driven visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
