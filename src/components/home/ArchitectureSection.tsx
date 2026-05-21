"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Lock, Check } from "lucide-react";

const modes = [
  {
    icon: Cloud,
    title: "Cloud",
    badge: "Fastest to ship",
    desc: "Fully managed on AWS, GCP, or Azure. Zero infrastructure overhead on your end. Auto-scaling with 99.9% uptime SLA.",
    specs: ["Auto-scaling compute", "Managed security patching", "Multi-region availability", "99.9% uptime SLA"],
    accentColor: "#3B82F6",
    accentBg: "rgba(59,130,246,0.08)",
    accentBd: "rgba(59,130,246,0.22)",
    diagram: [
      { row: ["Your Browser", "→", "CDN / WAF", "→", "AI Engine"] },
      { row: ["", "", "", "↑", ""] },
      { row: ["", "", "", "Cloud DB", ""] },
    ],
  },
  {
    icon: Server,
    title: "On-Premises",
    badge: "Most control",
    desc: "Deployed inside your own data centre or private cloud. Data never leaves your network boundary. Full operational control.",
    specs: ["Full data sovereignty", "No external API calls", "Runs on your hardware", "Clear upgrade path"],
    accentColor: "#22D3EE",
    accentBg: "rgba(34,211,238,0.07)",
    accentBd: "rgba(34,211,238,0.22)",
    featured: true,
    diagram: [
      { row: ["Your LAN", "→", "AI Engine", "←", "Data Store"] },
      { row: ["", "", "↑", "", ""] },
      { row: ["", "", "Local GPU", "", ""] },
    ],
  },
  {
    icon: Lock,
    title: "Air-Gapped",
    badge: "Maximum security",
    desc: "Complete physical network isolation. Required for defence, classified environments, and the strictest compliance regimes.",
    specs: ["Zero internet dependency", "Offline model inference", "HSM integration", "Physical isolation"],
    accentColor: "#818CF8",
    accentBg: "rgba(129,140,248,0.08)",
    accentBd: "rgba(129,140,248,0.22)",
    diagram: [
      { row: ["Terminal", "→", "AI Engine", "→", "Output"] },
      { row: ["↑", "", "", "", ""] },
      { row: ["Data Store", "", "(No internet)", "", ""] },
    ],
  },
];

function DeployDiagram({ rows, color }: { rows: { row: string[] }[], color: string }) {
  return (
    <div style={{ fontFamily: "monospace", fontSize: "11px", lineHeight: 1.6 }}>
      {rows.map((r, ri) => (
        <div key={ri} style={{ display: "flex", gap: "4px", alignItems: "center", height: "22px" }}>
          {r.row.map((cell, ci) => {
            const isArrow = ["→", "←", "↑", "↓"].includes(cell);
            const isEmpty = cell === "";
            return (
              <span
                key={ci}
                style={{
                  flex: ci === 0 || ci === 2 || ci === 4 ? "0 0 90px" : "0 0 20px",
                  textAlign: isArrow ? "center" : "left",
                  color: isEmpty ? "transparent" : isArrow ? `${color}` : "rgba(255,255,255,0.55)",
                  fontWeight: isArrow ? 700 : 500,
                  fontSize: isArrow ? "13px" : "11px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {cell || "·"}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default function ArchitectureSection() {
  return (
    <section className="py-20 sm:py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t mb-14 sm:mb-20" style={{ borderColor: "rgba(255,255,255,0.07)" }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div>
            <div className="section-label mb-5 sm:mb-6 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Deployment Architecture
            </div>
            <h2
              className="font-serif font-bold leading-tight max-w-xl"
              style={{ fontSize: "clamp(1.8rem,4vw,3.25rem)", color: "var(--text-1)" }}
            >
              Three ways to deploy.<br />One consistent platform.
            </h2>
          </div>
          <p className="text-base sm:text-lg max-w-md" style={{ color: "var(--text-3)" }}>
            Whether your data lives in the cloud or can never leave the building, we architect around your constraints — not the other way round.
          </p>
        </motion.div>

        {/* Deployment mode cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {modes.map((mode, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card-base card-glow flex flex-col relative overflow-hidden"
            >
              {/* Featured highlight */}
              {mode.featured && (
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, transparent, ${mode.accentColor}, transparent)` }}
                />
              )}

              <div className="p-6 sm:p-7 flex-1">
                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: mode.accentBg, border: `1px solid ${mode.accentBd}` }}
                  >
                    <mode.icon size={19} style={{ color: mode.accentColor }} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: mode.accentBg, border: `1px solid ${mode.accentBd}`, color: mode.accentColor }}
                  >
                    {mode.badge}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text-1)" }}>{mode.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-3)" }}>{mode.desc}</p>

                {/* Architecture diagram */}
                <div
                  className="rounded-lg px-4 py-3 mb-5"
                  style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: mode.accentColor }}>
                    Architecture
                  </p>
                  <DeployDiagram rows={mode.diagram} color={mode.accentColor} />
                </div>

                {/* Specs */}
                <ul className="space-y-2">
                  {mode.specs.map((spec, si) => (
                    <li key={si} className="flex items-center gap-2.5 text-xs" style={{ color: "var(--text-2)" }}>
                      <Check size={11} style={{ color: mode.accentColor, flexShrink: 0 }} />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-sm text-center"
          style={{ color: "var(--text-muted)" }}
        >
          All deployment modes share the same platform codebase, APIs, and feature set. Migration between modes is supported.
        </motion.p>
      </div>
    </section>
  );
}
