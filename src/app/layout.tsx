import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const BASE_URL = "https://jnanikai.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Jnanik AI — Enterprise AI Systems Built for Production",
    template: "%s | Jnanik AI",
  },
  description:
    "Jnanik AI engineers production-grade AI systems for enterprises — RAG-powered Knowledge Hubs, Agentic AI workflows, Small Language Models, and on-premise deployments. Based in Bengaluru, India.",
  keywords: [
    "Enterprise AI", "Agentic AI", "RAG Platform", "AI Knowledge Hub",
    "Small Language Models", "SLM", "On-Premise AI", "AI Consulting India",
    "Manufacturing AI", "Industrial AI", "AI Strategy Consulting",
    "Enterprise AI deployment Bengaluru", "Custom AI solutions",
    "AI for BFSI", "AI for manufacturing", "production AI systems",
    "private AI deployment", "air-gapped AI", "enterprise chatbot",
  ],
  authors: [{ name: "Jnanik AI", url: BASE_URL }],
  creator: "Jnanik AI",
  publisher: "Jnanik AI",
  applicationName: "Jnanik AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Jnanik AI — Enterprise AI Systems Built for Production",
    description:
      "Production-grade AI systems for enterprises. RAG Knowledge Hubs, Agentic AI, SLMs, on-premise deployments. No demos — real systems that ship.",
    siteName: "Jnanik AI",
    type: "website",
    url: BASE_URL,
    locale: "en_IN",
    images: [{ url: "/logo.avif", width: 800, height: 400, alt: "Jnanik AI — Enterprise AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jnanik AI — Enterprise AI Built for Production",
    description: "Production-grade AI systems. RAG, Agents, SLMs, on-premise deployments.",
    site: "@jnanikai",
    creator: "@jnanikai",
  },
  category: "technology",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Jnanik AI",
    alternateName: ["Jnanik Artificial Intelligence", "JnanIkAI"],
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.avif`,
      width: 200,
      height: 60,
    },
    description:
      "Jnanik AI engineers production-grade AI systems for enterprise clients — including RAG-powered Knowledge Hubs, Agentic AI workflows, domain-specific Small Language Models, and fully on-premise AI deployments.",
    foundingDate: "2021",
    foundingLocation: {
      "@type": "Place",
      name: "Bengaluru, India",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "7th Main, Bhuvaneshwari Nagar, Banashankari 3rd Stage",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560085",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@jnanikai.com",
      contactType: "Customer Service",
      availableLanguage: "English",
    },
    areaServed: ["IN", "US", "GB", "SG", "AE"],
    knowsAbout: [
      "Enterprise AI",
      "Retrieval-Augmented Generation",
      "Agentic AI",
      "Small Language Models",
      "On-Premise AI Deployment",
      "AI Strategy Consulting",
      "Manufacturing AI",
      "BFSI AI",
    ],
    sameAs: [
      "https://www.linkedin.com/company/jnanikai",
      "https://x.com/jnanikai",
      "https://www.instagram.com/jnanikai",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Jnanik AI",
    description: "Enterprise AI systems built for production — not demos.",
    publisher: { "@id": `${BASE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <SplashScreen />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
