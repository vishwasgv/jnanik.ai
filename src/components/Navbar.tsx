"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const SECTIONS = ["home", "services", "about", "careers", "contact"];

const navLinks = [
  { id: "home",     label: "Home" },
  { id: "services", label: "Services" },
  { id: "about",    label: "About" },
  { id: "careers",  label: "Careers" },
  { id: "contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeSection, setActive]    = useState("home");
  const pathname = usePathname();
  const isHome = pathname === "/";

  /* scroll shadow */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* close mobile on route change */
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  /* intersection observer — only wires up when sections exist in DOM */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  const href = useCallback(
    (id: string) => (isHome ? `#${id}` : `/#${id}`),
    [isHome]
  );

  const isActive = useCallback(
    (id: string) => isHome ? activeSection === id : false,
    [isHome, activeSection]
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "backdrop-blur-xl border-b" : "bg-transparent"
        )}
        style={scrolled
          ? { background: "rgba(15,23,42,0.94)", borderColor: "rgba(255,255,255,0.08)" }
          : {}}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">

          {/* Logo */}
          <a href={href("home")} className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.avif"
              alt="Jnanik AI"
              width={110}
              height={74}
              className="object-contain w-20 sm:w-28"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={href(link.id)}
                className={cn(
                  "relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                  isActive(link.id) ? "font-semibold" : "hover:bg-white/5"
                )}
                style={{ color: isActive(link.id) ? "#60A5FA" : "#94A3B8" }}
              >
                {link.label}
                {isActive(link.id) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.22)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <motion.a
              whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(59,130,246,0.45)" }}
              whileTap={{ scale: 0.97 }}
              href="https://calendly.com/contact-jnanikai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
              style={{ background: "#3B82F6", color: "#fff", boxShadow: "0 4px 16px rgba(59,130,246,0.35)" }}
            >
              <Calendar size={14} />
              Book Consultation
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#94A3B8" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="fixed top-20 sm:top-24 left-0 right-0 z-40 md:hidden border-b"
              style={{ background: "rgba(15,23,42,0.97)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="px-4 py-5 flex flex-col gap-1 max-w-7xl mx-auto">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.id}
                    href={href(link.id)}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + idx * 0.045, duration: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
                    className="px-4 py-3.5 rounded-xl text-sm font-medium transition-colors"
                    style={{
                      color: isActive(link.id) ? "#60A5FA" : "#94A3B8",
                      background: isActive(link.id) ? "rgba(59,130,246,0.1)" : "transparent",
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <a
                    href="https://calendly.com/contact-jnanikai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl text-sm font-bold"
                    style={{ background: "#3B82F6", color: "#fff" }}
                  >
                    <Calendar size={14} />
                    Book a Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
