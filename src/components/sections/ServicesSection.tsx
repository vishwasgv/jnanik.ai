"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Lightbulb, Bot, Cpu, MessageSquare, Wrench, Check, ArrowRight } from "lucide-react";

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
    id: "knowledge-hub",
    icon: BookOpen,
    image: IMAGES.knowledgeHub,
    title: "AI Knowledge Hub",
    desc: "Every document, SOP, and email your organisation has ever created — searchable in seconds.",
    benefits: ["Natural language answers with citations", "Role-based access and permissions", "On-prem or cloud deployment"],
    outcome: "Employees find answers in seconds, not hours.",
    gradient: "linear-gradient(145deg, #0F172A 0%, #0C2240 100%)",
    accent: "#3B82F6",
    accentBg: "rgba(59,130,246,0.12)",
    accentBd: "rgba(59,130,246,0.25)",
    glowColor: "rgba(37,99,235,0.4)",
  },
  {
    id: "ai-strategy",
    icon: Lightbulb,
    image: IMAGES.strategy,
    title: "AI Strategy & Consulting",
    desc: "A rigorous AI roadmap built around your data, team, and risk tolerance — before a single line of code.",
    benefits: ["AI Readiness Assessment", "Use case ROI scoring", "Phased implementation roadmap"],
    outcome: "A plan your leadership team can commit to.",
    gradient: "linear-gradient(145deg, #1C1400 0%, #3D2E00 100%)",
    accent: "#F59E0B",
    accentBg: "rgba(245,158,11,0.1)",
    accentBd: "rgba(245,158,11,0.25)",
    glowColor: "rgba(245,158,11,0.35)",
  },
  {
    id: "agentic-ai",
    icon: Bot,
    image: IMAGES.agentic,
    title: "Agentic AI",
    desc: "AI that plans and executes multi-step workflows — procurement, approvals, classification — without manual intervention.",
    benefits: ["End-to-end workflow execution", "ERP, CRM, and email integrations", "Human escalation for exceptions"],
    outcome: "Complex workflows run reliably without oversight.",
    gradient: "linear-gradient(145deg, #052E16 0%, #064E3B 100%)",
    accent: "#22C55E",
    accentBg: "rgba(34,197,94,0.1)",
    accentBd: "rgba(34,197,94,0.25)",
    glowColor: "rgba(34,197,94,0.35)",
  },
  {
    id: "slm",
    icon: Cpu,
    image: IMAGES.slm,
    title: "Small Language Models",
    desc: "Domain-specific AI trained on your data — outperforming general LLMs at 60–80% lower cost.",
    benefits: ["Fine-tuned on your terminology", "On-prem or air-gapped deployment", "Continuous feedback improvement"],
    outcome: "Better accuracy on your domain, fraction of the price.",
    gradient: "linear-gradient(145deg, #1C0A00 0%, #431407 100%)",
    accent: "#F97316",
    accentBg: "rgba(249,115,22,0.1)",
    accentBd: "rgba(249,115,22,0.25)",
    glowColor: "rgba(249,115,22,0.35)",
  },
  {
    id: "ai-chatbot",
    icon: MessageSquare,
    image: IMAGES.chatbot,
    title: "AI Chatbot",
    desc: "Enterprise chatbots grounded in your real data — not generic training — with intelligent escalation.",
    benefits: ["Answers from internal knowledge", "Web, Slack, Teams, WhatsApp", "Resolution rate analytics"],
    outcome: "Fewer tickets, faster resolution.",
    gradient: "linear-gradient(145deg, #1E0A4E 0%, #3B1BA8 100%)",
    accent: "#A78BFA",
    accentBg: "rgba(167,139,250,0.1)",
    accentBd: "rgba(167,139,250,0.25)",
    glowColor: "rgba(124,58,237,0.4)",
  },
  {
    id: "custom-ai",
    icon: Wrench,
    image: IMAGES.custom,
    title: "Custom AI Solutions",
    desc: "When no off-the-shelf product fits — we build AI designed precisely around your process and data.",
    benefits: ["Full system design to deployment", "Integrates with existing stack", "Knowledge transfer to your team"],
    outcome: "A system that solves your exact problem.",
    gradient: "linear-gradient(145deg, #001C40 0%, #003060 100%)",
    accent: "#38BDF8",
    accentBg: "rgba(56,189,248,0.1)",
    accentBd: "rgba(56,189,248,0.25)",
    glowColor: "rgba(14,165,233,0.4)",
  },
];

function ImageOrGradient({ image, gradient, glow, alt }: { image: string | null; gradient: string; glow: string; alt: string }) {
  if (image) {
    return <Image src={image} alt={alt} fill className="object-cover" sizes="40vw" />;
  }
  return (
    <div className="absolute inset-0" style={{ background: gradient }}>
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full" style={{ background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`, filter: "blur(28px)" }} />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-32" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 sm:mb-14">
          <div className="section-label mb-5 sm:mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            What We Build
          </div>
          <h2 className="font-serif font-bold leading-tight max-w-xl" style={{ fontSize: "clamp(1.8rem,4.5vw,3.5rem)", color: "#0C1A2E" }}>
            Six systems. Each built for enterprise.
          </h2>
        </motion.div>

        {/* Service cards */}
        <div className="space-y-5 sm:space-y-6">
          {services.map((svc, i) => {
            const panelRight = i % 2 !== 0;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group overflow-hidden rounded-2xl"
                style={{ border: "1px solid rgba(15,23,42,0.07)", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}
              >
                <div className={`flex flex-col ${panelRight ? "lg:flex-row-reverse" : "lg:flex-row"}`}>

                  {/* Visual panel */}
                  <div className="relative overflow-hidden min-h-[200px] lg:w-[38%] shrink-0">
                    <ImageOrGradient image={svc.image} gradient={svc.gradient} glow={svc.glowColor} alt={svc.title} />
                    {/* Fade to white */}
                    <div className="absolute inset-0 hidden lg:block" style={{ background: panelRight ? "linear-gradient(to left, transparent 55%, #FFFFFF 100%)" : "linear-gradient(to right, transparent 55%, #FFFFFF 100%)" }} />
                    <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(to bottom, transparent 55%, #FFFFFF 100%)" }} />
                    {/* Icon badge */}
                    <div className="absolute top-5 left-5 flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: svc.accentBg, border: `1px solid ${svc.accentBd}`, backdropFilter: "blur(8px)" }}>
                        <svc.icon size={18} style={{ color: svc.accent }} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: svc.accent }}>0{i + 1}</span>
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className="flex-1 p-7 sm:p-9 flex flex-col justify-center gap-5 bg-white">
                    <div>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl mb-2" style={{ color: "#0C1A2E" }}>{svc.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#5C7A96" }}>{svc.desc}</p>
                    </div>

                    <ul className="space-y-2.5">
                      {svc.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2.5">
                          <div className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: svc.accentBg, border: `1px solid ${svc.accentBd}` }}>
                            <Check size={9} style={{ color: svc.accent }} />
                          </div>
                          <span className="text-sm" style={{ color: "#2A3E58" }}>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "rgba(15,23,42,0.06)" }}>
                      <p className="text-sm font-semibold" style={{ color: "#0C1A2E" }}>{svc.outcome}</p>
                      <a href="#contact" className="flex items-center gap-1.5 text-sm font-semibold group/link shrink-0 ml-4" style={{ color: svc.accent }}>
                        Learn more <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
