import overviewImg from "../../../assets/images/schueler-dev-overview.png";

export const SCHUELER_DEV_PORTFOLIO_DETAIL = {
  slug: "schueler-dev-portfolio",

  header: {
    breadcrumb: [
      { label: "Ausgewählte", route: "/projects" },
      { label: "schueler.dev" },
    ],
    title: "schueler.dev",
    subtitle:
      "Ein Portfolio als skalierbares System – UX-Entscheidungen und Code-Struktur werden als Einheit gedacht.",
    links: [
      { type: "github", href: "https://github.com/ArneSchueler/dev-portfolio" },
      { type: "external", href: "https://schueler.dev" },
    ],
  },

  tabs: [
    { id: "overview", label: "Überblick" },
    { id: "goal", label: "Ziel" },
    { id: "implementation", label: "Umsetzung" },
    { id: "tech", label: "Tech" },
    { id: "results", label: "Ergebnisse" },
  ],

  content: [
    {
      id: "overview",
      media: { src: overviewImg, alt: "Portfolio Überblick" },
      chips: [
        { label: "Rolle", value: "Frontend / UX" },
        { label: "Stack", value: "React, Vite, Tailwind" },
        { label: "Fokus", value: "Struktur, Barrierefreiheit" },
        { label: "Jahr", value: "2025" },
      ],
      heading:
        "Minimalistisches Portfolio, optimiert für schnelles Erfassen und strukturierte Case-Study-Darstellung.",
      bullets: [
        "Klare Hierarchie und vorhersehbare Navigation",
        "Tab-basierte Detailseiten für strukturierte Tiefe",
        "Projekte werden aus strukturierten Datenobjekten gerendert",
      ],
    },
    {
      id: "goal",
      media: { src: null, alt: "Portfolio Ziel" },
      heading:
        "Aufbau eines wartbaren Systems zur Erweiterung ohne UI-Refactoring.",
      bullets: [
        "Konsistente Struktur über alle Projekte hinweg",
        "Trennung von Listen- und Detaildaten",
        "Barrierefreiheit und semantische Struktur als Standard",
      ],
    },
    {
      id: "implementation",
      media: { src: null, alt: "Portfolio Umsetzung" },
      heading:
        "Wiederverwendbare UI-Komponenten und slug-basiertes Routing ermöglichen Skalierbarkeit.",
      bullets: [
        "Dynamisches Rendering über Projekt-Slug",
        "Tab-Inhalte über ID-Matching aufgelöst",
        "Optionale Felder ohne Layout-Brüche verarbeitet",
      ],
    },
    {
      id: "tech",
      media: { src: null, alt: "Portfolio Tech Stack" },
      heading:
        "Modularer Frontend-Stack mit Fokus auf Wartbarkeit und Klarheit.",
      bullets: [
        "React + Vite Setup",
        "React Router für slug-basierte Detailseiten",
        "Tailwind für konsistente Abstände und Typografie",
      ],
    },
    {
      id: "results",
      media: { src: null, alt: "Portfolio Ergebnisse" },
      heading:
        "Konsistentes und erweiterbares Portfolio-System für zukünftige Projekte.",
      bullets: [
        "Verbesserte Skalierbarkeit durch Datenmodellierung",
        "Stabile Interaktionslogik für Tabs",
        "Reduzierte technische Schulden durch Struktur",
      ],
    },
  ],
};
