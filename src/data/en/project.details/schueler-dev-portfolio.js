import devPortfolioHero from "../../../assets/images/dev-portfolio-hero.png";

export const SCHUELER_DEV_PORTFOLIO_DETAIL = {
  slug: "schueler-dev-portfolio",

  header: {
    breadcrumb: "Selected / schueler.dev",
    title: "schueler.dev",
    subtitle:
      "A minimal portfolio that treats UX decisions and code structure as one system.",

    links: [
      { type: "github", href: "https://github.com/ArneSchueler/dev-portfolio" },
      { type: "external", href: "https://schueler.dev" },
    ],
  },

  tabs: [
    { id: "overview", label: "Overview" },
    { id: "system", label: "System" },
    { id: "ux", label: "UX Decisions" },
    { id: "tech", label: "Tech" },
    { id: "learnings", label: "Learnings" },
  ],

  content: [
    {
      id: "overview",
      media: {
        src: devPortfolioHero,
        alt: "Portfolio preview",
      },
      chips: [
        { label: "Role", value: "Frontend / UX" },
        { label: "Type", value: "Personal brand + case study" },
        { label: "Stack", value: "React, Tailwind, Router" },
        { label: "Focus", value: "Accessibility, IA, component structure" },
      ],
      heading:
        "A minimal portfolio designed for fast scanning, predictable navigation, and structured depth—where UX decisions and implementation reinforce each other.",
      bullets: [
        "Clear navigation with a section-based layout and predictable interactions",
        "Content-driven components (data first, UI second) for scalability",
        "Accessible patterns: focus states, semantics, readable contrast, keyboard support",
        "Minimal visuals to keep attention on hierarchy, structure, and work samples",
        "Consistent detail pages to support recruiter workflows",
      ],
    },

    {
      id: "system",
      media: {
        src: null,
        alt: "Portfolio preview",
      },
      heading:
        "Built like a small design system: tokens, reusable UI patterns, and structured content data to scale without rewriting components.",
      bullets: [
        "Tokens as single source of truth for spacing, typography, and color decisions",
        "Reusable patterns (navigation, buttons, cards, tabs) shared across pages",
        "Content-first data model (projects as structured objects, not JSX)",
        "Block-based rendering approach to keep UI extensible",
      ],
    },

    {
      id: "ux",
      media: {
        src: null,
        alt: "Portfolio preview",
      },
      heading:
        "UX decisions focus on clarity and low cognitive load, optimized for portfolio reviewers who scan quickly.",
      bullets: [
        "Tab-based detail pages to avoid endless scrolling while keeping context stable",
        "Clear CTA separation (repo vs live) to match typical reviewer intent",
        "Consistent interaction states and feedback (hover, focus, active)",
        "Readable hierarchy (headings, spacing, grouping) over visual decoration",
        "Accessibility treated as baseline, not an enhancement",
      ],
    },

    {
      id: "tech",
      media: {
        src: null,
        alt: "Portfolio preview",
      },
      heading:
        "Implementation prioritizes maintainability through clear boundaries between UI components and content data.",
      bullets: [
        "React + Vite for a modular setup",
        "React Router for slug-based routing (overview → project detail)",
        "Tailwind for consistent spacing/typography utilities (token-like usage)",
        "Helpers for navigation patterns and URL synchronization where needed",
        "Project data separated into listing vs detail files for scalability",
      ],
    },

    {
      id: "learnings",
      media: {
        src: null,
        alt: "Portfolio preview",
      },
      heading:
        "Key learnings came from balancing simple navigation with a structured, extensible codebase.",
      bullets: [
        "Consistency beats novelty: a small set of well-defined patterns scales better than one-offs",
        "Data modeling early prevents refactors when adding more case studies later",
        "Accessibility is easiest when built into component APIs from the start",
        "Active state handling (tabs/routes) should follow one stable strategy to avoid edge cases",
      ],
    },
  ],
};
