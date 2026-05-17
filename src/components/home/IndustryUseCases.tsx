"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    title: "Manufacturing & Industrial",
    sub: "Quality AI · Predictive Maintenance",
    desc: "AI inspection systems that catch defects before they leave the line. Predictive maintenance that eliminates unplanned downtime.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85",
    metrics: ["99.2% defect accuracy", "72% less downtime"],
    span: "lg:col-span-2 lg:row-span-2",
    tall: true,
  },
  {
    title: "Financial Services",
    sub: "Document AI · Compliance",
    desc: "Faster document review, automated compliance checks, and AI-assisted underwriting — with full audit trails.",
    image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=800&q=85",
    metrics: ["80% faster processing", "100% audit trail"],
    span: "lg:col-span-1",
    tall: false,
  },
  {
    title: "Professional Services",
    sub: "Knowledge Hub · Agentic AI",
    desc: "Consultants and analysts find answers in seconds, not hours. Client work gets done faster with less rework.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=85",
    metrics: ["10× knowledge access", "40% less search time"],
    span: "lg:col-span-1",
    tall: false,
  },
  {
    title: "Logistics & Supply Chain",
    sub: "Agentic AI · Automation",
    desc: "Multi-step workflows — procurement, dispatch, exceptions — handled autonomously with intelligent escalation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85",
    metrics: ["60% automation rate", "3× faster resolution"],
    span: "lg:col-span-1",
    tall: false,
  },
  {
    title: "Healthcare & Pharma",
    sub: "On-Prem AI · Privacy-First",
    desc: "Knowledge systems for clinical staff and secure, on-prem AI that never exposes patient data.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
    metrics: ["100% on-prem", "HIPAA-aligned"],
    span: "lg:col-span-1",
    tall: false,
  },
  {
    title: "Enterprise Technology",
    sub: "Custom AI · SLMs",
    desc: "Domain-specific language models and custom AI pipelines for software and technology businesses.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=85",
    metrics: ["60–80% cost reduction", "Tailored performance"],
    span: "lg:col-span-1",
    tall: false,
  },
];

export default function IndustryUseCases() {
  return (
    <section className="py-32" style={{ background: "#FAF8F5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t mb-20" style={{ borderColor: "#E8E2DB" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-label mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Industries We Serve
          </div>
          <h2
            className="font-serif font-bold leading-tight"
            style={{ fontSize: "clamp(2rem,4vw,3.25rem)", color: "#1C1A18" }}
          >
            Real outcomes across<br />real industries.
          </h2>
          <p className="text-lg mt-4 max-w-2xl" style={{ color: "#6B6560" }}>
            We work where complexity is high, margins matter, and generic AI tools fall short.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ gridAutoRows: "270px" }}
        >
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl ${c.span}`}
              style={{ minHeight: c.tall ? "550px" : "270px" }}
            >
              <Image
                src={c.image} alt={c.title} fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,26,24,0.97) 0%, rgba(28,26,24,0.5) 50%, rgba(28,26,24,0.1) 100%)" }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(217,119,6,0.07)" }} />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "#FCD34D" }}>{c.sub}</p>
                <h3 className="font-extrabold text-xl mb-1.5" style={{ color: "#FAF8F5" }}>{c.title}</h3>
                <p className="text-xs leading-relaxed mb-3 max-h-0 overflow-hidden group-hover:max-h-16 transition-all duration-500" style={{ color: "#D1C9C0" }}>
                  {c.desc}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {c.metrics.map((m) => (
                    <span key={m} className="px-2.5 py-1 text-[10px] font-bold rounded-full"
                      style={{ background: "rgba(217,119,6,0.22)", border: "1px solid rgba(217,119,6,0.35)", color: "#FAF8F5" }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
            style={{ background: "#FFFFFF", border: "1.5px solid #E8E2DB", color: "#1C1A18", boxShadow: "0 2px 12px rgba(28,26,24,0.07)" }}>
            See All Services <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
