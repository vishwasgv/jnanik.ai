"use client";

import { motion } from "framer-motion";
import { Zap, Users, BookOpen, Globe2, Shield, Coffee, Bell, Code2, Cpu, Layers } from "lucide-react";
import Image from "next/image";

/* ─── Set image path once ready ──────────────────────────── */
const HERO_IMAGE: string | null = "/images/careers-hero.png";

const perks = [
  { icon: Zap,      title: "Real AI Problems",            desc: "Solve meaningful industrial AI challenges — agentic systems, knowledge retrieval, SLM optimisation, on-prem deployments." },
  { icon: Globe2,   title: "Remote-Friendly Culture",     desc: "Work from wherever you do your best thinking. We focus on outcomes, not office hours." },
  { icon: BookOpen, title: "Continuous Learning",         desc: "Conference budgets, research time, and access to the latest AI papers and tools." },
  { icon: Users,    title: "Small, High-Impact Team",     desc: "Every person here moves the needle. No bureaucracy — just fast, purposeful work." },
  { icon: Shield,   title: "Mission-Driven Work",         desc: "Build AI that matters — systems that drive real industrial transformation." },
  { icon: Coffee,   title: "Engineering Culture",         desc: "Code reviews, design docs, and a culture that values craft and correctness." },
];

const cultureValues = [
  "We write well-designed systems, not just working code",
  "We challenge assumptions — including our own",
  "We share knowledge generously across the team",
  "We move fast but don't cut corners on reliability",
  "We treat enterprise customers as long-term partners",
];

export default function CareersSection() {
  return (
    <div style={{ background: "var(--bg)" }}>

      {/* ── Hero banner ───────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "420px" }}>
        {HERO_IMAGE ? (
          <Image src={HERO_IMAGE} alt="Engineering at Jnanik AI" fill className="object-cover" sizes="100vw" priority />
        ) : (
          <div className="absolute inset-0" style={{ background: "linear-gradient(145deg, #0F172A 0%, #0C1F40 45%, #0A1628 100%)" }}>
            {/* Grid */}
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
            {/* Glows */}
            <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
            <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 65%)", filter: "blur(40px)" }} />
            {/* Floating icon watermarks */}
            <div className="absolute inset-0 overflow-hidden">
              <Code2 size={180} className="absolute opacity-[0.04]" style={{ color: "#FFFFFF", top: "10%", right: "8%" }} />
              <Cpu size={100} className="absolute opacity-[0.04]" style={{ color: "#FFFFFF", bottom: "15%", left: "5%" }} />
              <Layers size={80} className="absolute opacity-[0.04]" style={{ color: "#FFFFFF", top: "20%", left: "30%" }} />
            </div>
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.55) 100%)" }} />
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.7)" }}>Careers at Jnanik AI</span>
            </div>
            <h1 className="font-serif font-bold leading-tight mb-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "#FFFFFF" }}>
              Build AI that shapes<br />industrial futures.
            </h1>
            <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
              A small, exceptional team. Real problems. Production-grade AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Perks ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 sm:mb-12">
            <div className="section-label mb-5 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Why Join Us
            </div>
            <h2 className="font-serif font-bold leading-tight" style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", color: "#0F172A" }}>
              What makes Jnanik AI different.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-base p-5 sm:p-6 flex gap-4"
              >
                <div className="blue-icon shrink-0">
                  <p.icon size={18} style={{ color: "#2563EB" }} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0F172A" }}>{p.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#64748B" }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture values ────────────────────────────────── */}
      <section className="py-14 sm:py-20" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mb-12 sm:mb-16" style={{ borderColor: "rgba(15,23,42,0.07)" }} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="section-label mb-5 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              How We Work
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl" style={{ color: "#0F172A" }}>
              Our engineering culture in plain language.
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {cultureValues.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="card-base flex items-start gap-3 px-5 py-4"
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: "#2563EB" }} />
                <span className="text-sm" style={{ color: "#334155" }}>{v}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Positions — coming soon ───────────────────────── */}
      <section className="py-14 sm:py-24" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mb-12" style={{ borderColor: "rgba(15,23,42,0.07)" }} />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.16)" }}
            >
              <Bell size={28} style={{ color: "#2563EB" }} />
            </div>

            <h3 className="font-serif font-bold text-2xl sm:text-3xl mb-4" style={{ color: "#0F172A" }}>
              Open positions — we will notify shortly.
            </h3>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#64748B" }}>
              We&apos;re building the team thoughtfully. Open positions will be announced here and on our LinkedIn page when we&apos;re ready to hire. In the meantime, if you&apos;re exceptional at what you do and believe in our mission — we&apos;d love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:careers@jnanikai.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all"
                style={{ background: "linear-gradient(135deg, #2563EB, #4F46E5)", color: "#FFFFFF", boxShadow: "0 4px 16px rgba(37,99,235,0.3)" }}
              >
                Introduce yourself
              </a>
              <a
                href="https://www.linkedin.com/company/jnanikai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all hover:border-blue-200"
                style={{ color: "#2563EB", border: "1.5px solid rgba(37,99,235,0.18)" }}
              >
                Follow on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
