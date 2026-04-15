import Link  from "next/link";
import Image from "next/image";

export const metadata = {
  title: "InsightHire: Recruitment UX · Matilda Matsdotter",
};

const SCREENS = [
  { src: "/projects/insighthire/screen-1.png", alt: "InsightHire concept screen 1", w: 442,  h: 692  },
  { src: "/projects/insighthire/screen-2.png", alt: "InsightHire concept screen 2", w: 896,  h: 600  },
  { src: "/projects/insighthire/screen-3.png", alt: "InsightHire concept screen 3", w: 811,  h: 702  },
  { src: "/projects/insighthire/screen-4.png", alt: "InsightHire concept screen 4", w: 772,  h: 633  },
];

export default function InsightHirePage() {
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
          <span className="uppercase tracking-widest">UI/UX</span>
          <span>·</span>
          <span>2023</span>
          <span>·</span>
          <span>UX Design</span>
          <span>·</span>
          <span>UI Design</span>
          <span>·</span>
          <span>Adobe XD</span>
          <span>·</span>
          <span>Illustrator</span>
        </div>

        <h1
          className="font-display font-black text-[#0F0F0F] leading-tight mb-6"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
        >
          InsightHire
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <p className="text-[#787878] text-base leading-relaxed">
            A concept for a recruitment website aimed at matching individuals&apos; skills with relevant jobs. The design focuses on creating a smooth user journey from account creation to job search, minimising the number of steps and making the interface intuitive.
          </p>
          <div className="space-y-4 text-sm text-[#787878]">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-2">Role</p>
              <p className="text-[#0F0F0F]">UX Designer, UI Designer, Graphic Designer</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-2">Tools</p>
              <p className="text-[#0F0F0F]">Adobe XD, Illustrator</p>
            </div>
          </div>
        </div>

        {/* Screens stacked */}
        <div className="flex flex-col gap-6">
          {SCREENS.map(({ src, alt, w, h }) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              width={w}
              height={h}
              quality={100}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 960px"
            />
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
