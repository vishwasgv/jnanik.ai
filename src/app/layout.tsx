import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Jnanik AI — Enterprise Agentic AI for Manufacturing & Industrial Systems",
  description:
    "Jnanik AI builds scalable, privacy-first AI architectures for enterprise environments. Specializing in Agentic AI, Manufacturing AI, RAG Platforms, and On-Prem AI Systems.",
  keywords: [
    "Agentic AI",
    "Manufacturing AI",
    "Enterprise AI",
    "RAG Platform",
    "On-Prem AI",
    "Industrial AI",
    "Small Language Models",
    "AI Consulting",
    "Digital Transformation",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Jnanik AI — Enterprise Agentic AI",
    description: "Scalable, privacy-first AI architectures built for enterprise environments.",
    siteName: "Jnanik AI",
    type: "website",
    url: "https://jnanikai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jnanik AI — Enterprise Agentic AI",
    description: "Scalable, privacy-first AI architectures built for enterprise environments.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jnanik AI",
  url: "https://jnanikai.com",
  logo: "https://jnanikai.com/logo.avif",
  description:
    "Enterprise AI company specializing in Agentic AI, Manufacturing AI, RAG platforms, and on-premise AI systems.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7th Main, Bhuvaneshwari Nagar, Banashankari 3rd Stage",
    addressLocality: "Bengaluru",
    postalCode: "560085",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@jnanikai.com",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.linkedin.com/company/jnanikai",
    "https://x.com/jnanikai",
    "https://www.instagram.com/jnanikai",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
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
