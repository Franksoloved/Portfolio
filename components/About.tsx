"use client";

/* ─── About ──────────────────────────────────────────────────────────────────
   Bio, facts, and a compact education footnote.
─────────────────────────────────────────────────────────────────────────── */

import { motion } from "framer-motion";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const up = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: EASE },
});

const facts = [
  {
    index: "01",
    text: "I hold a degree in digital design. Lately my focus has been on how AI tools can extend what a designer can do, something I explored hands-on working with Forecasterly.",
  },
  {
    index: "02",
    text: "UX/UI design is my core focus. I also have experience in visual design, information design, and interaction design.",
  },
  {
    index: "03",
    text: "Design internship completed at SOWE.se, moving from brief to concept to finished product.",
  },
];

const education = [
  { period: "2022–2025", degree: "Digital Design, BSc", institution: "Kristianstad University" },
  { period: "2021–2022", degree: "Human Geography (Environmental Focus)", institution: "Stockholm University" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">

        <motion.p {...up(0)} className="text-xs tracking-[0.2em] uppercase text-[#787878] mb-12">
          About
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Left */}
          <div>
            <motion.h2
              {...up(0.05)}
              id="about-heading"
              className="font-display font-black text-[#0F0F0F] leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Get to
              <br /><em>know me.</em>
            </motion.h2>

            <motion.p {...up(0.1)} className="text-[#787878] text-base leading-relaxed mb-4">
              I&apos;m Matilda, a digital designer with a bachelor&apos;s degree from Kristianstad
              University, where I studied the intersection of people, technology, and design. Most
              recently I worked with Forecasterly, an AI-native financial planning platform, where
              I designed their full website in Figma and built it with Claude Code, as well as
              producing motion graphics and brand assets. Before that, I worked with SOWE, a
              Swedish nonprofit supporting women and girls in Uganda, creating print materials,
              social media content, and an advent calendar campaign as part of a three-person
              design team.
            </motion.p>

            <motion.p {...up(0.15)} className="text-[#787878] text-base leading-relaxed mb-10">
              Before design, I spent eight years in leadership roles in the restaurant industry
              in Sweden and Australia. That background gave me a strong foundation in
              problem-solving and understanding what people need, skills I bring directly
              into my design practice.
            </motion.p>

            {/* Compact education */}
            <motion.div {...up(0.2)}>
              <p className="text-xs tracking-[0.15em] uppercase text-[#787878] mb-4">Education</p>
              <ul className="space-y-0" aria-label="Education">
                {education.map(({ period, degree, institution }) => (
                  <li key={degree} className="flex items-start justify-between gap-6 border-t border-[#E2DFD8] py-3 last:border-b">
                    <div>
                      <p className="text-sm font-medium text-[#0F0F0F]">{degree}</p>
                      <p className="text-xs text-[#787878]">{institution}</p>
                    </div>
                    <span className="text-xs text-[#E8441C] tabular-nums shrink-0 mt-0.5">{period}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-10">

            {/* Portrait */}
            <motion.div {...up(0.1)} className="relative w-full aspect-[3/4] bg-[#F0EEE9] overflow-hidden">
              <Image
                src="/matilda.JPG"
                alt="Matilda Matsdotter"
                fill
                className="object-cover object-top scale-x-[-1]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>

            {/* Facts */}
            <motion.ul {...up(0.2)} className="space-y-0" role="list" aria-label="Personal facts">
              {facts.map(({ index, text }) => (
                <li key={index} className="flex gap-5 items-start border-t border-[#E2DFD8] pt-5 pb-5 last:border-b">
                  <span className="text-xs text-[#E8441C] font-medium tabular-nums mt-0.5 shrink-0">{index}</span>
                  <p className="text-[#0F0F0F] text-sm leading-relaxed">{text}</p>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
