export const FRONTEND_SHOWCASE_DETAIL = {
  slug: "frontend-showcase-masterarbeit",

  header: {
    breadcrumb: "Projekte / Frontend Showcase",
    title: "Frontend Showcase",
    subtitle:
      "Informationsvisualisierung für autonome Fahrzeugflotten – verständlich, effizient und visuell strukturiert.",
    heroImage: null,
    links: [],
  },

  tabs: [
    { id: "challenge", label: "Challenge" },
    { id: "process", label: "Process" },
    { id: "infovis", label: "InfoViz" },
    { id: "evaluation", label: "Evaluation" },
    { id: "results", label: "Results" },
    { id: "outlook", label: "Outlook" },
  ],

  content: [
    {
      id: "challenge",
      media: {
        src: null,
        alt: "Portfolio preview",
      },
      chips: [
        { label: "Rolle", value: "UX/UI-Designer" },
        { label: "Tools", value: "Figma, FigJam" },
        { label: "Fokus", value: "Informationsvisualisierung" },
        { label: "Jahr", value: "2024" },
      ],
      heading:
        "Vorhandene Systeme waren informationsreich, aber visuell überladen. Komplexe Echtzeitdaten mussten klar und intuitiv dargestellt werden.",
      bullets: [
        "Hohe Datenkomplexität bei Echtzeitinformationen",
        "Zu viele gleichwertige Signale ohne Priorisierung",
        "Fehlende visuelle Hierarchie und Navigationsklarheit",
        "Ziel: visuell ansprechend, funktional und effizient navigierbar",
      ],
    },
    {
      id: "process",
      media: {
        src: null,
        alt: "Portfolio preview",
      },
      heading:
        "Der Entwicklungsprozess folgte einem iterativen UX-Vorgehen mit User-Centered Design als Leitlinie.",
      bullets: [
        "Low-Fidelity-Prototyping zur Layout- und Strukturvalidierung",
        "High-Fidelity-Prototyping in Figma mit interaktiven Elementen",
        "Nutzertests und Feedback-Schleifen zur kontinuierlichen Optimierung",
      ],
    },
    {
      id: "infovis",
      media: {
        src: null,
        alt: "Portfolio preview",
      },
      heading:
        "Reduktion kognitiver Belastung durch visuelle Kodierung und Diagramm-Patterns zur schnellen Erkennung kritischer Informationen.",
      bullets: [
        "Farbkodierte Statusanzeigen zur schnellen Priorisierung",
        "Timeline-Visualisierung zur Erkennung von Anomalien",
        "Bewusste Hierarchie durch Kontrast, Gewichtung und Gruppierung",
      ],
    },
    {
      id: "evaluation",
      media: {
        src: null,
        alt: "Portfolio preview",
      },
      heading:
        "Evaluation mit UEQ und NASA-TLX zur Messung von Effizienz und mentaler Belastung.",
      bullets: [
        "UEQ: positive UX-Werte in zentralen Faktoren",
        "NASA-TLX: geringe mentale Belastung",
        "Benutzer:innen empfanden Visualisierung als hilfreich für die Arbeit",
      ],
    },
    {
      id: "results",
      media: {
        src: null,
        alt: "Portfolio preview",
      },
      heading:
        "Die Ergebnisse zeigen, dass gute Informationsvisualisierung die User Experience signifikant verbessert.",
      bullets: [
        "Klare visuelle Kodierung reduziert Frustration",
        "Interaktive Elemente erhöhen Kontrolle und Effizienz",
        "Konsistentes Farbsystem steigert Orientierung und Vertrauen",
      ],
    },
    {
      id: "outlook",
      heading:
        "Zukünftige Erweiterungen könnten Machine Learning und Predictive Analytics integrieren, um Muster automatisch zu erkennen.",
    },
  ],
};
