import type { Metadata } from "next";
import CareersSection from "@/components/sections/CareersSection";
import CTASection     from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Careers at Jnanik AI — AI Engineering Jobs in Bengaluru",
  description:
    "Join Jnanik AI's enterprise AI engineering team in Bengaluru. We build real production AI systems — RAG platforms, agentic workflows, SLMs. Open roles for AI engineers, ML engineers, and full-stack developers.",
  alternates: { canonical: "https://jnanikai.com/careers" },
  openGraph: {
    title: "Careers at Jnanik AI — AI Engineering Jobs",
    description:
      "Build real enterprise AI systems, not demos. Join our Bengaluru team working on RAG platforms, Agentic AI, and Small Language Models.",
    url: "https://jnanikai.com/careers",
    type: "website",
  },
};

const BASE = "https://jnanikai.com";

const careersSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE}/careers`,
  url: `${BASE}/careers`,
  name: "Careers at Jnanik AI",
  description: "Open AI engineering roles at Jnanik AI — enterprise AI company based in Bengaluru, India.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Careers", item: `${BASE}/careers` },
    ],
  },
  mainEntity: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Jnanik AI",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Open Roles",
      description: "AI engineering and technology roles at Jnanik AI",
    },
  },
};

export default function CareersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }} />
      <CareersSection />
      <CTASection />
    </>
  );
}
