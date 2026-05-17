import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#FAF8F5" }}>
      <div className="text-center">
        <p className="font-bold text-lg mb-2" style={{ color: "#D97706" }}>404</p>
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)", color: "#1C1A18" }}>Page not found</h1>
        <p className="mb-8" style={{ color: "#6B6560" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
          style={{ background: "#D97706", color: "#FFFFFF", boxShadow: "0 4px 16px rgba(217,119,6,0.25)" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
