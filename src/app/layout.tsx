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
  openGraph: {
    title: "Jnanik AI — Enterprise Agentic AI",
    description: "Scalable, privacy-first AI architectures built for enterprise environments.",
    siteName: "Jnanik AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
