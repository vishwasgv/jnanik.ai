"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { ease, dur, vp, fadeUp, fadeUpBlur, fadeOnly, staggerGrid } from "@/lib/motionConfig";

const comparisons = [
  {
    them: "Generic AI tools adapted to your data",
    us:   "Systems designed around your actual workflows, data, and constraints — from the first conversation.",
  },
  {
    them: "Cloud-only — your data leaves the building",
    us:   "On-prem options available. Your data never crosses a network boundary you don't own.",
  },
  {
    them: "Consultants who recommend, then disappear",
    us:   "Engineers who build, test, and own the production deployment — start to finish.",
  },
  {
    them: "Black-box AI with no audit trail",
    us:   "Transparent, auditable AI with full decision traceability and access controls.",
  },
  {
    them: "Escalating cloud API costs at scale",
    us:   "SLM-first architecture — sustainable economics from day one, not a surprise at month three.",
  },
];

const problemVariant = {
  hidden: { opacity: 0, x: -16 },
  show:   { opacity: 1, x: 0, transition: { duration: dur.smooth, ease: ease.out } },
};
const solutionVariant = {
  hidden: { opacity: 0, x: 16 },
  show:   { opacity: 1, x: 0, transition: { duration: dur.smooth, ease: ease.out } },
};
const rowContainer = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: delay } },
});

export default function WhyJnanik() {
  return (
    <section className="py-20 sm:py-32" style={{ background: "var(--bg-light-alt)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          variants={staggerGrid(0)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="mb-14 sm:mb-18"
        >
          <motion.div variants={fadeOnly} className="section-label-dark mb-5 sm:mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            What We Do Differently
          </motion.div>
          <motion.h2
            variants={fadeUpBlur}
            className="font-serif font-bold leading-tight max-w-2xl mb-4"
            style={{ fontSize: "clamp(1.8rem,4vw,3.25rem)", color: "var(--text-on-light-1)" }}
          >
            Most AI projects stall.<br />
            <span className="shimmer-text-dark">Here&apos;s how we&apos;re different.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg max-w-xl" style={{ color: "var(--text-on-light-3)" }}>
            The gap between an impressive pilot and a system that works in production isn&apos;t the model — it&apos;s every decision made before the first line of code.
          </motion.p>
        </motion.div>

        {/* Column headers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-4">
          <motion.div
            variants={problemVariant}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="hidden lg:flex items-center gap-2.5 px-6 py-3 rounded-t-xl"
            style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.1)" }}
          >
            <X size={13} className="shrink-0" style={{ color: "#EF4444" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#DC2626" }}>The Industry Default</span>
          </motion.div>
          <motion.div
            variants={solutionVariant}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="hidden lg:flex items-center gap-2.5 px-6 py-3 rounded-t-xl ml-3"
            style={{ background: "rgba(37,99,235,0.05)", border: "1px solid rgba(37,99,235,0.15)" }}
          >
            <Check size={13} className="shrink-0" style={{ color: "#2563EB" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#2563EB" }}>The Jnanik Approach</span>
          </motion.div>
        </div>

        {/* Comparison rows */}
        <div className="space-y-3">
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              variants={rowContainer(i * 0.04)}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              className="grid grid-cols-1 lg:grid-cols-2 gap-3"
            >
              <motion.div
                variants={problemVariant}
                className="flex items-start gap-3.5 px-5 py-4 rounded-xl"
                style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.09)" }}
              >
                <div
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.18)" }}
                >
                  <X size={10} style={{ color: "#EF4444" }} />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-on-light-3)" }}>{row.them}</p>
              </motion.div>

              <motion.div
                variants={solutionVariant}
                className="flex items-start gap-3.5 px-5 py-4 rounded-xl"
                style={{ background: "rgba(37,99,235,0.04)", border: "1px solid rgba(37,99,235,0.13)" }}
              >
                <div
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.24)" }}
                >
                  <Check size={10} style={{ color: "#2563EB" }} />
                </div>
                <p className="text-sm leading-relaxed font-medium" style={{ color: "var(--text-on-light-2)" }}>{row.us}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom proof strip — no CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: dur.smooth, delay: 0.3 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center gap-8 pt-10"
          style={{ borderTop: "1px solid var(--bd-light)" }}
        >
          {[
            { value: "2021", label: "Founded in Bengaluru" },
            { value: "6",    label: "Core AI services" },
            { value: "2",    label: "Deployment modes" },
            { value: "3+",   label: "Industries served" },
          ].map((stat, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold" style={{ color: "var(--text-on-light-1)", fontFamily: "var(--font-playfair)" }}>
                {stat.value}
              </span>
              <span className="text-sm" style={{ color: "var(--text-on-light-3)" }}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
