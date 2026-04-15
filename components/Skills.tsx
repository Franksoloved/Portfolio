"use client";

/* ─── Skills & Tools ─────────────────────────────────────────────────────────
   Matilda Matsdotter — real tools and skill disciplines.
   whileInView fade-up. Left: numbered disciplines. Right: toolkit + process.
─────────────────────────────────────────────────────────────────────────── */

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const up = (delay = 0) => ({
  initial:    { opacity: 0, y: 16 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: EASE },
});

const disciplines = [
  {
    index: "01",
    title: "UI/UX Design",
    detail: "User-centred design from research and wireframes to polished, accessible interfaces.",
  },
  {
    index: "02",
    title: "Visual & Graphic Design",
    detail: "Typography, layout, and identity work for clear communication through thoughtful visual language.",
  },
  {
    index: "03",
    title: "Information Design",
    detail: "Turning complex content and data into clear, purposeful communication that guides users.",
  },
  {
    index: "04",
    title: "Interaction Design",
    detail: "Prototyping experiences that are intuitive, inclusive, and grounded in user behaviour.",
  },
  {
    index: "05",
    title: "AI-Integrated Workflow",
    detail: "Comfortable incorporating AI into every stage of the design process, from ideation to delivery, using tools like Claude Code and Figma Make to work faster and smarter.",
  },
];

/* Matilda's real toolkit */
const tools = [
  "Figma",
  "Illustrator",
  "InDesign",
  "Photoshop",
  "Canva",
  "Claude Code",
  "Figma Make",
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-white py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">

        <motion.p {...up(0)} className="text-xs tracking-[0.2em] uppercase text-[#787878] mb-12">
          Skills & tools
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Disciplines */}
          <div>
            <motion.h2
              {...up(0.05)}
              id="skills-heading"
              className="font-display font-black text-[#0F0F0F] leading-tight mb-10"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              What I bring<br />to the table.
            </motion.h2>

            <ol className="space-y-0" aria-label="Design disciplines">
              {disciplines.map(({ index, title, detail }, i) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: EASE }}
                  className="flex gap-5 items-start py-5 border-b border-[#E2DFD8] first:border-t"
                >
                  <span className="text-xs text-[#E8441C] font-medium tabular-nums mt-0.5 shrink-0">{index}</span>
                  <div>
                    <p className="font-medium text-[#0F0F0F] text-sm mb-0.5">{title}</p>
                    <p className="text-[#787878] text-sm leading-relaxed">{detail}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Tools + process */}
          <div className="flex flex-col justify-end">
            <motion.div {...up(0.3)}>
              <p className="text-xs tracking-[0.15em] uppercase text-[#787878] mb-6">My toolkit</p>

              <div className="flex flex-wrap gap-x-6 gap-y-3" role="list" aria-label="Design tools">
                {tools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.35 + i * 0.06 }}
                    role="listitem"
                    className="text-sm text-[#0F0F0F] font-medium relative group cursor-default"
                  >
                    {tool}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E8441C] transition-all duration-200 group-hover:w-full" />
                  </motion.span>
                ))}
              </div>

              <div className="mt-14 pt-8 border-t border-[#E2DFD8]">
                <p className="text-xs tracking-[0.15em] uppercase text-[#787878] mb-3">Approach</p>
                <p className="text-sm text-[#787878] leading-relaxed max-w-sm">
                  From concept to finished product. I work across the full design process.
                  I care about accessibility, sustainability, and making sure every decision
                  serves the person on the other side of the screen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
