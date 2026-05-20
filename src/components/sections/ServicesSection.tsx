"use client";

import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Bot, Cpu, MessageSquare, Wrench, Check, ArrowRight, Calendar } from "lucide-react";

const services = [
  {
    id: "knowledge-hub",
    icon: BookOpen,
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
    <section className="py-20 sm:py-32" style={{ background: "#070F1D" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20"
        >
          <div className="section-label mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Our Services
          </div>
          <h2
            className="font-serif font-bold leading-tight max-w-2xl"
            style={{ fontSize: "clamp(1.8rem,4.5vw,3.5rem)", color: "#EEF2FF" }}
          >
            Six services. Each one purpose-built for enterprise AI.
          </h2>
          <p className="text-base sm:text-lg mt-4 max-w-xl" style={{ color: "#94A3B8" }}>
            Every engagement starts with understanding your problem. Every solution ships working code, not slide decks.
          </p>
        </motion.div>

        <div className="space-y-5 sm:space-y-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="card-base p-6 sm:p-8 lg:p-10"
            >
              <div className="flex flex-col lg:flex-row gap-7 lg:gap-12">
                {/* Left */}
                <div className="lg:w-2/5">
                  <div className="flex items-center gap-4 mb-4 sm:mb-5">
                    <div className="blue-icon">
                      <svc.icon size={20} style={{ color: "#60A5FA" }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#64748B" }}>
                      0{i + 1}
                    </span>
                  </div>
                  <h3
                    className="font-serif font-bold text-xl sm:text-2xl mb-2"
                    style={{ color: "#EEF2FF" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-sm font-semibold mb-4" style={{ color: "#60A5FA" }}>{svc.tagline}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{svc.desc}</p>
                </div>

                {/* Right */}
                <div className="lg:w-3/5 flex flex-col justify-between gap-5">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {svc.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <Check size={14} className="shrink-0 mt-0.5" style={{ color: "#3B82F6" }} />
                        <span className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t"
                    style={{ borderColor: "rgba(255,255,255,0.07)" }}
                  >
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "#64748B" }}>Typical outcome</p>
                      <p className="text-sm font-semibold" style={{ color: "#EEF2FF" }}>{svc.outcome}</p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
