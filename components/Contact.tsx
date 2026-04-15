"use client";

/* ─── Contact ────────────────────────────────────────────────────────────────
   Minimal contact section. Line inputs, whileInView fade-up.
   No backend — success state shown on submit.
─────────────────────────────────────────────────────────────────────────── */

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const up = (delay = 0) => ({
  initial:    { opacity: 0, y: 16 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: EASE },
});

const inputCls = `w-full bg-transparent border-0 border-b border-[#E2DFD8] pb-3 text-sm
  text-[#0F0F0F] placeholder-[#BBBAAF]
  focus:outline-none focus:border-[#0F0F0F] transition-colors duration-200`;

// ── Formspree form ID ─────────────────────────────────────────────────────────
const FORMSPREE_ID = "mwvavnpj";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState(false);
  const [loading, setLoading]     = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#F8F7F4] py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">

        <motion.p {...up(0)} className="text-xs tracking-[0.2em] uppercase text-[#787878] mb-12">
          Get in touch
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left */}
          <div>
            <motion.h2
              {...up(0.05)}
              id="contact-heading"
              className="font-display font-black text-[#0F0F0F] leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Let&apos;s make<br />
              something <em>great</em>.
            </motion.h2>

            <motion.p {...up(0.1)} className="text-[#787878] text-sm leading-relaxed mb-10 max-w-xs">
              Available for freelance projects, collaborations, and full-time roles.
              Drop me a line and I&apos;ll get back to you within 24 hours.
            </motion.p>

            <motion.div {...up(0.15)}>
              <a
                href="https://www.linkedin.com/in/matildamatsdotter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-t border-b border-[#E2DFD8] py-3 group"
              >
                <span className="text-sm font-medium text-[#0F0F0F]">LinkedIn</span>
                <span className="text-xs text-[#787878] group-hover:text-[#E8441C] transition-colors">/in/matildamatsdotter</span>
              </a>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div {...up(0.15)}>
            {submitted ? (
              <div className="py-12 text-center">
                <p className="font-display font-bold text-2xl text-[#0F0F0F] mb-2">Message received.</p>
                <p className="text-[#787878] text-sm mb-6">I&apos;ll be in touch soon.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                  className="text-xs text-[#787878] underline underline-offset-4 hover:text-[#0F0F0F] transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={async (e: FormEvent) => {
                  e.preventDefault();
                  setLoading(true);
                  setError(false);
                  try {
                    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                      method: "POST",
                      headers: { "Content-Type": "application/json", Accept: "application/json" },
                      body: JSON.stringify(form),
                    });
                    if (res.ok) {
                      setSubmitted(true);
                    } else {
                      setError(true);
                    }
                  } catch {
                    setError(true);
                  } finally {
                    setLoading(false);
                  }
                }}
                noValidate
                aria-label="Contact form"
                className="space-y-8"
              >
                <div>
                  <label htmlFor="c-name" className="block text-xs tracking-[0.12em] uppercase text-[#787878] mb-3">Name</label>
                  <input id="c-name" type="text" autoComplete="name" required value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-xs tracking-[0.12em] uppercase text-[#787878] mb-3">Email</label>
                  <input id="c-email" type="email" autoComplete="email" required value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-message" className="block text-xs tracking-[0.12em] uppercase text-[#787878] mb-3">Message</label>
                  <textarea id="c-message" rows={4} required value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className={`${inputCls} resize-none`} />
                </div>
                {error && (
                  <p className="text-xs text-[#E8441C]">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#0F0F0F] border-b border-[#0F0F0F] pb-0.5 hover:text-[#E8441C] hover:border-[#E8441C] transition-colors duration-200 disabled:opacity-50"
                >
                  {loading ? "Sending…" : "Send message"}
                  {!loading && (
                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
