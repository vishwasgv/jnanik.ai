"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Lightbulb, Bot, Cpu, MessageSquare, Wrench } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: BookOpen,
    title: "AI Knowledge Hub",
    desc: "Employees stop wasting hours searching for answers that already exist. Instant, accurate access to everything your organisation knows.",
    href: "#services",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
  },
  {
    icon: Lightbulb,
    title: "AI Strategy",
    desc: "Cut through AI hype with a clear, prioritised roadmap built around your real constraints — data, budget, team, and risk.",
    href: "#services",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=85",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    desc: "AI agents that plan, reason, and execute complex multi-step workflows autonomously — so your teams focus on work that matters.",
    href: "#services",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=85",
  },
  {
    icon: Cpu,
    title: "Small Language Models",
    desc: "Domain-specific models that outperform general LLMs on your tasks at a fraction of the cost — fully on-prem if required.",
    href: "#services",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=85",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    desc: "Enterprise chatbots that resolve real queries, escalate intelligently, and learn from your data — not generic FAQ bots.",
    href: "#services",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=85",
  },
  {
    icon: Wrench,
    title: "Custom AI Solutions",
    desc: "Your workflow doesn't fit any off-the-shelf product. We build purpose-built AI around your exact process, data, and constraints.",
    href: "#services",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 sm:py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div>
            <div className="section-label mb-5 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              What We Build
            </div>
            <h2
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(1.8rem,4vw,3.25rem)", color: "var(--text-1)" }}
            >
              Six ways we make AI<br />work for your business.
            </h2>
            <p className="text-base sm:text-lg mt-4 max-w-xl" style={{ color: "var(--text-2)" }}>
              Every solution is built around your actual data, processes, and constraints — not adapted from a generic template.
            </p>
          </div>
          <a href="#services" className="flex items-center gap-1.5 text-sm font-semibold shrink-0 group blue-link">
            View all services
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="card-glow group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ minHeight: "300px" }}
            >
              {/* Image */}
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              />

              {/* Base gradient */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(15,23,42,0.98) 0%, rgba(15,23,42,0.65) 50%, rgba(15,23,42,0.2) 100%)" }}
              />

              {/* Blue hover tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(59,130,246,0.08)" }}
              />

              {/* Number badge */}
              <div className="absolute top-4 right-4">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-lg"
                  style={{ background: "rgba(59,130,246,0.2)", border: "1px solid rgba(59,130,246,0.35)", color: "#93C5FD" }}
                >
                  0{i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div
                  className="inline-flex items-center justify-center rounded-xl mb-3"
                  style={{ width: "40px", height: "40px", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)" }}
                >
                  <svc.icon size={18} style={{ color: "#93C5FD" }} />
                </div>
                <h3 className="font-extrabold text-base sm:text-lg mb-2 leading-snug" style={{ color: "var(--text-1)" }}>{svc.title}</h3>
                <p
                  className="text-xs leading-relaxed mb-3 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500"
                  style={{ color: "var(--text-2)" }}
                >
                  {svc.desc}
                </p>
                <a href={svc.href} className="text-xs font-semibold inline-flex items-center gap-1" style={{ color: "#60A5FA" }}>
                  Learn more <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
