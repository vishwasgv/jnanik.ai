"use client";

import { motion } from "framer-motion";
import { Target, Eye, Cpu, Shield, Zap, Users, Globe2, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const timeline = [
  { year: "2021", title: "Founded in Bengaluru", desc: "Jnanik AI was started with one conviction: enterprise AI should be private, practical, and built to last — not a flashy demo that never ships." },
  { year: "2022", title: "First Production Deployment", desc: "Shipped our first on-premise AI Knowledge Hub for a mid-market manufacturer. 50,000+ documents. Answers in seconds instead of hours." },
  { year: "2023", title: "Agentic Systems in Production", desc: "Launched our first multi-step agentic workflow for an enterprise client — handling document routing, classification, and approval without human intervention." },
  { year: "2024", title: "SLM-First Architecture", desc: "Moved fully to a Small Language Model-first approach. Domain-specific models outperforming GPT-4 on client tasks at 80% lower cost." },
  { year: "2025", title: "Expanding the Practice", desc: "Launched our AI Strategy practice to help organisations plan before they build. Now supporting enterprise AI programs across manufacturing, BFSI, and services." },
];

const values = [
  { icon: Shield,  title: "We build, not just advise",      desc: "We're engineers who deliver working systems — not consultants who hand over slide decks and leave." },
  { icon: Cpu,     title: "Outcomes over technology",       desc: "We measure every project by the business result, not the technical sophistication." },
  { icon: Target,  title: "Honest about what works",        desc: "We'll tell you when AI isn't the right answer. That's how we build trust, and it's how we sleep at night." },
  { icon: Zap,     title: "Simple before complex",          desc: "The best AI system is often the simplest one that solves the problem reliably. We don't overcomplicate." },
  { icon: Users,   title: "Your team's success is ours",    desc: "We work alongside your people, transfer knowledge, and make sure the system lives on after we leave." },
  { icon: Globe2,  title: "Open and portable by default",   desc: "Open-source foundations, transparent architectures. No lock-in. You own everything we build." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#FAF8F5" }}>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden pt-16">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=90"
          alt="Modern office — Jnanik AI headquarters"
          fill className="object-cover object-center" priority sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,26,24,1) 0%, rgba(28,26,24,0.6) 40%, rgba(28,26,24,0.2) 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="section-label mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              About Jnanik AI
            </div>
            <h1
              className="font-serif font-bold mb-6 leading-tight"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#FAF8F5" }}
            >
              We build AI that earns<br />
              <span style={{ color: "#FCD34D" }}>your trust through results.</span>
            </h1>
            <p style={{ color: "#D1C9C0" }} className="text-xl leading-relaxed mb-10 max-w-2xl">
              Not a research lab. Not a software reseller. An engineering team that designs, builds, and delivers AI systems — and stays accountable for whether they actually work.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://calendly.com/contact-jnanikai" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-4 font-bold rounded-xl text-sm transition-all hover:-translate-y-0.5"
                style={{ background: "#D97706", color: "#FFFFFF", boxShadow: "0 8px 32px rgba(217,119,6,0.3)" }}>
                <Calendar size={16} />Talk to Our Team
              </a>
              <Link href="/services"
                className="flex items-center gap-2 px-7 py-4 font-bold rounded-xl text-sm transition-all hover:-translate-y-0.5 group"
                style={{ background: "rgba(250,248,245,0.1)", border: "1px solid rgba(250,248,245,0.2)", color: "#FAF8F5" }}>
                Our Services <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24" style={{ background: "#F2EDE6" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mb-20" style={{ borderColor: "#E8E2DB" }} />
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="card-base p-8 sm:p-10">
              <div className="amber-icon mb-6"><Eye size={20} style={{ color: "#D97706" }} /></div>
              <h2 className="font-serif font-bold text-2xl mb-4" style={{ color: "#1C1A18" }}>Our Vision</h2>
              <p className="text-base leading-relaxed" style={{ color: "#6B6560" }}>
                A world where every organisation — from a regional manufacturer to a global enterprise — has access to AI systems that work reliably, protect their data, and create measurable business value.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden hidden lg:block" style={{ minHeight: "280px" }}>
              <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Engineering team collaborating" fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,26,24,0.7) 0%, rgba(28,26,24,0.15) 60%)" }} />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="card-base p-8 sm:p-10">
              <div className="amber-icon mb-6"><Target size={20} style={{ color: "#D97706" }} /></div>
              <h2 className="font-serif font-bold text-2xl mb-4" style={{ color: "#1C1A18" }}>Our Mission</h2>
              <p className="text-base leading-relaxed" style={{ color: "#6B6560" }}>
                To be the most trusted AI implementation partner for enterprises that can&apos;t afford to fail — delivering systems that are architecturally sound, secure, and built to operate reliably at scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mb-20" style={{ borderColor: "#E8E2DB" }} />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <div className="section-label mb-6"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />How We Work</div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4" style={{ color: "#1C1A18" }}>
              We treat AI the way good engineers treat complex systems.
            </h2>
            <p className="text-lg max-w-2xl" style={{ color: "#6B6560" }}>
              With rigour, pragmatism, and an uncompromising focus on what actually works in production — not what looks impressive in a demo.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Understand before building", desc: "We spend the first weeks learning your business, your data, your workflows, and your constraints. AI solutions fail when they're designed in ignorance of the environment they'll operate in." },
              { num: "02", title: "Start small, prove value fast", desc: "We identify the highest-value, most feasible use case and ship a working system within weeks — not a 6-month roadmap. Proof first, scale later." },
              { num: "03", title: "Build for production, not demos", desc: "Every system we deliver is tested, monitored, documented, and built to run reliably. We're accountable for what we build — and we measure success by your business outcome." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-base p-8">
                <p className="font-serif font-bold text-4xl mb-5" style={{ color: "#E8E2DB" }}>{item.num}</p>
                <h3 className="font-serif font-bold text-lg mb-3" style={{ color: "#1C1A18" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6560" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ background: "#F2EDE6" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mb-20" style={{ borderColor: "#E8E2DB" }} />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <div className="section-label mb-6"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Our Story</div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl" style={{ color: "#1C1A18" }}>Four years. Real systems. Real results.</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px" style={{ background: "#E8E2DB" }} />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 pl-4">
                  <div className="relative z-10 shrink-0">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "#D97706", color: "#FFFFFF" }}>
                      {item.year.slice(2)}
                    </div>
                  </div>
                  <div className="pt-1 pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold" style={{ color: "#D97706" }}>{item.year}</span>
                      <h3 className="font-semibold text-base" style={{ color: "#1C1A18" }}>{item.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B6560" }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ background: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mb-20" style={{ borderColor: "#E8E2DB" }} />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <div className="section-label mb-6"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />What We Believe</div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl" style={{ color: "#1C1A18" }}>The principles behind every project.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-base p-6 flex flex-col gap-4">
                <div className="amber-icon shrink-0"><value.icon size={18} style={{ color: "#D97706" }} /></div>
                <h3 className="font-semibold text-base" style={{ color: "#1C1A18" }}>{value.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6560" }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24" style={{ background: "#F2EDE6" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mb-20" style={{ borderColor: "#E8E2DB" }} />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <div className="section-label mb-6"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Who We Are</div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl" style={{ color: "#1C1A18" }}>Built by engineers who&apos;ve shipped at scale.</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden" style={{ border: "1px solid #E8E2DB", boxShadow: "0 2px 20px rgba(28,26,24,0.06)" }}>
            <div className="lg:col-span-3 p-8 sm:p-10" style={{ background: "#FFFFFF" }}>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold shrink-0" style={{ background: "#D97706" }}>JA</div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-1" style={{ color: "#1C1A18" }}>Founding Team</h3>
                  <p className="font-medium text-sm mb-1" style={{ color: "#D97706" }}>Engineering &amp; AI Architecture</p>
                  <p className="text-xs mb-4" style={{ color: "#9C9590" }}>Ex-AWS Cloud Architecture · Ex-Bosch Industrial Engineering</p>
                  <p className="leading-relaxed text-sm" style={{ color: "#6B6560" }}>
                    We came from cloud infrastructure at AWS and precision engineering at Bosch. That combination — rigorous systems thinking, industrial-scale constraints, and modern AI — is what makes Jnanik AI different. We know what it takes to ship AI that performs in the real world, not just in a controlled environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 relative min-h-[240px]">
              <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80" alt="Team at work" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(250,248,245,0.25) 0%, transparent 60%)" }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#FAF8F5" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl px-10 py-14 sm:px-16" style={{ background: "#1C1A18" }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: "radial-gradient(circle, #D97706 0%, transparent 70%)", transform: "translate(30%,-30%)" }} />
            <div className="relative z-10">
              <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4 leading-tight" style={{ color: "#FAF8F5" }}>Ready to work together?</h2>
              <p className="text-lg mb-8" style={{ color: "#9C9590" }}>Let&apos;s talk about your AI challenge — and whether we&apos;re the right team to solve it.</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://calendly.com/contact-jnanikai" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
                  style={{ background: "#D97706", color: "#FFFFFF", boxShadow: "0 8px 32px rgba(217,119,6,0.3)" }}>
                  <Calendar size={16} />Schedule a Call
                </a>
                <Link href="/contact"
                  className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 group"
                  style={{ background: "rgba(250,248,245,0.08)", border: "1.5px solid rgba(250,248,245,0.18)", color: "#FAF8F5" }}>
                  Send a Message <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
