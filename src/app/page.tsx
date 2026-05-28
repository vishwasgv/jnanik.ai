import type { Metadata } from "next";
import HeroSection        from "@/components/home/HeroSection";
import TrustedExpertise   from "@/components/home/TrustedExpertise";
import ServicesPreview    from "@/components/home/ServicesPreview";
import PipelineSection    from "@/components/home/PipelineSection";
import WhyJnanik          from "@/components/home/WhyJnanik";
import ArchitectureSection from "@/components/home/ArchitectureSection";
import IndustryUseCases   from "@/components/home/IndustryUseCases";
import ProcessSection     from "@/components/home/ProcessSection";
import CTASection         from "@/components/home/CTASection";

const BASE = "https://jnanikai.com";

export const metadata: Metadata = {
  title: "Jnanik AI — Enterprise AI for Industrial Excellence",
  description:
    "Jnanik AI builds production-grade enterprise AI systems for industrial organisations — AI Knowledge Hubs, Agentic AI workflows, Small Language Models, and sovereign on-premise deployments. Serving manufacturing, automotive, and FMCG sectors from Bengaluru.",
  alternates: { canonical: BASE },
  openGraph: {
    title: "Jnanik AI — Enterprise AI for Industrial Excellence",
    description:
      "Production AI systems for industrial enterprises. Knowledge Hubs, Agentic AI, SLMs, on-premise deployments. No demos — real systems that ship.",
    url: BASE,
    type: "website",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE}/#homepage`,
  url: BASE,
  name: "Jnanik AI — Enterprise AI for Industrial Excellence",
  description:
    "Jnanik AI engineers production-grade AI systems for enterprise industrial organisations — RAG-powered Knowledge Hubs, Agentic AI, Small Language Models, and fully on-premise deployments.",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".speakable"],
  },
  mainEntity: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <HeroSection />
      <TrustedExpertise />
      <ServicesPreview />
      <PipelineSection />
      <WhyJnanik />
      <ArchitectureSection />
      <IndustryUseCases />
      <ProcessSection />
      <CTASection />
    </>
  );
}
