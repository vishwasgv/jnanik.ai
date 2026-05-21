"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Lightbulb, Bot, Cpu, MessageSquare, Wrench, Check, ArrowRight, Calendar } from "lucide-react";

const services = [
  {
    id: "knowledge-hub",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    title: "AI Knowledge Hub",
    tagline: "Stop Losing Time to Information That Already Exists",
    desc: "Your organisation already has the answers — in documents, manuals, tickets, emails, and the heads of experienced employees. An AI Knowledge Hub indexes everything, then makes it instantly searchable through natural language.",
    benefits: [
      "Natural language search across all your data sources",
      "Instant, cited answers — not a list of documents to read",
      "Covers SOPs, manuals, tickets, emails, and databases",
      "Role-based access so the right people see the right content",
    ],
    outcome: "Employees answer questions in seconds, not hours.",
  },
  {
    id: "ai-strategy",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1758873269181-270f5b7fc6aa?auto=format&fit=crop&w=1200&q=85",
    title: "AI Strategy & Consulting",
    tagline: "A Clear Plan — Before You Spend a Rupee on AI",
    desc: "Most organisations rush into AI with a tool before they have a problem. We start differently: with a rigorous AI Readiness Assessment that examines your data, workflows, team capabilities, and risk tolerance.",
    benefits: [
      "AI Readiness Assessment across data, people, and process",
      "Use case scoring: ROI, feasibility, and time to value",
      "Build vs. buy decision framework for each initiative",
      "Phased implementation roadmap with clear milestones",
    ],
    outcome: "A roadmap your leadership team can actually commit to.",
  },
  {
    id: "agentic-ai",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?auto=format&fit=crop&w=1200&q=85",
    title: "Agentic AI",
    tagline: "AI That Doesn't Just Answer — It Acts",
    desc: "There's a category of business processes that are too complex for simple automation but too repetitive for your best people. Agentic AI fills that gap with planning, reasoning, and end-to-end execution.",
    benefits: [
      "Multi-step workflow execution with planning and reasoning",
      "Integrations with ERP, CRM, email, and internal systems",
      "Human-in-the-loop escalation for edge cases",
      "Full audit trail for compliance and review",
    ],
    outcome: "Complex workflows run reliably without manual intervention.",
  },
  {
    id: "slm",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1639066648921-82d4500abf1a?auto=format&fit=crop&w=1200&q=85",
    title: "Small Language Models",
    tagline: "Domain Expertise Without Cloud LLM Costs",
    desc: "General LLMs are expensive and don't know your domain. We fine-tune small, domain-specific models on your data — outperforming GPT-4 on your tasks at 60–80% lower cost, fully on-prem if required.",
    benefits: [
      "Fine-tuned on your specific domain data and terminology",
      "60–80% lower inference cost vs. cloud LLMs",
      "Fully on-prem or air-gapped deployment available",
      "Continuous improvement via feedback loops",
    ],
    outcome: "Better accuracy on your domain, at a fraction of the price.",
  },
  {
    id: "ai-chatbot",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1745674684463-62f62cb88d4c?auto=format&fit=crop&w=1200&q=85",
    title: "AI Chatbot",
    tagline: "Enterprise Chatbots That Actually Resolve Issues",
    desc: "Not an FAQ bot. Our enterprise chatbots are grounded in your real data, escalate intelligently when needed, and learn from usage — deployed on your infrastructure with full data privacy.",
    benefits: [
      "Grounded in your internal knowledge, not generic training",
      "Intelligent escalation to human agents with full context",
      "Multi-channel: web, Slack, Teams, WhatsApp",
      "Analytics dashboard tracking resolution rates",
    ],
    outcome: "Fewer tickets, faster resolution, happier users.",
  },
  {
    id: "custom-ai",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1638482856830-16b0e15fcf2c?auto=format&fit=crop&w=1200&q=85",
    title: "Custom AI Solutions",
    tagline: "When No Off-the-Shelf Product Fits",
    desc: "Your workflow doesn't fit any product on the market. We design and build purpose-built AI systems around your exact process, data sources, and operational constraints — from prototype to production.",
    benefits: [
      "Full system design from data pipeline to UI",
      "Integrates with your existing software and infrastructure",
      "Comprehensive testing against real production scenarios",
      "Knowledge transfer so your team can operate it independently",
    ],
    outcome: "A system that solves your specific problem — nothing more, nothing less.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <div className="section-label mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Our Services
          </div>
          <h2
            className="font-serif font-bold leading-tight max-w-2xl"
            style={{ fontSize: "clamp(1.8rem,4.5vw,3.5rem)", color: "var(--text-1)" }}
          >
            Six services. Each one purpose-built for enterprise AI.
          </h2>
          <p className="text-base sm:text-lg mt-4 max-w-xl" style={{ color: "var(--text-2)" }}>
            Every engagement starts with understanding your problem. Every solution ships working code, not slide decks.
          </p>
        </motion.div>

        {/* Hero banner image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl mb-12 sm:mb-16"
          style={{ height: "280px" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1680992046626-418f7e910589?auto=format&fit=crop&w=1920&q=85"
            alt="Jnanik AI — enterprise AI systems in production"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(7,14,28,0.95) 0%, rgba(7,14,28,0.7) 50%, rgba(7,14,28,0.3) 100%)" }}
          />
          {/* Blue accent */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, transparent 50%)" }}
          />
          <div className="absolute inset-0 flex items-center px-8 sm:px-12">
            <div className="max-w-lg">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3"
                style={{ color: "#60A5FA" }}
              >
                Production-grade · Privacy-first · No lock-in
              </p>
              <p
                className="font-serif font-bold leading-snug"
                style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)", color: "#FFFFFF" }}
              >
                Every service is engineered and deployed —<br className="hidden sm:block" />
                not just designed and handed over.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Service detail cards */}
        <div className="space-y-5 sm:space-y-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.04 }}
              className="card-base overflow-hidden"
            >
              {/* Thin image strip at top of each card */}
              <div className="relative h-36 sm:h-44 overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 80vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, rgba(7,14,28,0.2) 0%, rgba(7,14,28,0.85) 100%)" }}
                />
                {/* Service number */}
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-xl"
                    style={{ width: "38px", height: "38px", background: "rgba(59,130,246,0.2)", border: "1px solid rgba(59,130,246,0.35)" }}
                  >
                    <svc.icon size={17} style={{ color: "#93C5FD" }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#60A5FA" }}>
                    0{i + 1}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-7 lg:gap-12">
                  {/* Left */}
                  <div className="lg:w-2/5">
                    <h3 className="font-serif font-bold text-xl sm:text-2xl mb-2" style={{ color: "var(--text-1)" }}>
                      {svc.title}
                    </h3>
                    <p className="text-sm font-semibold mb-4" style={{ color: "#60A5FA" }}>{svc.tagline}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{svc.desc}</p>
                  </div>

                  {/* Right */}
                  <div className="lg:w-3/5 flex flex-col justify-between gap-5">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {svc.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <Check size={14} className="shrink-0 mt-0.5" style={{ color: "#3B82F6" }} />
                          <span className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t"
                      style={{ borderColor: "rgba(255,255,255,0.07)" }}
                    >
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>Typical outcome</p>
                        <p className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>{svc.outcome}</p>
                      </div>
                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        href="https://calendly.com/contact-jnanikai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold"
                        style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.28)", color: "#60A5FA" }}
                      >
                        <Calendar size={13} />
                        Discuss this service
                        <ArrowRight size={13} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
