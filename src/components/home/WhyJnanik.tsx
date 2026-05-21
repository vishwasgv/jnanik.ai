"use client";

import { motion } from "framer-motion";
import { Cpu, Shield, Award, Unlock, TrendingDown, Layers } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Cpu,         title: "Built for your domain, not everyone's", desc: "We don't adapt templates. Every system is designed around your actual data, workflows, and constraints." },
  { icon: Shield,      title: "Your data never leaves your control",    desc: "On-prem and VPC-isolated deployments — with full data sovereignty and complete audit trails." },
  { icon: Award,       title: "Engineering, not just consulting",       desc: "We build and deliver working systems. Our ex-AWS and ex-Bosch engineers have shipped production AI at scale." },
  { icon: Unlock,      title: "No lock-in, no black boxes",             desc: "Open-source foundations, transparent architectures, portable across clouds and infrastructure." },
  { icon: TrendingDown, title: "AI that's cost-efficient to operate",  desc: "SLM-first architecture means you don't pay cloud-LLM prices at scale. We design for sustainable unit economics." },
  { icon: Layers,      title: "Grows with your organisation",           desc: "From a single use case to enterprise-wide deployment. Built to scale from the start." },
];

const imageStats = [
  { value: "2021", label: "Founded in Bengaluru" },
  { value: "6",    label: "Core AI services" },
  { value: "3+",   label: "Industries served" },
];

export default function WhyJnanik() {
  return (
    <section className="py-20 sm:py-32" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t mb-14 sm:mb-20" style={{ borderColor: "rgba(255,255,255,0.07)" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="section-label mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Why Jnanik AI
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2
              className="font-serif font-bold leading-tight max-w-xl"
              style={{ fontSize: "clamp(1.8rem,4vw,3.25rem)", color: "var(--text-1)" }}
            >
              We deliver outcomes,<br />not just implementations.
            </h2>
            <p className="text-base sm:text-lg max-w-lg" style={{ color: "var(--text-2)" }}>
              Most AI projects fail because they&apos;re built on generic tools and hopeful assumptions. We start with your constraints and work backwards to what will actually work.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-5 sm:gap-6 items-start">
          {/* Left: Real image with stats overlay */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative overflow-hidden rounded-2xl"
            style={{ minHeight: "420px" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=85"
              alt="Industrial AI deployment — production floor with intelligent systems"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 40vw"
            />

            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(160deg, rgba(7,14,28,0.6) 0%, rgba(7,14,28,0.88) 100%)" }}
            />

            {/* Blue accent overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, transparent 60%)" }}
            />

            {/* Content */}
            <div className="absolute inset-0 p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#60A5FA" }}>
                  Our track record
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#CBD5E1" }}>
                  Small team, sharp focus, real production deployments across manufacturing, finance, and professional services.
                </p>
              </div>

              <div className="space-y-5">
                {imageStats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-baseline gap-4"
                  >
                    <span
                      className="text-3xl sm:text-4xl font-extrabold shrink-0"
                      style={{ color: "#60A5FA", fontFamily: "var(--font-playfair)" }}
                    >
                      {s.value}
                    </span>
                    <span className="text-sm leading-tight" style={{ color: "#CBD5E1" }}>{s.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="h-px w-full" style={{ background: "linear-gradient(to right, #3B82F6, transparent)" }} />
            </div>
          </motion.div>

          {/* Features grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-base card-glow p-5 sm:p-6 flex flex-col gap-4"
              >
                <div className="blue-icon shrink-0">
                  <f.icon size={18} style={{ color: "#60A5FA" }} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "var(--text-1)" }}>{f.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
