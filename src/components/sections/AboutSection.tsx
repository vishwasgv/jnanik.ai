"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Cpu, Shield, Zap, Users, Globe2, Server, Factory, Clock, Code2, ArrowUpRight } from "lucide-react";

const timeline = [
  { year: "2021", title: "Founded in Bengaluru", desc: "Started with one conviction: enterprise AI should be private, practical, and built to last — not a flashy demo that never ships." },
  { year: "2022", title: "First Production Deployment", desc: "Shipped our first on-premise AI Knowledge Hub for a mid-market manufacturer. 50,000+ documents. Answers in seconds instead of hours." },
  { year: "2023", title: "Agentic Systems Live", desc: "Launched our first multi-step agentic workflow — handling document routing, classification, and approval without human intervention." },
  { year: "2024", title: "SLM-First Architecture", desc: "Moved fully to Small Language Models. Domain-specific models outperforming general LLMs at 80% lower cost." },
  { year: "2025", title: "Expanding Across Industries", desc: "Now supporting enterprise AI programs across Manufacturing, Automotive, and FMCG — the industries where precision is non-negotiable." },
];

const values = [
  { icon: Shield,  title: "We build, not just advise",    desc: "Engineers who deliver working systems — not consultants who hand over slide decks and leave." },
  { icon: Cpu,     title: "Outcomes over technology",     desc: "Every project is measured by the business result, not the technical sophistication." },
  { icon: Target,  title: "Honest about what works",      desc: "We'll tell you when AI isn't the right answer. That's how we build trust." },
  { icon: Zap,     title: "Simple before complex",        desc: "The best AI system is often the simplest one that solves the problem reliably." },
  { icon: Users,   title: "Your team's success is ours",  desc: "We work alongside your people, transfer knowledge, and make sure the system lives on after we leave." },
  { icon: Globe2,  title: "Open and portable by default", desc: "Open-source foundations. No vendor lock-in. You own everything we build." },
];

const founders = [
  {
    name: "Pramod Kumar P",
    initials: "PK",
    role: "Founder",
    flag: "Business & Strategy",
    quote: "Most enterprise AI pilots fail before a single line of agent code is written. The root cause is almost always the same — the data was never ready to be reasoned over.",
    bio: "I spent 18 years at Bosch designing IoT and telematics architectures for automotive platforms — not from a conference room, but deep in the software stack. Then 3 years at AWS, partnering with enterprises on cloud and GenAI strategy. Both gave me the same view: the gap between a working demo and a system that actually runs in production is an engineering discipline problem, not a model intelligence problem. That diagnosis is what Jnanik AI is built around. I founded Jnanik in 2025 to stop watching enterprises get stuck in Pilot Purgatory.",
    brings: [
      { label: "Enterprise domain fluency", detail: "Two decades across Bosch and AWS means I understand how enterprise procurement, stakeholder buy-in, and technical decision-making actually work — not from a deck, from the room." },
      { label: "Industrial operations depth", detail: "I've reviewed factory SOPs, debugged IoT pipelines in production, and designed telematics architectures under automotive-grade constraints. I understand the environment our AI must operate inside." },
      { label: "Phase 0 data readiness methodology", detail: "I developed our pre-build audit framework after watching the same failure pattern repeat across multiple customer environments. We audit and remediate the data before we write a single line of agent code. Weeks added upfront — quarters saved downstream." },
      { label: "Commercial architecture", detail: "Pilot design, pricing, anchor customer strategy, and go-to-market execution — I own the path from first conversation to a signed engagement and a system in production." },
    ],
    background: ["Ex-Amazon Web Services · 3 yrs", "Ex-Bosch · 18 yrs", "AWS Certified Solutions Architect – Professional"],
    gradient: "linear-gradient(145deg, #0C1E40 0%, #1A3A6B 60%, #1D4ED8 100%)",
    accentColor: "#93C5FD",
    photo: "/images/founder-pramod.jpg",
    linkedin: "https://www.linkedin.com/in/pramodkumarp",
  },
  {
    name: "Puneeth Reddy",
    initials: "PR",
    role: "AI Advisor — Technical Architecture",
    flag: "Technology & Execution",
    quote: "A great AI system is defined by what it does when the edge case arrives at 2 AM — not by how smoothly the demo ran in the boardroom.",
    bio: "Fifteen years building production software systems at Bosch — 8 years as a Senior Software Engineer in Bengaluru, then 7 as a Software Architect in Stuttgart — taught me what survives contact with the real world. My Master's in AI from Georgia Tech gave me the formal foundation to understand why systems work, not just how to configure them. I joined Jnanik as AI Advisor because industrial AI is one of the few domains where the engineering rigour I've spent my career developing genuinely matters. This isn't another chatbot project. It's intelligence embedded into the operational fabric of enterprises that can't afford to get it wrong.",
    brings: [
      { label: "Full-stack AI architecture", detail: "I design from the data ingestion layer up — retrieval pipelines, embedding strategies, agent orchestration, model serving, and the API surface that makes all of it usable inside an enterprise's existing systems." },
      { label: "Production-grade defaults", detail: "15 years at Bosch means reliability, graceful degradation, and zero tolerance for systems that pass QA but fail in field conditions. AI systems that work in demos but break at scale don't ship under my oversight." },
      { label: "Georgia Tech AI depth", detail: "Formal ML and AI systems training — on top of architectural experience most AI graduates haven't had time to develop yet. The combination lets me make architectural decisions that hold up both theoretically and in production." },
      { label: "Scalability and sovereignty design", detail: "I take Jnanik's architectures from startup-grade to enterprise-ready: multi-tenant deployments, on-prem constraints, data residency requirements, compliance audit trails, and the performance envelopes enterprises actually operate within." },
    ],
    background: ["Software Architect — Bosch Stuttgart · 7 yrs", "M.S. AI — Georgia Institute of Technology", "15+ Years Production Systems Engineering"],
    gradient: "linear-gradient(145deg, #071E2D 0%, #0F3A52 60%, #0369A1 100%)",
    accentColor: "#7DD3FC",
    photo: "/images/founder-puneeth.jpg",
    linkedin: "https://www.linkedin.com/in/puneeth-reddy",
  },
];

export default function AboutSection() {
  return (
    <div style={{ background: "var(--bg)" }}>

      {/* ── Story section ─────────────────────────────── */}
      <section className="py-20 sm:py-32 overflow-hidden" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left: The story */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-label mb-6 sm:mb-8 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                About Jnanik AI
              </div>
              <h2
                className="font-serif font-bold mb-6 leading-tight"
                style={{ fontSize: "clamp(2rem,5vw,3.75rem)", color: "#0C1A2E" }}
              >
                Built from the<br />
                <span className="shimmer-text">shop floor up.</span>
              </h2>

              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#3D5472" }}>
                <p>
                  <span className="font-semibold" style={{ color: "#0C1A2E" }}>Jnanik</span> is rooted in <em>Jnana</em> — the Sanskrit principle of knowledge through direct experience. Not theory. Not abstraction. Knowledge earned by understanding the problem from within.
                </p>
                <p>
                  We founded Jnanik AI because we watched a pattern repeat itself: intelligent teams, complex operations, and AI systems that simply couldn&apos;t understand the context in which they were being asked to work.
                </p>
                <p>
                  A factory floor is not the internet. A quality exception in an automotive line is not a customer service ticket. The knowledge that runs a manufacturing plant — the hard-won expertise of engineers who&apos;ve spent years tuning, calibrating, and solving — doesn&apos;t live in a PDF. It lives in people.
                </p>
                <p>
                  We started Jnanik AI to build AI that understands where it&apos;s being deployed. Not generic tools configured for a use case, but systems designed from the ground up around the realities of Manufacturing, FMCG, and Automotive operations — where precision is non-negotiable and the cost of failure is real.
                </p>
                <p className="font-medium" style={{ color: "#334155" }}>
                  Jnanik AI is the knowledge that industry needs. Built by the engineers industry deserves.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 mt-10">
                {[
                  { val: "2021", lbl: "Founded" },
                  { val: "3+", lbl: "Industries" },
                  { val: "2", lbl: "Deployment Modes" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl font-extrabold" style={{ color: "#2563EB", fontFamily: "var(--font-playfair)" }}>{s.val}</span>
                    <span className="text-xs font-semibold mt-0.5" style={{ color: "#94A3B8" }}>{s.lbl}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: credibility cards */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Server,
                  label: "Ex-AWS",
                  title: "Cloud Architecture",
                  body: "Distributed systems at hyperscaler scale — reliability and security built in from day one.",
                },
                {
                  icon: Factory,
                  label: "Ex-Bosch",
                  title: "Industrial Engineering",
                  body: "Production software for environments where failure is measured in downtime, not bugs.",
                },
                {
                  icon: Clock,
                  label: "5+ Years",
                  title: "AI in Production",
                  body: "Our systems have been running in production longer than most competitors have existed.",
                },
                {
                  icon: Code2,
                  label: "Open-Source First",
                  title: "No Vendor Lock-in",
                  body: "Everything we build runs on open foundations. You own your models, your data, your infrastructure.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="card-base p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="blue-icon" style={{ width: "36px", height: "36px", borderRadius: "10px" }}>
                      <card.icon size={16} style={{ color: "#2563EB" }} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#2563EB" }}>{card.label}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0C1A2E" }}>{card.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#5C7A96" }}>{card.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Vision / Mission / Approach */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 sm:mt-20">
            {[
              {
                icon: Eye, heading: "Our Vision",
                body: "Every organisation — from a regional manufacturer to a global enterprise — has access to AI that works reliably, protects their data, and creates measurable business value.",
              },
              {
                icon: Target, heading: "Our Mission",
                body: "Close the gap between AI potential and enterprise reality. We build production-grade systems that solve specific, high-value problems — not generic tools or proof-of-concept demos.",
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
                <div className="blue-icon mb-5"><item.icon size={20} style={{ color: "#2563EB" }} /></div>
                <h3 className="font-serif font-bold text-xl mb-3" style={{ color: "#0C1A2E" }}>{item.heading}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5C7A96" }}>{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founders ───────────────────────────────────────── */}
      <section className="py-20 sm:py-28" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <div className="section-label mb-5 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              The Founders
            </div>
            <h2
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(1.8rem,4vw,3rem)", color: "#0C1A2E" }}
            >
              In our own words.
            </h2>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {founders.map((founder, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className="card-base overflow-hidden"
              >
                {/* Dark gradient header — quote + identity */}
                <div
                  className="relative overflow-hidden"
                  style={{ background: founder.gradient, minHeight: "148px" }}
                >
                  {/* Grid texture */}
                  <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                  {/* Watermark initials */}
                  <div
                    className="absolute right-6 top-1/2 -translate-y-1/2 font-serif font-bold select-none pointer-events-none leading-none"
                    style={{ fontSize: "clamp(5rem,10vw,7.5rem)", color: "rgba(255,255,255,0.05)", letterSpacing: "-0.04em" }}
                  >
                    {founder.initials}
                  </div>
                  {/* Identity row + quote */}
                  <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
                    {/* Photo avatar */}
                    <div
                      className="shrink-0 w-20 h-20 rounded-2xl overflow-hidden relative"
                      style={{ border: "2px solid rgba(255,255,255,0.25)", boxShadow: "0 4px 20px rgba(0,0,0,0.35)" }}
                    >
                      <Image
                        src={founder.photo}
                        alt={founder.name}
                        fill
                        className="object-cover object-top"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      {/* Name + role flag */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                        <h3 className="font-serif font-bold text-xl" style={{ color: "#F0F5FB" }}>{founder.name}</h3>
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shrink-0"
                          style={{ background: "rgba(255,255,255,0.08)", border: `1px solid rgba(255,255,255,0.15)`, color: founder.accentColor }}
                        >
                          {founder.flag}
                        </span>
                      </div>
                      {/* Pull quote */}
                      <p className="text-sm italic leading-relaxed" style={{ color: "rgba(240,245,251,0.78)" }}>
                        &ldquo;{founder.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body — two-column on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x" style={{ borderColor: "rgba(10,20,50,0.07)" }}>

                  {/* Left: bio + credentials */}
                  <div className="p-6 sm:p-8 flex flex-col gap-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] mb-2" style={{ color: "#1A56DB" }}>{founder.role}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#3D5472" }}>{founder.bio}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "#8DAABF" }}>Background</p>
                      <div className="flex flex-wrap gap-2">
                        {founder.background.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                            style={{ background: "rgba(26,86,219,0.06)", border: "1px solid rgba(26,86,219,0.13)", color: "#1A56DB" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold w-fit"
                      style={{ color: "#2563EB" }}
                    >
                      View LinkedIn profile <ArrowUpRight size={11} />
                    </a>
                  </div>

                  {/* Right: what I bring */}
                  <div className="p-6 sm:p-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-5" style={{ color: "#8DAABF" }}>What I bring</p>
                    <div className="space-y-5">
                      {founder.brings.map((item, bi) => (
                        <div key={bi} className="flex gap-3.5">
                          <div
                            className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ background: "rgba(26,86,219,0.07)", border: "1px solid rgba(26,86,219,0.16)" }}
                          >
                            <span className="text-[9px] font-extrabold" style={{ color: "#1A56DB" }}>{bi + 1}</span>
                          </div>
                          <div>
                            <p className="text-xs font-bold mb-1" style={{ color: "#0C1A2E" }}>{item.label}</p>
                            <p className="text-xs leading-relaxed" style={{ color: "#5C7A96" }}>{item.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────────── */}
      <section className="py-20 sm:py-28" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <div className="section-label mb-5 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Our Journey
            </div>
            <h2
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(1.8rem,4vw,3rem)", color: "#0C1A2E" }}
            >
              Built steadily, shipped reliably.
            </h2>
          </motion.div>

          <div className="relative">
            <div
              className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, #2563EB, rgba(37,99,235,0.08))" }}
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
                  <div className="sm:hidden shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 text-xs font-bold"
                    style={{ background: "#FFFFFF", border: "2px solid #2563EB", color: "#2563EB" }}>
                    {item.year.slice(2)}
                  </div>
                  <div className={`flex-1 sm:pr-12 ${i % 2 !== 0 ? "sm:pr-0 sm:pl-12" : ""}`}>
                    <div className="card-base p-5 sm:p-6">
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#2563EB" }}>{item.year}</p>
                      <h3 className="font-bold text-base sm:text-lg mb-2" style={{ color: "#0C1A2E" }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#5C7A96" }}>{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-10 text-xs font-bold"
                    style={{ background: "#FFFFFF", border: "2px solid #2563EB", color: "#2563EB" }}>
                    {item.year.slice(2)}
                  </div>
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <div className="section-label mb-5 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              What We Stand For
            </div>
            <h2
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(1.8rem,4vw,3rem)", color: "#0C1A2E" }}
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
                  <v.icon size={18} style={{ color: "#2563EB" }} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#0C1A2E" }}>{v.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#5C7A96" }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
