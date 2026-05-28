"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/",         label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about",    label: "About" },
  { href: "/careers",  label: "Careers" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "backdrop-blur-xl border-b" : "bg-transparent"
        )}
        style={scrolled
          ? { background: "rgba(255,255,255,0.95)", borderColor: "rgba(15,23,42,0.07)", boxShadow: "0 2px 16px rgba(15,23,42,0.06)" }
          : {}}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.avif"
              alt="Jnanik AI"
              width={110}
              height={74}
              className="object-contain w-20 sm:w-28"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                  isActive(link.href) ? "font-semibold" : "hover:bg-slate-50"
                )}
                style={{ color: isActive(link.href) ? "#1A56DB" : "#5C7A96" }}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(26,86,219,0.07)", border: "1px solid rgba(26,86,219,0.18)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(26,86,219,0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <Link
                href="/contact"
                className="btn-shimmer flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl"
                style={{ background: "linear-gradient(135deg, #1A56DB, #4338CA)", color: "#fff", boxShadow: "0 2px 12px rgba(26,86,219,0.24)" }}
              >
                Get in Touch
                <ArrowRight size={13} />
              </Link>
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#475569" }}
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
              className="fixed inset-0 z-40 md:hidden bg-black/10 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="fixed top-20 sm:top-24 left-0 right-0 z-40 md:hidden border-b"
              style={{ background: "rgba(255,255,255,0.98)", borderColor: "rgba(15,23,42,0.08)", boxShadow: "0 8px 32px rgba(15,23,42,0.08)" }}
            >
              <div className="px-4 py-5 flex flex-col gap-1 max-w-7xl mx-auto">
                {navLinks.map((link, idx) => (
                  <motion.div key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + idx * 0.045, duration: 0.24 }}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3.5 rounded-xl text-sm font-medium transition-colors"
                      style={{
                        color: isActive(link.href) ? "#1A56DB" : "#5C7A96",
                        background: isActive(link.href) ? "rgba(26,86,219,0.06)" : "transparent",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.22 }}
                  className="pt-3 mt-1 border-t"
                  style={{ borderColor: "rgba(10,20,50,0.08)" }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm"
                    style={{ background: "linear-gradient(135deg, #1A56DB, #4338CA)", color: "#fff" }}
                  >
                    Get in Touch
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
