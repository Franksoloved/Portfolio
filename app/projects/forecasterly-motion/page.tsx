/* ─── Forecasterly — Motion & Brand · Case Study ────────────────────────────
   Showcases the marketing video, partnership banner, and social assets.
──────────────────────────────────────────────────────────────────────────── */

import Link  from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Forecasterly: Motion & Brand · Matilda Matsdotter",
};

export default function ForecasterlyMotionPage() {
  return (
    <main className="bg-[#F8F7F4] min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10">

        {/* Back */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-[#787878] hover:text-[#0F0F0F] transition-colors mb-12"
        >
          <span>←</span> Back to work
        </Link>

        {/* Breadcrumb */}
        <p className="text-xs text-[#787878] tracking-[0.15em] uppercase mb-4 flex flex-wrap gap-2 items-center">
          <span>Motion</span>
          <span className="text-[#E2DFD8]">·</span>
          <span>2026</span>
          <span className="text-[#E2DFD8]">·</span>
          <span>Video</span>
          <span className="text-[#E2DFD8]">·</span>
          <span>Brand</span>
          <span className="text-[#E2DFD8]">·</span>
          <span>Social</span>
        </p>

        {/* Title */}
        <h1
          className="font-display font-black text-[#0F0F0F] leading-tight mb-10"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
        >
          Forecasterly:<br />Motion & Brand
        </h1>

        {/* Cover image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden mb-10">
          <Image
            src="/projects/forecasterly-motion/cover.png"
            alt="Forecasterly Motion & Brand"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Overview */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 mb-14 pb-14 border-b border-[#E2DFD8]">
          <dl className="space-y-5">
            {[
              { dt: "Role",    dd: "Designer" },
              { dt: "Tools",   dd: "Canva, Adobe Procreate" },
              { dt: "Output",  dd: "Marketing Video · Partnership Graphic · LinkedIn Assets" },
              { dt: "Client",  dd: "Forecasterly" },
              { dt: "Year",    dd: "2026" },
            ].map(({ dt, dd }) => (
              <div key={dt}>
                <dt className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-0.5">{dt}</dt>
                <dd className="text-sm text-[#0F0F0F] font-medium">{dd}</dd>
              </div>
            ))}
          </dl>
          <div>
            <p className="text-[#787878] text-base leading-relaxed mb-4">
              Alongside the website, I created a suite of brand and motion assets for Forecasterly, an AI-native Financial Planning & Analysis platform on a mission to make every organisation truly AI-ready. The brief was to extend the brand beyond the site: a marketing video to explain the product, and social assets to amplify key moments.
            </p>
            <p className="text-[#787878] text-base leading-relaxed">
              The assets needed to feel consistent with the restrained, credible tone of the website while being compelling enough to stop the scroll. Clean motion, clear messaging, and the brand's warm orange accent carried throughout.
            </p>
          </div>
        </div>

        {/* ── Marketing Video ──────────────────────────────────────────────── */}
        <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-4">Marketing video</p>
        <div className="mb-4 bg-[#0B1525] rounded-sm overflow-hidden">
          <video
            src="/projects/forecasterly-motion/forecasterly.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full block"
            style={{ maxHeight: "540px", objectFit: "contain" }}
          />
        </div>
        <p className="text-sm text-[#787878] leading-relaxed mb-16">
          A 2.5-minute marketing film introducing Forecasterly to finance teams. Covers the core product story: from fragmented spreadsheet workflows to AI-native, collaborative planning.
        </p>

        {/* ── Partnership Announcement ─────────────────────────────────────── */}
        <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-4">Partnership announcement</p>
        <div className="border border-[#E2DFD8] overflow-hidden mb-4">
          <Image
            src="/projects/forecasterly-motion/welcomes.png"
            alt="Forecasterly welcomes Moore Insight — partnership announcement graphic"
            width={1200}
            height={630}
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm text-[#787878] leading-relaxed mb-16">
          Partnership announcement graphic for Forecasterly x Moore Insight. Designed to perform as both a standalone brand asset and a shareable social graphic.
        </p>

        {/* ── LinkedIn in context ──────────────────────────────────────────── */}
        <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-4">Social in context</p>
        <div className="border border-[#E2DFD8] overflow-hidden mb-4 max-w-lg">
          <Image
            src="/projects/forecasterly-motion/linkedin-post.png"
            alt="Partnership announcement LinkedIn post"
            width={800}
            height={1000}
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm text-[#787878] leading-relaxed mb-16">
          The announcement as it appeared on LinkedIn, showing the graphic in the context it was designed for.
        </p>

        {/* ── Divider + back ───────────────────────────────────────────────── */}
        <div className="border-t border-[#E2DFD8] pt-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-[#787878] hover:text-[#0F0F0F] transition-colors"
          >
            <span>←</span> Back to all projects
          </Link>
        </div>

      </div>
    </main>
  );
}
