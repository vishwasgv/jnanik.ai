"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { MapPin, Mail, Clock, Calendar, Send, Check } from "lucide-react";
import Script from "next/script";
import Image from "next/image";

const contactInfo = [
  { icon: MapPin, title: "Office Address", lines: ["7th Main, Bhuvaneshwari Nagar,", "Banashankari 3rd Stage,", "Bengaluru — 560085, India"] },
  { icon: Mail,   title: "Email Us",       lines: ["contact@jnanikai.com"], link: "mailto:contact@jnanikai.com" },
  { icon: Clock,  title: "Business Hours", lines: ["Monday – Friday", "9:00 AM – 6:00 PM IST"] },
];

type FormStatus = "idle" | "sending" | "sent";

const lightInputStyle = { background: "#FFFFFF", border: "1px solid #E8E2DB", color: "#1C1A18" };
const lightInputFocus  = { borderColor: "rgba(217,119,6,0.5)", boxShadow: "0 0 0 3px rgba(217,119,6,0.1)", outline: "none" };

function LightInput({ type = "text", value, onChange, placeholder, required }: {
  type?: string; value: string; onChange: (v: string) => void; placeholder: string; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input type={type} required={required} value={value} onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      className="w-full px-4 py-3 rounded-xl text-sm transition-all"
      style={focused ? { ...lightInputStyle, ...lightInputFocus } : lightInputStyle}
    />
  );
}

function LightSelect({ value, onChange, children }: { value: string; onChange: (v: string) => void; children: React.ReactNode }) {
  const [focused, setFocused] = useState(false);
  return (
    <select required value={value} onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      className="w-full px-4 py-3 rounded-xl text-sm transition-all"
      style={focused ? { ...lightInputStyle, ...lightInputFocus } : lightInputStyle}
    >{children}</select>
  );
}

function LightTextarea({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea required rows={5} value={value} onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      className="w-full px-4 py-3 rounded-xl text-sm transition-all resize-none"
      style={focused ? { ...lightInputStyle, ...lightInputFocus } : lightInputStyle}
    />
  );
}

export default function ContactPage() {
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
      alert("Something went wrong. Please email us directly at contact@jnanikai.com");
    }
  };

  return (
    <div style={{ background: "#FAF8F5" }}>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden pt-16">
        <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=90"
          alt="Glass-walled meeting room ready for a conversation" fill className="object-cover object-center" priority sizes="100vw" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,26,24,1) 0%, rgba(28,26,24,0.6) 40%, rgba(28,26,24,0.2) 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="section-label mb-6"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Get in Touch</div>
            <h1 className="font-serif font-bold mb-6 leading-tight" style={{ fontSize: "clamp(2.8rem,6vw,5rem)", color: "#FAF8F5" }}>
              Tell us what you&apos;re<br />
              <span style={{ color: "#FCD34D" }}>trying to solve.</span>
            </h1>
            <p style={{ color: "#D1C9C0" }} className="text-xl leading-relaxed mb-10 max-w-2xl">
              Whether you have a specific project or just want to understand what&apos;s possible — we give every conversation our full attention. No sales scripts. No generic pitches.
            </p>
            <div className="flex flex-wrap gap-4">
              {["No commitment required", "Response within 1 business day", "Enterprise NDAs available"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "#D1C9C0" }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#D97706", opacity: 0.8 }} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendly */}
      <section className="py-20" style={{ background: "#F2EDE6" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <div className="section-label inline-flex mb-6"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Book a Meeting</div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4" style={{ color: "#1C1A18" }}>Schedule a Consultation</h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "#6B6560" }}>Pick a time that works for you. We offer 30-minute discovery calls and 60-minute strategy sessions.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E8E2DB", boxShadow: "0 4px 32px rgba(28,26,24,0.08)" }}>
            <div className="calendly-inline-widget"
              data-url="https://calendly.com/contact-jnanikai?hide_event_type_details=0&hide_gdpr_banner=1&background_color=FAF8F5&text_color=1C1A18&primary_color=D97706"
              style={{ minWidth: "320px", height: "700px" }} />
            <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
          </motion.div>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-20" style={{ background: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mb-16" style={{ borderColor: "#E8E2DB" }} />
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="mb-8">
                <div className="section-label mb-4"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Get in Touch</div>
                <h2 className="font-serif font-bold text-2xl mb-2" style={{ color: "#1C1A18" }}>Reach us directly</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6560" }}>Prefer email or just want to reach us directly? Use any of the channels below.</p>
              </div>
              {contactInfo.map((info, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-base p-5">
                  <div className="amber-icon mb-3"><info.icon size={16} style={{ color: "#D97706" }} /></div>
                  <h3 className="font-semibold text-sm mb-2" style={{ color: "#1C1A18" }}>{info.title}</h3>
                  {info.lines.map((line, j) =>
                    info.link ? (
                      <a key={j} href={info.link} className="block text-base font-semibold transition-colors hover:opacity-75" style={{ color: "#D97706" }}>{line}</a>
                    ) : (
                      <p key={j} className="text-sm" style={{ color: "#6B6560" }}>{line}</p>
                    )
                  )}
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
              <div className="rounded-2xl p-8 sm:p-10" style={{ background: "#FFFFFF", border: "1px solid #E8E2DB", boxShadow: "0 4px 24px rgba(28,26,24,0.07)" }}>
                <h2 className="font-serif font-bold text-2xl mb-1" style={{ color: "#1C1A18" }}>Send a Message</h2>
                <p className="text-sm mb-8" style={{ color: "#6B6560" }}>We respond within 1 business day.</p>

                {status === "sent" ? (
                  <div className="py-16 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(217,119,6,0.1)", border: "1px solid rgba(217,119,6,0.25)" }}>
                      <Check size={28} style={{ color: "#D97706" }} />
                    </div>
                    <h3 className="font-bold text-xl mb-2" style={{ color: "#1C1A18" }}>Message Sent!</h3>
                    <p style={{ color: "#6B6560" }}>Thanks for reaching out. We&apos;ll be in touch within 1 business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: "#6B6560" }}>Full Name <span style={{ color: "#D97706" }}>*</span></label>
                        <LightInput required value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="John Smith" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: "#6B6560" }}>Work Email <span style={{ color: "#D97706" }}>*</span></label>
                        <LightInput type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="john@company.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "#6B6560" }}>Company</label>
                      <LightInput value={form.company} onChange={(v) => setForm({ ...form, company: v })} placeholder="Acme Manufacturing Ltd." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "#6B6560" }}>Subject <span style={{ color: "#D97706" }}>*</span></label>
                      <LightSelect value={form.subject} onChange={(v) => setForm({ ...form, subject: v })}>
                        <option value="">Select a topic...</option>
                        <option value="agentic-ai">Agentic AI Solutions</option>
                        <option value="manufacturing-ai">Manufacturing AI</option>
                        <option value="rag-platform">RAG Platform</option>
                        <option value="on-prem">On-Premise AI</option>
                        <option value="consulting">AI Consulting / Strategy</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="other">Other</option>
                      </LightSelect>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "#6B6560" }}>Message <span style={{ color: "#D97706" }}>*</span></label>
                      <LightTextarea value={form.message} onChange={(v) => setForm({ ...form, message: v })} placeholder="Tell us about your project, challenges, or questions..." />
                    </div>
                    <button type="submit" disabled={status === "sending"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 disabled:opacity-60"
                      style={{ background: "#D97706", color: "#FFFFFF", boxShadow: "0 6px 24px rgba(217,119,6,0.25)" }}>
                      {status === "sending" ? (
                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                      ) : (
                        <><Send size={16} />Send Message</>
                      )}
                    </button>
                    <p className="text-xs text-center" style={{ color: "#9C9590" }}>We respect your privacy. Your information is never shared.</p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20" style={{ background: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-6">
            <h2 className="font-serif font-bold text-xl mb-1" style={{ color: "#1C1A18" }}>Our Location</h2>
            <p className="text-sm" style={{ color: "#6B6560" }}>7th Main, Bhuvaneshwari Nagar, Banashankari 3rd Stage, Bengaluru — 560085</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E8E2DB", boxShadow: "0 2px 16px rgba(28,26,24,0.06)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0147932786296!2d77.5576!3d12.9288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c1c4a4e4b9%3A0x0!2sBanashankari%203rd%20Stage%2C%20Bengaluru%2C%20Karnataka%20560085!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%" height="420" style={{ border: 0, display: "block" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Jnanik AI Office"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
