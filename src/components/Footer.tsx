"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { label: "AI Knowledge Hub",       href: "#services" },
  { label: "AI Strategy",            href: "#services" },
  { label: "Agentic AI",             href: "#services" },
  { label: "Small Language Models",  href: "#services" },
  { label: "AI Chatbot",             href: "#services" },
  { label: "Custom AI Solutions",    href: "#services" },
];

const company = [
  { label: "About",    href: "#about" },
  { label: "Careers",  href: "#careers" },
  { label: "Contact",  href: "#contact" },
];

const socials = [
  {
    label: "LinkedIn", href: "https://www.linkedin.com/company/jnanikai",
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
  },
  {
    label: "Twitter / X", href: "https://x.com/jnanikai",
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
  {
    label: "Instagram", href: "https://www.instagram.com/jnanikai",
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const colVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Footer() {
  return (
    <footer style={{ background: "#04090F", borderTop: "1px solid rgba(255,255,255,0.07)" }} className="relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-40 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10">
        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="rounded-2xl px-6 sm:px-8 py-6 sm:py-7 mb-12 sm:mb-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative overflow-hidden"
          style={{ background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.18)" }}
        >
          <div
            className="absolute right-0 top-0 w-56 h-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <p className="font-bold text-sm sm:text-base mb-1" style={{ color: "#EEF2FF" }}>
              Ready to bring AI into your operations?
            </p>
            <p className="text-xs sm:text-sm" style={{ color: "#64748B" }}>
              Book a free 60-minute consultation — no commitment, no pitch.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(59,130,246,0.5)" }}
            whileTap={{ scale: 0.97 }}
            href="https://calendly.com/contact-jnanikai"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 shrink-0 flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm"
            style={{ background: "#3B82F6", color: "#fff" }}
          >
            Book a Call
            <ArrowUpRight size={15} />
          </motion.a>
        </motion.div>

        {/* Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
        >
          {/* Brand */}
          <motion.div variants={colVariants} className="col-span-2 sm:col-span-1 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-5">
              <Image src="/logo-ja4-transparent.png" alt="Jnanik AI" width={70} height={47} className="object-contain" />
              <span className="font-serif font-bold text-lg tracking-tight leading-none">
                <span style={{ color: "#EEF2FF" }}>JNANIK</span>
                <span style={{ color: "#3B82F6" }}> AI</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: "#64748B" }}>
              Enterprise-grade Agentic AI, Industrial AI, and on-prem architectures engineered for scale, privacy, and reliability.
            </p>
            <div className="flex items-center gap-2.5">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.18, backgroundColor: "rgba(59,130,246,0.18)", color: "#60A5FA" }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.06)", color: "#64748B" }}
                >
                  {social.svg}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={colVariants}>
            <h3 className="font-semibold text-xs mb-5 uppercase tracking-widest" style={{ color: "#EEF2FF" }}>Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm transition-colors hover:text-blue-400"
                    style={{ color: "#64748B" }}
                  >
                    <span className="inline-block w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-3" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={colVariants}>
            <h3 className="font-semibold text-xs mb-5 uppercase tracking-widest" style={{ color: "#EEF2FF" }}>Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group inline-flex items-center gap-1.5 text-sm transition-colors hover:text-blue-400"
                    style={{ color: "#64748B" }}
                  >
                    <span className="inline-block w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-3" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={colVariants}>
            <h3 className="font-semibold text-xs mb-5 uppercase tracking-widest" style={{ color: "#EEF2FF" }}>Get in touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={13} className="shrink-0 mt-0.5" style={{ color: "#3B82F6" }} />
                <span className="text-xs sm:text-sm leading-relaxed" style={{ color: "#64748B" }}>
                  7th Main, Bhuvaneshwari Nagar,<br />Banashankari 3rd Stage,<br />Bengaluru — 560085, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={13} className="shrink-0" style={{ color: "#3B82F6" }} />
                <motion.a
                  href="mailto:contact@jnanikai.com"
                  className="text-xs sm:text-sm transition-colors hover:text-blue-400"
                  style={{ color: "#64748B" }}
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  contact@jnanikai.com
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p className="text-xs" style={{ color: "#334155" }}>
          © {new Date().getFullYear()} Jnanik AI. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: "#334155" }}>
          Engineered in Bengaluru. Built for global enterprises.
        </p>
      </motion.div>
    </footer>
  );
}
