"use client";

import { motion } from "framer-motion";
import { Search, Layers, Code2, Rocket } from "lucide-react";
import { ease, dur, vp, fadeUp, fadeUpBlur, fadeOnly, staggerGrid } from "@/lib/motionConfig";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Discovery",
    desc: "We audit your data, workflows, and constraints. No AI is proposed until we understand what actually needs to change — and why previous attempts failed.",
    detail: "2 – 4 weeks",
  },
  {
    num: "02",
    icon: Layers,
    title: "Architecture",
    desc: "We design the simplest system that solves the problem. Every decision is explained — no black boxes, no vendor lock-in.",
    detail: "1 – 2 weeks",
  },
  {
    num: "03",
    icon: Code2,
    title: "Build & Test",
    desc: "Working systems, not slide decks. We build iteratively and test against real production scenarios throughout.",
    detail: "4 – 12 weeks",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Deploy & Evolve",
    desc: "We own the production deployment. Post-launch, we measure outcomes and keep improving until the system delivers what was promised.",
    detail: "Ongoing",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 sm:py-36" style={{ background: "var(--bg-cool)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t mb-14 sm:mb-20" style={{ borderColor: "var(--bd-light)" }} />

        <motion.div
          variants={staggerGrid(0)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-18"
        >
          <div className="max-w-xl">
            <motion.div variants={fadeOnly} className="section-label-dark mb-5 sm:mb-6 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              How We Engage
            </motion.div>
            <motion.h2
              variants={fadeUpBlur}
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(1.8rem,4vw,3.25rem)", color: "var(--text-on-light-1)" }}
            >
              A process built for<br />enterprise reality.
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg max-w-md"
            style={{ color: "var(--text-on-light-3)" }}
          >
            Every Jnanik engagement follows the same four phases — because we&apos;ve seen what happens when teams skip them.
          </motion.p>
        </motion.div>

        {/* Animated connector line */}
        <div className="relative hidden lg:block mb-0" style={{ marginBottom: "-1px" }}>
          <div className="h-px w-full" style={{ background: "var(--bd-light)" }} />
          <motion.div
            className="absolute top-0 left-0 h-px"
            style={{ background: "linear-gradient(90deg, #2563EB, #4F46E5, #2563EB)", transformOrigin: "left" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.15, delay: 0.1, ease: ease.cinematic }}
          />
        </div>

        <motion.div
          variants={staggerGrid(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative p-7 sm:p-8 transition-colors duration-300 hover:bg-blue-50/60"
              style={{
                borderRight: i < steps.length - 1 ? `1px solid var(--bd-light)` : "none",
                borderBottom: `1px solid var(--bd-light)`,
              }}
            >
              {/* Step number watermark */}
              <motion.div
                className="absolute top-6 right-7 text-7xl font-extrabold select-none pointer-events-none leading-none"
                style={{ color: "rgba(37,99,235,0.05)", fontFamily: "var(--font-playfair)" }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={vp}
                transition={{ duration: dur.cinematic, delay: 0.2 + i * 0.1, ease: ease.smooth }}
              >
                {step.num}
              </motion.div>

              <motion.div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                style={{ background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.16)" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: dur.fast, ease: ease.smooth }}
              >
                <step.icon size={18} style={{ color: "#2563EB" }} />
              </motion.div>

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-3" style={{ color: "#2563EB" }}>
                Step {step.num}
              </p>
              <h3 className="font-bold text-lg mb-3" style={{ color: "var(--text-on-light-1)" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-on-light-3)" }}>
                {step.desc}
              </p>

              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#2563EB" }} />
                <span className="text-xs font-semibold" style={{ color: "#2563EB" }}>{step.detail}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Simple note — no CTA */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-sm text-center"
          style={{ color: "var(--text-on-light-muted)" }}
        >
          Most engagements reach production within 12–16 weeks. We&apos;ll give you a realistic timeline in the first call.
        </motion.p>
      </div>
    </section>
  );
}
