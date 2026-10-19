"use client";

/* ─── Hero ───────────────────────────────────────────────────────────────────
   Matilda Matsdotter — hero section.
   CSS fade-up animation (bypasses Framer Motion hydration timing issue).
─────────────────────────────────────────────────────────────────────────── */

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="min-h-screen bg-[#F8F7F4] flex flex-col justify-between px-6 md:px-10 pt-32 pb-12"
    >
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center space-y-8 md:space-y-10">

        {/* Eyebrow */}
        <p
          className="text-xs tracking-[0.2em] uppercase text-[#787878] flex items-center gap-3"
          style={{ animation: "fadeUp 0.5s ease forwards", animationDelay: "0.05s", opacity: 0 }}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
          Available for new projects
        </p>

        {/* Name */}
        <div style={{ animation: "fadeUp 0.6s ease forwards", animationDelay: "0.15s", opacity: 0 }}>
          <h1
            className="font-display font-black leading-[0.9] tracking-tight text-[#0F0F0F]"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
          >
            <span className="block italic">Matilda</span>
            <span className="block">Matsdotter.</span>
          </h1>
        </div>

        {/* Divider + tagline + CTAs */}
        <div
          className="border-t border-[#E2DFD8] pt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          style={{ animation: "fadeUp 0.6s ease forwards", animationDelay: "0.3s", opacity: 0 }}
        >
          <div>
            <p className="text-[#787878] text-xs uppercase tracking-[0.15em] mb-1">
              Digital Designer
            </p>
            <p className="text-[#0F0F0F] text-lg md:text-xl leading-snug max-w-lg">
              Designing clear, accessible digital experiences{" "}
              <br className="hidden md:block" />
              with people at the centre.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollTo("#work")}
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#0F0F0F] hover:text-[#E8441C] transition-colors duration-200"
            >
              View work
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="text-sm font-medium text-[#787878] hover:text-[#0F0F0F] transition-colors duration-200 underline underline-offset-4 decoration-[#E2DFD8] hover:decoration-[#0F0F0F]"
            >
              Say hello
            </button>
          </div>
        </div>
      </div>

      {/* Bottom meta row */}
      <div
        className="max-w-6xl mx-auto w-full flex items-center justify-between pt-8 border-t border-[#E2DFD8]"
        style={{ animation: "fadeUp 0.5s ease forwards", animationDelay: "0.45s", opacity: 0 }}
      >
        <span className="text-xs text-[#787878]">Sweden</span>
        <span className="text-xs text-[#787878]">UI/UX · Visual Design · Information Design</span>
        <span className="text-xs text-[#787878]">©{new Date().getFullYear()}</span>
      </div>
    </section>
  );
}
