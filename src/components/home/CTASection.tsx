"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { ease, dur, vp, fadeUp, fadeUpBlur, fadeOnly, staggerGrid } from "@/lib/motionConfig";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: dur.cinematic, ease: ease.out }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl px-8 sm:px-16 py-14 sm:py-20"
          style={{
            background: "linear-gradient(135deg, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.95) 100%)",
            border: "1px solid rgba(59,130,246,0.22)",
          }}
        >
          {/* Glow orbs */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none animate-orb-a"
            style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 65%)", transform: "translate(30%,-30%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none animate-orb-b"
            style={{ background: "radial-gradient(circle, #818CF8 0%, transparent 65%)", transform: "translate(-30%,30%)" }}
          />
          <div
            className="absolute bottom-0 right-1/3 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #22D3EE 0%, transparent 65%)" }}
          />

          {/* Subtle gradient border shimmer */}
          <div
            className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, transparent 50%, rgba(129,140,248,0.06) 100%)",
            }}
          />

          <motion.div
            className="relative z-10 max-w-2xl"
            variants={staggerGrid(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <motion.div variants={fadeOnly} className="section-label mb-7 sm:mb-8 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-glow" />
              Let&apos;s talk
            </motion.div>

            <motion.h2
              variants={fadeUpBlur}
              className="font-serif font-bold leading-tight mb-5"
              style={{ fontSize: "clamp(1.75rem,4.5vw,3.25rem)", color: "var(--text-1)" }}
            >
              Talk to our engineers.<br />
              Not our sales team.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10" style={{ color: "var(--text-2)" }}>
              Book 60 minutes with a senior Jnanik engineer. We&apos;ll assess your data, workflows, and constraints — then tell you exactly what AI can and can&apos;t do for your business. No pitch. No commitment. No generic slides.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              {/* Primary CTA — gentle breathing glow draws the eye */}
              <motion.a
                animate={{
                  boxShadow: [
                    "0 6px 24px rgba(59,130,246,0.38)",
                    "0 8px 36px rgba(59,130,246,0.58), 0 0 0 5px rgba(59,130,246,0.09)",
                    "0 6px 24px rgba(59,130,246,0.38)",
                  ],
                }}
                whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(59,130,246,0.65)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                href="https://calendly.com/contact-jnanikai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm"
                style={{ background: "#3B82F6", color: "#fff" }}
              >
                <Calendar size={16} />
                Book a Free Consultation
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, borderColor: "rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm group transition-colors"
                style={{ background: "rgba(255,255,255,0.05)", border: "1.5px solid rgba(255,255,255,0.12)", color: "var(--text-1)" }}
              >
                Send a Message
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
