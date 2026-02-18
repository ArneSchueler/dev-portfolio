export const FRONTEND_SHOWCASE_DETAIL = {
  slug: "frontend-showcase",

  header: {
    breadcrumb: [
      { label: "UX", route: "/projects" },
      { label: "Frontend Showcase" },
    ],
    title: "Frontend Showcase",
    subtitle:
      "Konzept zur Informationsvisualisierung autonomer Fahrzeugflotten.",
    links: [
      { type: "github", href: "https://github.com/placeholder/showcase" },
      { type: "external", href: "https://example.com/showcase" },
    ],
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
      media: { src: null, alt: "Showcase Überblick" },
      heading:
        "Dashboard-Konzept zur Reduzierung kognitiver Belastung in komplexen Echtzeitsystemen.",
      bullets: [
        "Fokus auf Klarheit und Anomalieerkennung",
        "Interaktive Datenexploration",
        "Strukturierte visuelle Kodierung",
      ],
    },
    {
      id: "challenge",
      media: { src: null, alt: "Showcase Herausforderung" },
      heading:
        "Bestehende Dashboards überforderten Nutzende durch zu dichte Informationsdarstellung.",
      bullets: [
        "Hohe kognitive Belastung",
        "Unklare Priorisierung",
        "Ineffiziente Entscheidungsfindung",
      ],
    },
    {
      id: "process",
      media: { src: null, alt: "Showcase Prozess" },
      heading:
        "Iterativer UX-Prozess mit strukturierter Evaluation und kontinuierlicher Verfeinerung.",
      bullets: [
        "Prototyping von Low- bis High-Fidelity",
        "Nutzerzentrierte Validierung",
        "Strukturierte Evaluationsmethoden",
      ],
    },
    {
      id: "solution",
      media: { src: null, alt: "Showcase Lösung" },
      heading:
        "Klare visuelle Hierarchie und konsistente Kodierung verbessern Orientierung und Reaktionsgeschwindigkeit.",
      bullets: [
        "Farbcodierte Statuslogik",
        "Anomalieerkennung in Zeitverläufen",
        "Filter- und Drilldown-Interaktionen",
      ],
    },
    {
      id: "results",
      media: { src: null, alt: "Showcase Ergebnisse" },
      heading:
        "Die Evaluation zeigte gesteigerte Effizienz und reduzierte mentale Belastung.",
      bullets: [
        "Positive Evaluationsergebnisse",
        "Verbesserte Anomalieerkennung",
        "Learning: Konsistenz schafft Vertrauen",
      ],
    },
  ],
};
