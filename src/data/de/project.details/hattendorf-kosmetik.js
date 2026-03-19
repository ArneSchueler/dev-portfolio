export const HATTENDORF_DETAIL = {
  slug: "hattendorf-kosmetik",

  header: {
    breadcrumb: [{ label: "UX", route: "/projects" }, { label: "Hattendorf" }],
    title: "Hattendorf Kosmetik — Website Redesign",
    subtitle:
      "Konzept für eine ruhigere und klarere Website zur Stärkung von Markenwahrnehmung und Vertrauen.",
    links: [
      { type: "github", href: "https://github.com/placeholder/hattendorf" },
      { type: "external", href: "https://example.com/hattendorf" },
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
      media: { src: null, alt: "Hattendorf Überblick" },
      chips: [
        { label: "Rolle", value: "UX / UI Designer" },
        { label: "Projekttyp", value: "Website Redesign Konzept" },
        { label: "Fokus", value: "Markenwahrnehmung & Klarheit" },
        { label: "Tools", value: "Figma" },
        { label: "Jahr", value: "2025" },
      ],
      intro:
        "Redesign mit Fokus auf Klarheit, ruhige Komposition und hochwertige Markenwahrnehmung.",
      bullets: [
        "Verbesserte visuelle Hierarchie",
        "Reduzierte kognitive Belastung",
        "Markenkonforme Struktur",
      ],
    },
    {
      id: "challenge",
      media: { src: null, alt: "Hattendorf Herausforderung" },
      intro:
        "Die bestehende Template-Struktur schränkte Gestaltungsspielraum und Professionalität ein.",
      bullets: [
        "Starre Layout-Vorgaben",
        "Inkonsistente Typografie",
        "Schwacher erster Eindruck",
      ],
    },
    {
      id: "process",
      media: { src: null, alt: "Hattendorf Prozess" },
      intro:
        "Analyse, Wireframes und Prototyping definierten die neue Gestaltungsrichtung.",
      bullets: [
        "Audit bestehender Inhalte",
        "Neuaufbau der Informationshierarchie",
        "Validierung des visuellen Systems durch Prototypen",
      ],
    },
    {
      id: "solution",
      media: { src: null, alt: "Hattendorf Lösung" },
      intro:
        "Minimalistisches Layout mit Weißraum und strukturierten Komponenten zur Vertrauenssteigerung.",
      bullets: [
        "Klare Service-Navigation",
        "Konsistente typografische Skala",
        "Verbesserte Kontaktzugänglichkeit",
      ],
    },
    {
      id: "results",
      media: { src: null, alt: "Hattendorf Ergebnisse" },
      intro:
        "Ein kohärentes Redesign mit stärkerem Vertrauen und höherer Klarheit.",
      bullets: [
        "Verbesserte Usability",
        "Höhere wahrgenommene Qualität",
        "Learning: Struktur prägt Markenwahrnehmung",
      ],
    },
  ],
};
