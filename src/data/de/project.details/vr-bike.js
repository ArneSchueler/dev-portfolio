export const VR_BICYCLE_WORKSHOP_DETAIL = {
  slug: "bicycleshop-vr",

  header: {
    breadcrumb: [
      { label: "Dev", route: "/projects" },
      { label: "VR Fahrradwerkstatt" },
    ],
    title: "VR Fahrradwerkstatt",
    subtitle:
      "Interaktiver VR-Workshop-Prototyp mit Fokus auf Immersion und strukturierte Interaktion.",
    links: [
      {
        type: "external",
        href: "https://drive.google.com/file/d/1VwHO-o0TO013wi_6vUDKDh19M4beqEce/view?usp=sharing",
      },
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
      media: { src: null, alt: "VR Überblick" },
      chips: [
        { label: "Rolle", value: "Developer" },
        { label: "Tools", value: "Unity, XR Toolkit" },
        { label: "Fokus", value: "Interaktionsdesign in VR" },
        { label: "Jahr", value: "2023" },
      ],
      intro:
        "VR-Prototyp zur Simulation einer strukturierten Fahrradwerkstatt.",
      bullets: [
        "Fokus auf Immersion und geführte Interaktion",
        "Klare räumliche Struktur",
        "Validierung von XR-Interaktionsmustern",
      ],
    },
    {
      id: "goal",
      media: {
        src: null,
        caption: "Darstellung des Interaktionsflusses für VR-Erstnutzer",
        alt: "VR Ziel",
      },
      intro: "Intuitive Interaktionen für Erstnutzer von Virtual Reality.",
      bullets: [
        "Reduktion von Verwirrung durch klare Affordanzen",
        "Schrittbasierter Aufgabenfluss",
        "Konsistente Interaktionsregeln",
      ],
    },
    {
      id: "implementation",
      media: {
        src: null,
        caption:
          "Implementierung von Greif-, Teleport- und Socket-Interaktionen in Unity",
        alt: "VR Umsetzung",
      },
      intro:
        "Implementierung von Greifen, Platzieren, Teleportieren und geführter Logik.",
      bullets: [
        "Teleport-Navigationssystem",
        "Grab- und Socket-Interaktionen",
        "Zustandsbasierte Aufgabenlogik",
      ],
    },
    {
      id: "tech",
      media: {
        src: null,
        caption:
          "Szenenhierarchie und zustandsgesteuerte Workflow-Logik-Struktur",
        alt: "VR Tech Stack",
      },
      intro:
        "Strukturierte Szenenhierarchie und XR-Interaktionssysteme sichern Wartbarkeit.",
      bullets: [
        "XR Toolkit Interaktionshandling",
        "State-getriebene Workflow-Logik",
        "Organisierte Szenenstruktur",
      ],
    },
    {
      id: "results",
      media: {
        src: null,
        caption:
          "Vollständiger Interaktionszyklus, der geführte Nutzeraufgaben demonstriert",
        alt: "VR Ergebnisse",
      },
      intro: "Vollständiger Interaktionszyklus mit klarer Nutzerführung.",
      bullets: [
        "Schnelleres Verständnis des Aufgabenflusses",
        "Reduzierte Interaktionsfehler durch Constraints",
        "Learning: Klarheit schlägt visuelle Komplexität",
      ],
    },
  ],
};
