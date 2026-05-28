"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Lightbulb, Bot, Cpu, MessageSquare, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { vp, fadeUp, fadeUpBlur, fadeOnly, staggerGrid } from "@/lib/motionConfig";

/* ─── Set image paths once ready ─────────────────────────── */
const IMAGES = {
  knowledgeHub: "/images/service-knowledge-hub.png",
  strategy:     "/images/service-strategy.png",
  agentic:      "/images/service-agentic.png",
  slm:          "/images/service-slm.png",
  chatbot:      "/images/service-chatbot.png",
  custom:       "/images/service-custom.png",
};

const services = [
  {
    icon: BookOpen,
    image: IMAGES.knowledgeHub,
    title: "AI Knowledge Hub",
    desc: "Every SOP, manual, and email your organisation has — searchable in natural language, answered with citations.",
    href: "/services",
    gradient: "linear-gradient(145deg, #0F172A 0%, #0C2340 100%)",
    accent: "#3B82F6",
    accentBg: "rgba(59,130,246,0.15)",
    accentBd: "rgba(59,130,246,0.3)",
    glowColor: "rgba(37,99,235,0.35)",
    label: "Most Requested",
    featured: true,
  },
  {
    icon: Lightbulb,
    image: IMAGES.strategy,
    title: "AI Strategy",
    desc: "A prioritised roadmap built around your real data and constraints.",
    href: "/services",
    gradient: "linear-gradient(145deg, #1C1400 0%, #3D2E00 100%)",
    accent: "#F59E0B",
    accentBg: "rgba(245,158,11,0.15)",
    accentBd: "rgba(245,158,11,0.3)",
    glowColor: "rgba(245,158,11,0.3)",
  },
  {
    icon: Bot,
    image: IMAGES.agentic,
    title: "Agentic AI",
    desc: "AI that plans, reasons, and completes multi-step workflows autonomously.",
    href: "/services",
    gradient: "linear-gradient(145deg, #052E16 0%, #064E3B 100%)",
    accent: "#22C55E",
    accentBg: "rgba(34,197,94,0.15)",
    accentBd: "rgba(34,197,94,0.3)",
    glowColor: "rgba(34,197,94,0.3)",
  },
  {
    icon: Cpu,
    image: IMAGES.slm,
    title: "Small Language Models",
    desc: "Domain-specific AI models — better accuracy, 80% lower cost.",
    href: "/services",
    gradient: "linear-gradient(145deg, #1C0A00 0%, #431407 100%)",
    accent: "#F97316",
    accentBg: "rgba(249,115,22,0.15)",
    accentBd: "rgba(249,115,22,0.3)",
    glowColor: "rgba(249,115,22,0.3)",
  },
  {
    icon: MessageSquare,
    image: IMAGES.chatbot,
    title: "AI Chatbot",
    desc: "Enterprise chatbots grounded in your actual data, not generic FAQs.",
    href: "/services",
    gradient: "linear-gradient(145deg, #1E0A4E 0%, #3B1BA8 100%)",
    accent: "#A78BFA",
    accentBg: "rgba(167,139,250,0.15)",
    accentBd: "rgba(167,139,250,0.3)",
    glowColor: "rgba(124,58,237,0.35)",
  },
  {
    icon: Wrench,
    image: IMAGES.custom,
    title: "Custom AI Solutions",
    desc: "Purpose-built AI for workflows that no off-the-shelf product can handle.",
    href: "/services",
    gradient: "linear-gradient(145deg, #001C40 0%, #003060 100%)",
    accent: "#38BDF8",
    accentBg: "rgba(56,189,248,0.15)",
    accentBd: "rgba(56,189,248,0.3)",
    glowColor: "rgba(14,165,233,0.35)",
  },
];

function ImageOrGradient({ image, gradient, glow, accent, alt }: { image: string | null; gradient: string; glow: string; accent: string; alt: string }) {
  if (image) {
    return <Image src={image} alt={alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:640px) 100vw, 50vw" />;
  }
  return (
    <div className="absolute inset-0" style={{ background: gradient }}>
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 rounded-full" style={{ background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`, filter: "blur(24px)" }} />
      </div>
    </div>
  );
}

export default function ServicesPreview() {
  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section className="py-24 sm:py-36" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div variants={staggerGrid(0)} initial="hidden" whileInView="show" viewport={vp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <motion.div variants={fadeOnly} className="section-label mb-5 sm:mb-6 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              What We Build
            </motion.div>
            <motion.h2 variants={fadeUpBlur} className="font-serif font-bold leading-tight" style={{ fontSize: "clamp(1.8rem,4vw,3.25rem)", color: "var(--text-1)" }}>
              Six AI systems.<br />One engineering team.
            </motion.h2>
          </div>
          <motion.div variants={fadeOnly}>
            <Link href="/services" className="flex items-center gap-1.5 text-sm font-semibold shrink-0 group blue-link">
              View all
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Featured card */}
        <motion.div variants={staggerGrid(0.05)} initial="hidden" whileInView="show" viewport={vp} className="mb-5">
          <motion.div variants={fadeUp} whileHover={{ y: -3 }} transition={{ duration: 0.25 }} className="group relative overflow-hidden rounded-2xl" style={{ minHeight: "320px", border: "1px solid rgba(15,23,42,0.07)", boxShadow: "0 4px 24px rgba(15,23,42,0.06)" }}>
            <div className="grid lg:grid-cols-2 h-full min-h-[320px]">

              {/* Image / gradient panel */}
              <div className="relative overflow-hidden min-h-[220px] lg:min-h-0">
                <ImageOrGradient image={featured.image} gradient={featured.gradient} glow={featured.glowColor} accent={featured.accent} alt={featured.title} />

                {/* Badge */}
                <span className="absolute top-4 left-4 text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-widest" style={{ background: "rgba(59,130,246,0.2)", border: "1px solid rgba(59,130,246,0.35)", color: "#93C5FD" }}>
                  {featured.label}
                </span>

                {/* Icon */}
                <div className="absolute bottom-5 left-5 w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: featured.accentBg, border: `1px solid ${featured.accentBd}` }}>
                  <featured.icon size={22} style={{ color: featured.accent }} />
                </div>
              </div>

              {/* Text panel */}
              <div className="flex flex-col justify-center p-7 sm:p-10 bg-white">
                <h3 className="font-bold text-2xl sm:text-3xl mb-3" style={{ color: "#0C1A2E" }}>{featured.title}</h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#5C7A96" }}>{featured.desc}</p>
                {["SOPs & manuals searchable in seconds", "Works on-prem or in the cloud", "Supports 50,000+ documents"].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm mb-2" style={{ color: "#334155" }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#2563EB" }} />
                    {pt}
                  </div>
                ))}
                <Link href={featured.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold group/link" style={{ color: "#2563EB" }}>
                  Learn more
                  <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Supporting cards */}
        <motion.div variants={staggerGrid(0.07)} initial="hidden" whileInView="show" viewport={vp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {rest.map((svc, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-2xl flex flex-col"
              style={{ border: "1px solid rgba(15,23,42,0.07)", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}
            >
              {/* Image / gradient header */}
              <div className="relative overflow-hidden" style={{ height: "130px", flexShrink: 0 }}>
                <ImageOrGradient image={svc.image} gradient={svc.gradient} glow={svc.glowColor} accent={svc.accent} alt={svc.title} />
                <div className="absolute bottom-3 left-4 w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: svc.accentBg, border: `1px solid ${svc.accentBd}`, backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}>
                  <svc.icon size={16} style={{ color: svc.accent }} />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col justify-between p-4 pt-2 bg-white">
                <div>
                  <h3 className="font-bold text-sm mb-1.5 leading-snug" style={{ color: "#0C1A2E" }}>{svc.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#5C7A96" }}>{svc.desc}</p>
                </div>
                <Link href={svc.href} className="text-xs font-semibold inline-flex items-center gap-1 mt-3 group/link" style={{ color: svc.accent }}>
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
