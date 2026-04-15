import Link  from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Nudged or Not — Matilda Matsdotter",
};

const IMAGES = [
  { src: "/projects/nudged-or-not/manifest-1.png", alt: "Nudged or Not manifest — page 1" },
  { src: "/projects/nudged-or-not/manifest-2.png", alt: "Nudged or Not manifest — page 2" },
  { src: "/projects/nudged-or-not/manifest-3.png", alt: "Nudged or Not manifest — page 3" },
];

export default function NudgedOrNotPage() {
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
          Back to all projects
        </Link>
      </div>

      <article className="max-w-5xl mx-auto px-6 md:px-10 pt-12 pb-24">

        {/* Meta */}
        <div className="flex items-center gap-4 mb-5 text-xs text-[#787878]">
          <span className="uppercase tracking-widest">Visual Design</span>
          <span>·</span>
          <span>2023</span>
          <span>·</span>
          <span>Graphic Design</span>
          <span>·</span>
          <span>Information Design</span>
          <span>·</span>
          <span>Ethics</span>
        </div>

        <h1
          className="font-display font-black text-[#0F0F0F] leading-tight mb-6"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
        >
          Nudged or Not
        </h1>

        <p className="text-[#787878] text-lg leading-relaxed max-w-2xl mb-12">
          Together with two other designers, I explored the concept of digital nudging in a project that resulted in a manifest for responsible digital design. The work examines the boundary between guidance and manipulation, and proposes seven principles for ethical digital nudging, covering freedom of choice, transparency, placement, visual signalling, and the balance between business goals and user value.
        </p>

        {/* Images stacked */}
        <div className="flex flex-col gap-6">
          {IMAGES.map(({ src, alt }) => (
            <div key={src} className="w-full border border-[#E2DFD8]">
              <Image
                src={src}
                alt={alt}
                width={1600}
                height={1130}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 960px"
              />
            </div>
          ))}
        </div>

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
