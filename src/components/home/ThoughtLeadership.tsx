"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    category: "AI Knowledge Systems",
    title: "Why Most Enterprise Knowledge Hubs Fail (And How to Build One That Doesn't)",
    excerpt: "The problem isn't the retrieval pipeline — it's the data preparation, the chunking strategy, and the evaluation loop that most teams skip.",
    date: "May 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "Small Language Models",
    title: "We Replaced GPT-4 With a 7B SLM. Here's What Happened to Cost and Quality.",
    excerpt: "A candid account of fine-tuning a small model on domain-specific data — the gains, the surprises, and the hard lessons about evaluation.",
    date: "Apr 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "Agentic AI",
    title: "When to Use Agents — and When Not To",
    excerpt: "Agents are powerful but overhyped. After deploying several in production, we've developed a framework for knowing exactly when an agent is the right tool.",
    date: "Mar 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=85",
  },
];

export default function ThoughtLeadership() {
  return (
    <section className="py-20 sm:py-32" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t mb-14 sm:mb-20" style={{ borderColor: "rgba(255,255,255,0.07)" }} />

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
              From the Team
            </div>
            <h2
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(1.8rem,4vw,3.25rem)", color: "var(--text-1)" }}
            >
              What we&apos;ve learned<br />shipping real AI systems.
            </h2>
          </div>
          <button className="blue-link shrink-0">
            All articles <ArrowRight size={13} />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -4 }}
              className="card-base card-glow overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="relative overflow-hidden shrink-0" style={{ height: "200px" }}>
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width:640px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.65) 100%)" }}
                />
                <span
                  className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                  style={{ background: "#3B82F6", color: "#fff" }}
                >
                  {a.category}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">
                <div className="flex-1">
                  <h3
                    className="font-bold text-sm sm:text-base leading-snug mb-2.5"
                    style={{ color: "var(--text-1)", fontFamily: "var(--font-playfair)" }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-3)" }}>{a.excerpt}</p>
                </div>
                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <span className="text-xs" style={{ color: "var(--text-3)" }}>{a.readTime} · {a.date}</span>
                  <button className="blue-link text-xs">
                    Read more <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
