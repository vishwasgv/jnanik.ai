"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { MapPin, Mail, Clock, Calendar, Send, Check } from "lucide-react";
import Script from "next/script";

const contactInfo = [
  { icon: MapPin, title: "Office", lines: ["7th Main, Bhuvaneshwari Nagar,", "Banashankari 3rd Stage,", "Bengaluru — 560085, India"] },
  { icon: Mail,   title: "Email", lines: ["contact@jnanikai.com"], link: "mailto:contact@jnanikai.com" },
  { icon: Clock,  title: "Hours", lines: ["Monday – Friday", "9:00 AM – 6:00 PM IST"] },
];

type FormStatus = "idle" | "sending" | "sent";

function DarkInput({ type = "text", value, onChange, placeholder, required }: {
  type?: string; value: string; onChange: (v: string) => void; placeholder: string; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type} required={required} value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      className="w-full px-4 py-3 rounded-xl text-sm transition-all"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${focused ? "rgba(59,130,246,0.55)" : "rgba(255,255,255,0.1)"}`,
        color: "#EEF2FF",
        outline: "none",
        boxShadow: focused ? "0 0 0 3px rgba(59,130,246,0.12)" : "none",
      }}
    />
  );
}

function DarkSelect({ value, onChange, children }: { value: string; onChange: (v: string) => void; children: React.ReactNode }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      required value={value} onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      className="w-full px-4 py-3 rounded-xl text-sm transition-all"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${focused ? "rgba(59,130,246,0.55)" : "rgba(255,255,255,0.1)"}`,
        color: value ? "#EEF2FF" : "#64748B",
        outline: "none",
      }}
    >{children}</select>
  );
}

function DarkTextarea({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      required rows={5} value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      className="w-full px-4 py-3 rounded-xl text-sm transition-all resize-none"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${focused ? "rgba(59,130,246,0.55)" : "rgba(255,255,255,0.1)"}`,
        color: "#EEF2FF",
        outline: "none",
        boxShadow: focused ? "0 0 0 3px rgba(59,130,246,0.12)" : "none",
      }}
    />
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("idle");
      alert("Something went wrong. Please email us at contact@jnanikai.com");
    }
  };

  return (
    <div style={{ background: "var(--bg)" }}>

      {/* Intro */}
      <section className="py-20 sm:py-28" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mb-14 sm:mb-16"
          >
            <div className="section-label mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Get in Touch
            </div>
            <h2
              className="font-serif font-bold mb-5 leading-tight"
              style={{ fontSize: "clamp(2rem,5vw,4rem)", color: "#EEF2FF" }}
            >
              Tell us what you&apos;re<br />
              <span className="shimmer-text">trying to solve.</span>
            </h2>
            <p className="text-base sm:text-xl leading-relaxed" style={{ color: "#94A3B8" }}>
              Whether you have a specific project or just want to understand what&apos;s possible — we give every conversation our full attention. No sales scripts. No generic pitches.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {["No commitment required", "Response within 1 business day", "Enterprise NDAs available"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "#94A3B8" }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#3B82F6" }} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-base p-5 sm:p-6"
              >
                <div className="blue-icon mb-4"><info.icon size={16} style={{ color: "#60A5FA" }} /></div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#EEF2FF" }}>{info.title}</h3>
                {info.lines.map((line, j) =>
                  info.link ? (
                    <a key={j} href={info.link} className="block text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: "#60A5FA" }}>{line}</a>
                  ) : (
                    <p key={j} className="text-sm" style={{ color: "#64748B" }}>{line}</p>
                  )
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly */}
      <section className="py-16 sm:py-20" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mb-12 sm:mb-16" style={{ borderColor: "rgba(255,255,255,0.07)" }} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="section-label inline-flex mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Book a Meeting
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl mb-3" style={{ color: "#EEF2FF" }}>Schedule a Consultation</h3>
            <p className="text-sm sm:text-base max-w-lg mx-auto" style={{ color: "#94A3B8" }}>
              Pick a time that works for you. 30-minute discovery calls or 60-minute strategy sessions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(59,130,246,0.2)" }}
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/contact-jnanikai?hide_event_type_details=0&hide_gdpr_banner=1&background_color=0F172A&text_color=F1F5F9&primary_color=3B82F6"
              style={{ minWidth: "320px", height: "650px" }}
            />
            <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
          </motion.div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 sm:py-20" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="section-label mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Send a Message
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl" style={{ color: "#EEF2FF" }}>
              Prefer to write it out?
            </h3>
          </motion.div>

          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-14 rounded-2xl"
              style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.25)" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)" }}
              >
                <Check size={22} style={{ color: "#60A5FA" }} />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-3" style={{ color: "#EEF2FF" }}>Message sent!</h3>
              <p style={{ color: "#94A3B8" }}>We&apos;ll get back to you within 1 business day.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <DarkInput value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Your name" required />
                <DarkInput type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="Work email" required />
              </div>
              <DarkInput value={form.company} onChange={(v) => setForm({ ...form, company: v })} placeholder="Company / Organisation" />
              <DarkSelect value={form.subject} onChange={(v) => setForm({ ...form, subject: v })}>
                <option value="" style={{ background: "var(--bg-alt)" }}>What can we help with?</option>
                <option value="AI Knowledge Hub" style={{ background: "var(--bg-alt)" }}>AI Knowledge Hub</option>
                <option value="AI Strategy" style={{ background: "var(--bg-alt)" }}>AI Strategy & Consulting</option>
                <option value="Agentic AI" style={{ background: "var(--bg-alt)" }}>Agentic AI</option>
                <option value="Small Language Models" style={{ background: "var(--bg-alt)" }}>Small Language Models</option>
                <option value="AI Chatbot" style={{ background: "var(--bg-alt)" }}>AI Chatbot</option>
                <option value="Custom AI" style={{ background: "var(--bg-alt)" }}>Custom AI Solution</option>
                <option value="Other" style={{ background: "var(--bg-alt)" }}>Something else</option>
              </DarkSelect>
              <DarkTextarea value={form.message} onChange={(v) => setForm({ ...form, message: v })} placeholder="Tell us about your project, challenge, or question..." />

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(59,130,246,0.45)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-sm disabled:opacity-60"
                style={{ background: "#3B82F6", color: "#fff", boxShadow: "0 4px 16px rgba(59,130,246,0.35)" }}
              >
                {status === "sending" ? (
                  <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                ) : (
                  <><Send size={16} />Send Message</>
                )}
              </motion.button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}
