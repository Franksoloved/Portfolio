import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Elin & Victor — Bröllopsidentitet · Matilda Matsdotter",
};

export default function ElinVictorPage() {
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
        <div className="flex flex-wrap items-center gap-4 mb-5 text-xs text-[#787878]">
          <span className="uppercase tracking-widest">Web Design</span>
          <span>·</span>
          <span className="uppercase tracking-widest">Graphic Design</span>
          <span>·</span>
          <span>2024</span>
          <span>·</span>
          <span>Wix</span>
          <span>·</span>
          <span>Canva</span>
        </div>

        <h1
          className="font-display font-black text-[#0F0F0F] leading-tight mb-6"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
        >
          Elin & Victor
        </h1>

        {/* Cover image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden mb-14">
          <Image
            src="/projects/elin-victor/cover.png"
            alt="Elin & Victor wedding identity"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="space-y-4 text-[#787878] text-base leading-relaxed">
            <p>
              Ahead of a winter wedding in Falun, I created the visual design for both the wedding website and the save the date communication for Elin and Victor. The project aimed to convey a warm, personal and elegant feel that reflected the couple&apos;s personality and the wintry setting of Villa Bergalid.
            </p>
            <p>
              The save the date card was designed in Canva, combining hand-lettered typography with a minimalist layout and illustrative spruce branches — the first visual foundation for the wedding&apos;s identity. From there, I built the website in Wix, structured in clear sections with a focus on usability. The colour palette carries through in green, gold and beige to reinforce the warm and festive expression.
            </p>
          </div>
          <div className="space-y-5 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-1.5">Role</p>
              <p className="text-[#0F0F0F]">Web Designer · Graphic Designer · Content Designer</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-1.5">Tools</p>
              <p className="text-[#0F0F0F]">Wix, Canva</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-1.5">Year</p>
              <p className="text-[#0F0F0F]">2024</p>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="flex flex-col gap-6">

          <Image
            src="/projects/elin-victor/cover.png"
            alt="Elin & Victor bröllopshemsida på laptop"
            width={1920}
            height={1080}
            quality={100}
            className="w-full h-auto"
            sizes="(max-width: 1024px) 100vw, 960px"
          />

          <Image
            src="/projects/elin-victor/website-overview.png"
            alt="Bröllopshemsidans startsida, bröllopshelgen och vigsel/festen"
            width={1440}
            height={2200}
            quality={100}
            className="w-full h-auto"
            sizes="(max-width: 1024px) 100vw, 960px"
          />

          <Image
            src="/projects/elin-victor/information.png"
            alt="Information, hålltider, resvag och toastmasters"
            width={1440}
            height={1800}
            quality={100}
            className="w-full h-auto"
            sizes="(max-width: 1024px) 100vw, 960px"
          />

          <Image
            src="/projects/elin-victor/boende.png"
            alt="Boende-sektion och sidfot"
            width={1440}
            height={900}
            quality={100}
            className="w-full h-auto"
            sizes="(max-width: 1024px) 100vw, 960px"
          />

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
