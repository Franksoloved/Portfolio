/* ─── Project detail page ────────────────────────────────────────────────────
   Shows real case study content when available, falls back to placeholder.
─────────────────────────────────────────────────────────────────────────── */

import Link  from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project  = projects.find(p => p.slug === slug);
  return { title: project ? `${project.title} — Matilda Matsdotter` : "Project — Matilda Matsdotter" };
}

const PLACEHOLDER_PHASES = [
  { label: "Discovery",   body: "Stakeholder interviews, competitive analysis, and user research to build a clear problem definition." },
  { label: "Ideation",    body: "Concepts sketched by hand, then translated into low-fidelity wireframes for rapid feedback cycles." },
  { label: "Design",      body: "High-fidelity UI built in Figma with a full component library and interaction prototypes." },
  { label: "Delivery",    body: "Handoff documentation, developer QA, and post-launch review to measure success against KPIs." },
];

export default async function ProjectPage({ params }: Props) {
  const { slug }  = await params;
  const project   = projects.find(p => p.slug === slug);

  if (!project) notFound();

  const phases = project.caseStudy?.phases ?? PLACEHOLDER_PHASES;

  return (
    <main className="min-h-screen bg-[#F8F7F4]">

      {/* Back link */}
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
        <div className="flex items-center gap-4 mb-5 text-xs text-[#787878]">
          <span className="uppercase tracking-widest">{project.category}</span>
          <span>·</span>
          <span>{project.year}</span>
          <span>·</span>
          {project.tags.map(t => <span key={t}>{t}</span>).reduce<React.ReactNode[]>(
            (acc, el, i) => i === 0 ? [el] : [...acc, <span key={`sep-${i}`}>·</span>, el], []
          )}
        </div>

        <h1
          className="font-display font-black text-[#0F0F0F] leading-tight mb-6"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
        >
          {project.title}
        </h1>

        <p className="text-[#787878] text-lg leading-relaxed max-w-2xl mb-12">
          {project.caseStudy?.intro ?? project.description}
        </p>

        {/* Hero image — real or placeholder */}
        <div className="w-full aspect-[16/7] bg-[#ECEAE4] mb-16 relative overflow-hidden">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={`${project.title} — hero screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 960px"
              priority
            />
          ) : (
            <span
              className="absolute bottom-6 right-6 font-display font-black text-[10vw] leading-none text-[#0F0F0F]/6 select-none"
              aria-hidden="true"
            >
              {project.title.split("—")[0].trim()}
            </span>
          )}
        </div>

        {/* Process phases */}
        <ol className="divide-y divide-[#E2DFD8] border-t border-[#E2DFD8] mb-16">
          {phases.map(({ label, body }, i) => (
            <li key={label} className="flex gap-6 md:gap-12 py-7">
              <span className="text-xs text-[#E8441C] font-medium tabular-nums mt-1 shrink-0 w-4">
                0{i + 1}
              </span>
              <div>
                <p className="font-medium text-[#0F0F0F] text-sm mb-1">{label}</p>
                <p className="text-[#787878] text-sm leading-relaxed max-w-xl">{body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Screenshot grid — real or placeholder */}
        {project.images && project.images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-16">
            {project.images.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] bg-[#ECEAE4] overflow-hidden">
                <Image
                  src={src}
                  alt={`${project.title} — screenshot ${i + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 mb-16" aria-label="Project screenshots (placeholder)">
            {[0, 1, 2, 3].map(i => (
              <div key={i} className="aspect-[4/3] bg-[#ECEAE4]" aria-hidden="true" />
            ))}
          </div>
        )}

        {/* Back */}
        <div className="border-t border-[#E2DFD8] pt-10">
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
