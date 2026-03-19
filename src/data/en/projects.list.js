export const PROJECT_TABS = [
  { id: "selected", label: "Selected" },
  { id: "dev", label: "Development" },
  { id: "ux", label: "UX" },
];

export const PROJECT_CARDS = [
  {
    slug: "schueler-dev-portfolio",
    tabs: ["selected", "dev"],
    overview: {
      title: "schueler.dev - Portfolio",
      description:
        "Personal portfolio built to showcase UX-first frontend thinking, structured system design, and accessible user interface patterns.",
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
      title: "Gymnio — AI Fitness Coach",
      description:
        "AI Fitness Coach – Dashboard concept for structured visualization of training, nutrition, and progress.",
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
      title: "Hattendorf Kosmetik - Redesign",
      description:
        "Website redesign for a beauty studio focusing on clarity, natural aesthetics, and trust.",
      stack: ["Figma", "UX Design", "Branding"],
      links: [],
    },
  },

  {
    slug: "frontend-showcase",
    tabs: ["selected", "ux"],
    overview: {
      title: "Frontend Showcase - Master’s thesis",
      description:
        "Master’s thesis: Interactive UI/UX concept for information visualization of autonomous vehicle fleets with a focus on cognitive load reduction.",
      stack: ["Figma", "FigJam", "Research", "Information Visualization"],
      links: [],
    },
  },

  {
    slug: "tami-kita-app",
    tabs: ["ux"],
    overview: {
      title: "Tami – Childcare App",
      description:
        "Mobile application developed through a Human-Centered Design process to simplify communication between parents and educators.",
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
        "Virtual reality product experience prototype focused on immersive and structured interaction.",
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
