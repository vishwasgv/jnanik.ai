"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "Ex-AWS",   label: "Cloud Architecture",     sub: "Distributed systems at scale" },
  { value: "Ex-Bosch", label: "Industrial Engineering",  sub: "Precision operations expertise" },
  { value: "5+",       label: "Years Shipping AI",       sub: "Production systems, not demos" },
  { value: "6",        label: "AI Services",              sub: "End-to-end, not consulting decks" },
  { value: "3",        label: "Deployment Modes",         sub: "Cloud, on-prem, or air-gapped" },
];

export default function TrustedExpertise() {
  return (
    <section style={{ background: "#0A1629", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] mb-8 sm:mb-10"
          style={{ color: "#64748B" }}
        >
          Why serious enterprises choose Jnanik AI
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -3 }}
              className="flex flex-col items-center text-center px-4 sm:px-6 py-7 sm:py-8 group border-b lg:border-b-0 lg:border-r last:border-r-0"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              <p
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-1 transition-colors duration-300"
                style={{ color: "#EEF2FF", fontFamily: "var(--font-playfair)" }}
              >
                <span className="group-hover:text-blue-400 transition-colors duration-300">{s.value}</span>
              </p>
              <p className="text-xs font-semibold mb-1" style={{ color: "#EEF2FF" }}>{s.label}</p>
              <p className="text-[10px] leading-tight" style={{ color: "#64748B" }}>{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
