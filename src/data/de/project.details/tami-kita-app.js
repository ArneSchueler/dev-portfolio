export const TAMI_KITA_APP_DETAIL = {
  slug: "tami-kita-app",

  header: {
    breadcrumb: [{ label: "UX", route: "/projects" }, { label: "Tami" }],
    title: "Tami — Kita App",
    subtitle:
      "App-Konzept zur Vereinfachung der Kommunikation zwischen Eltern und pädagogischem Personal im Kindergartenalltag.",
    links: [
      { type: "github", href: "https://github.com/placeholder/tami" },
      { type: "external", href: "https://example.com/tami-case-study" },
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
      media: { src: null, alt: "Tami Überblick" },
      chips: [
        { label: "Rolle", value: "UX Designer" },
        { label: "Methode", value: "Human-Centered Design" },
        { label: "Standard", value: "ISO 9241-210" },
        { label: "Fokus", value: "Barrierefreiheit & Alltagstauglichkeit" },
        { label: "Jahr", value: "2024" },
      ],
      intro:
        "Tami ist ein App-Konzept zur strukturierten Organisation von Kommunikation und Abläufen im Kita-Alltag.",
      bullets: [
        "Zentrale Plattform für Nachrichten, Abwesenheiten und Termine",
        "Klare Trennung zentraler Aufgabenbereiche",
        "Zugängliche Oberfläche für schnelle tägliche Nutzung",
        "Ruhige visuelle Sprache zur Vertrauensbildung",
      ],
    },
    {
      id: "challenge",
      media: {
        src: null,
        caption:
          "Darstellung der täglichen Kommunikationsherausforderungen in der Kita",
        alt: "Tami Herausforderung",
      },
      intro:
        "Kommunikation im Kita-Alltag ist zeitkritisch, fragmentiert und häufig ineffizient organisiert.",
      bullets: [
        "Krankmeldungen erfolgen oft telefonisch",
        "Abholberechtigungen sind fehleranfällig",
        "Fehlende Gesamtübersicht für alle Beteiligten",
        "Bestehende Tools decken Arbeitsabläufe nicht vollständig ab",
      ],
    },
    {
      id: "process",
      media: {
        src: null,
        caption:
          "Personas und Nutzungsszenarien aus dem Human-Centered-Design-Prozess",
        alt: "Tami Prozess",
      },
      intro:
        "Strukturierter Human-Centered-Design-Prozess mit validierten Nutzungsszenarien.",
      bullets: [
        "Online-Umfrage zur Bedarfserhebung",
        "Personas für Eltern und Fachkräfte",
        "Szenarien zur Validierung von Navigation und Aufgabenfluss",
        "Iterative Verfeinerung von Wireframes zu High-Fidelity-Screens",
      ],
    },
    {
      id: "solution",
      media: {
        src: null,
        caption:
          "Barrierefreies Interface-Konzept mit flacher Informationsarchitektur",
        alt: "Tami Lösung",
      },
      intro:
        "Flache Informationsarchitektur kombiniert mit barrierefreiem Designansatz.",
      bullets: [
        "Jede Kernfunktion besitzt einen klar definierten Bereich",
        "Große Interaktionsflächen und hoher Kontrast",
        "Warme Farbpalette zur Vertrauensvermittlung",
        "Reduzierte visuelle Komplexität",
      ],
    },
    {
      id: "results",
      media: {
        src: null,
        caption:
          "Evaluierungsergebnisse, die eine verbesserte Klarheit und Routine-Effizienz belegen",
        alt: "Tami Ergebnisse",
      },
      intro: "Positive Evaluation mit verbesserter Klarheit im Alltag.",
      bullets: [
        "Positives Feedback zur Struktur",
        "Reduzierter wahrgenommener Aufwand",
        "Erhöhte Transparenz zwischen Eltern und Fachkräften",
        "Learning: Vorhersehbarkeit fördert Vertrauen",
      ],
    },
  ],
};
