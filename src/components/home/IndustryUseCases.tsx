"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cases = [
  {
    title: "Manufacturing & Industrial",
    sub: "Quality AI · Predictive Maintenance",
    desc: "AI inspection systems that catch defects before they leave the line. Predictive maintenance that eliminates unplanned downtime.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=85",
    metrics: ["99.2% defect accuracy", "72% less downtime"],
    span: "lg:col-span-2 lg:row-span-2",
    tall: true,
  },
  {
    title: "Financial Services",
    sub: "Document AI · Compliance",
    desc: "Faster document review, automated compliance checks, and AI-assisted underwriting — with full audit trails.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=85",
    metrics: ["80% faster processing", "100% audit trail"],
    span: "lg:col-span-1",
    tall: false,
  },
  {
    title: "Professional Services",
    sub: "Knowledge Hub · Agentic AI",
    desc: "Consultants and analysts find answers in seconds, not hours. Client work gets done faster with less rework.",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=85",
    metrics: ["10× knowledge access", "40% less search time"],
    span: "lg:col-span-1",
    tall: false,
  },
  {
    title: "Logistics & Supply Chain",
    sub: "Agentic AI · Automation",
    desc: "Multi-step workflows — procurement, dispatch, exceptions — handled autonomously with intelligent escalation.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=85",
    metrics: ["60% automation rate", "3× faster resolution"],
    span: "lg:col-span-1",
    tall: false,
  },
  {
    title: "Healthcare & Pharma",
    sub: "On-Prem AI · Privacy-First",
    desc: "Knowledge systems for clinical staff and secure, on-prem AI that never exposes patient data.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=85",
    metrics: ["100% on-prem", "HIPAA-aligned"],
    span: "lg:col-span-1",
    tall: false,
  },
  {
    title: "Enterprise Technology",
    sub: "Custom AI · SLMs",
    desc: "Domain-specific language models and custom AI pipelines for software and technology businesses.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=85",
    metrics: ["60–80% cost reduction", "Tailored performance"],
    span: "lg:col-span-1",
    tall: false,
  },
];

export default function IndustryUseCases() {
  return (
    <section className="py-20 sm:py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t mb-14 sm:mb-20" style={{ borderColor: "rgba(255,255,255,0.07)" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="section-label mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Industries We Serve
          </div>
          <h2
            className="font-serif font-bold leading-tight"
            style={{ fontSize: "clamp(1.8rem,4vw,3.25rem)", color: "var(--text-1)" }}
          >
            Where Jnanik AI<br />delivers results.
          </h2>
          <p className="text-base sm:text-lg mt-4 max-w-2xl" style={{ color: "var(--text-3)" }}>
            We work where complexity is high, margins matter, and off-the-shelf tools fall short.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          style={{ gridAutoRows: "260px" }}
        >
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`card-glow group relative overflow-hidden rounded-2xl ${c.span}`}
              style={{ minHeight: c.tall ? "530px" : "260px" }}
            >
              <Image
                src={c.image}
                alt={`${c.title} — ${c.sub}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              />
              {/* Strong gradient for text readability */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(7,14,28,0.98) 0%, rgba(7,14,28,0.6) 55%, rgba(7,14,28,0.15) 100%)" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(59,130,246,0.06)" }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "#60A5FA" }}>{c.sub}</p>
                <h3 className="font-extrabold text-lg sm:text-xl mb-1.5" style={{ color: "#FFFFFF" }}>{c.title}</h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed mb-3 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500"
                  style={{ color: "#CBD5E1" }}
                >
                  {c.desc}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {c.metrics.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 text-[10px] font-bold rounded-full"
                      style={{ background: "rgba(59,130,246,0.22)", border: "1px solid rgba(59,130,246,0.4)", color: "#93C5FD" }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
