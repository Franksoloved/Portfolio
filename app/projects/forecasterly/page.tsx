/* ─── Forecasterly — Case Study ──────────────────────────────────────────────
   Case study page with embedded live prototype.
─────────────────────────────────────────────────────────────────────────── */

import Link           from "next/link";
import Image          from "next/image";
import PrototypeFrame from "@/components/PrototypeFrame";

export const metadata = {
  title: "Forecasterly — Website · Matilda Matsdotter",
};

const phases = [
  {
    index: "01",
    label: "Discovery",
    body: "Worked with the Forecasterly team to map the product, audience (finance teams at growing organisations), and competitive landscape. Defined the core message: AI-powered FP&A that replaces spreadsheets without losing the familiarity of them.",
  },
  {
    index: "02",
    label: "Design",
    body: "Designed all pages in Figma: hero, features, AI section, testimonials, pricing, and about. The visual language pairs a restrained neutral palette with a single energetic orange accent, balancing warmth with technical credibility.",
  },
  {
    index: "03",
    label: "Build",
    body: "Used Claude Code to translate the Figma designs directly into a production-ready React/Vite codebase with Tailwind CSS and Framer Motion. Implemented scroll-driven animations, a live AI chatbot demo, sticky feature reveals, and a responsive nav with frosted-glass scroll behaviour.",
  },
  {
    index: "04",
    label: "Delivery",
    body: "Handed off a complete, production-ready codebase to the development team for final deployment.",
  },
];

export default function ForecasterlyCaseStudy() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">

      {/* Back */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs text-[#787878] hover:text-[#E8441C] transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to work
        </Link>
      </div>

      <article className="max-w-5xl mx-auto px-6 md:px-10 pt-12 pb-24">

        {/* Meta */}
        <div className="flex items-center gap-3 mb-5 text-xs text-[#787878]">
          <span className="uppercase tracking-widest">UI/UX</span>
          <span>·</span>
          <span>2026</span>
          <span>·</span>
          <span>Claude Code</span>
          <span>·</span>
          <span>Web Design</span>
          <span>·</span>
          <span>B2B SaaS</span>
        </div>

        <h1
          className="font-display font-black text-[#0F0F0F] leading-tight mb-6"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
        >
          Forecasterly<br />Website
        </h1>

        {/* Overview */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 mb-14 pb-14 border-b border-[#E2DFD8]">
          <dl className="space-y-5">
            {[
              { dt: "Role",  dd: "Designer & Figma-to-Code" },
              { dt: "Tools", dd: "Figma, Claude Code, React, Tailwind CSS, Framer Motion" },
              { dt: "Year",  dd: "2026" },
              { dt: "Pages", dd: "Home · About · Pricing" },
            ].map(({ dt, dd }) => (
              <div key={dt}>
                <dt className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-0.5">{dt}</dt>
                <dd className="text-sm text-[#0F0F0F] font-medium">{dd}</dd>
              </div>
            ))}
          </dl>
          <div>
            <p className="text-[#787878] text-base leading-relaxed mb-4">
              Forecasterly is an AI-native, cloud-based Financial Planning & Analysis platform built to transform how organisations plan, forecast, and work with financial data. Their vision goes beyond replacing spreadsheets: they want every department involved in planning, and every data point structured and AI-ready so that each forecast cycle makes the organisation smarter than the last.
            </p>
            <p className="text-[#787878] text-base leading-relaxed">
              I designed the full site in Figma, then used Claude Code to translate those designs into a production-ready React codebase. The core design challenge was communicating a technically ambitious product to both CFOs and wider teams: credible and precise, but never cold. The solution was a restrained neutral palette with a single warm accent, interactive product demos front and centre, and real customer voices throughout.
            </p>
          </div>
        </div>

        {/* Cover image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden mb-16">
          <Image
            src="/projects/forecasterly/cover.png"
            alt="Forecasterly website"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Process */}
        <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-8">Process</p>
        <ol className="divide-y divide-[#E2DFD8] border-t border-[#E2DFD8] mb-16">
          {phases.map(({ index, label, body }) => (
            <li key={index} className="flex gap-6 md:gap-12 py-7">
              <span className="text-xs text-[#E8441C] font-medium tabular-nums mt-1 shrink-0">{index}</span>
              <div>
                <p className="font-medium text-[#0F0F0F] text-sm mb-1">{label}</p>
                <p className="text-[#787878] text-sm leading-relaxed max-w-xl">{body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Live prototype */}
        <div className="flex items-baseline justify-between mb-3">
          <p className="text-xs uppercase tracking-[0.15em] text-[#787878]">Live prototype</p>
          <p className="text-xs text-[#BBBAAF]">Scroll and interact inside the frame</p>
        </div>
        <PrototypeFrame src="/forecasterly-preview/index.html" />

        {/* Back */}
        <div className="border-t border-[#E2DFD8] pt-10 mt-16">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#0F0F0F] hover:text-[#E8441C] transition-colors"
          >
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to all projects
          </Link>
        </div>

      </article>
    </main>
  );
}
