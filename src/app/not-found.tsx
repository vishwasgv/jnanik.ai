import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative text-center max-w-xl">
        <div className="section-label inline-flex mb-6 mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          404 Error
        </div>

        <h1
          className="font-serif font-bold mb-5"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            color: "#FFFFFF",
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          Lost.
        </h1>

        <p className="text-base sm:text-lg mb-10 leading-relaxed" style={{ color: "#94A3B8" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <Link
          href="/"
          className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #3B82F6, #6366F1)",
            color: "#FFFFFF",
            boxShadow: "0 8px 32px rgba(59,130,246,0.4), 0 0 0 1px rgba(255,255,255,0.08) inset",
          }}
        >
          <ArrowLeft size={15} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
