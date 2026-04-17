import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

/* ─── Fonts ─────────────────────────────────────────────────────────────────
   Playfair Display — editorial serif for headings (italic + bold variants)
   Inter            — clean, neutral sans-serif for all body text & UI
─────────────────────────────────────────────────────────────────────────── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matilda Matsdotter, Digital Designer",
  description:
    "Portfolio of Matilda Matsdotter, digital designer specialising in UI/UX, visual design, and information design.",
  icons: {
    icon: "/logga.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
