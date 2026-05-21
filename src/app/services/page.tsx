import type { Metadata } from "next";
import ServicesSection  from "@/components/sections/ServicesSection";
import WhyJnanik        from "@/components/home/WhyJnanik";
import IndustryUseCases from "@/components/home/IndustryUseCases";
import CTASection       from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Enterprise AI Services — Knowledge Hub, Agents, SLMs & Strategy",
  description:
    "Six production-grade AI services for enterprises: AI Knowledge Hub (RAG), Agentic AI workflows, Small Language Models, AI Strategy Consulting, Enterprise Chatbots, and Custom AI Solutions. On-premise and cloud deployments.",
  alternates: { canonical: "https://jnanikai.com/services" },
  openGraph: {
    title: "Enterprise AI Services | Jnanik AI",
    description:
      "Six AI services purpose-built for enterprise. RAG Knowledge Hubs, Agentic AI, SLMs, on-premise deployments — every engagement ships working code.",
    url: "https://jnanikai.com/services",
    type: "website",
  },
};

const BASE = "https://jnanikai.com";

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Jnanik AI — Enterprise AI Services",
  description: "Six production-grade AI services engineered for enterprise organisations.",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        "@id": `${BASE}/services#knowledge-hub`,
        name: "AI Knowledge Hub",
        alternateName: "Enterprise RAG Platform",
        description:
          "A RAG-powered knowledge management system that indexes your documents, SOPs, emails, and databases — enabling employees to retrieve accurate answers in seconds via natural language.",
        provider: { "@type": "Organization", name: "Jnanik AI", url: BASE },
        serviceType: "Enterprise AI System",
        category: "Knowledge Management AI",
        areaServed: "Worldwide",
        offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        "@id": `${BASE}/services#ai-strategy`,
        name: "AI Strategy & Consulting",
        description:
          "A rigorous AI Readiness Assessment covering data, workflows, team capabilities, and risk — delivering a prioritised implementation roadmap your leadership can commit to.",
        provider: { "@type": "Organization", name: "Jnanik AI", url: BASE },
        serviceType: "AI Consulting",
        category: "AI Strategy",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        "@id": `${BASE}/services#agentic-ai`,
        name: "Agentic AI",
        description:
          "Multi-step AI agents that plan, reason, and execute complex enterprise workflows autonomously — with full audit trail, human-in-the-loop escalation, and ERP/CRM integrations.",
        provider: { "@type": "Organization", name: "Jnanik AI", url: BASE },
        serviceType: "Enterprise AI System",
        category: "Agentic AI / Autonomous AI",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        "@id": `${BASE}/services#slm`,
        name: "Small Language Models",
        alternateName: "SLM Fine-tuning",
        description:
          "Domain-specific language models fine-tuned on your data — outperforming GPT-4 on your tasks at 60–80% lower inference cost, deployable fully on-premise or air-gapped.",
        provider: { "@type": "Organization", name: "Jnanik AI", url: BASE },
        serviceType: "AI Model Development",
        category: "Small Language Models / SLM",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        "@id": `${BASE}/services#ai-chatbot`,
        name: "Enterprise AI Chatbot",
        description:
          "Enterprise-grade chatbots grounded in your internal data — with intelligent escalation, multi-channel deployment (web, Slack, Teams, WhatsApp), and resolution analytics.",
        provider: { "@type": "Organization", name: "Jnanik AI", url: BASE },
        serviceType: "Enterprise AI System",
        category: "Conversational AI",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        "@id": `${BASE}/services#custom-ai`,
        name: "Custom AI Solutions",
        description:
          "Purpose-built AI systems designed around your exact process, data sources, and operational constraints — from data pipeline to UI, with full knowledge transfer to your team.",
        provider: { "@type": "Organization", name: "Jnanik AI", url: BASE },
        serviceType: "Custom AI Development",
        category: "Bespoke AI Systems",
        areaServed: "Worldwide",
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI Knowledge Hub?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI Knowledge Hub is a RAG-powered (Retrieval-Augmented Generation) enterprise system that indexes your organisation's documents, SOPs, emails, and databases. Employees can ask questions in natural language and receive accurate, cited answers in seconds — without manually searching through files.",
      },
    },
    {
      "@type": "Question",
      name: "Can Jnanik AI deploy AI systems fully on-premise or air-gapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jnanik AI specialises in on-premise and air-gapped AI deployments. All models, data, and infrastructure remain entirely within your environment — nothing leaves your servers. This is critical for regulated industries like BFSI, defence, and healthcare.",
      },
    },
    {
      "@type": "Question",
      name: "What are Small Language Models and why are they better than GPT-4 for enterprise use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small Language Models (SLMs) are compact AI models fine-tuned on your organisation's specific domain data and terminology. Because they're trained on your context, they outperform general-purpose LLMs like GPT-4 on your specific tasks while costing 60–80% less to run. They can also be deployed entirely on-premise, keeping data private.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to deploy an enterprise AI system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typical timelines: AI Knowledge Hub — 6 to 12 weeks. Agentic AI workflows — 8 to 16 weeks. Small Language Model — 4 to 8 weeks. Custom AI Solutions — 10 to 20 weeks. Timelines depend on data readiness, integration complexity, and approval cycles.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Jnanik AI serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jnanik AI serves manufacturing, BFSI (banking, financial services, and insurance), professional services, healthcare, enterprise technology, and logistics. Each engagement starts with understanding your specific domain, data, and operational constraints.",
      },
    },
    {
      "@type": "Question",
      name: "What is Agentic AI and how does it differ from a simple chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agentic AI refers to AI systems that can plan, reason across multiple steps, and take autonomous actions — such as routing documents, triggering approvals, updating records, or executing multi-step workflows. A chatbot answers questions. An AI agent acts. Jnanik AI's agentic systems include human-in-the-loop escalation and full audit trails for enterprise compliance.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicesSection />
      <WhyJnanik />
      <IndustryUseCases />
      <CTASection />
    </>
  );
}
