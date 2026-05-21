"use client";

import { motion } from "framer-motion";
import { Search, Layers, Code2, Rocket } from "lucide-react";
import { ease, dur, vp, fadeUp, fadeUpBlur, fadeOnly, staggerGrid } from "@/lib/motionConfig";

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

        {/* Animated connector line — draws left-to-right as section enters view */}
        <div className="relative hidden lg:block mb-0" style={{ marginBottom: "-1px" }}>
          <div className="h-px w-full" style={{ background: "var(--bd-light)" }} />
          <motion.div
            className="absolute top-0 left-0 h-px"
            style={{ background: "linear-gradient(90deg, #3B82F6, #6366F1, #3B82F6)", transformOrigin: "left" }}
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
              className="group relative p-7 sm:p-8 transition-colors duration-300 hover:bg-white/60"
              style={{
                borderRight: i < steps.length - 1 ? `1px solid var(--bd-light)` : "none",
                borderBottom: `1px solid var(--bd-light)`,
              }}
            >
              {/* Step number watermark — fades in with a slight delay */}
              <motion.div
                className="absolute top-6 right-7 text-7xl font-extrabold select-none pointer-events-none leading-none"
                style={{ color: "rgba(59,130,246,0.07)", fontFamily: "var(--font-playfair)" }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={vp}
                transition={{ duration: dur.cinematic, delay: 0.2 + i * 0.1, ease: ease.smooth }}
              >
                {step.num}
              </motion.div>

              {/* Icon — subtle scale on hover */}
              <motion.div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                style={{ background: "rgba(59,130,246,0.09)", border: "1px solid rgba(59,130,246,0.2)" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: dur.fast, ease: ease.smooth }}
              >
                <step.icon size={18} style={{ color: "#2563EB" }} />
              </motion.div>

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-3" style={{ color: "#3B82F6" }}>
                Step {step.num}
              </p>
              <h3 className="font-bold text-lg mb-3" style={{ color: "var(--text-on-light-1)" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-on-light-3)" }}>
                {step.desc}
              </p>

              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#3B82F6" }} />
                <span className="text-xs font-semibold" style={{ color: "#3B82F6" }}>{step.detail}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
