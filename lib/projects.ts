/* ─── Project data ──────────────────────────────────────────────────────────
   Dummy project data used throughout the Work section.
   Each project has a unique slug used for the detail page route.
─────────────────────────────────────────────────────────────────────────── */

export type Category = "UI/UX" | "Branding" | "Motion" | "Visual Design";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Category;
  description: string;
  /** Background color for the placeholder card image */
  cardColor: string;
  /** Accent color for the category tag */
  tagColor: string;
  tags: string[];
  year: string;
  /** Additional categories this project should appear under when filtering */
  additionalCategories?: Category[];
  /** Optional real cover image path (in /public) */
  coverImage?: string;
  /** How to position the cover image in the card: top (default), center, bottom */
  coverImagePosition?: "top" | "center" | "bottom";
  /** Fine-grained CSS object-position override, e.g. "30% center" */
  coverObjectPosition?: string;
  /** Optional real screenshots for the detail page */
  images?: string[];
  /** Optional full case study content */
  caseStudy?: {
    intro: string;
    phases: { label: string; body: string }[];
  };
}

export const projects: Project[] = [
  {
    id: "3",
    slug: "forecasterly",
    title: "Forecasterly: Website",
    category: "UI/UX",
    description:
      "Website for an AI-native FP&A platform helping organisations replace spreadsheets and make their financial data truly AI-ready. Designed in Figma, built with Claude Code.",
    cardColor: "#EDE8FF",
    tagColor: "#6B21A8",
    tags: ["Figma", "Claude Code", "B2B SaaS"],
    year: "2026",
    coverImage: "/projects/forecasterly/cover.png",
    coverObjectPosition: "60% center",
    caseStudy: {
      intro:
        "Forecasterly is an AI-powered, cloud-based Financial Planning & Analysis tool designed to replace spreadsheets for modern finance teams. I was brought in to design and build their website, working from brief to finished product using Figma for design and Claude Code to build the React site.",
      phases: [
        {
          label: "Discovery",
          body: "Worked closely with the Forecasterly team to understand their product, target audience (finance professionals at growing organisations), and competitive landscape. Defined the key messages: AI-powered insights, replacing legacy spreadsheet workflows, real-time collaboration.",
        },
        {
          label: "Design",
          body: "Designed all pages in Figma: hero, features, testimonials, pricing, and CTA sections. The visual language balances credibility with approachability: clean typographic hierarchy, a bold orange brand accent, and product screenshots front and centre.",
        },
        {
          label: "Build",
          body: "Used Figma Make to translate designs directly into a React/Vite site. Built interactive sections including a live AI chatbot demo, scroll-driven animations, rotating hero messages, and a sticky testimonials layout.",
        },
        {
          label: "Delivery",
          body: "Delivered a fully responsive, production-ready marketing site. Shortly after launch, Forecasterly announced a partnership with Moore Insight, a key conversion milestone the site was built to support.",
        },
      ],
    },
  },
  {
    id: "3b",
    slug: "forecasterly-motion",
    title: "Forecasterly: Motion & Brand",
    category: "Motion",
    description:
      "Marketing video, partnership announcement graphic, and social assets for Forecasterly, bringing the brand to life beyond the website.",
    cardColor: "#FFF0E8",
    tagColor: "#E8441C",
    tags: ["Canva", "Procreate", "Social"],
    year: "2026",
    coverImage: "/projects/forecasterly-motion/cover.png",
    coverImagePosition: "center",
  },
  {
    id: "3c",
    slug: "sowe",
    title: "SOWE: Print & Social Design",
    category: "Visual Design",
    description:
      "Social media and print design for SOWE, a Swedish nonprofit supporting women and girls in Uganda. Produced Instagram content, an advent calendar series, and donation certificates as part of a three-person design team.",
    cardColor: "#FFF8E8",
    tagColor: "#B8860B",
    tags: ["Print", "Social Media", "Nonprofit"],
    year: "2024/2025",
    coverImage: "/projects/sowe/cover.png",
  },
  {
    id: "interastra",
    slug: "interastra",
    title: "InterAstra: AR Game Design",
    category: "UI/UX",
    description:
      "Client case for InterAstra. Five sprints of concept development for an AR pervasive game, exploring how digital objects can interact with the physical world.",
    cardColor: "#0f0f1a",
    tagColor: "#D4622A",
    tags: ["AR", "Pervasive Gaming", "Figma", "Reality Composer"],
    year: "2024",
    additionalCategories: ["Motion"],
    coverImage: "/projects/interastra/cover.png",
  },
  {
    id: "elin-victor",
    slug: "elin-victor",
    title: "Elin & Victor: Wedding Identity",
    category: "Visual Design",
    description:
      "Visual design for a winter wedding in Falun — including the wedding website built in Wix and save the date communication designed in Canva, unified by a palette of green, gold and beige.",
    cardColor: "#E8EDE6",
    tagColor: "#3B5E3F",
    tags: ["Wix", "Canva", "Web Design"],
    year: "2024",
    coverImage: "/projects/elin-victor/cover.png",
    coverImagePosition: "center",
  },
  {
    id: "nudged",
    slug: "nudged-or-not",
    title: "Nudged or Not",
    category: "Visual Design",
    description:
      "A three-person design project exploring ethical digital nudging, resulting in a seven-principle manifest and an interactive flowchart illustrating how design choices shape user behaviour in e-commerce.",
    cardColor: "#EAF0F5",
    tagColor: "#2D5F7A",
    tags: ["Graphic Design", "Information Design", "Ethics"],
    year: "2023",
    coverImage: "/projects/nudged-or-not/cover.png",
  },
];
