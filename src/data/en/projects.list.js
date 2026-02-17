export const PROJECT_TABS = [
  { id: "selected", label: "Selected" },
  { id: "dev", label: "Dev" },
  { id: "ux", label: "UX" },
];

export const PROJECTS = [
  {
    slug: "schueler-dev-portfolio",
    tabs: ["selected", "dev"],
    overview: {
      title: "schueler.dev Portfolio",
      description:
        "Personal portfolio built to showcase UX-first frontend thinking, system structure, and accessible UI patterns.",
      stack: ["React", "Vite", "Tailwind CSS", "React Router"],
      links: [
        {
          type: "github",
          href: "https://github.com/ArneSchueler/dev-portfolio",
        },
        { type: "external", href: "https://schueler.dev" },
      ],
    },
  },

  {
    slug: "gymnio",
    tabs: ["selected", "ux"],
    overview: {
      title: "Gymnio",
      description:
        "AI Fitness Coach – Dashboard-Konzept zur strukturierten Darstellung von Training, Ernährung und Fortschritt.",
      stack: ["Figma", "FigJam", "UX Design"],
      links: [
        {
          type: "behance",
          href: "https://www.behance.net/gallery/234946097/GYMNIO-Your-AI-fitness-coach",
        },
      ],
    },
  },

  {
    slug: "hattendorf-kosmetik",
    tabs: ["ux"],
    overview: {
      title: "Hattendorf Kosmetik",
      description:
        "Webdesign-Redesign für ein Kosmetikstudio mit Fokus auf Klarheit, Natürlichkeit und Vertrauen.",
      stack: ["Figma", "UX Design", "Branding"],
      links: [],
    },
  },

  {
    slug: "frontend-showcase",
    tabs: ["selected", "ux"],
    overview: {
      title: "Frontend Showcase",
      description:
        "Masterarbeit: Interaktives UI/UX-Konzept zur Informationsvisualisierung autonomer Fahrzeugflotten mit Fokus auf kognitive Entlastung.",
      stack: ["Figma", "FigJam", "Research", "Information Visualization"],
      links: [],
    },
  },

  {
    slug: "tami-kita-app",
    tabs: ["ux"],
    overview: {
      title: "Tami – Kita App",
      description:
        "Mobile App im Human-Centered Design Prozess zur Vereinfachung der Kommunikation zwischen Eltern und Erzieher:innen.",
      stack: ["Figma", "Miro", "UX Research", "HCD"],
      links: [],
    },
  },

  {
    slug: "bicycleshop-vr",
    tabs: ["dev"],
    overview: {
      title: "BicycleShop VR",
      description: "VR product experience prototype with focus on interaction.",
      stack: ["Unity", "C#", "XR"],
      links: [
        { type: "github", href: "https://github.com/..." },
        { type: "external", href: "https://..." },
      ],
    },
  },
];

// currently not relevant projects

// {
//   slug: "behance-case",
//   tabs: ["ux"],
//   overview: {
//     title: "Case Study",
//     description:
//       "UX case study focusing on information architecture and user flows.",
//     stack: ["Research", "IA", "Flows", "Wireframes"],
//     links: [{ type: "behance", href: "https://behance.net/..." }],
//   },
// },
