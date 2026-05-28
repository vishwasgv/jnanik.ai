"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Cpu, Bot } from "lucide-react";
import { vp, fadeUp, fadeUpBlur, fadeOnly, staggerGrid } from "@/lib/motionConfig";

const articles = [
  {
    icon: BookOpen,
    category: "AI Knowledge Systems",
    title: "Why Most Enterprise Knowledge Hubs Fail (And How to Build One That Doesn't)",
    excerpt: "The problem isn't the retrieval pipeline — it's the data preparation, the chunking strategy, and the evaluation loop that most teams skip.",
    date: "May 2025",
    readTime: "8 min read",
    gradient: "linear-gradient(145deg, #0F172A 0%, #0C2340 100%)",
    glowColor: "rgba(37,99,235,0.35)",
    accent: "#60A5FA",
    accentBg: "rgba(96,165,250,0.15)",
    accentBd: "rgba(96,165,250,0.3)",
  },
  {
    icon: Cpu,
    category: "Small Language Models",
    title: "We Replaced GPT-4 With a 7B SLM. Here's What Happened to Cost and Quality.",
    excerpt: "A candid account of fine-tuning a small model on domain-specific data — the gains, the surprises, and the hard lessons about evaluation.",
    date: "Apr 2025",
    readTime: "11 min read",
    gradient: "linear-gradient(145deg, #1C0A00 0%, #431407 100%)",
    glowColor: "rgba(234,88,12,0.3)",
    accent: "#FB923C",
    accentBg: "rgba(249,115,22,0.15)",
    accentBd: "rgba(249,115,22,0.3)",
  },
  {
    icon: Bot,
    category: "Agentic AI",
    title: "When to Use Agents — and When Not To",
    excerpt: "Agents are powerful but overhyped. After deploying several in production, we've developed a framework for knowing exactly when an agent is the right tool.",
    date: "Mar 2025",
    readTime: "9 min read",
    gradient: "linear-gradient(145deg, #052E16 0%, #064E3B 100%)",
    glowColor: "rgba(22,163,74,0.3)",
    accent: "#4ADE80",
    accentBg: "rgba(74,222,128,0.15)",
    accentBd: "rgba(74,222,128,0.3)",
  },
];

export default function ThoughtLeadership() {
  return (
    <section className="py-24 sm:py-36" style={{ background: "var(--bg-warm)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t mb-14 sm:mb-20" style={{ borderColor: "rgba(15,23,42,0.07)" }} />

        <motion.div
          variants={staggerGrid(0)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div>
            <motion.div variants={fadeOnly} className="section-label mb-5 sm:mb-6 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              From the Team
            </motion.div>
            <motion.h2
              variants={fadeUpBlur}
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(1.8rem,4vw,3.25rem)", color: "var(--text-1)" }}
            >
              What we&apos;ve learned<br />shipping real AI systems.
            </motion.h2>
          </div>
          <motion.div variants={fadeOnly}>
            <a href="#" className="blue-link shrink-0 flex items-center gap-1.5">
              All articles <ArrowRight size={13} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerGrid(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6"
        >
          {articles.map((a, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="card-base overflow-hidden flex flex-col group cursor-pointer"
            >
              {/* Dark gradient header — premium, consistent with industry/service cards */}
              <div
                className="relative overflow-hidden flex flex-col shrink-0"
                style={{ background: a.gradient, minHeight: "164px", padding: "24px" }}
              >
                {/* Subtle grid lines */}
                <div className="absolute inset-0" style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }} />
                {/* Centre glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full" style={{ background: `radial-gradient(circle, ${a.glowColor} 0%, transparent 70%)`, filter: "blur(20px)" }} />
                </div>
                {/* Icon + category badge */}
                <div className="relative flex items-start justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: a.accentBg, border: `1px solid ${a.accentBd}`, backdropFilter: "blur(8px)" }}
                  >
                    <a.icon size={18} style={{ color: a.accent }} />
                  </div>
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: a.accentBg, border: `1px solid ${a.accentBd}`, color: a.accent }}
                  >
                    {a.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1 bg-white">
                <div className="flex-1">
                  <h3
                    className="font-bold text-sm sm:text-base leading-snug mb-2.5"
                    style={{ color: "var(--text-1)", fontFamily: "var(--font-playfair)" }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-3)" }}>{a.excerpt}</p>
                </div>
                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{ borderColor: "rgba(15,23,42,0.07)" }}
                >
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{a.readTime} · {a.date}</span>
                  <a href="#" className="blue-link text-xs flex items-center gap-1">
                    Read more <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
