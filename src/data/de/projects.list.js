export const PROJECT_TABS = [
  { id: "selected", label: "Ausgewählte" },
  { id: "dev", label: "Entwicklung" },
  { id: "ux", label: "UX" },
];

export const PROJECT_CARDS = [
  {
    slug: "schueler-dev-portfolio",
    tabs: ["selected", "dev"],
    overview: {
      title: "schueler.dev Portfolio",
      description:
        "Persönliches Portfolio zur Darstellung von UX-orientiertem Frontend-Denken, Systemstruktur und barrierefreien UI-Mustern.",
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
      title: "Gymnio — KI Fitness Coach",
      description:
        "KI Fitness Coach – Dashboard-Konzept zur strukturierten Darstellung von Training, Ernährung und Fortschritt.",
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
        "Mobile App im Human-Centered-Design-Prozess zur Vereinfachung der Kommunikation zwischen Eltern und Erzieher:innen.",
      stack: ["Figma", "Miro", "UX Research", "Human-Centered Design"],
      links: [],
    },
  },

  {
    slug: "bicycleshop-vr",
    tabs: ["dev"],
    overview: {
      title: "BicycleShop VR",
      description:
        "VR-Prototyp für eine Produkt- und Werkstatterfahrung mit Fokus auf Interaktion.",
      stack: ["Unity", "C#", "XR"],
      links: [
        {
          type: "external",
          href: "https://drive.google.com/file/d/1VwHO-o0TO013wi_6vUDKDh19M4beqEce/view?usp=sharing",
        },
      ],
    },
  },
];

export const PROJECTS_SECTION = {
  title: "Projekte",
};
