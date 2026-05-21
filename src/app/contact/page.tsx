import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import CTASection     from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Contact Jnanik AI — Book a Free Enterprise AI Consultation",
  description:
    "Talk to a senior Jnanik AI engineer — not a sales team. Book a free 60-minute consultation to assess your data, workflows, and constraints. Based in Bengaluru, serving enterprises globally.",
  alternates: { canonical: "https://jnanikai.com/contact" },
  openGraph: {
    title: "Contact Jnanik AI — Free Enterprise AI Consultation",
    description:
      "Book 60 minutes with a senior AI engineer. We assess your data and constraints — then tell you exactly what AI can and can't do for your business.",
    url: "https://jnanikai.com/contact",
    type: "website",
  },
};

const BASE = "https://jnanikai.com";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE}/contact`,
  url: `${BASE}/contact`,
  name: "Contact Jnanik AI",
  description: "Book a free 60-minute enterprise AI consultation with a senior Jnanik AI engineer.",
  mainEntity: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Jnanik AI",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "contact@jnanikai.com",
        contactType: "Sales",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        url: "https://calendly.com/contact-jnanikai",
        contactType: "Technical Support",
        availableLanguage: "English",
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE}/contact` },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <ContactSection />
      <CTASection />
    </>
  );
}
