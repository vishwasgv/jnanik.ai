"use client";

import { motion } from "framer-motion";
import { Factory, ShoppingCart, Car, Check } from "lucide-react";
import { vp, fadeUp, fadeUpBlur, fadeOnly, staggerGrid } from "@/lib/motionConfig";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing & Industrial",
    tagline: "Quality AI · Predictive Maintenance",
    story: "A manufacturing line produces thousands of units an hour. One missed defect costs more than a thousand passed ones. We build AI inspection and maintenance systems that catch problems before they become recalls.",
    outcomes: [
      "Defect detection before the product leaves the line",
      "Predictive maintenance — fix it before it breaks",
      "SOPs and quality data available to every shift, instantly",
    ],
    metrics: ["99.2% defect accuracy", "72% less unplanned downtime"],
    gradient: "linear-gradient(135deg, #EEF4FF 0%, #DBEAFE 100%)",
    accent: "#2563EB",
    accentBg: "rgba(37,99,235,0.08)",
    accentBd: "rgba(37,99,235,0.16)",
    featured: true,
  },
  {
    icon: ShoppingCart,
    title: "FMCG",
    tagline: "Demand Intelligence · Supply Efficiency",
    story: "In FMCG, margins are thin and speed is everything. AI helps your teams react faster — to demand shifts, quality issues, and supply chain signals — before they become problems.",
    outcomes: [
      "Real-time demand signals across SKUs and regions",
      "Automated compliance and labelling checks",
      "Supplier and logistics intelligence in one view",
    ],
    metrics: ["40% faster response", "3× supply visibility"],
    gradient: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
    accent: "#16A34A",
    accentBg: "rgba(22,163,74,0.08)",
    accentBd: "rgba(22,163,74,0.16)",
    featured: false,
  },
  {
    icon: Car,
    title: "Automotive",
    tagline: "Production AI · Component Intelligence",
    story: "Automotive manufacturing demands zero-tolerance precision across thousands of components. We deploy AI that monitors assembly quality, tracks component traceability, and keeps production intelligence in the hands of your engineers.",
    outcomes: [
      "Component traceability across the entire production chain",
      "Assembly quality checks with sub-millimetre precision",
      "Engineering knowledge bases that never go home at 5 PM",
    ],
    metrics: ["98.7% assembly precision", "60% faster root cause analysis"],
    gradient: "linear-gradient(135deg, #FFF7ED 0%, #FED7AA 100%)",
    accent: "#EA580C",
    accentBg: "rgba(234,88,12,0.08)",
    accentBd: "rgba(234,88,12,0.16)",
    featured: false,
  },
];

export default function IndustryUseCases() {
  return (
    <section className="py-20 sm:py-32" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t mb-14 sm:mb-20" style={{ borderColor: "rgba(15,23,42,0.07)" }} />

        <motion.div
          variants={staggerGrid(0)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="mb-12 sm:mb-16"
        >
          <motion.div variants={fadeOnly} className="section-label mb-5 sm:mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Where Jnanik AI Delivers Results
          </motion.div>
          <motion.h2
            variants={fadeUpBlur}
            className="font-serif font-bold leading-tight"
            style={{ fontSize: "clamp(1.8rem,4vw,3.25rem)", color: "var(--text-1)" }}
          >
            Built for industries where<br />precision is non-negotiable.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg mt-4 max-w-2xl" style={{ color: "var(--text-3)" }}>
            We work where complexity is high, margins matter, and generic AI tools fall short.
          </motion.p>
        </motion.div>

        {/* Industry cards */}
        <motion.div
          variants={staggerGrid(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="card-base overflow-hidden flex flex-col"
            >
              {/* Gradient header */}
              <div
                className="p-7 pb-5 flex flex-col items-start gap-4"
                style={{ background: ind.gradient }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.8)", border: `1px solid ${ind.accentBd}`, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
                >
                  <ind.icon size={22} style={{ color: ind.accent }} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ind.accent }}>{ind.tagline}</p>
                  <h3 className="font-bold text-xl" style={{ color: "#0F172A" }}>{ind.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-7 pt-5 flex-1 flex flex-col gap-5">
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{ind.story}</p>

                <ul className="space-y-2.5">
                  {ind.outcomes.map((o, oi) => (
                    <li key={oi} className="flex items-start gap-2.5 text-sm" style={{ color: "#334155" }}>
                      <div
                        className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: ind.accentBg, border: `1px solid ${ind.accentBd}` }}
                      >
                        <Check size={9} style={{ color: ind.accent }} />
                      </div>
                      {o}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 flex-wrap pt-2">
                  {ind.metrics.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1.5 text-[10px] font-bold rounded-full"
                      style={{ background: ind.accentBg, border: `1px solid ${ind.accentBd}`, color: ind.accent }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
