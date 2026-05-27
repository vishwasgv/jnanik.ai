"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { vp, fadeUp, staggerGrid } from "@/lib/motionConfig";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          const duration = 1200;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { type: "text",   value: "Ex-AWS",   label: "Cloud Architecture",    sub: "Distributed systems at scale" },
  { type: "text",   value: "Ex-Bosch", label: "Industrial Engineering", sub: "Precision manufacturing expertise" },
  { type: "number", value: 5, suffix: "+", label: "Years Shipping AI",  sub: "Production systems, not demos" },
  { type: "number", value: 6, suffix: "",  label: "AI Services",        sub: "End-to-end, not consulting decks" },
  { type: "number", value: 2, suffix: "",  label: "Deployment Modes",   sub: "Cloud or on-premises" },
];

export default function TrustedExpertise() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid rgba(15,23,42,0.07)",
        borderBottom: "1px solid rgba(15,23,42,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="text-center text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] mb-8 sm:mb-10"
          style={{ color: "#94A3B8" }}
        >
          Why serious enterprises choose Jnanik AI
        </motion.p>

        <motion.div
          variants={staggerGrid(0)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="flex flex-col items-center text-center px-4 sm:px-6 py-7 sm:py-8 group border-b lg:border-b-0 lg:border-r last:border-r-0 relative"
              style={{ borderColor: "rgba(15,23,42,0.07)" }}
            >
              {/* Subtle hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(37,99,235,0.04) 0%, transparent 70%)" }}
              />

              <p
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-1 transition-colors duration-300 group-hover:text-blue-600"
                style={{ color: "#0F172A", fontFamily: "var(--font-playfair)" }}
              >
                {s.type === "number" ? (
                  <Counter target={s.value as number} suffix={s.suffix} />
                ) : (
                  s.value as string
                )}
              </p>
              <p className="text-xs font-semibold mb-1" style={{ color: "#334155" }}>{s.label}</p>
              <p className="text-[10px] leading-tight" style={{ color: "#94A3B8" }}>{s.sub}</p>

              <div
                className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "#2563EB" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
