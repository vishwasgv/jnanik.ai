"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const comparisons = [
  {
    them: "Generic AI tools adapted to your data",
    us:   "Architecture designed around your actual data, workflows, and constraints — from the first conversation.",
  },
  {
    them: "Cloud-only deployments — your data leaves the building",
    us:   "On-prem and air-gapped options available. Your data never crosses a network boundary you don't own.",
  },
  {
    them: "Consultants who recommend, then disappear",
    us:   "Engineers who build, test, and own the production deployment — start to finish.",
  },
  {
    them: "Black-box models with no audit trail",
    us:   "Explainable, auditable AI with full decision traceability and configurable access controls.",
  },
  {
    them: "Cloud API costs that compound at scale",
    us:   "SLM-first architecture — sustainable unit economics from day one, not a surprise at month three.",
  },
];

export default function WhyJnanik() {
  return (
    <section className="py-20 sm:py-32" style={{ background: "var(--bg-light-alt)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-18"
        >
          <div className="section-label-dark mb-5 sm:mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Why Jnanik AI
          </div>
          <h2
            className="font-serif font-bold leading-tight max-w-2xl mb-5"
            style={{ fontSize: "clamp(1.8rem,4vw,3.25rem)", color: "var(--text-on-light-1)" }}
          >
            Most AI projects fail.<br />
            <span className="shimmer-text-dark">Here&apos;s what we do differently.</span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl" style={{ color: "var(--text-on-light-3)" }}>
            The difference between a pilot that impresses and a system that delivers isn&apos;t the model — it&apos;s every decision made before the first line of code.
          </p>
        </motion.div>

        {/* Column headers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-4">
          <div className="hidden lg:flex items-center gap-2.5 px-6 py-3 rounded-t-xl" style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.12)" }}>
            <X size={13} className="shrink-0" style={{ color: "#EF4444" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#EF4444" }}>The Industry Default</span>
          </div>
          <div className="hidden lg:flex items-center gap-2.5 px-6 py-3 rounded-t-xl ml-3" style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.18)" }}>
            <Check size={13} className="shrink-0" style={{ color: "#3B82F6" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3B82F6" }}>The Jnanik Approach</span>
          </div>
        </div>

        {/* Comparison rows */}
        <div className="space-y-3">
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-3"
            >
              {/* Problem */}
              <div
                className="flex items-start gap-3.5 px-5 py-4 rounded-xl"
                style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.1)" }}
              >
                <div
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}
                >
                  <X size={10} style={{ color: "#EF4444" }} />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-on-light-3)" }}>{row.them}</p>
              </div>

              {/* Solution */}
              <div
                className="flex items-start gap-3.5 px-5 py-4 rounded-xl"
                style={{ background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.16)" }}
              >
                <div
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.28)" }}
                >
                  <Check size={10} style={{ color: "#3B82F6" }} />
                </div>
                <p className="text-sm leading-relaxed font-medium" style={{ color: "var(--text-on-light-2)" }}>{row.us}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-10"
          style={{ borderTop: "1px solid var(--bd-light)" }}
        >
          <div className="flex flex-wrap gap-6">
            {[
              { value: "2021", label: "Founded in Bengaluru" },
              { value: "6",    label: "Core AI services" },
              { value: "3+",   label: "Deployment modes" },
            ].map((stat, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold" style={{ color: "var(--text-on-light-1)", fontFamily: "var(--font-playfair)" }}>
                  {stat.value}
                </span>
                <span className="text-sm" style={{ color: "var(--text-on-light-3)" }}>{stat.label}</span>
              </div>
            ))}
          </div>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="https://calendly.com/contact-jnanikai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:ml-auto"
            style={{ background: "#3B82F6", color: "#fff", boxShadow: "0 4px 18px rgba(59,130,246,0.38)" }}
          >
            Book a free 60-min call →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
