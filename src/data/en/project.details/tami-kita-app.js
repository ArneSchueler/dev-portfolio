// src/data/en/projects.details/tami.js

export const TAMI_KITA_APP_DETAIL = {
  slug: "tami-kita-app",

  header: {
    breadcrumb: [{ label: "UX", route: "/projects" }, { label: "Tami" }],
    title: "Tami",
    subtitle:
      "A childcare app concept developed through a structured Human-Centered Design process to improve daily communication and organization.",
    links: [
      { type: "github", href: "https://github.com/placeholder/tami" },
      { type: "external", href: "https://example.com/tami-case-study" },
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
      media: { src: null, alt: "Tami app overview" },
      chips: [
        { label: "Role", value: "UX Designer" },
        { label: "Method", value: "Human-Centered Design" },
        { label: "Standard", value: "ISO 9241-210" },
        { label: "Focus", value: "Accessibility & Daily Usability" },
        { label: "Year", value: "2024" },
      ],
      intro:
        "Tami is a childcare app concept designed to simplify communication and coordination between parents and educators in everyday kindergarten routines.",
      bullets: [
        "Centralized platform for messages, absences, and appointments",
        "Clear separation of core tasks to reduce friction",
        "Accessible interface designed for quick daily use",
        "Calm visual language to build trust and clarity",
      ],
    },

    {
      id: "challenge",
      media: {
        src: null,
        caption: "Mapping of daily communication challenges in childcare",
        alt: "Tami challenge context",
      },
      intro:
        "Daily communication in childcare environments is time-sensitive, fragmented, and often handled through inefficient channels.",
      bullets: [
        "Absence reporting is often handled by phone calls",
        "Pickup permissions and changes are error-prone",
        "Parents and educators lack a unified overview",
        "Existing tools do not fully address daily workflow needs",
      ],
    },

    {
      id: "process",
      media: {
        src: null,
        caption:
          "Personas and usage scenarios from the Human-Centered Design process",
        alt: "Tami research and personas",
      },
      intro:
        "The concept was developed through a structured Human-Centered Design process based on research and validated scenarios.",
      bullets: [
        "Online survey to identify needs and pain points",
        "Personas representing parents, educators, and dual roles",
        "Usage scenarios to validate navigation and task flow",
        "Iterative refinement from wireframes to high-fidelity screens",
      ],
    },

    {
      id: "solution",
      media: {
        src: null,
        caption:
          "Accessible interface concept with flat information architecture",
        alt: "Tami interface concept",
      },
      intro:
        "A flat information architecture combined with accessibility-first design principles improves clarity and task efficiency.",
      bullets: [
        "Each core function has a dedicated, predictable section",
        "Large touch targets and strong contrast for accessibility",
        "Warm color palette to communicate trust and calmness",
        "Reduced visual noise to support quick daily interactions",
      ],
    },

    {
      id: "results",
      media: {
        src: null,
        caption:
          "Evaluation results showing improved clarity and routine efficiency",
        alt: "Tami evaluation results",
      },
      intro:
        "Evaluation indicates strong acceptance and improved clarity in everyday childcare coordination tasks.",
      bullets: [
        "Positive feedback on usability and structure",
        "Reduced perceived effort for routine tasks",
        "Improved transparency between parents and educators",
        "Learning: predictable structure improves trust and adoption",
      ],
    },
  ],
};
