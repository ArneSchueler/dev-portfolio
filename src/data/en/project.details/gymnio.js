import gymnioOverview from "../../../assets/images/gymnio/GYMNIO-dashboard-overview.png";

export const GYMNIO_DETAIL = {
  slug: "gymnio",

  header: {
    breadcrumb: [{ label: "UX", route: "/projects" }, { label: "Gymnio" }],
    title: "Gymnio — AI Fitness Coach",
    subtitle:
      "A dashboard concept unifying training, nutrition, and coaching into one experience.",
    links: [{ type: "behance", href: "https://github.com/placeholder/gymnio" }],
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
      media: { src: gymnioOverview, alt: "Gymnio overview" },
      chips: [
        { label: "Role", value: "Product Designer (UX/UI)" },
        { label: "Tools", value: "Figma, FigJam" },
        { label: "Focus", value: "Dashboard Design" },
        { label: "Year", value: "2025" },
      ],
      heading:
        "Concept for a modular fitness dashboard supporting clarity and motivation.",
      bullets: [
        "Training, nutrition, and progress unified",
        "Clear visual hierarchy",
        "Modular dashboard structure",
      ],
    },
    {
      id: "challenge",
      media: { src: null, alt: "Gymnio challenge" },
      heading:
        "Fitness apps often overload users and fragment key information.",
      bullets: [
        "Scattered content and navigation",
        "Low motivation due to unclear progress",
        "Missing structural clarity",
      ],
    },
    {
      id: "process",
      media: { src: null, alt: "Gymnio process" },
      heading:
        "Iterative design from low-fidelity structure to high-fidelity modular system.",
      bullets: [
        "Lo-Fi layout exploration",
        "Interaction refinement",
        "Consistent design system foundation",
      ],
    },
    {
      id: "solution",
      media: { src: null, alt: "Gymnio solution" },
      heading:
        "A structured dashboard that connects goals, plans, and progress transparently.",
      bullets: [
        "Modular widget system",
        "Clear feedback loops",
        "Unified user flow",
      ],
    },
    {
      id: "results",
      media: { src: null, alt: "Gymnio results" },
      heading:
        "A coherent concept increasing clarity and perceived motivation.",
      bullets: [
        "Improved orientation",
        "Higher transparency",
        "Learning: structure drives engagement",
      ],
    },
  ],
};
