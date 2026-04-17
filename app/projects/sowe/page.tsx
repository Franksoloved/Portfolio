/* ─── SOWE — Case Study ───────────────────────────────────────────────────────
   Print and social media design for Swedish Organization for Women Empowerment.
─────────────────────────────────────────────────────────────────────────── */

import Link  from "next/link";
import Image from "next/image";

export const metadata = {
  title: "SOWE — Print & Social Design · Matilda Matsdotter",
};

const phases = [
  {
    index: "01",
    label: "Instagram Content",
    body: "Working closely with two other designers, I created posts for SOWE's Instagram feed and stories. Every piece was shaped with a clear audience in mind, keeping messaging accessible and visually consistent with the organisation's identity.",
  },
  {
    index: "02",
    label: "Donation Calendar",
    body: "As part of the team I contributed to an advent calendar series for Instagram, structured as a nine-grid collage. Each post highlighted different aspects of SOWE's work in Uganda, from school building and classroom visits to community moments with Yamba Hearts FC. The series was designed to engage followers through the holiday season and drive year-end donations.",
  },
  {
    index: "03",
    label: "Donation Certificates",
    body: "Designed four Gavobevis (donation certificates), each communicating the direct impact of a gift: 150 kr for Yamba Hearts FC football equipment, 250 kr for sanitary pad production, 500 kr for a child's school term at Rise and Shine Junior School, and a thank you card for those who donated toward building latrines.",
  },
];

export default function SoweCaseStudy() {
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

      {/* Hero */}
      <header className="max-w-5xl mx-auto px-6 md:px-10 pt-14 pb-12 border-b border-[#E2DFD8]">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-[0.15em] text-[#E8441C] mb-3">Visual Design</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-[#0F0F0F] leading-tight mb-4">
              SOWE
            </h1>
            <p className="text-[#0F0F0F] text-lg md:text-xl leading-snug max-w-xl">
              Social media and print design for Swedish Organization for Women Empowerment, a nonprofit supporting women and girls in Uganda through education, health, and community development.
            </p>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-8 mt-10 text-sm">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-[#787878] mb-1">Client</p>
            <p className="text-[#0F0F0F]">SOWE, Swedish Organization<br/>for Women Empowerment</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-[#787878] mb-1">Scope</p>
            <p className="text-[#0F0F0F]">Print Design, Social Media</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-[#787878] mb-1">Tools</p>
            <p className="text-[#0F0F0F]">Adobe Illustrator, Canva</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-[#787878] mb-1">Year</p>
            <p className="text-[#0F0F0F]">Dec 2024 – Jan 2025</p>
          </div>
        </div>
      </header>

      <article className="max-w-5xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* Cover image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src="/projects/sowe/cover.png"
            alt="SOWE design work"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Intro */}
        <p className="text-[#0F0F0F] text-lg leading-relaxed max-w-2xl">
          As part of a three-person design team, I worked with SOWE to create visual material for their Instagram and donation campaigns. The work ranged from feed posts and stories to donation certificates, each piece shaped around clear audience targeting and the organisation's mission to support women and girls in Uganda.
        </p>

        {/* Results */}
        <section>
          <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-10">Results</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E2DFD8]">
            {[
              { value: "88 000",   label: "Total views"              },
              { value: "73%",      label: "Non-follower reach"       },
              { value: "5 558",    label: "Accounts reached"         },
              { value: "40 000 kr",label: "Donations raised"         },
            ].map(({ value, label }) => (
              <div key={label} className="bg-[#F8F7F4] p-6 md:p-8">
                <p className="font-display font-bold text-3xl md:text-4xl text-[#0F0F0F] mb-1">{value}</p>
                <p className="text-xs text-[#787878]">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-[#4A4A4A] text-sm leading-relaxed mt-6 max-w-xl">
            The campaign ran 30 November to 29 December. Content reached over 5 500 accounts, with nearly three quarters being non-followers, expanding SOWE's audience well beyond its existing community. It drove 40 000 kr in donations and also converted a number of one-time donors into monthly recurring supporters.
          </p>
        </section>

        {/* Process */}
        <section>
          <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-10">Process</p>
          <div className="space-y-10">
            {phases.map((p) => (
              <div key={p.index} className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-8">
                <span className="font-display text-3xl font-bold text-[#E2DFD8]">{p.index}</span>
                <div>
                  <h3 className="font-semibold text-[#0F0F0F] mb-2">{p.label}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Donation Certificates */}
        <section>
          <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-6">Donation Certificates</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-[#E2DFD8] overflow-hidden bg-white">
              <Image src="/projects/sowe/fotbollsskor.jpg" alt="Gåvobevis — 150 kr football club" width={600} height={850} className="w-full h-auto" />
            </div>
            <div className="border border-[#E2DFD8] overflow-hidden bg-white">
              <Image src="/projects/sowe/bindor.jpg" alt="Gåvobevis — 250 kr sanitary pads" width={600} height={850} className="w-full h-auto" />
            </div>
            <div className="border border-[#E2DFD8] overflow-hidden bg-white">
              <Image src="/projects/sowe/skolmaterial.jpg" alt="Gåvobevis — 500 kr school term" width={600} height={850} className="w-full h-auto" />
            </div>
            <div className="border border-[#E2DFD8] overflow-hidden bg-white">
              <Image src="/projects/sowe/toalett.jpg" alt="Stort Tack — latrine campaign" width={600} height={850} className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Campaign video */}
        <section>
          <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-6">Campaign Video</p>
          <div className="border border-[#E2DFD8] overflow-hidden bg-black max-w-sm">
            <video
              src="/projects/sowe/campaign.mov"
              controls
              playsInline
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Advent calendar */}
        <section>
          <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-6">Advent Calendar: Instagram Grid</p>
          <div className="border border-[#E2DFD8] overflow-hidden bg-white max-w-sm">
            <Image
              src="/projects/sowe/advent-calendar.png"
              alt="Advent calendar nine-grid Instagram post"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </section>


      </article>

      {/* Instagram link */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-10">
        <a
          href="https://www.instagram.com/sowe.se/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#787878] hover:text-[#E8441C] transition-colors"
        >
          View full design on Instagram: @sowe.se
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-20 border-t border-[#E2DFD8] pt-10">
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

    </main>
  );
}
