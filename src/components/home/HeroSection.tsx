"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, BookOpen, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const metrics = [
  { icon: BookOpen, value: "10×", label: "Faster knowledge retrieval" },
  { icon: Shield,   value: "100%", label: "On-prem deployable" },
  { icon: Zap,      value: "60–80%", label: "Lower AI cost vs cloud" },
];

const badges = [
  "Ex-AWS engineering",
  "Ex-Bosch industrial roots",
  "On-prem & air-gapped ready",
  "No generic SaaS",
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#FAF8F5", minHeight: "100vh" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,26,24,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(28,26,24,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-32">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="section-label mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Enterprise AI Solutions
            </div>

            <h1
              className="font-serif font-bold leading-[1.08] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)", color: "#1C1A18" }}
            >
              Your business runs<br />
              on knowledge.<br />
              <span style={{ color: "#D97706" }}>We help it act on it.</span>
            </h1>

            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: "#6B6560" }}>
              Jnanik AI builds custom AI systems — Knowledge Hubs, AI agents, and secure on-prem deployments — for businesses that need AI that works in the real world, not just in demos.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://calendly.com/contact-jnanikai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "#D97706", color: "#FFFFFF", boxShadow: "0 8px 32px rgba(217,119,6,0.3)" }}
              >
                <Calendar size={16} />
                Talk to Our Team
              </a>
              <Link
                href="/services"
                className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 group"
                style={{ background: "#FFFFFF", border: "1.5px solid #E8E2DB", color: "#1C1A18", boxShadow: "0 2px 12px rgba(28,26,24,0.07)" }}
              >
                See Our Services
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-5">
              {badges.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#D97706", opacity: 0.6 }} />
                  <span className="text-xs font-medium" style={{ color: "#9C9590" }}>{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block rounded-3xl overflow-hidden"
            style={{ height: "620px" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=90"
              alt="Enterprise strategy team in modern office"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(217,119,6,0.1) 0%, rgba(28,26,24,0.2) 100%)" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-40"
              style={{ background: "linear-gradient(to top, rgba(250,248,245,0.65) 0%, transparent 100%)" }}
            />

            {/* Metric chips */}
            <div className="absolute bottom-8 left-6 right-6 flex flex-col gap-3">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl self-start"
                  style={{
                    background: "rgba(250,248,245,0.93)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(217,119,6,0.2)",
                    boxShadow: "0 4px 20px rgba(28,26,24,0.12)",
                  }}
                >
                  <div
                    className="shrink-0 flex items-center justify-center rounded-xl"
                    style={{ width: "34px", height: "34px", background: "rgba(217,119,6,0.12)", border: "1px solid rgba(217,119,6,0.22)" }}
                  >
                    <m.icon size={14} style={{ color: "#D97706" }} />
                  </div>
                  <div>
                    <p className="font-extrabold text-base leading-none" style={{ color: "#1C1A18" }}>{m.value}</p>
                    <p className="text-[10px] font-medium mt-0.5 whitespace-nowrap" style={{ color: "#6B6560" }}>{m.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
