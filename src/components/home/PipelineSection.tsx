"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import {
  FileText, Database, Mail, BarChart2, Cpu,
  Search, Zap, MessageSquare, Bell, Cloud, Server,
} from "lucide-react";

function toRgb(hex: string) {
  return `${parseInt(hex.slice(1,3),16)},${parseInt(hex.slice(3,5),16)},${parseInt(hex.slice(5,7),16)}`;
}

const SOURCES = [
  { icon: FileText,   label: "Documents & Files",    sub: "PDFs, Word, SharePoint",  color: "#3B82F6" },
  { icon: Database,   label: "Enterprise Databases", sub: "SQL, NoSQL, data lakes",  color: "#8B5CF6" },
  { icon: Mail,       label: "Communications",        sub: "Email, Slack, Teams",     color: "#06B6D4" },
  { icon: BarChart2,  label: "Analytics & Reports",  sub: "BI tools, dashboards",    color: "#10B981" },
  { icon: Cpu,        label: "IoT & Sensors",         sub: "SCADA, time-series",      color: "#F59E0B" },
];

const OUTPUTS = [
  { icon: Search,        label: "Semantic Search",   sub: "Instant knowledge retrieval", color: "#00D4FF" },
  { icon: Zap,           label: "Instant Answers",   sub: "Natural language Q&A",        color: "#7C3AED" },
  { icon: Cpu,           label: "Autonomous Agents", sub: "Multi-step task execution",   color: "#00FF9C" },
  { icon: MessageSquare, label: "AI Assistants",     sub: "Role-specific copilots",      color: "#60A5FA" },
  { icon: Bell,          label: "Smart Alerts",      sub: "Proactive anomaly detection", color: "#F97316" },
];

const STEPS = [
  { tag: "Ingest",  title: "Connect your data sources",          body: "Jnanik AI connects to every silo — files, databases, emails, sensors — and ingests continuously without moving data outside your perimeter." },
  { tag: "Index",   title: "Structure and embed everything",     body: "Documents are chunked, embedded into vector representations, and indexed into a private knowledge graph that understands your domain." },
  { tag: "Reason",  title: "Agents reason over your knowledge",  body: "Autonomous AI agents traverse the knowledge graph, chain together multi-step logic, and produce answers grounded solely in your actual data." },
  { tag: "Deliver", title: "Surface intelligence everywhere",    body: "Insights flow to your existing tools — dashboards, chat interfaces, APIs, and alerts — where your teams already work." },
  { tag: "Deploy",  title: "Your infrastructure, your rules",    body: "The entire platform runs inside your cloud account or on-premises data centre. Your data never leaves your perimeter." },
];

// SVG layout — viewBox "0 0 1000 524"
// SX/OX are the x positions of the left/right path endpoints, matching ~22% column edges
const SX = 200, OX = 800, HX = 500, HY = 262, HR = 58;
const DASH = 450; // stroke-dasharray length (≥ max bezier path length in viewBox units)

function vy(i: number) {
  // 5 card centers evenly distributed in y range [160..364]
  return 160 + i * 51;
}
function lpath(i: number) {
  const y = vy(i);
  return `M ${SX} ${y} C ${SX+115} ${y} ${HX-140} ${HY} ${HX-HR} ${HY}`;
}
function rpath(i: number) {
  const y = vy(i);
  return `M ${HX+HR} ${HY} C ${HX+140} ${HY} ${OX-115} ${y} ${OX} ${y}`;
}

function Hub({ step }: { step: number }) {
  const label = step <= 2 ? "Index" : step === 3 ? "Reason" : "Act";
  return (
    <div className="relative flex items-center justify-center" style={{ width: 144, height: 144 }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full"
        style={{ border: "1px solid rgba(0,212,255,0.2)" }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{ inset: 16, border: "1px dashed rgba(124,58,237,0.35)" }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{ inset: 30, border: "1px solid rgba(0,255,156,0.25)" }}
      />
      <div
        className="relative z-10 flex items-center justify-center rounded-full"
        style={{
          width: 72, height: 72,
          background: "radial-gradient(circle at 40% 35%, #1E3A70 0%, #0B1525 100%)",
          border: "1.5px solid rgba(0,212,255,0.55)",
          boxShadow: "0 0 28px rgba(0,212,255,0.38), 0 0 8px rgba(0,212,255,0.15), inset 0 0 14px rgba(0,212,255,0.1)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25 }}
            style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.16em", color: "#00D4FF", textTransform: "uppercase" }}
          >
            {label}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function PipelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(1);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setStep(v < 0.2 ? 1 : v < 0.4 ? 2 : v < 0.6 ? 3 : v < 0.8 ? 4 : 5);
    });
  }, [scrollYProgress]);

  const srcOn = (i: number) => step >= i + 1;
  const outOn = () => step >= 4;

  return (
    <div ref={ref} style={{ height: "600vh", position: "relative" }}>
      <div className="sticky top-0 overflow-hidden" style={{ height: "100vh", background: "#0B1525" }}>

        {/* Ambient center glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            width: "70vw", height: "65vh",
            background: "radial-gradient(ellipse, rgba(0,80,220,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-30 px-8 sm:px-12 pt-7 flex items-start justify-between">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-2"
              style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                background: "rgba(0,212,255,0.09)", border: "1px solid rgba(0,212,255,0.22)", color: "#00D4FF",
              }}
            >
              <span className="w-1 h-1 rounded-full" style={{ background: "#00D4FF" }} />
              Intelligence Pipeline
            </div>
            <h2
              className="font-serif font-bold"
              style={{ fontSize: "clamp(1.3rem,2vw,1.85rem)", color: "#F0F5FB", lineHeight: 1.2 }}
            >
              How Jnanik AI works
            </h2>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-1.5 mt-1.5">
            {STEPS.map((_, i) => (
              <motion.div
                key={i}
                className="rounded-full"
                animate={{
                  width: step === i + 1 ? 20 : 7,
                  background: step >= i + 1 ? "#00D4FF" : "rgba(255,255,255,0.18)",
                }}
                transition={{ duration: 0.3 }}
                style={{ height: 7 }}
              />
            ))}
          </div>
        </div>

        {/* Three-column layout + SVG overlay */}
        <div className="absolute inset-0 pt-20 pb-28 px-6 sm:px-10">
          <div className="relative flex items-center w-full h-full">

            {/* SVG — spans full 3-column area */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 524"
              preserveAspectRatio="none"
              style={{ overflow: "visible" }}
            >
              <defs>
                {SOURCES.map((s, i) => (
                  <linearGradient key={`gl${i}`} id={`gl${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={s.color} stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.5" />
                  </linearGradient>
                ))}
                {OUTPUTS.map((o, i) => (
                  <linearGradient key={`gr${i}`} id={`gr${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.5" />
                    <stop offset="100%" stopColor={o.color} stopOpacity="0.85" />
                  </linearGradient>
                ))}
              </defs>

              {/* Left paths — source → hub */}
              {SOURCES.map((s, i) => {
                const on = srcOn(i);
                const d = lpath(i);
                return (
                  <g key={`lp${i}`}>
                    <path d={d} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
                    <path
                      d={d} fill="none" stroke={`url(#gl${i})`} strokeWidth="1.8" strokeLinecap="round"
                      style={{
                        strokeDasharray: DASH, strokeDashoffset: on ? 0 : DASH,
                        transition: `stroke-dashoffset 0.9s cubic-bezier(0.4,0,0.2,1) ${i * 0.08}s`,
                        filter: on ? `drop-shadow(0 0 3px ${s.color})` : "none",
                      }}
                    />
                    {on && (
                      <path
                        d={d} fill="none" stroke={s.color} strokeWidth="2.5" strokeLinecap="round"
                        className="pipeline-flow"
                        style={{ strokeDasharray: "5 19", opacity: 0.6, filter: `drop-shadow(0 0 4px ${s.color})`, animationDelay: `${i * 0.18}s` }}
                      />
                    )}
                    <circle
                      cx={SX} cy={vy(i)} r="5"
                      fill={on ? s.color : "#1A2840"} stroke={on ? s.color : "#253344"} strokeWidth="1.5"
                      style={{ filter: on ? `drop-shadow(0 0 5px ${s.color})` : "none", transition: "fill 0.4s, filter 0.4s" }}
                    />
                  </g>
                );
              })}

              {/* Right paths — hub → output */}
              {OUTPUTS.map((o, i) => {
                const on = outOn();
                const d = rpath(i);
                return (
                  <g key={`rp${i}`}>
                    <path d={d} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
                    <path
                      d={d} fill="none" stroke={`url(#gr${i})`} strokeWidth="1.8" strokeLinecap="round"
                      style={{
                        strokeDasharray: DASH, strokeDashoffset: on ? 0 : DASH,
                        transition: `stroke-dashoffset 0.9s cubic-bezier(0.4,0,0.2,1) ${i * 0.09}s`,
                        filter: on ? `drop-shadow(0 0 3px ${o.color})` : "none",
                      }}
                    />
                    {on && (
                      <path
                        d={d} fill="none" stroke={o.color} strokeWidth="2.5" strokeLinecap="round"
                        className="pipeline-flow"
                        style={{ strokeDasharray: "5 19", opacity: 0.6, filter: `drop-shadow(0 0 4px ${o.color})`, animationDelay: `${i * 0.18}s` }}
                      />
                    )}
                    <circle
                      cx={OX} cy={vy(i)} r="5"
                      fill={on ? o.color : "#1A2840"} stroke={on ? o.color : "#253344"} strokeWidth="1.5"
                      style={{ filter: on ? `drop-shadow(0 0 5px ${o.color})` : "none", transition: "fill 0.4s, filter 0.4s" }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Left cards — source inputs */}
            <div className="relative z-10 flex flex-col justify-center gap-2" style={{ width: "22%" }}>
              {SOURCES.map((s, i) => {
                const on = srcOn(i);
                return (
                  <motion.div
                    key={i}
                    animate={{ opacity: on ? 1 : 0.2, x: on ? 0 : -10 }}
                    transition={{ duration: 0.45, delay: on ? i * 0.06 : 0 }}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2.5"
                    style={{
                      background: on ? `rgba(${toRgb(s.color)},0.09)` : "rgba(255,255,255,0.025)",
                      border: `1px solid ${on ? `rgba(${toRgb(s.color)},0.3)` : "rgba(255,255,255,0.06)"}`,
                      transition: "background 0.4s, border-color 0.4s",
                      boxShadow: on ? `0 0 14px rgba(${toRgb(s.color)},0.05)` : "none",
                    }}
                  >
                    <div
                      className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: on ? `rgba(${toRgb(s.color)},0.18)` : "rgba(255,255,255,0.04)" }}
                    >
                      <s.icon size={14} style={{ color: on ? s.color : "#384A60" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate" style={{ color: on ? "#DDE8F4" : "#384A60" }}>{s.label}</p>
                      <p className="text-[10px] truncate mt-0.5" style={{ color: on ? "#4A6A86" : "#253344" }}>{s.sub}</p>
                    </div>
                    {on && (
                      <div className="shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: s.color, boxShadow: `0 0 5px ${s.color}` }} />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Center — hub + deploy overlay */}
            <div className="flex-1 relative z-10 flex flex-col items-center justify-center gap-5">
              <Hub step={step} />
              <AnimatePresence>
                {step === 5 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.35 }}
                    className="flex gap-2.5"
                  >
                    {[
                      { icon: Cloud,  label: "Cloud",        color: "#3B82F6" },
                      { icon: Server, label: "On-Premises",  color: "#00D4FF" },
                    ].map((d, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-xl px-3 py-2"
                        style={{
                          background: `rgba(${toRgb(d.color)},0.1)`,
                          border: `1px solid rgba(${toRgb(d.color)},0.35)`,
                        }}
                      >
                        <d.icon size={12} style={{ color: d.color }} />
                        <span style={{ fontSize: 11, fontWeight: 600, color: d.color }}>{d.label}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right cards — outputs */}
            <div className="relative z-10 flex flex-col justify-center gap-2" style={{ width: "22%" }}>
              {OUTPUTS.map((o, i) => {
                const on = outOn();
                return (
                  <motion.div
                    key={i}
                    animate={{ opacity: on ? 1 : 0.2, x: on ? 0 : 10 }}
                    transition={{ duration: 0.45, delay: on ? i * 0.06 : 0 }}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2.5"
                    style={{
                      background: on ? `rgba(${toRgb(o.color)},0.09)` : "rgba(255,255,255,0.025)",
                      border: `1px solid ${on ? `rgba(${toRgb(o.color)},0.3)` : "rgba(255,255,255,0.06)"}`,
                      transition: "background 0.4s, border-color 0.4s",
                      boxShadow: on ? `0 0 14px rgba(${toRgb(o.color)},0.05)` : "none",
                    }}
                  >
                    {on && (
                      <div className="shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: o.color, boxShadow: `0 0 5px ${o.color}` }} />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate" style={{ color: on ? "#DDE8F4" : "#384A60" }}>{o.label}</p>
                      <p className="text-[10px] truncate mt-0.5" style={{ color: on ? "#4A6A86" : "#253344" }}>{o.sub}</p>
                    </div>
                    <div
                      className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: on ? `rgba(${toRgb(o.color)},0.18)` : "rgba(255,255,255,0.04)" }}
                    >
                      <o.icon size={14} style={{ color: on ? o.color : "#384A60" }} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Step description — bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-30 px-8 sm:px-12 pb-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#00D4FF", marginBottom: 4 }}>
                Step {step} — {STEPS[step - 1].tag}
              </p>
              <h3
                className="font-serif font-bold mb-1.5"
                style={{ fontSize: "clamp(1rem,1.7vw,1.3rem)", color: "#F0F5FB", lineHeight: 1.25 }}
              >
                {STEPS[step - 1].title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6A8AA8", maxWidth: "48ch" }}>
                {STEPS[step - 1].body}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
