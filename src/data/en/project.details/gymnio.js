import gymnioOverview from "../../../assets/images/gymnio/GYMNIO-dashboard-overview.png";

export const GYMNIO_DETAIL = {
  slug: "gymnio",

  header: {
    breadcrumb: [{ label: "UX", route: "/projects" }, { label: "Gymnio" }],
    title: "Gymnio — AI Fitness Coach",
    subtitle:
      "Dashboard concept consolidating training, nutrition, and coaching into one single application.",
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
      intro:
        "Concept for a modular fitness dashboard to support clarity and motivation.",
      bullets: [
        "Training, nutrition, and progress united",
        "Clear visual hierarchy",
        "Modular dashboard structure",
      ],
    },
    {
      id: "challenge",
      media: { src: null, alt: "Gymnio challenge" },
      intro:
        "Many fitness apps overwhelm users and fragment essential information.",
      bullets: [
        "Scattered content and navigation",
        "Low motivation due to unclear progress",
        "Lack of structural clarity",
      ],
    },
    {
      id: "process",
      media: { src: null, alt: "Gymnio process" },
      intro:
        "Iterative design shifting from low-fidelity structures to a high-fidelity system.",
      bullets: [
        "Lo-Fi layout exploration",
        "Interaction refinement",
        "Consistent design system foundation",
      ],
    },
    {
      id: "solution",
      media: { src: null, alt: "Gymnio solution" },
      intro:
        "A structured dashboard transparently connects goals, training plans, and progress.",
      bullets: [
        "Modular widget system",
        "Clear feedback loops",
        "Coherent user flow",
      ],
    },
    {
      id: "results",
      media: { src: null, alt: "Gymnio results" },
      intro:
        "A consistent concept with increased clarity and perceived motivation.",
      bullets: [
        "Improved orientation",
        "Higher transparency",
        "Learning: Structure drives engagement",
      ],
    },
  ],
};
