"use client";

import { motion } from "framer-motion";
import { Target, Eye, Cpu, Shield, Zap, Users, Globe2 } from "lucide-react";

const timeline = [
  { year: "2021", title: "Founded in Bengaluru", desc: "Jnanik AI was started with one conviction: enterprise AI should be private, practical, and built to last — not a flashy demo that never ships." },
  { year: "2022", title: "First Production Deployment", desc: "Shipped our first on-premise AI Knowledge Hub for a mid-market manufacturer. 50,000+ documents. Answers in seconds instead of hours." },
  { year: "2023", title: "Agentic Systems in Production", desc: "Launched our first multi-step agentic workflow for an enterprise client — handling document routing, classification, and approval without human intervention." },
  { year: "2024", title: "SLM-First Architecture", desc: "Moved fully to a Small Language Model-first approach. Domain-specific models outperforming GPT-4 on client tasks at 80% lower cost." },
  { year: "2025", title: "Expanding the Practice", desc: "Launched our AI Strategy practice. Now supporting enterprise AI programs across manufacturing, BFSI, and services." },
];

const values = [
  { icon: Shield,  title: "We build, not just advise",     desc: "We're engineers who deliver working systems — not consultants who hand over slide decks and leave." },
  { icon: Cpu,     title: "Outcomes over technology",      desc: "We measure every project by the business result, not the technical sophistication." },
  { icon: Target,  title: "Honest about what works",       desc: "We'll tell you when AI isn't the right answer. That's how we build trust." },
  { icon: Zap,     title: "Simple before complex",         desc: "The best AI system is often the simplest one that solves the problem reliably." },
  { icon: Users,   title: "Your team's success is ours",   desc: "We work alongside your people, transfer knowledge, and make sure the system lives on after we leave." },
  { icon: Globe2,  title: "Open and portable by default",  desc: "Open-source foundations, transparent architectures. No lock-in. You own everything we build." },
];

export default function AboutSection() {
  return (
    <div style={{ background: "#070F1D" }}>

      {/* Hero text */}
      <section className="py-20 sm:py-32" style={{ background: "#0A1629" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="section-label mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              About Jnanik AI
            </div>
            <h2
              className="font-serif font-bold mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem,5vw,4rem)", color: "#EEF2FF" }}
            >
              We build AI that earns<br />
              <span className="shimmer-text">your trust through results.</span>
            </h2>
            <p className="text-base sm:text-xl leading-relaxed mb-8" style={{ color: "#94A3B8" }}>
              Not a research lab. Not a software reseller. An engineering team that designs, builds, and delivers AI systems — and stays accountable for whether they actually work.
            </p>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 sm:mt-16">
            {[
              {
                icon: Eye, heading: "Our Vision",
                body: "A world where every organisation — from a regional manufacturer to a global enterprise — has access to AI systems that work reliably, protect their data, and create measurable business value.",
              },
              {
                icon: Target, heading: "Our Mission",
                body: "To close the gap between AI potential and enterprise reality. We build production-grade AI systems that solve specific, high-value problems — not generic tools or proof-of-concept demos.",
              },
              {
                icon: Cpu, heading: "Our Approach",
                body: "We start with constraints — your data, your team, your risk tolerance. We design the simplest system that solves the problem. We ship it, measure it, and improve it.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="card-base p-6 sm:p-8"
              >
                <div className="blue-icon mb-5"><item.icon size={20} style={{ color: "#60A5FA" }} /></div>
                <h3 className="font-serif font-bold text-xl mb-3" style={{ color: "#EEF2FF" }}>{item.heading}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28" style={{ background: "#070F1D" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <div className="section-label mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Our Journey
            </div>
            <h2
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(1.8rem,4vw,3rem)", color: "#EEF2FF" }}
            >
              Built steadily, shipped reliably.
            </h2>
          </motion.div>

          <div className="relative">
            <div
              className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, #3B82F6, rgba(59,130,246,0.1))" }}
            />
            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  {/* Mobile timeline dot */}
                  <div
                    className="sm:hidden shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 text-xs font-bold"
                    style={{ background: "#0A1629", border: "2px solid #3B82F6", color: "#60A5FA" }}
                  >
                    {item.year.slice(2)}
                  </div>

                  {/* Desktop: content half */}
                  <div className={`flex-1 sm:pr-12 ${i % 2 !== 0 ? "sm:pr-0 sm:pl-12" : ""}`}>
                    <div className="card-base p-5 sm:p-6">
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#3B82F6" }}>{item.year}</p>
                      <h3 className="font-bold text-base sm:text-lg mb-2" style={{ color: "#EEF2FF" }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{item.desc}</p>
                    </div>
                  </div>

                  {/* Desktop dot */}
                  <div
                    className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-10 text-xs font-bold"
                    style={{ background: "#0A1629", border: "2px solid #3B82F6", color: "#60A5FA" }}
                  >
                    {item.year.slice(2)}
                  </div>

                  {/* Desktop: empty half */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28" style={{ background: "#0A1629" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <div className="section-label mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              What We Stand For
            </div>
            <h2
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(1.8rem,4vw,3rem)", color: "#EEF2FF" }}
            >
              Principles that shape<br />every engagement.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-base p-5 sm:p-6 flex flex-col gap-4"
              >
                <div className="blue-icon shrink-0">
                  <v.icon size={18} style={{ color: "#60A5FA" }} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#EEF2FF" }}>{v.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#64748B" }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
