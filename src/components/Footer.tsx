import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Link2, Share2, Code2 } from "lucide-react";

const services = [
  { label: "AI Knowledge Hub",       href: "/services#knowledge-hub" },
  { label: "AI Strategy",            href: "/services#ai-strategy" },
  { label: "Agentic AI",             href: "/services#agentic-ai" },
  { label: "Small Language Models",  href: "/services#slm" },
  { label: "AI Chatbot",             href: "/services#ai-chatbot" },
  { label: "Custom AI Solutions",    href: "/services#custom-ai" },
];

const company = [
  { label: "About",    href: "/about" },
  { label: "Careers",  href: "/careers" },
  { label: "Contact",  href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#18140F", borderTop: "1px solid rgba(250,248,245,0.08)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-ja4-transparent.png"
                alt="Jnanik AI mark"
                width={80}
                height={54}
                className="object-contain"
              />
              <span className="font-serif font-bold text-xl tracking-tight leading-none">
                <span style={{ color: "#FAF8F5" }}>JNANIK</span>
                <span style={{ color: "#D97706" }}> AI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B6560" }}>
              Enterprise-grade Agentic AI, Industrial AI, and on-prem architectures engineered for scale, privacy, and reliability.
            </p>
            <div className="flex items-center gap-3">
              {[Link2, Share2, Code2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                  style={{ background: "rgba(250,248,245,0.07)", color: "#6B6560" }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm mb-5" style={{ color: "#FAF8F5" }}>Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-amber-500" style={{ color: "#6B6560" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm mb-5" style={{ color: "#FAF8F5" }}>Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm transition-colors hover:text-amber-500" style={{ color: "#6B6560" }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-5" style={{ color: "#FAF8F5" }}>Get in touch</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: "#D97706" }} />
                <span className="text-sm leading-relaxed" style={{ color: "#6B6560" }}>
                  7th Main, Bhuvaneshwari Nagar,<br />
                  Banashankari 3rd Stage,<br />
                  Bengaluru — 560085, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="shrink-0" style={{ color: "#D97706" }} />
                <a href="mailto:contact@jnanikai.com" className="text-sm transition-colors hover:text-amber-500" style={{ color: "#6B6560" }}>
                  contact@jnanikai.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(250,248,245,0.06)" }}
      >
        <p className="text-sm" style={{ color: "#4A4540" }}>© {new Date().getFullYear()} Jnanik AI. All rights reserved.</p>
        <p className="text-sm" style={{ color: "#4A4540" }}>Engineered in Bengaluru. Built for global enterprises.</p>
      </div>
    </footer>
  );
}
