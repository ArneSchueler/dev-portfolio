// src/data/en/projects.details/hattendorf.js

export const HATTENDORF_DETAIL = {
  slug: "hattendorf-kosmetik",

  header: {
    breadcrumb: [{ label: "UX", route: "/projects" }, { label: "Hattendorf" }],
    title: "Hattendorf Kosmetik — Website Redesign",
    subtitle:
      "A calmer and clearer website concept improving brand perception and trust.",
    links: [
      { type: "github", href: "https://github.com/placeholder/hattendorf" },
      { type: "external", href: "https://example.com/hattendorf" },
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
      media: { src: null, alt: "Hattendorf overview" },
      chips: [
        { label: "Role", value: "UX / UI Designer" },
        { label: "Project Type", value: "Website Redesign Concept" },
        { label: "Focus", value: "Brand Perception & Clarity" },
        { label: "Tools", value: "Figma" },
        { label: "Year", value: "2025" },
      ],
      heading:
        "Redesign focused on clarity, calm composition, and premium brand perception.",
      bullets: [
        "Improved visual hierarchy",
        "Reduced cognitive load",
        "Brand-consistent structure",
      ],
    },
    {
      id: "challenge",
      media: { src: null, alt: "Hattendorf challenge" },
      heading:
        "Previous template restricted structure and reduced perceived professionalism.",
      bullets: [
        "Rigid layout constraints",
        "Inconsistent typography",
        "Weak first impression",
      ],
    },
    {
      id: "process",
      media: { src: null, alt: "Hattendorf process" },
      heading:
        "Research, wireframes, and prototyping guided the redesign direction.",
      bullets: [
        "Audit of existing content",
        "Rebuilt information hierarchy",
        "Validated visual system through prototyping",
      ],
    },
    {
      id: "solution",
      media: { src: null, alt: "Hattendorf solution" },
      heading:
        "A minimal layout using whitespace and structured components to increase trust.",
      bullets: [
        "Clear service navigation",
        "Consistent typographic scale",
        "Improved contact accessibility",
      ],
    },
    {
      id: "results",
      media: { src: null, alt: "Hattendorf results" },
      heading: "A coherent redesign strengthening trust and clarity.",
      bullets: [
        "Improved usability",
        "Higher perceived quality",
        "Learning: structure shapes brand perception",
      ],
    },
  ],
};
