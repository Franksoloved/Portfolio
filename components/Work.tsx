"use client";

/* ─── Work ───────────────────────────────────────────────────────────────────
   Minimal project grid.
   Filter via underline-tab style buttons.
   Cards: clean white, 1px border, neutral placeholder image.
   Hover: title colour shift.
   AnimatePresence handles filtered-out cards.
─────────────────────────────────────────────────────────────────────────── */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link  from "next/link";
import Image from "next/image";
import { projects, type Category } from "@/lib/projects";

type Filter = "All" | Category;
const FILTERS: Filter[] = ["All", "UI/UX", "Motion", "Visual Design"];
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function Work() {
  const [active, setActive] = useState<Filter>("All");

  const visible = active === "All"
    ? projects
    : projects.filter(p => p.category === active || p.additionalCategories?.includes(active as Category));

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="bg-[#F8F7F4] py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-xs tracking-[0.2em] uppercase text-[#787878] mb-3"
            >
              Selected work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.06, ease: EASE }}
              id="work-heading"
              className="font-display font-black text-[#0F0F0F] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Projects.
            </motion.h2>
          </div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-6"
            role="group"
            aria-label="Filter by category"
          >
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className={`relative text-sm pb-1 transition-colors duration-200 cursor-pointer ${
                  active === f ? "text-[#0F0F0F] font-medium" : "text-[#787878] hover:text-[#0F0F0F]"
                }`}
              >
                {f}
                {active === f && (
                  <motion.span
                    layoutId="filter-underline"
                    className="absolute bottom-0 left-0 w-full h-px bg-[#E8441C]"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2DFD8]">
          <AnimatePresence mode="popLayout">
            {visible.map(project => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="bg-[#F8F7F4]"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block"
                  aria-label={`${project.title} — ${project.category}`}
                >
                  {/* Card image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#ECEAE4]">
                    {project.coverImage ? (
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${project.coverObjectPosition ? "" : project.coverImagePosition === "center" ? "object-center" : project.coverImagePosition === "bottom" ? "object-bottom" : "object-top"}`}
                        style={project.coverObjectPosition ? { objectPosition: project.coverObjectPosition } : undefined}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <span
                        className="absolute bottom-4 right-4 font-display font-black text-7xl leading-none text-[#0F0F0F]/8 select-none"
                        aria-hidden="true"
                      >
                        {project.category === "UI/UX" ? "UI" : project.category.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-[#0F0F0F]/0 group-hover:bg-[#0F0F0F]/5 transition-colors duration-300" />
                    <span className="absolute top-4 left-4 text-xs text-[#787878] font-medium">
                      {project.year}
                    </span>
                  </div>

                  {/* Card meta */}
                  <div className="p-5 border-t border-[#E2DFD8]">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-display font-bold text-[#0F0F0F] text-base leading-snug group-hover:text-[#E8441C] transition-colors duration-200">
                        {project.title}
                      </h3>
                      <span className="text-xs text-[#787878] shrink-0 mt-0.5 font-medium uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-[#787878] text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
