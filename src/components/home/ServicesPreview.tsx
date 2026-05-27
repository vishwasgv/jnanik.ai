"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Lightbulb, Bot, Cpu, MessageSquare, Wrench } from "lucide-react";
import Link from "next/link";
import { vp, fadeUp, fadeUpBlur, fadeOnly, staggerGrid } from "@/lib/motionConfig";

const services = [
  {
    icon: BookOpen,
    title: "AI Knowledge Hub",
    desc: "Your team's collective knowledge — SOPs, documents, emails, reports — made instantly searchable and answerable. No more hours lost looking for answers that already exist.",
    href: "/services",
    gradient: "linear-gradient(135deg, #EEF4FF 0%, #DBEAFE 100%)",
    iconColor: "#2563EB",
    iconBg: "rgba(37,99,235,0.1)",
    iconBd: "rgba(37,99,235,0.2)",
    featured: true,
    label: "Most Requested",
  },
  {
    icon: Lightbulb,
    title: "AI Strategy",
    desc: "A clear, prioritised AI roadmap built around your real data, constraints, and goals.",
    href: "/services",
    gradient: "linear-gradient(135deg, #FEFCE8 0%, #FEF08A 100%)",
    iconColor: "#CA8A04",
    iconBg: "rgba(202,138,4,0.1)",
    iconBd: "rgba(202,138,4,0.2)",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    desc: "AI that plans, reasons, and executes complex workflows — autonomously and reliably.",
    href: "/services",
    gradient: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
    iconColor: "#16A34A",
    iconBg: "rgba(22,163,74,0.1)",
    iconBd: "rgba(22,163,74,0.2)",
  },
  {
    icon: Cpu,
    title: "Small Language Models",
    desc: "Domain-specific AI models trained on your data — outperforming general LLMs at a fraction of the cost.",
    href: "/services",
    gradient: "linear-gradient(135deg, #FFF7ED 0%, #FED7AA 100%)",
    iconColor: "#EA580C",
    iconBg: "rgba(234,88,12,0.1)",
    iconBd: "rgba(234,88,12,0.2)",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    desc: "Enterprise chatbots that understand your business context and resolve real queries — not just FAQs.",
    href: "/services",
    gradient: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
    iconColor: "#7C3AED",
    iconBg: "rgba(124,58,237,0.1)",
    iconBd: "rgba(124,58,237,0.2)",
  },
  {
    icon: Wrench,
    title: "Custom AI Solutions",
    desc: "Your workflow is unique. We build AI systems designed precisely around your process and data.",
    href: "/services",
    gradient: "linear-gradient(135deg, #F0F9FF 0%, #BAE6FD 100%)",
    iconColor: "#0284C7",
    iconBg: "rgba(2,132,199,0.1)",
    iconBd: "rgba(2,132,199,0.2)",
  },
];

export default function ServicesPreview() {
  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section className="py-20 sm:py-32" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerGrid(0)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div>
            <motion.div variants={fadeOnly} className="section-label mb-5 sm:mb-6 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              What We Build
            </motion.div>
            <motion.h2
              variants={fadeUpBlur}
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(1.8rem,4vw,3.25rem)", color: "var(--text-1)" }}
            >
              Six AI systems.<br />One engineering team.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base sm:text-lg mt-4 max-w-lg" style={{ color: "var(--text-3)" }}>
              Built around your actual data and constraints — not adapted from a generic template.
            </motion.p>
          </div>
          <motion.div variants={fadeOnly}>
            <Link href="/services" className="flex items-center gap-1.5 text-sm font-semibold shrink-0 group blue-link">
              View all services
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Featured card */}
        <motion.div
          variants={staggerGrid(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="mb-5"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="card-base overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Gradient visual side */}
              <div
                className="relative p-10 sm:p-12 flex flex-col justify-between min-h-[280px]"
                style={{ background: featured.gradient }}
              >
                <div>
                  <span
                    className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-widest mb-5"
                    style={{ background: "rgba(255,255,255,0.7)", border: `1px solid ${featured.iconBd}`, color: featured.iconColor }}
                  >
                    {featured.label}
                  </span>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${featured.iconBd}`, boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}
                  >
                    <featured.icon size={26} style={{ color: featured.iconColor }} />
                  </div>
                  <h3 className="font-bold text-2xl sm:text-3xl mb-3" style={{ color: "#0F172A" }}>{featured.title}</h3>
                </div>

                {/* Animated insight cards */}
                <div className="flex gap-2 flex-wrap">
                  {["SOPs & Manuals", "Quality Reports", "Engineering Docs", "Shift Logs"].map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      className="px-2.5 py-1 text-[10px] font-semibold rounded-lg"
                      style={{ background: "rgba(255,255,255,0.65)", border: `1px solid ${featured.iconBd}`, color: featured.iconColor }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Content side */}
              <div className="p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "#475569" }}>{featured.desc}</p>
                  <div className="space-y-3">
                    {[
                      "Answers from 50,000+ documents in seconds",
                      "Works on your existing files — no migration",
                      "Deployable on-prem or in the cloud",
                    ].map((pt, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm" style={{ color: "#334155" }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: featured.iconColor }} />
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href={featured.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold group/link"
                  style={{ color: featured.iconColor }}
                >
                  Learn more
                  <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Supporting cards grid */}
        <motion.div
          variants={staggerGrid(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          {rest.map((svc, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className="card-base overflow-hidden flex flex-col"
            >
              {/* Gradient header */}
              <div
                className="p-5 flex flex-col gap-3"
                style={{ background: svc.gradient }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.8)", border: `1px solid ${svc.iconBd}`, boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}
                >
                  <svc.icon size={18} style={{ color: svc.iconColor }} />
                </div>
                <h3 className="font-bold text-sm leading-snug" style={{ color: "#0F172A" }}>{svc.title}</h3>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs leading-relaxed mb-4" style={{ color: "#64748B" }}>{svc.desc}</p>
                <Link href={svc.href} className="text-xs font-semibold inline-flex items-center gap-1 group/link" style={{ color: svc.iconColor }}>
                  Learn more
                  <ArrowRight size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
