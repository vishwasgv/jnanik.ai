"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { ease, dur, vp, fadeUp, fadeUpBlur, fadeOnly, staggerGrid } from "@/lib/motionConfig";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: dur.cinematic, ease: ease.out }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl px-8 sm:px-16 py-14 sm:py-20"
          style={{
            background: "linear-gradient(135deg, rgba(21,37,64,0.95) 0%, rgba(15,28,51,0.98) 100%)",
            border: "1px solid rgba(59,130,246,0.18)",
            boxShadow: "0 0 0 1px rgba(59,130,246,0.06), 0 24px 64px rgba(0,0,0,0.4)",
          }}
        >
          {/* Single, static ambient glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.16) 0%, transparent 65%)", transform: "translate(25%,-25%)" }}
          />

          {/* Subtle inner gradient */}
          <div
            className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, transparent 45%)" }}
          />

          <motion.div
            className="relative z-10 max-w-2xl"
            variants={staggerGrid(0.12)}
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
              <motion.a
                whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(59,130,246,0.55)" }}
                whileTap={{ scale: 0.97 }}
                href="https://calendly.com/contact-jnanikai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm"
                style={{ background: "linear-gradient(135deg, #2563EB, #4F46E5)", color: "#fff", boxShadow: "0 4px 20px rgba(59,130,246,0.35)" }}
              >
                <Calendar size={16} />
                Book a Free Consultation
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02, borderColor: "rgba(59,130,246,0.4)" }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm group transition-colors"
                style={{ background: "rgba(255,255,255,0.04)", border: "1.5px solid rgba(255,255,255,0.10)", color: "var(--text-1)" }}
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
