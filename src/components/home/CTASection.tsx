"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0A1629" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl px-8 sm:px-16 py-14 sm:py-20"
          style={{ background: "linear-gradient(135deg, #0F1C35 0%, #0A1629 100%)", border: "1px solid rgba(59,130,246,0.2)" }}
        >
          {/* Glow orbs */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none"
            style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)", transform: "translate(30%,-30%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-56 h-56 rounded-full blur-3xl opacity-15 pointer-events-none"
            style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)", transform: "translate(-30%,30%)" }}
          />

          <div className="relative z-10 max-w-2xl">
            <div className="section-label mb-7 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-glow" />
              Let&apos;s talk
            </div>

            <h2
              className="font-serif font-bold leading-tight mb-5"
              style={{ fontSize: "clamp(1.75rem,4.5vw,3.25rem)", color: "#EEF2FF" }}
            >
              Your AI project deserves<br />
              an honest conversation first.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10" style={{ color: "#94A3B8" }}>
              Book a 60-minute session. We&apos;ll assess your situation, tell you what&apos;s realistic, and give you a clear view of what AI could actually do for your business — no commitment, no pitch.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.04, boxShadow: "0 10px 36px rgba(59,130,246,0.55)" }}
                whileTap={{ scale: 0.97 }}
                href="https://calendly.com/contact-jnanikai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm"
                style={{ background: "#3B82F6", color: "#fff", boxShadow: "0 8px 28px rgba(59,130,246,0.38)" }}
              >
                <Calendar size={16} />
                Book a Free Consultation
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, borderColor: "rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm group transition-colors"
                style={{ background: "rgba(255,255,255,0.05)", border: "1.5px solid rgba(255,255,255,0.12)", color: "#EEF2FF" }}
              >
                Send a Message
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
