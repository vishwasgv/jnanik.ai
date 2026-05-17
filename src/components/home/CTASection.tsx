"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#FAF8F5" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl px-10 py-16 sm:px-16 sm:py-20"
          style={{ background: "#1C1A18" }}
        >
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(circle, #D97706 0%, transparent 70%)", transform: "translate(30%,-30%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #D97706 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
          />

          <div className="relative z-10 max-w-2xl">
            <div className="section-label mb-8" style={{ background: "rgba(217,119,6,0.15)", borderColor: "rgba(217,119,6,0.3)", color: "#FCD34D" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Let&apos;s talk
            </div>

            <h2
              className="font-serif font-bold leading-tight mb-5"
              style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", color: "#FAF8F5" }}
            >
              Your AI project deserves<br />
              an honest conversation first.
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "#9C9590" }}>
              Book a 60-minute session. We&apos;ll assess your situation, tell you what&apos;s realistic, and give you a clear view of what AI could actually do for your business — no commitment, no pitch.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/contact-jnanikai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
                style={{ background: "#D97706", color: "#FFFFFF", boxShadow: "0 8px 32px rgba(217,119,6,0.35)" }}
              >
                <Calendar size={16} />
                Book a Free Consultation
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 group"
                style={{ background: "rgba(250,248,245,0.08)", border: "1.5px solid rgba(250,248,245,0.18)", color: "#FAF8F5" }}
              >
                Send a Message
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
