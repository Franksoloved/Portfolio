"use client";

/* ─── Nav ────────────────────────────────────────────────────────────────────
   Fixed minimal nav. Transparent at top, frosted on scroll.
   Desktop: name left, links right. Mobile: full-screen overlay.
─────────────────────────────────────────────────────────────────────────── */

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "About",   href: "#about"   },
  { label: "Work",    href: "#work"    },
  { label: "Skills",  href: "#skills"  },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#F8F7F4]/90 backdrop-blur-sm border-b border-[#E2DFD8]" : ""
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Wordmark */}
          <button
            onClick={() => scrollTo("#hero")}
            className="font-display text-sm font-bold tracking-tight text-[#0F0F0F] hover:text-[#E8441C] transition-colors duration-200"
            aria-label="Back to top"
          >
            Matilda Matsdotter<span className="text-[#E8441C]">.</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8" role="list">
            {links.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className="relative text-sm text-[#787878] hover:text-[#0F0F0F] transition-colors duration-200 group cursor-pointer"
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E8441C] transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block h-px w-6 bg-[#0F0F0F] transition-transform duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-px bg-[#0F0F0F] transition-all duration-200 ${menuOpen ? "w-0 opacity-0" : "w-6"}`} />
            <span className={`block h-px w-6 bg-[#0F0F0F] transition-transform duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#F8F7F4] flex flex-col justify-center px-10 md:hidden"
          >
            <ul className="flex flex-col gap-6" role="list">
              {links.map(({ label, href }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => scrollTo(href)}
                    className="font-display font-bold text-4xl text-[#0F0F0F] hover:text-[#E8441C] transition-colors"
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
