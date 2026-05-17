"use client";

import { motion } from "framer-motion";
import { Cpu, Shield, Award, Unlock, TrendingDown, Layers } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Cpu,        title: "Built for your domain, not everyone's", desc: "We don't adapt templates. Every system is designed around your actual data, workflows, and constraints." },
  { icon: Shield,     title: "Your data never leaves your control",    desc: "On-prem and VPC-isolated deployments — with full data sovereignty and complete audit trails." },
  { icon: Award,      title: "Engineering, not just consulting",       desc: "We build and deliver working systems. Our ex-AWS and ex-Bosch engineers have shipped production AI at scale." },
  { icon: Unlock,     title: "No lock-in, no black boxes",             desc: "Open-source foundations, transparent architectures, portable across clouds and infrastructure." },
  { icon: TrendingDown, title: "AI that's cost-efficient to operate", desc: "SLM-first architecture means you don't pay cloud-LLM prices at scale. We design for sustainable unit economics." },
  { icon: Layers,     title: "Grows with your organisation",           desc: "From a single use case to enterprise-wide deployment. Built to scale from the start." },
];

const imageStats = [
  { value: "10×",    label: "Faster answers from institutional knowledge" },
  { value: "60–80%", label: "Lower AI cost vs. cloud LLM APIs" },
  { value: "100%",   label: "Data stays on your infrastructure" },
];

export default function WhyJnanik() {
  return (
    <section className="py-32" style={{ background: "#F2EDE6" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t mb-20" style={{ borderColor: "#E8E2DB" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-label mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Why Jnanik AI
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2
              className="font-serif font-bold leading-tight max-w-xl"
              style={{ fontSize: "clamp(2rem,4vw,3.25rem)", color: "#1C1A18" }}
            >
              We deliver outcomes,<br />not just implementations.
            </h2>
            <p className="text-lg max-w-lg" style={{ color: "#6B6560" }}>
              Most AI projects fail because they're built on generic tools and hopeful assumptions. We start with your constraints and work backwards to what will actually work.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative rounded-2xl overflow-hidden"
            style={{ minHeight: "480px" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85"
              alt="Consultants working through a strategy session"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 40vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(28,26,24,0.97) 0%, rgba(28,26,24,0.45) 55%, rgba(28,26,24,0.1) 100%)" }}
            />

            <div className="absolute bottom-0 left-0 right-0 p-7 space-y-4">
              {imageStats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-baseline gap-3"
                >
                  <span className="text-2xl font-extrabold shrink-0" style={{ color: "#FCD34D", fontFamily: "var(--font-playfair)" }}>{s.value}</span>
                  <span className="text-xs leading-tight" style={{ color: "#D1C9C0" }}>{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: features */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-base p-6 flex flex-col gap-4"
              >
                <div className="amber-icon shrink-0">
                  <f.icon size={18} style={{ color: "#D97706" }} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1.5" style={{ color: "#1C1A18" }}>{f.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#6B6560" }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
