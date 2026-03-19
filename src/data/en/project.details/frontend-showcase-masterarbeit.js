// src/data/en/projects.details/showcase.js

export const FRONTEND_SHOWCASE_DETAIL = {
  slug: "frontend-showcase",

  header: {
    breadcrumb: [
      { label: "UX", route: "/projects" },
      { label: "Frontend Showcase" },
    ],
    title: "Frontend Showcase",
    subtitle:
      "Information visualization concept for autonomous vehicle fleets.",
    links: [
      { type: "github", href: "https://github.com/placeholder/showcase" },
      { type: "external", href: "https://example.com/showcase" },
    ],
  },

  tabs: [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "Challenge" },
    { id: "process", label: "Process" },
    { id: "solution", label: "Solution" },
    { id: "results", label: "Results" },
  ],

  content: [
    {
      id: "overview",
      media: { src: null, alt: "Showcase overview" },
      intro:
        "Dashboard concept reducing cognitive load in complex real-time systems.",
      bullets: [
        "Focus on clarity and anomaly detection",
        "Interactive data exploration",
        "Structured visual encoding",
      ],
    },
    {
      id: "challenge",
      media: { src: null, alt: "Showcase challenge" },
      intro: "Existing dashboards overwhelmed users with dense information.",
      bullets: [
        "High cognitive load",
        "Unclear prioritization",
        "Inefficient decision-making",
      ],
    },
    {
      id: "process",
      media: { src: null, alt: "Showcase process" },
      intro: "Iterative UX process with structured evaluation and refinement.",
      bullets: [
        "Low to high fidelity prototyping",
        "User-centered validation",
        "Structured evaluation methods",
      ],
    },
    {
      id: "solution",
      media: { src: null, alt: "Showcase solution" },
      intro:
        "Clear visual hierarchy and consistent encoding improve orientation and speed.",
      bullets: [
        "Color-coded status logic",
        "Timeline anomaly detection",
        "Filter and drilldown interactions",
      ],
    },
    {
      id: "results",
      media: { src: null, alt: "Showcase results" },
      intro: "Evaluation showed improved efficiency and reduced mental effort.",
      bullets: [
        "Positive evaluation results",
        "Improved anomaly recognition",
        "Learning: consistency drives trust",
      ],
    },
  ],
};
