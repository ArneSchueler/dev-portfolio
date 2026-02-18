export const GYMNIO_DETAIL = {
  slug: "gymnio",

  header: {
    breadcrumb: [{ label: "UX", route: "/projects" }, { label: "Gymnio" }],
    title: "Gymnio — KI Fitness Coach",
    subtitle:
      "Dashboard-Konzept zur Zusammenführung von Training, Ernährung und Coaching in einer Anwendung.",
    links: [{ type: "behance", href: "https://github.com/placeholder/gymnio" }],
  },

  tabs: [
    { id: "overview", label: "Überblick" },
    { id: "challenge", label: "Herausforderung" },
    { id: "process", label: "Prozess" },
    { id: "solution", label: "Lösung" },
    { id: "results", label: "Ergebnisse" },
  ],

  content: [
    {
      id: "overview",
      media: { src: null, alt: "Gymnio Überblick" },
      chips: [
        { label: "Rolle", value: "Product Designer (UX/UI)" },
        { label: "Tools", value: "Figma, FigJam" },
        { label: "Fokus", value: "Dashboard Design" },
        { label: "Jahr", value: "2025" },
      ],
      heading:
        "Konzept für ein modulares Fitness-Dashboard zur Unterstützung von Klarheit und Motivation.",
      bullets: [
        "Training, Ernährung und Fortschritt vereint",
        "Klare visuelle Hierarchie",
        "Modulare Dashboard-Struktur",
      ],
    },
    {
      id: "challenge",
      media: { src: null, alt: "Gymnio Herausforderung" },
      heading:
        "Viele Fitness-Apps überfordern Nutzende und fragmentieren zentrale Informationen.",
      bullets: [
        "Verstreute Inhalte und Navigation",
        "Geringe Motivation durch unklaren Fortschritt",
        "Fehlende strukturelle Klarheit",
      ],
    },
    {
      id: "process",
      media: { src: null, alt: "Gymnio Prozess" },
      heading:
        "Iteratives Design von Low-Fidelity-Strukturen hin zu einem High-Fidelity-System.",
      bullets: [
        "Lo-Fi Layout-Exploration",
        "Interaktionsverfeinerung",
        "Konsistente Design-System-Grundlage",
      ],
    },
    {
      id: "solution",
      media: { src: null, alt: "Gymnio Lösung" },
      heading:
        "Ein strukturiertes Dashboard verbindet Ziele, Trainingspläne und Fortschritt transparent.",
      bullets: [
        "Modulares Widget-System",
        "Klare Feedback-Schleifen",
        "Kohärenter Nutzerfluss",
      ],
    },
    {
      id: "results",
      media: { src: null, alt: "Gymnio Ergebnisse" },
      heading:
        "Ein konsistentes Konzept mit erhöhter Klarheit und wahrgenommener Motivation.",
      bullets: [
        "Verbesserte Orientierung",
        "Höhere Transparenz",
        "Learning: Struktur fördert Engagement",
      ],
    },
  ],
};
