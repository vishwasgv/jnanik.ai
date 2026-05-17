"use client";

import { motion } from "framer-motion";
import { Zap, Users, BookOpen, Globe2, Shield, Coffee, MapPin, ArrowRight, ExternalLink, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const perks = [
  { icon: Zap,      title: "Work on Cutting-Edge AI",    desc: "Solve real industrial AI problems — agentic systems, RAG pipelines, SLM optimization, and more." },
  { icon: Globe2,   title: "Remote-Friendly Culture",    desc: "Work from wherever you do your best thinking. We focus on outcomes, not office hours." },
  { icon: BookOpen, title: "Continuous Learning",        desc: "Conference budgets, research time, and access to the latest AI papers and tools." },
  { icon: Users,    title: "Small, High-Impact Team",    desc: "Every person here moves the needle. No bureaucracy — just fast, purposeful work." },
  { icon: Shield,   title: "Mission-Driven Work",        desc: "Build AI that matters — systems that drive real industrial transformation, not recommendation algorithms." },
  { icon: Coffee,   title: "Thoughtful Engineering Culture", desc: "Code reviews, design docs, and a culture that values craft and correctness over shipping fast." },
];

const openings = [
  {
    title: "AI Engineer", type: "Full-Time", location: "Bengaluru / Remote", team: "Engineering",
    desc: "Build production-grade AI systems — RAG pipelines, agentic frameworks, model fine-tuning, and inference optimization for enterprise deployments.",
    requirements: ["3+ years in ML/AI engineering", "Hands-on with LLMs/SLMs (HuggingFace, vLLM, Ollama)", "Experience with vector databases (Qdrant, Weaviate, pgvector)", "Python proficiency with async patterns", "Bonus: Industrial AI or manufacturing domain experience"],
  },
  {
    title: "Full Stack Developer", type: "Full-Time", location: "Bengaluru / Remote", team: "Engineering",
    desc: "Design and build the interfaces and APIs that make our AI systems accessible — dashboards, admin panels, chat interfaces, and integration layers.",
    requirements: ["3+ years in full-stack development", "React/Next.js frontend expertise", "Node.js or FastAPI backend experience", "REST/GraphQL API design", "Bonus: Experience building AI product UIs"],
  },
  {
    title: "AI Research Intern", type: "Internship (6 months)", location: "Bengaluru / Remote", team: "Research",
    desc: "Work alongside senior AI engineers on challenging research problems — SLM evaluation, retrieval benchmarking, and novel agentic architectures for industrial settings.",
    requirements: ["Currently pursuing CS/AI/ML degree (final year preferred)", "Published paper or strong GitHub portfolio", "Familiarity with transformer architectures", "Python and PyTorch fundamentals", "Bonus: Curiosity about industrial or manufacturing AI"],
  },
  {
    title: "Solutions Engineer", type: "Full-Time", location: "Bengaluru", team: "Customer Success",
    desc: "Bridge the gap between our AI technology and enterprise customers. Scope implementations, lead technical pilots, and ensure successful deployments.",
    requirements: ["3+ years in solutions engineering or technical consulting", "Understanding of enterprise software architectures", "Experience with AI/ML concepts and use cases", "Strong communication and presentation skills", "Bonus: Manufacturing or industrial domain experience"],
  },
];

const cultureValues = [
  "We write well-designed systems, not just working code",
  "We challenge assumptions — including our own",
  "We share knowledge generously across the team",
  "We move fast but don't cut corners on reliability",
  "We treat enterprise customers as long-term partners",
];

export default function CareersPage() {
  return (
    <div style={{ background: "#FAF8F5" }}>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden pt-16">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1800&q=90"
          alt="Jnanik AI team at work"
          fill className="object-cover object-center" priority sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,26,24,1) 0%, rgba(28,26,24,0.6) 40%, rgba(28,26,24,0.2) 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="section-label mb-6"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Careers at Jnanik AI</div>
            <h1 className="font-serif font-bold mb-6 leading-tight" style={{ fontSize: "clamp(2.8rem,6vw,5rem)", color: "#FAF8F5" }}>
              Build AI That Shapes{" "}
              <span style={{ color: "#FCD34D" }}>Industrial Futures</span>
            </h1>
            <p style={{ color: "#D1C9C0" }} className="text-xl leading-relaxed mb-10 max-w-2xl">
              Join a small, exceptional team building enterprise AI systems that matter. We&apos;re looking for engineers and researchers who care about correctness, craft, and real-world impact.
            </p>
            <a href="mailto:careers@jnanikai.com"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: "#D97706", color: "#FFFFFF", boxShadow: "0 8px 32px rgba(217,119,6,0.35)" }}>
              <Briefcase size={16} />View Open Positions
            </a>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24" style={{ background: "#F2EDE6" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mb-20" style={{ borderColor: "#E8E2DB" }} />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mb-16">
            <div className="section-label mb-6"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Why Join Us</div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4" style={{ color: "#1C1A18" }}>An AI-first workplace built for deep work.</h2>
            <p className="text-lg leading-relaxed" style={{ color: "#6B6560" }}>We&apos;re not a venture-funded startup chasing hockey sticks. We&apos;re a purposeful engineering team building AI systems that enterprises rely on.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {perks.map((perk, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-base p-6 flex flex-col gap-4">
                <div className="amber-icon shrink-0"><perk.icon size={18} style={{ color: "#D97706" }} /></div>
                <h3 className="font-bold text-base" style={{ color: "#1C1A18" }}>{perk.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6560" }}>{perk.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Culture split */}
          <div className="grid lg:grid-cols-5 gap-6 items-stretch">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="lg:col-span-2 relative rounded-2xl overflow-hidden" style={{ minHeight: "320px" }}>
              <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80" alt="Engineering team at work" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,26,24,0.85) 0%, rgba(28,26,24,0.15) 70%)" }} />
              <div className="absolute bottom-6 left-6">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "#FCD34D" }}>Our Culture</p>
                <p className="font-bold text-lg" style={{ color: "#FAF8F5" }}>Engineering excellence,<br />every day.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="lg:col-span-3 p-8 sm:p-10 rounded-2xl flex flex-col justify-center"
              style={{ background: "rgba(217,119,6,0.07)", border: "1px solid rgba(217,119,6,0.18)" }}>
              <h3 className="font-serif font-bold text-xl mb-8" style={{ color: "#1C1A18" }}>Our Engineering Values</h3>
              <ul className="space-y-4">
                {cultureValues.map((v, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm" style={{ color: "#6B6560" }}>
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                      style={{ background: "rgba(217,119,6,0.15)", color: "#D97706" }}>
                      {i + 1}
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24" style={{ background: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mb-16" style={{ borderColor: "#E8E2DB" }} />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <div className="section-label mb-6"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Open Positions</div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl" style={{ color: "#1C1A18" }}>Current Openings</h2>
          </motion.div>

          <div className="space-y-4">
            {openings.map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl"
                style={{ background: "#FFFFFF", border: "1px solid #E8E2DB", boxShadow: "0 2px 16px rgba(28,26,24,0.05)" }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(to right, transparent, #D97706, transparent)" }} />
                <div className="grid lg:grid-cols-3">
                  <div className="lg:col-span-2 p-7 sm:p-8">
                    <h3 className="font-serif font-bold text-xl mb-2" style={{ color: "#1C1A18" }}>{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full" style={{ background: "#F2EDE6", border: "1px solid #E8E2DB", color: "#6B6560" }}>
                        <Briefcase size={10} />{job.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full" style={{ background: "#F2EDE6", border: "1px solid #E8E2DB", color: "#6B6560" }}>
                        <MapPin size={10} />{job.location}
                      </span>
                      <span className="text-xs font-medium px-2" style={{ color: "#D97706" }}>{job.team}</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B6560" }}>{job.desc}</p>
                    <a href="mailto:careers@jnanikai.com"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
                      style={{ background: "#D97706", color: "#FFFFFF", boxShadow: "0 4px 16px rgba(217,119,6,0.2)" }}>
                      Apply Now <ArrowRight size={13} />
                    </a>
                  </div>
                  <div className="lg:col-span-1 p-7 sm:p-8 border-t lg:border-t-0 lg:border-l" style={{ borderColor: "#E8E2DB" }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "#9C9590" }}>Requirements</p>
                    <ul className="space-y-2.5">
                      {job.requirements.map((req, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "#6B6560" }}>
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "#D97706", opacity: 0.6 }} />{req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* General applications */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mt-6 rounded-2xl overflow-hidden" style={{ border: "1px solid #E8E2DB", boxShadow: "0 2px 16px rgba(28,26,24,0.05)" }}>
            <div className="grid lg:grid-cols-5">
              <div className="relative lg:col-span-2 min-h-[180px] hidden lg:block">
                <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" alt="AI technology" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(250,248,245,0.1) 0%, rgba(250,248,245,0.5) 100%)" }} />
              </div>
              <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-center" style={{ background: "#FFFFFF" }}>
                <h3 className="font-serif font-bold text-xl mb-2" style={{ color: "#1C1A18" }}>Don&apos;t see your role?</h3>
                <p className="mb-6 text-sm leading-relaxed" style={{ color: "#6B6560" }}>We&apos;re always open to exceptional AI engineers, researchers, and domain experts. Send us your work.</p>
                <a href="mailto:careers@jnanikai.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 self-start"
                  style={{ background: "#D97706", color: "#FFFFFF", boxShadow: "0 4px 16px rgba(217,119,6,0.2)" }}>
                  Send General Application <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#F2EDE6" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl px-10 py-14 sm:px-16" style={{ background: "#1C1A18" }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: "radial-gradient(circle, #D97706 0%, transparent 70%)", transform: "translate(30%,-30%)" }} />
            <div className="relative z-10">
              <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4 leading-tight" style={{ color: "#FAF8F5" }}>Questions about working here?</h2>
              <p className="text-lg mb-8" style={{ color: "#9C9590" }}>Reach out — we&apos;re happy to talk before you apply.</p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:careers@jnanikai.com"
                  className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
                  style={{ background: "#D97706", color: "#FFFFFF", boxShadow: "0 8px 32px rgba(217,119,6,0.3)" }}>
                  Email Our Team
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
