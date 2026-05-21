import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About Jnanik AI — Enterprise AI Engineering Team, Bengaluru",
  description:
    "Jnanik AI is an enterprise AI engineering company founded in Bengaluru in 2021. Ex-AWS and Ex-Bosch engineers who design, build, and deploy production AI systems — not prototypes. Learn our story, values, and approach.",
  alternates: { canonical: "https://jnanikai.com/about" },
  openGraph: {
    title: "About Jnanik AI — Enterprise AI Engineering Team",
    description:
      "Ex-AWS and Ex-Bosch engineers building production AI systems for enterprises. Founded 2021, Bengaluru. We ship working code — not slide decks.",
    url: "https://jnanikai.com/about",
    type: "website",
  },
};

const BASE = "https://jnanikai.com";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${BASE}/about`,
  url: `${BASE}/about`,
  name: "About Jnanik AI",
  description:
    "Jnanik AI is an enterprise AI engineering team founded in Bengaluru in 2021. We build production-grade AI systems — RAG Knowledge Hubs, Agentic AI, Small Language Models — for manufacturing, BFSI, and professional services organisations.",
  about: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Jnanik AI",
    foundingDate: "2021",
    foundingLocation: { "@type": "Place", name: "Bengaluru, Karnataka, India" },
    description:
      "Enterprise AI engineering company specialising in on-premise AI deployments, RAG platforms, agentic AI, and small language model fine-tuning.",
    employee: [
      {
        "@type": "Person",
        jobTitle: "AI Engineer",
        description: "Ex-AWS cloud architecture engineer specialising in distributed AI systems.",
      },
      {
        "@type": "Person",
        jobTitle: "AI Engineer",
        description: "Ex-Bosch industrial engineering specialist applying AI to manufacturing workflows.",
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "About", item: `${BASE}/about` },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <AboutSection />
    </>
  );
}
