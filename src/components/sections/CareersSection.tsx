"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Users, BookOpen, Globe2, Shield, Coffee, MapPin, Briefcase } from "lucide-react";

const perks = [
  { icon: Zap,      title: "Cutting-Edge AI Work",         desc: "Solve real industrial AI problems — agentic systems, RAG pipelines, SLM optimization." },
  { icon: Globe2,   title: "Remote-Friendly Culture",      desc: "Work from wherever you do your best thinking. We focus on outcomes, not office hours." },
  { icon: BookOpen, title: "Continuous Learning",          desc: "Conference budgets, research time, and access to the latest AI papers and tools." },
  { icon: Users,    title: "Small, High-Impact Team",      desc: "Every person here moves the needle. No bureaucracy — just fast, purposeful work." },
  { icon: Shield,   title: "Mission-Driven Work",          desc: "Build AI that matters — systems that drive real industrial transformation." },
  { icon: Coffee,   title: "Engineering Culture",          desc: "Code reviews, design docs, and a culture that values craft and correctness over shipping fast." },
];

const openings = [
  {
    title: "AI Engineer", type: "Full-Time", location: "Bengaluru / Remote", team: "Engineering",
    desc: "Build production-grade AI systems — RAG pipelines, agentic frameworks, model fine-tuning, and inference optimization for enterprise deployments.",
  },
  {
    title: "Full Stack Developer", type: "Full-Time", location: "Bengaluru / Remote", team: "Engineering",
    desc: "Design and build the interfaces and APIs that make our AI systems accessible — dashboards, admin panels, chat interfaces, and integration layers.",
  },
  {
    title: "AI Research Intern", type: "Internship (6 months)", location: "Bengaluru / Remote", team: "Research",
    desc: "Work alongside senior AI engineers on challenging research problems — SLM evaluation, retrieval benchmarking, and novel agentic architectures.",
  },
  {
    title: "Solutions Engineer", type: "Full-Time", location: "Bengaluru", team: "Customer Success",
    desc: "Bridge the gap between our AI technology and enterprise customers. Scope implementations, lead technical pilots, and ensure successful deployments.",
  },
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

      {/* ── Hero with background image ── */}
      <section className="py-20 sm:py-32 relative overflow-hidden" style={{ background: "var(--bg-alt)" }}>
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            style={{ opacity: 0.07 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-20">

            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-label mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Careers at Jnanik AI
              </div>
              <h2
                className="font-serif font-bold mb-5 leading-tight"
                style={{ fontSize: "clamp(2rem,5vw,4rem)", color: "var(--text-1)" }}
              >
                Build AI That Shapes<br />
                <span className="shimmer-text">Industrial Futures</span>
              </h2>
              <p className="text-base sm:text-xl leading-relaxed mb-8" style={{ color: "var(--text-2)" }}>
                Join a small, exceptional team building enterprise AI systems that matter. We&apos;re looking for engineers and researchers who care about correctness, craft, and real-world impact.
              </p>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#open-positions"
                className="btn-shimmer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm"
                style={{ background: "linear-gradient(135deg, #3B82F6, #6366F1)", color: "#fff", boxShadow: "0 8px 28px rgba(59,130,246,0.4)" }}
              >
                View open positions
              </motion.a>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl hidden lg:block"
              style={{ height: "400px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?auto=format&fit=crop&w=900&q=85"
                alt="Jnanik AI team — engineering culture"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(7,14,28,0.5) 0%, rgba(7,14,28,0.2) 100%)" }}
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ border: "1px solid rgba(59,130,246,0.22)" }}
              />
            </motion.div>
          </div>

          {/* Perks */}
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
                  <p.icon size={18} style={{ color: "#60A5FA" }} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1.5" style={{ color: "var(--text-1)" }}>{p.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture values ── */}
      <section className="py-14 sm:py-20" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mb-12 sm:mb-16" style={{ borderColor: "rgba(255,255,255,0.07)" }} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="section-label mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              How We Work
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl" style={{ color: "var(--text-1)" }}>
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
                className="flex items-start gap-3 px-5 py-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: "#3B82F6" }} />
                <span className="text-sm" style={{ color: "var(--text-2)" }}>{v}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open positions ── */}
      <section id="open-positions" className="py-14 sm:py-20" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-12"
          >
            <div className="section-label mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Open Positions
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl" style={{ color: "var(--text-1)" }}>
              We&apos;re hiring across engineering and research.
            </h3>
          </motion.div>

          <div className="space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-base p-5 sm:p-7"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <h3 className="font-bold text-base sm:text-lg" style={{ color: "var(--text-1)" }}>{job.title}</h3>
                      <span
                        className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                        style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)", color: "#60A5FA" }}
                      >
                        {job.team}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-3)" }}>
                        <Briefcase size={12} />{job.type}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-3)" }}>
                        <MapPin size={12} />{job.location}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{job.desc}</p>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    href={`mailto:careers@jnanikai.com?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                    className="shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
                    style={{ background: "#3B82F6", color: "#fff", boxShadow: "0 4px 16px rgba(59,130,246,0.35)" }}
                  >
                    Apply now
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-sm text-center"
            style={{ color: "var(--text-3)" }}
          >
            Don&apos;t see your role? Send us your work at{" "}
            <a href="mailto:careers@jnanikai.com" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              careers@jnanikai.com
            </a>
          </motion.p>
        </div>
      </section>
    </div>
  );
}
