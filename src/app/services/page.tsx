"use client";

import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Bot, Cpu, MessageSquare, Wrench, Check, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "knowledge-hub",
    icon: BookOpen,
    title: "AI Knowledge Hub",
    tagline: "Stop Losing Time to Information That Already Exists",
    desc: "Your organisation already has the answers — in documents, manuals, tickets, emails, and the heads of experienced employees. The problem is accessing them. An AI Knowledge Hub indexes everything, then makes it instantly searchable through natural language. Employees stop digging. Experts stop being interrupted. Decisions happen faster.",
    benefits: [
      "Natural language search across all your data sources",
      "Instant, cited answers — not a list of documents to read",
      "Covers SOPs, manuals, tickets, emails, and databases",
      "Role-based access so the right people see the right content",
      "Learns from usage to improve accuracy over time",
    ],
    useCases: ["Engineering documentation", "Maintenance knowledge", "HR policy access", "Customer support intelligence"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=85",
    outcome: "Employees answer questions in seconds, not hours.",
  },
  {
    id: "ai-strategy",
    icon: Lightbulb,
    title: "AI Strategy & Consulting",
    tagline: "A Clear Plan — Before You Spend a Rupee on AI",
    desc: "Most organisations rush into AI with a tool before they have a problem. The result is a costly pilot that doesn't scale. We start differently: with a rigorous AI Readiness Assessment that examines your data, workflows, team capabilities, and risk tolerance. You walk away with a prioritised roadmap — not a vendor pitch, not vague recommendations.",
    benefits: [
      "AI Readiness Assessment across data, people, and process",
      "Use case scoring: ROI, feasibility, and time to value",
      "Build vs. buy decision framework for each initiative",
      "Phased implementation roadmap with clear milestones",
      "Executive-level presentation and board-ready materials",
    ],
    useCases: ["Pre-AI transformation planning", "AI vendor evaluation", "Board-level AI briefings", "Data strategy design"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=85",
    outcome: "A roadmap your leadership team can actually commit to.",
  },
  {
    id: "agentic-ai",
    icon: Bot,
    title: "Agentic AI",
    tagline: "AI That Doesn't Just Answer — It Acts",
    desc: "There's a category of business processes that are too complex for simple automation but too repetitive for your best people. Agentic AI fills that gap. Our agents plan, reason, call tools, and execute multi-step workflows end-to-end — with full audit trails and human escalation paths. Think of it as a highly reliable team member who never forgets a step.",
    benefits: [
      "Multi-step workflow execution with planning and reasoning",
      "Integrations with ERP, CRM, email, and internal systems",
      "Human-in-the-loop escalation for edge cases",
      "Self-healing: detects and recovers from failures",
      "Full audit trail for compliance and review",
    ],
    useCases: ["Document processing pipelines", "Procurement workflows", "Compliance reporting", "Customer request routing"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    outcome: "Complex workflows run reliably without manual intervention.",
  },
  {
    id: "slm",
    icon: Cpu,
    title: "Small Language Models (SLMs)",
    tagline: "Domain-Expert AI — Without the GPT-4 Price Tag",
    desc: "General-purpose LLMs are impressive but expensive to run at scale — and your data doesn't belong on someone else's server. Small Language Models are purpose-trained on your domain. They outperform large general models on your specific tasks, run on your own hardware, and cost a fraction of cloud LLM APIs. This is the architecture that serious enterprises are moving towards.",
    benefits: [
      "Fine-tuned on your domain vocabulary and data",
      "Runs fully on-prem — no data sent externally",
      "60–80% lower inference cost vs. cloud LLM APIs",
      "Optimised for your hardware: CPU, GPU, or edge",
      "Quantisation and compression for low-resource environments",
    ],
    useCases: ["Regulated industries (BFSI, healthcare, defence)", "Manufacturing & industrial AI", "IP-sensitive enterprises", "Air-gapped environments"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
    outcome: "AI that matches GPT-4 on your tasks at 10× lower cost.",
  },
  {
    id: "ai-chatbot",
    icon: MessageSquare,
    title: "AI Chatbot",
    tagline: "A Chatbot That Actually Solves Problems",
    desc: "Most enterprise chatbots are FAQ wrappers that frustrate users and get abandoned. Ours are different. We build chatbots grounded in your actual knowledge base, trained on real conversation patterns, and connected to your systems — so they resolve genuine queries, hand off intelligently to humans, and improve with every interaction.",
    benefits: [
      "Grounded in your live knowledge base — no hallucinations",
      "Handles multi-turn conversations with memory and context",
      "Connects to your CRM, ticketing, and backend systems",
      "Smart escalation: knows when to route to a human",
      "Multilingual support for global operations",
    ],
    useCases: ["Internal IT helpdesk", "HR self-service", "Customer support automation", "Sales qualifier bots"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
    outcome: "Most queries resolved instantly — without a human in the loop.",
  },
  {
    id: "custom-ai",
    icon: Wrench,
    title: "Custom AI Solutions",
    tagline: "When Off-the-Shelf Doesn't Fit",
    desc: "Some of the most valuable AI opportunities in your business don't match any standard product category. They live in the intersection of your unique data, your specific workflow, and your domain expertise. We design and build these bespoke systems — from computer vision for quality inspection to predictive models for operations — engineered for your exact environment.",
    benefits: [
      "Computer vision for quality control and inspection",
      "Predictive models for maintenance and operations",
      "Natural language interfaces for internal tools",
      "Custom ML pipelines for proprietary data",
      "Integration with legacy systems and industrial equipment",
    ],
    useCases: ["Manufacturing quality AI", "Operations analytics", "Anomaly and fraud detection", "Proprietary data applications"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85",
    outcome: "An AI system built for your exact problem — not someone else's.",
  },
];

export default function ServicesPage() {
  return (
    <div style={{ background: "#FAF8F5" }}>

      {/* Hero */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden pt-16">
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=90"
          alt="Enterprise AI team collaboration"
          fill className="object-cover object-center" priority sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,26,24,1) 0%, rgba(28,26,24,0.65) 40%, rgba(28,26,24,0.25) 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="section-label mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              What We Build
            </div>
            <h1
              className="font-serif font-bold mb-6 leading-tight"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#FAF8F5" }}
            >
              AI that solves<br />
              <span style={{ color: "#FCD34D" }}>real business problems.</span>
            </h1>
            <p style={{ color: "#D1C9C0" }} className="text-xl leading-relaxed max-w-2xl">
              Six services — each designed around a specific category of business problem. Every engagement is custom-built, not adapted from a template.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16" style={{ background: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl"
              style={{ background: "#FFFFFF", border: "1px solid #E8E2DB", boxShadow: "0 2px 20px rgba(28,26,24,0.06)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(to right, transparent, #D97706, transparent)" }} />

              <div className="grid lg:grid-cols-5 min-h-[320px]">
                {/* Image */}
                <div className="relative lg:col-span-2 min-h-[220px] lg:min-h-0 overflow-hidden">
                  <Image
                    src={service.image} alt={service.title} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width:1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(28,26,24,0.25) 0%, rgba(28,26,24,0.05) 100%)" }} />
                  <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(250,248,245,0.95) 100%)" }} />

                  <span className="absolute top-5 right-6 text-7xl font-black pointer-events-none select-none" style={{ color: "rgba(255,255,255,0.1)", lineHeight: 1 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Outcome pill at bottom */}
                  <div className="absolute bottom-5 left-5 right-5 hidden lg:block">
                    <div className="inline-flex items-start gap-2 px-3 py-2 rounded-xl text-xs font-medium"
                      style={{ background: "rgba(250,248,245,0.92)", backdropFilter: "blur(8px)", color: "#1C1A18", border: "1px solid rgba(217,119,6,0.15)" }}>
                      <span style={{ color: "#D97706" }} className="shrink-0 font-bold">→</span>
                      {service.outcome}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="amber-icon shrink-0">
                        <service.icon size={18} style={{ color: "#D97706" }} />
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#D97706" }}>{service.tagline}</p>
                    </div>
                    <h2 className="font-serif font-bold text-2xl sm:text-3xl leading-tight mb-4" style={{ color: "#1C1A18" }}>{service.title}</h2>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B6560" }}>{service.desc}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#9C9590" }}>What you get</p>
                      <ul className="space-y-2">
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-xs" style={{ color: "#6B6560" }}>
                            <Check size={12} className="mt-0.5 shrink-0" style={{ color: "#D97706" }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#9C9590" }}>Common applications</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.useCases.map((uc) => (
                          <span key={uc} className="px-2.5 py-1 text-[11px] rounded-lg" style={{ background: "#F2EDE6", border: "1px solid #E8E2DB", color: "#6B6560" }}>
                            {uc}
                          </span>
                        ))}
                      </div>
                      <a
                        href="https://calendly.com/contact-jnanikai" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
                        style={{ background: "#D97706", color: "#FFFFFF", boxShadow: "0 4px 16px rgba(217,119,6,0.25)" }}
                      >
                        <Calendar size={13} />
                        Discuss This Service
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#F2EDE6" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl px-10 py-16 sm:px-16 sm:py-20"
            style={{ background: "#1C1A18" }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: "radial-gradient(circle, #D97706 0%, transparent 70%)", transform: "translate(30%,-30%)" }} />
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-serif font-bold leading-tight mb-5" style={{ fontSize: "clamp(2rem,4vw,3.25rem)", color: "#FAF8F5" }}>
                Not sure which service fits?
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "#9C9590" }}>
                Book a 60-minute discovery call. We&apos;ll listen to your situation and tell you honestly what would — and wouldn&apos;t — work. No commitment required.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://calendly.com/contact-jnanikai" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
                  style={{ background: "#D97706", color: "#FFFFFF", boxShadow: "0 8px 32px rgba(217,119,6,0.3)" }}>
                  <Calendar size={16} /> Book Discovery Call
                </a>
                <Link href="/contact"
                  className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 group"
                  style={{ background: "rgba(250,248,245,0.08)", border: "1.5px solid rgba(250,248,245,0.18)", color: "#FAF8F5" }}>
                  Contact Us <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
