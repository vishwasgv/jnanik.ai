"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Lightbulb, Bot, Cpu, MessageSquare, Wrench } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: BookOpen,
    title: "AI Knowledge Hub",
    desc: "Employees stop wasting hours searching for answers that already exist. Instant, accurate access to everything your organisation knows.",
    href: "/services#knowledge-hub",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=85",
  },
  {
    icon: Lightbulb,
    title: "AI Strategy",
    desc: "Cut through AI hype with a clear, prioritised roadmap built around your real constraints — data, budget, team, and risk.",
    href: "/services#ai-strategy",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=85",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    desc: "AI agents that plan, reason, and execute complex multi-step workflows autonomously — so your teams focus on work that matters.",
    href: "/services#agentic-ai",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
  },
  {
    icon: Cpu,
    title: "Small Language Models",
    desc: "Domain-specific models that outperform general LLMs on your tasks at a fraction of the cost — fully on-prem if required.",
    href: "/services#slm",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=85",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    desc: "Enterprise chatbots that resolve real queries, escalate intelligently, and learn from your data — not generic FAQ bots.",
    href: "/services#ai-chatbot",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
  },
  {
    icon: Wrench,
    title: "Custom AI Solutions",
    desc: "Your workflow doesn't fit any off-the-shelf product. We build purpose-built AI around your exact process, data, and constraints.",
    href: "/services#custom-ai",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=85",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-32" style={{ background: "#FAF8F5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="section-label mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              What We Build
            </div>
            <h2
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(2rem,4vw,3.25rem)", color: "#1C1A18" }}
            >
              Six ways we make AI<br />work for your business.
            </h2>
            <p className="text-lg mt-4 max-w-xl" style={{ color: "#6B6560" }}>
              Every solution is built around your actual data, processes, and constraints — not adapted from a generic template.
            </p>
          </div>
          <Link href="/services" className="flex items-center gap-1.5 text-sm font-semibold shrink-0 group amber-link">
            View all services
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ minHeight: "300px" }}
            >
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(28,26,24,0.97) 0%, rgba(28,26,24,0.55) 50%, rgba(28,26,24,0.12) 100%)" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(217,119,6,0.08)" }}
              />

              <div className="absolute top-5 right-5">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-lg"
                  style={{ background: "rgba(217,119,6,0.2)", border: "1px solid rgba(217,119,6,0.35)", color: "#FCD34D" }}
                >
                  0{i + 1}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="inline-flex items-center justify-center rounded-xl mb-3"
                  style={{ width: "40px", height: "40px", background: "rgba(217,119,6,0.15)", border: "1px solid rgba(217,119,6,0.3)" }}
                >
                  <svc.icon size={18} style={{ color: "#FCD34D" }} />
                </div>
                <h3 className="font-extrabold text-lg mb-2 leading-snug" style={{ color: "#FAF8F5" }}>{svc.title}</h3>
                <p className="text-xs leading-relaxed mb-3 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500" style={{ color: "#D1C9C0" }}>
                  {svc.desc}
                </p>
                <Link href={svc.href} className="text-xs font-semibold inline-flex items-center gap-1" style={{ color: "#FCD34D" }}>
                  Learn more <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
