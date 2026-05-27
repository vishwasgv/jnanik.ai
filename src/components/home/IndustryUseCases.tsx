"use client";

import { motion } from "framer-motion";
import { Factory, ShoppingCart, Car } from "lucide-react";
import Image from "next/image";
import { vp, fadeUp, fadeUpBlur, fadeOnly, staggerGrid } from "@/lib/motionConfig";

/* ─── Set image paths once ready ─────────────────────────── */
const IMAGES = {
  manufacturing: null as string | null,  // "/images/industry-manufacturing.jpg"
  fmcg:          null as string | null,  // "/images/industry-fmcg.jpg"
  automotive:    null as string | null,  // "/images/industry-automotive.jpg"
};

const industries = [
  {
    icon: Factory,
    image: IMAGES.manufacturing,
    title: "Manufacturing & Industrial",
    tagline: "AI quality control and predictive maintenance — built for the shop floor.",
    metrics: ["99.2% defect accuracy", "72% less downtime"],
    gradient: "linear-gradient(145deg, #0F172A 0%, #0C2340 100%)",
    glowColor: "rgba(37,99,235,0.3)",
    accent: "#3B82F6",
    accentBg: "rgba(37,99,235,0.15)",
    accentBd: "rgba(37,99,235,0.3)",
  },
  {
    icon: ShoppingCart,
    image: IMAGES.fmcg,
    title: "FMCG",
    tagline: "Demand intelligence and supply chain visibility — at speed.",
    metrics: ["40% faster response", "3× supply visibility"],
    gradient: "linear-gradient(145deg, #052E16 0%, #064E3B 100%)",
    glowColor: "rgba(22,163,74,0.3)",
    accent: "#22C55E",
    accentBg: "rgba(22,163,74,0.15)",
    accentBd: "rgba(22,163,74,0.3)",
  },
  {
    icon: Car,
    image: IMAGES.automotive,
    title: "Automotive",
    tagline: "Assembly precision and component traceability across the production chain.",
    metrics: ["98.7% assembly precision", "60% faster root cause"],
    gradient: "linear-gradient(145deg, #1C0A00 0%, #431407 100%)",
    glowColor: "rgba(234,88,12,0.3)",
    accent: "#F97316",
    accentBg: "rgba(234,88,12,0.15)",
    accentBd: "rgba(234,88,12,0.3)",
  },
];

export default function IndustryUseCases() {
  return (
    <section className="py-20 sm:py-32" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t mb-14 sm:mb-20" style={{ borderColor: "rgba(15,23,42,0.07)" }} />

        <motion.div variants={staggerGrid(0)} initial="hidden" whileInView="show" viewport={vp} className="mb-12 sm:mb-16">
          <motion.div variants={fadeOnly} className="section-label mb-5 sm:mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Where Jnanik AI Delivers Results
          </motion.div>
          <motion.h2 variants={fadeUpBlur} className="font-serif font-bold leading-tight" style={{ fontSize: "clamp(1.8rem,4vw,3.25rem)", color: "var(--text-1)" }}>
            Built for industries where<br />precision is non-negotiable.
          </motion.h2>
        </motion.div>

        <motion.div variants={staggerGrid(0.1)} initial="hidden" whileInView="show" viewport={vp} className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-2xl flex flex-col"
              style={{ minHeight: "360px", border: "1px solid rgba(15,23,42,0.07)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}
            >
              {/* ── Image / gradient zone ── */}
              <div className="relative overflow-hidden" style={{ height: "220px", flexShrink: 0 }}>
                {ind.image ? (
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width:1024px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0" style={{ background: ind.gradient }}>
                    {/* Grid lines */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                      backgroundSize: "36px 36px",
                    }} />
                    {/* Centre glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full" style={{ background: `radial-gradient(circle, ${ind.glowColor} 0%, transparent 70%)`, filter: "blur(20px)" }} />
                    </div>
                    {/* Large icon watermark */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <ind.icon size={110} style={{ color: ind.accent }} />
                    </div>
                  </div>
                )}

                {/* Gradient fade into card body */}
                <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }} />

                {/* Industry icon badge */}
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: ind.accentBg, border: `1px solid ${ind.accentBd}`, backdropFilter: "blur(8px)" }}>
                    <ind.icon size={18} style={{ color: ind.accent }} />
                  </div>
                </div>
              </div>

              {/* ── Content zone ── */}
              <div className="flex-1 flex flex-col justify-between p-6 pt-4 bg-white">
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#0F172A" }}>{ind.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{ind.tagline}</p>
                </div>

                {/* Metrics */}
                <div className="flex gap-2 flex-wrap mt-4">
                  {ind.metrics.map((m) => (
                    <span key={m} className="px-3 py-1.5 text-[10px] font-bold rounded-full" style={{ background: ind.accentBg, border: `1px solid ${ind.accentBd}`, color: ind.accent }}>
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
