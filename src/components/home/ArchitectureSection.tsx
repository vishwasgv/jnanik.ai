"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Check, ArrowRight } from "lucide-react";
import { vp, fadeUp, fadeUpBlur, fadeOnly, staggerGrid } from "@/lib/motionConfig";

const modes = [
  {
    icon: Cloud,
    title: "Cloud Deployment",
    badge: "Fastest to start",
    headline: "Your AI runs in the cloud — we handle everything.",
    story: "We set up, manage, and scale your AI platform on your preferred cloud provider. Your team gets access from day one with no infrastructure to manage on your end.",
    benefits: [
      "Ready in days, not months",
      "Scales automatically with your usage",
      "Managed updates and security",
      "Pay for what you use",
    ],
    accent: "#2563EB",
    bg: "rgba(37,99,235,0.05)",
    bd: "rgba(37,99,235,0.15)",
    gradientBg: "linear-gradient(135deg, #EEF4FF 0%, #DBEAFE 60%, #EEF4FF 100%)",
  },
  {
    icon: Server,
    title: "On-Premises",
    badge: "Maximum control",
    headline: "Your AI stays inside your building — your data never leaves.",
    story: "We deploy the same platform inside your own data centre. Your data, your infrastructure, your rules. Ideal for industries where data sovereignty is non-negotiable.",
    benefits: [
      "Data stays within your network",
      "Full control over access and security",
      "Works without internet connectivity",
      "Meets the strictest compliance requirements",
    ],
    accent: "#0EA5E9",
    bg: "rgba(14,165,233,0.05)",
    bd: "rgba(14,165,233,0.15)",
    gradientBg: "linear-gradient(135deg, #F0F9FF 0%, #BAE6FD 60%, #F0F9FF 100%)",
    featured: true,
  },
];

export default function ArchitectureSection() {
  return (
    <section className="py-20 sm:py-32" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t mb-14 sm:mb-20" style={{ borderColor: "rgba(15,23,42,0.07)" }} />

        {/* Header */}
        <motion.div
          variants={staggerGrid(0)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="mb-12 sm:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div>
            <motion.div variants={fadeOnly} className="section-label mb-5 sm:mb-6 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Deployment
            </motion.div>
            <motion.h2
              variants={fadeUpBlur}
              className="font-serif font-bold leading-tight max-w-xl"
              style={{ fontSize: "clamp(1.8rem,4vw,3.25rem)", color: "var(--text-1)" }}
            >
              Works the way<br />your business works.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-base sm:text-lg max-w-md" style={{ color: "var(--text-3)" }}>
            Whether your data lives in the cloud or can never leave the building — we deploy around your constraints.
          </motion.p>
        </motion.div>

        {/* Deployment cards */}
        <motion.div
          variants={staggerGrid(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
        >
          {modes.map((mode, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="card-base overflow-hidden flex flex-col relative"
            >
              {/* Featured top accent line */}
              {mode.featured && (
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${mode.accent}, transparent)` }} />
              )}

              {/* Gradient header */}
              <div className="p-7 pb-6" style={{ background: mode.gradientBg }}>
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${mode.bd}`, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
                  >
                    <mode.icon size={22} style={{ color: mode.accent }} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.7)", border: `1px solid ${mode.bd}`, color: mode.accent }}
                  >
                    {mode.badge}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-1.5" style={{ color: "#0F172A" }}>{mode.title}</h3>
                <p className="text-sm font-medium leading-snug" style={{ color: "#334155" }}>{mode.headline}</p>
              </div>

              {/* Body */}
              <div className="p-7 pt-5 flex-1 flex flex-col gap-5">
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{mode.story}</p>

                <ul className="space-y-3">
                  {mode.benefits.map((b, bi) => (
                    <li key={bi} className="flex items-center gap-3 text-sm" style={{ color: "#334155" }}>
                      <div
                        className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: mode.bg, border: `1px solid ${mode.bd}` }}
                      >
                        <Check size={10} style={{ color: mode.accent }} />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 rounded-2xl"
          style={{ background: "#F8FAFD", border: "1px solid rgba(15,23,42,0.06)" }}
        >
          <p className="text-sm text-center sm:text-left" style={{ color: "#64748B" }}>
            Not sure which is right for you? We help you choose based on your data, compliance, and team constraints — in the first conversation.
          </p>
          <a
            href="#contact"
            className="shrink-0 flex items-center gap-1.5 text-sm font-semibold group"
            style={{ color: "#2563EB" }}
          >
            Let&apos;s discuss
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
