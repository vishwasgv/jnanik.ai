"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "Ex-AWS",   label: "Cloud Architecture",     sub: "Distributed systems at scale" },
  { value: "Ex-Bosch", label: "Industrial Engineering",  sub: "Precision operations expertise" },
  { value: "5+",       label: "Years Shipping AI",       sub: "Production systems, not demos" },
  { value: "100%",     label: "Data on Your Premises",   sub: "Zero external exposure" },
  { value: "60–80%",   label: "Lower AI Operating Cost", sub: "vs. cloud LLM APIs" },
];

export default function TrustedExpertise() {
  return (
    <section style={{ background: "#F2EDE6", borderTop: "1px solid #E8E2DB", borderBottom: "1px solid #E8E2DB" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-bold uppercase tracking-[0.15em] mb-10"
          style={{ color: "#9C9590" }}
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
              className="flex flex-col items-center text-center px-6 py-8 group border-b lg:border-b-0 lg:border-r last:border-r-0"
              style={{ borderColor: "#E8E2DB" }}
            >
              <p
                className="text-3xl sm:text-4xl font-extrabold mb-1 transition-colors duration-300 group-hover:text-amber-600"
                style={{ color: "#1C1A18", fontFamily: "var(--font-playfair)" }}
              >
                {s.value}
              </p>
              <p className="text-xs font-semibold mb-1" style={{ color: "#1C1A18" }}>{s.label}</p>
              <p className="text-[10px] leading-tight" style={{ color: "#9C9590" }}>{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
