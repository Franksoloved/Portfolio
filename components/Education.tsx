"use client";

/* ─── Education ──────────────────────────────────────────────────────────────
   Matilda Matsdotter — Education section.
   Two degree entries displayed as clean bordered rows.
   whileInView fade-up animation.
─────────────────────────────────────────────────────────────────────────── */

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const up = (delay = 0) => ({
  initial:    { opacity: 0, y: 16 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: EASE },
});

const degrees = [
  {
    period:      "2022 – 2025",
    degree:      "Digital Design, BSc",
    institution: "Kristianstad University",
    detail: [
      "180 credits. Focus on design and communication through digital media.",
      "Courses spanning AR/VR, AI, interaction design, graphic design, and information design.",
      "The programme combines informatics and design science, with strong foundations in both user-centred design and technical understanding.",
      "Internship completed at SOWE.se.",
    ],
  },
  {
    period:      "2021 – 2022",
    degree:      "Cultural Geography (Environmental Focus)",
    institution: "Stockholm University",
    detail: [
      "Studies covering environmental and societal challenges, GIS, landscape geography, and cultural geography.",
      "A foundation in systems thinking and sustainability that continues to shape how I approach design problems.",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="bg-[#F8F7F4] py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">

        <motion.p {...up(0)} className="text-xs tracking-[0.2em] uppercase text-[#787878] mb-12">
          Education
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Heading */}
          <div>
            <motion.h2
              {...up(0.05)}
              id="education-heading"
              className="font-display font-black text-[#0F0F0F] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Where it all<br />
              <em>began</em>.
            </motion.h2>
          </div>

          {/* Degree entries */}
          <div>
            {degrees.map(({ period, degree, institution, detail }, i) => (
              <motion.div
                key={degree}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: EASE }}
                className="border-t border-[#E2DFD8] py-8 last:border-b"
              >
                {/* Period + institution row */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="font-display font-bold text-[#0F0F0F] text-lg leading-snug mb-0.5">
                      {degree}
                    </p>
                    <p className="text-sm text-[#787878]">{institution}</p>
                  </div>
                  <span className="text-xs text-[#E8441C] font-medium tabular-nums shrink-0 mt-1">
                    {period}
                  </span>
                </div>

                {/* Detail bullets */}
                <ul className="space-y-1.5 mt-4" aria-label={`Details for ${degree}`}>
                  {detail.map((line, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="text-[#E8441C] mt-1.5 shrink-0 text-[8px]">▪</span>
                      <p className="text-[#787878] text-sm leading-relaxed">{line}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
