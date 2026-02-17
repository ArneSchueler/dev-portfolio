import overviewImg from "../../../assets/images/schueler-dev-overview.png";
export const SCHUELER_DEV_PORTFOLIO_DETAIL = {
  slug: "schueler-dev-portfolio",

  header: {
    breadcrumb: [
      { label: "Selected", route: "/projects" },
      { label: "schueler.dev" },
    ],

    title: "schueler.dev",
    subtitle:
      "A portfolio built as a scalable system—UX decisions and code structure treated as one.",
    links: [
      { type: "github", href: "https://github.com/ArneSchueler/dev-portfolio" },
      { type: "external", href: "https://schueler.dev" },
    ],
  },

  tabs: [
    { id: "overview", label: "Overview" },
    { id: "goal", label: "Goal" },
    { id: "implementation", label: "Implementation" },
    { id: "tech", label: "Tech" },
    { id: "results", label: "Results" },
  ],

  content: [
    {
      id: "overview",
      media: { src: overviewImg, alt: "Portfolio overview" },
      chips: [
        { label: "Role", value: "Frontend / UX" },
        { label: "Stack", value: "React, Vite, Tailwind" },
        { label: "Focus", value: "Structure, Accessibility" },
        { label: "Year", value: "2025" },
      ],
      heading:
        "A minimal portfolio optimized for fast scanning and structured case study presentation.",
      bullets: [
        "Clear hierarchy and predictable navigation",
        "Tab-based detail pages for structured depth",
        "Projects rendered from structured data objects",
      ],
    },
    {
      id: "goal",
      media: { src: null, alt: "Portfolio goals" },
      heading:
        "Build a maintainable system that allows adding new projects without refactoring UI.",
      bullets: [
        "Consistent structure across all projects",
        "Separation of listing and detail data",
        "Accessibility and semantic structure as defaults",
      ],
    },
    {
      id: "implementation",
      media: { src: null, alt: "Portfolio implementation" },
      heading:
        "Reusable UI components and slug-based routing power a scalable project system.",
      bullets: [
        "Dynamic rendering via project slug",
        "Tab content resolved via id matching",
        "Optional fields handled without layout breaks",
      ],
    },
    {
      id: "tech",
      media: { src: null, alt: "Portfolio tech stack" },
      heading:
        "A modular frontend stack focused on maintainability and clarity.",
      bullets: [
        "React + Vite setup",
        "React Router for slug-based detail pages",
        "Tailwind for consistent spacing and typography",
      ],
    },
    {
      id: "results",
      media: { src: null, alt: "Portfolio results" },
      heading:
        "A consistent and extensible portfolio system ready for future projects.",
      bullets: [
        "Improved scalability through data modeling",
        "Stable interaction logic for tabs",
        "Reduced technical debt through structure",
      ],
    },
  ],
};
