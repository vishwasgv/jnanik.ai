"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Lightbulb, Bot, Cpu, MessageSquare, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ease, dur, vp, fadeUp, fadeUpBlur, fadeOnly, staggerGrid } from "@/lib/motionConfig";

const services = [
  {
    icon: BookOpen,
    title: "AI Knowledge Hub",
    desc: "Employees stop wasting hours searching for answers that already exist in your company. Instant, accurate access to everything your organisation knows — documents, SOPs, emails, wikis — all in one place.",
    href: "/services",
    image: "https://images.unsplash.com/photo-7PMXRBk23BI?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    icon: Lightbulb,
    title: "AI Strategy",
    desc: "A clear, prioritised roadmap built around your real constraints — data, budget, and risk.",
    href: "/services",
    image: "https://images.unsplash.com/photo-rgKX4o2xSqI?auto=format&fit=crop&w=800&q=85",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    desc: "AI agents that plan, reason, and execute complex multi-step workflows autonomously.",
    href: "/services",
    image: "https://images.unsplash.com/photo-EyqUxJuOb1Q?auto=format&fit=crop&w=800&q=85",
  },
  {
    icon: Cpu,
    title: "Small Language Models",
    desc: "Domain-specific models that outperform general LLMs on your tasks at a fraction of the cost.",
    href: "/services",
    image: "https://images.unsplash.com/photo-XLQuTdktpa8?auto=format&fit=crop&w=800&q=85",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    desc: "Enterprise chatbots that resolve real queries and learn from your data — not generic FAQ bots.",
    href: "/services",
    image: "https://images.unsplash.com/photo-CaRba5ZXJTQ?auto=format&fit=crop&w=800&q=85",
  },
  {
    icon: Wrench,
    title: "Custom AI Solutions",
    desc: "Your workflow doesn't fit any off-the-shelf product. We build purpose-built AI around your exact process and data.",
    href: "/services",
    image: "https://images.unsplash.com/photo-FjtWczJWRlc?auto=format&fit=crop&w=800&q=85",
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
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
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
              Every solution is built around your actual data and constraints — not adapted from a generic template.
            </motion.p>
          </div>
          <motion.div variants={fadeOnly}>
            <Link href="/services" className="flex items-center gap-1.5 text-sm font-semibold shrink-0 group blue-link">
              View all services
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid: featured (2-col×2-row) + 4 smaller + 1 wide */}
        <motion.div
          variants={staggerGrid(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          style={{ gridAutoRows: "260px" }}
        >
          {/* Featured card — cinematic entrance (slightly longer) */}
          <motion.div
            variants={fadeUp}
            className="card-glow group relative overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2"
            style={{ minHeight: "260px" }}
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 66vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(4,10,22,0.98) 0%, rgba(4,10,22,0.7) 45%, rgba(4,10,22,0.2) 100%)" }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "rgba(59,130,246,0.06)" }}
            />

            <div className="absolute top-5 right-5">
              <span
                className="text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-widest"
                style={{ background: "rgba(59,130,246,0.22)", border: "1px solid rgba(59,130,246,0.4)", color: "#93C5FD" }}
              >
                Most Requested
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div
                className="inline-flex items-center justify-center rounded-xl mb-4"
                style={{ width: "46px", height: "46px", background: "rgba(59,130,246,0.2)", border: "1px solid rgba(59,130,246,0.38)" }}
              >
                <featured.icon size={20} style={{ color: "#93C5FD" }} />
              </div>
              <h3 className="font-extrabold text-2xl sm:text-3xl mb-3 leading-snug" style={{ color: "#FFFFFF" }}>{featured.title}</h3>
              <p className="text-sm sm:text-base leading-relaxed mb-4 max-w-lg" style={{ color: "#CBD5E1" }}>
                {featured.desc}
              </p>
              <Link
                href={featured.href}
                className="inline-flex items-center gap-2 text-sm font-semibold group/link px-4 py-2 rounded-lg"
                style={{ background: "rgba(59,130,246,0.18)", border: "1px solid rgba(59,130,246,0.35)", color: "#60A5FA" }}
              >
                Learn more
                <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Supporting cards */}
          {rest.map((svc, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="card-glow group relative overflow-hidden rounded-2xl"
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
                style={{ background: "linear-gradient(to top, rgba(4,10,22,0.97) 0%, rgba(4,10,22,0.65) 55%, rgba(4,10,22,0.15) 100%)" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(59,130,246,0.06)" }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div
                  className="inline-flex items-center justify-center rounded-xl mb-3"
                  style={{ width: "38px", height: "38px", background: "rgba(59,130,246,0.18)", border: "1px solid rgba(59,130,246,0.32)" }}
                >
                  <svc.icon size={16} style={{ color: "#93C5FD" }} />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base mb-2 leading-snug" style={{ color: "#FFFFFF" }}>{svc.title}</h3>
                <p
                  className="text-xs leading-relaxed mb-3 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500"
                  style={{ color: "#CBD5E1" }}
                >
                  {svc.desc}
                </p>
                <Link href={svc.href} className="text-xs font-semibold inline-flex items-center gap-1.5 group/link" style={{ color: "#60A5FA" }}>
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
