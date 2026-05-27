"use client";

import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Bot, Cpu, MessageSquare, Wrench, Check, ArrowRight } from "lucide-react";

const services = [
  {
    id: "knowledge-hub",
    icon: BookOpen,
    title: "AI Knowledge Hub",
    tagline: "Stop losing time to information that already exists.",
    desc: "Your organisation already has the answers — in documents, manuals, tickets, emails, and the heads of experienced employees. An AI Knowledge Hub indexes everything, then makes it instantly searchable through natural language.",
    benefits: [
      "Natural language search across all your data sources",
      "Instant, cited answers — not a list of documents to read",
      "Covers SOPs, manuals, tickets, emails, and databases",
      "Role-based access so the right people see the right content",
    ],
    outcome: "Employees answer questions in seconds, not hours.",
    gradient: "linear-gradient(135deg, #EEF4FF 0%, #DBEAFE 100%)",
    iconColor: "#2563EB",
    iconBg: "rgba(37,99,235,0.1)",
    iconBd: "rgba(37,99,235,0.2)",
    tags: ["SOPs & Manuals", "Quality Reports", "Shift Logs", "Engineering Docs"],
  },
  {
    id: "ai-strategy",
    icon: Lightbulb,
    title: "AI Strategy & Consulting",
    tagline: "A clear plan — before you spend a rupee on AI.",
    desc: "Most organisations rush into AI with a tool before they have a problem. We start differently: with a rigorous assessment of your data, workflows, team capabilities, and risk tolerance.",
    benefits: [
      "AI Readiness Assessment across data, people, and process",
      "Use case scoring: ROI, feasibility, and time to value",
      "Build vs. buy decision framework for each initiative",
      "Phased implementation roadmap with clear milestones",
    ],
    outcome: "A roadmap your leadership team can actually commit to.",
    gradient: "linear-gradient(135deg, #FEFCE8 0%, #FEF08A 100%)",
    iconColor: "#CA8A04",
    iconBg: "rgba(202,138,4,0.1)",
    iconBd: "rgba(202,138,4,0.2)",
    tags: ["Roadmap", "ROI Analysis", "Risk Assessment", "Prioritisation"],
  },
  {
    id: "agentic-ai",
    icon: Bot,
    title: "Agentic AI",
    tagline: "AI that doesn't just answer — it acts.",
    desc: "There are business processes too complex for simple automation but too repetitive for your best people. Agentic AI fills that gap — planning, reasoning, and executing end-to-end workflows reliably.",
    benefits: [
      "Multi-step workflow execution with planning and reasoning",
      "Integrations with ERP, CRM, email, and internal systems",
      "Human-in-the-loop escalation for edge cases",
      "Full audit trail for compliance and review",
    ],
    outcome: "Complex workflows run reliably without manual intervention.",
    gradient: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
    iconColor: "#16A34A",
    iconBg: "rgba(22,163,74,0.1)",
    iconBd: "rgba(22,163,74,0.2)",
    tags: ["Procurement", "Approvals", "Document Routing", "Exceptions"],
  },
  {
    id: "slm",
    icon: Cpu,
    title: "Small Language Models",
    tagline: "Domain expertise without cloud LLM costs.",
    desc: "General LLMs don't know your domain. We fine-tune small, domain-specific models on your data — outperforming general AI on your tasks at 60–80% lower cost, fully on-prem if required.",
    benefits: [
      "Fine-tuned on your specific domain data and terminology",
      "60–80% lower inference cost vs. cloud LLMs",
      "Fully on-prem or air-gapped deployment available",
      "Continuous improvement via feedback loops",
    ],
    outcome: "Better accuracy on your domain, at a fraction of the price.",
    gradient: "linear-gradient(135deg, #FFF7ED 0%, #FED7AA 100%)",
    iconColor: "#EA580C",
    iconBg: "rgba(234,88,12,0.1)",
    iconBd: "rgba(234,88,12,0.2)",
    tags: ["Fine-Tuning", "Domain AI", "On-Prem", "Cost Efficient"],
  },
  {
    id: "ai-chatbot",
    icon: MessageSquare,
    title: "AI Chatbot",
    tagline: "Enterprise chatbots that actually resolve issues.",
    desc: "Not an FAQ bot. Our enterprise chatbots are grounded in your real data, escalate intelligently when needed, and learn from usage — deployed on your infrastructure with full data privacy.",
    benefits: [
      "Grounded in your internal knowledge, not generic training",
      "Intelligent escalation to human agents with full context",
      "Multi-channel: web, Slack, Teams, WhatsApp",
      "Analytics dashboard tracking resolution rates",
    ],
    outcome: "Fewer tickets, faster resolution, happier users.",
    gradient: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
    iconColor: "#7C3AED",
    iconBg: "rgba(124,58,237,0.1)",
    iconBd: "rgba(124,58,237,0.2)",
    tags: ["Multi-Channel", "Context-Aware", "Escalation", "Analytics"],
  },
  {
    id: "custom-ai",
    icon: Wrench,
    title: "Custom AI Solutions",
    tagline: "When no off-the-shelf product fits.",
    desc: "Your workflow doesn't fit any product on the market. We design and build purpose-built AI systems around your exact process, data sources, and operational constraints — from prototype to production.",
    benefits: [
      "Full system design from data pipeline to UI",
      "Integrates with your existing software and infrastructure",
      "Comprehensive testing against real production scenarios",
      "Knowledge transfer so your team can operate independently",
    ],
    outcome: "A system that solves your specific problem — nothing more, nothing less.",
    gradient: "linear-gradient(135deg, #F0F9FF 0%, #BAE6FD 100%)",
    iconColor: "#0284C7",
    iconBg: "rgba(2,132,199,0.1)",
    iconBd: "rgba(2,132,199,0.2)",
    tags: ["Purpose-Built", "Full Stack", "End-to-End", "Knowledge Transfer"],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-32" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <div className="section-label mb-5 sm:mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            What We Build
          </div>
          <h2
            className="font-serif font-bold leading-tight max-w-2xl"
            style={{ fontSize: "clamp(1.8rem,4.5vw,3.5rem)", color: "#0F172A" }}
          >
            Six AI systems. Each one purpose-built for enterprise.
          </h2>
          <p className="text-base sm:text-lg mt-4 max-w-xl" style={{ color: "#64748B" }}>
            Every engagement starts with understanding your problem. Every solution ships working code, not slide decks.
          </p>
        </motion.div>

        {/* Hero banner — no image, text-driven */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden mb-12 sm:mb-16 px-8 sm:px-12 py-10 sm:py-12"
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            boxShadow: "0 8px 32px rgba(15,23,42,0.15)",
          }}
        >
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#93C5FD" }}>
              Production-grade · Privacy-first · No lock-in
            </p>
            <p
              className="font-serif font-bold leading-snug"
              style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)", color: "#F1F5F9" }}
            >
              Every service is engineered and deployed —<br className="hidden sm:block" />
              not just designed and handed over.
            </p>
          </div>
        </motion.div>

        {/* Service detail cards */}
        <div className="space-y-5 sm:space-y-6">
          {services.map((svc, i) => {
            const panelRight = i % 2 !== 0;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.04 }}
                className="card-base overflow-hidden"
              >
                <div className={`flex flex-col ${panelRight ? "lg:flex-row-reverse" : "lg:flex-row"}`}>

                  {/* Gradient visual panel */}
                  <div
                    className="relative lg:w-[38%] shrink-0 flex flex-col justify-between p-7 sm:p-8 min-h-[200px]"
                    style={{ background: svc.gradient }}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(255,255,255,0.8)", border: `1px solid ${svc.iconBd}`, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
                      >
                        <svc.icon size={20} style={{ color: svc.iconColor }} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: svc.iconColor }}>
                        0{i + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-serif font-bold text-xl mb-2" style={{ color: "#0F172A" }}>
                        {svc.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {svc.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-semibold px-2 py-1 rounded-md"
                            style={{ background: "rgba(255,255,255,0.65)", border: `1px solid ${svc.iconBd}`, color: svc.iconColor }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-5">
                    <div>
                      <p className="text-sm font-semibold mb-3" style={{ color: svc.iconColor }}>{svc.tagline}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{svc.desc}</p>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {svc.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <div
                            className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                            style={{ background: svc.iconBg, border: `1px solid ${svc.iconBd}` }}
                          >
                            <Check size={9} style={{ color: svc.iconColor }} />
                          </div>
                          <span className="text-sm leading-relaxed" style={{ color: "#334155" }}>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t"
                      style={{ borderColor: "rgba(15,23,42,0.07)" }}
                    >
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "#94A3B8" }}>Typical outcome</p>
                        <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>{svc.outcome}</p>
                      </div>
                      <a
                        href="#contact"
                        className="shrink-0 flex items-center gap-2 text-sm font-semibold group"
                        style={{ color: svc.iconColor }}
                      >
                        Learn more
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
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
