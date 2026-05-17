"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl border-b shadow-sm"
            : "bg-transparent"
        )}
        style={scrolled ? { background: "rgba(250,248,245,0.95)", borderColor: "#E8E2DB" } : {}}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo-ja4-transparent.png"
              alt="Jnanik AI mark"
              width={100}
              height={67}
              className="object-contain"
              priority
            />
            <span className="font-serif font-bold text-xl tracking-tight leading-none">
              <span style={{ color: "#1C1A18" }}>JNANIK</span>
              <span style={{ color: "#D97706" }}> AI</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "font-semibold"
                    : "hover:bg-black/5"
                )}
                style={{
                  color: pathname === link.href ? "#D97706" : "#6B6560",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="https://calendly.com/contact-jnanikai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
              style={{ background: "#D97706", color: "#FFFFFF", boxShadow: "0 4px 16px rgba(217,119,6,0.28)" }}
            >
              <Calendar size={14} />
              Book Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#6B6560" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div className={cn("fixed inset-0 z-40 md:hidden transition-all duration-300", mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={cn("absolute top-16 left-0 right-0 border-b transition-all duration-300", mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0")}
          style={{ background: "#FAF8F5", borderColor: "#E8E2DB" }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn("px-4 py-3 rounded-xl text-sm font-medium transition-colors")}
                style={{ color: pathname === link.href ? "#D97706" : "#6B6560" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3" style={{ borderTop: "1px solid #E8E2DB" }}>
              <a
                href="https://calendly.com/contact-jnanikai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-bold transition-colors"
                style={{ background: "#D97706", color: "#FFFFFF" }}
              >
                <Calendar size={14} />
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
