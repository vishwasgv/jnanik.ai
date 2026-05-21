"use client";

import { motion } from "framer-motion";
import { Search, Layers, Code2, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Discovery",
    desc: "We audit your data, workflows, team capabilities, and constraints. No AI is proposed until we understand what actually needs to change — and why previous attempts failed.",
    detail: "2 – 4 weeks",
  },
  {
    num: "02",
    icon: Layers,
    title: "Architecture",
    desc: "We design the simplest system that solves the specific problem. Every architectural decision is explained and justified — no black boxes, no vendor lock-in.",
    detail: "1 – 2 weeks",
  },
  {
    num: "03",
    icon: Code2,
    title: "Build & Test",
    desc: "Working code, not slide decks. We build iteratively, test against real production scenarios, and maintain a full audit trail through every sprint.",
    detail: "4 – 12 weeks",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Deploy & Evolve",
    desc: "We own the production deployment. Post-launch, we measure outcomes, close feedback loops, and keep improving until the system delivers what was promised.",
    detail: "Ongoing",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 sm:py-32" style={{ background: "var(--bg-light)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t mb-14 sm:mb-20" style={{ borderColor: "var(--bd-light)" }} />

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="section-label-dark mb-5 sm:mb-6 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              How We Engage
            </div>
            <h2
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(1.8rem,4vw,3.25rem)", color: "var(--text-on-light-1)" }}
            >
              A process built for<br />enterprise reality.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg max-w-md"
            style={{ color: "var(--text-on-light-3)" }}
          >
            Every Jnanik engagement follows the same four phases — because we&apos;ve seen what happens when teams skip them.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative p-7 sm:p-8 transition-colors duration-300 hover:bg-white/60"
              style={{
                borderRight: i < steps.length - 1 ? `1px solid var(--bd-light)` : "none",
                borderBottom: `1px solid var(--bd-light)`,
              }}
            >
              {/* Step number watermark */}
              <div
                className="absolute top-6 right-7 text-7xl font-extrabold select-none pointer-events-none leading-none"
                style={{ color: "rgba(59,130,246,0.07)", fontFamily: "var(--font-playfair)" }}
              >
                {step.num}
              </div>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300"
                style={{ background: "rgba(59,130,246,0.09)", border: "1px solid rgba(59,130,246,0.2)" }}
              >
                <step.icon size={18} style={{ color: "#2563EB" }} />
              </div>

              {/* Step label */}
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-3" style={{ color: "#3B82F6" }}>
                Step {step.num}
              </p>

              <h3 className="font-bold text-lg mb-3" style={{ color: "var(--text-on-light-1)" }}>
                {step.title}
              </h3>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-on-light-3)" }}>
                {step.desc}
              </p>

              {/* Duration badge */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#3B82F6" }} />
                <span className="text-xs font-semibold" style={{ color: "#3B82F6" }}>
                  {step.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA below process */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-12 pt-10 border-t flex flex-col sm:flex-row items-start sm:items-center gap-6"
          style={{ borderColor: "var(--bd-light)" }}
        >
          <p className="text-sm" style={{ color: "var(--text-on-light-3)" }}>
            Most engagements reach production within 12–16 weeks. We&apos;ll give you a realistic timeline in the first call.
          </p>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="https://calendly.com/contact-jnanikai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm"
            style={{ background: "#3B82F6", color: "#fff", boxShadow: "0 4px 16px rgba(59,130,246,0.35)" }}
          >
            Start the conversation →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
