export const GYMNIO_DETAIL = {
  slug: "gymnio",

  header: {
    breadcrumb: "Projekte / Gymnio",
    title: "Gymnio",
    subtitle:
      "Smarteres Tracking, maßgeschneiderte Ernährung und Fortschritte, die sichtbar werden.",
    heroImage: null,

    links: [],
  },

  tabs: [
    { id: "challenge", label: "Challenge" },
    { id: "solution", label: "Solution" },
    { id: "process", label: "Process" },
    { id: "flow", label: "Userflow" },
    { id: "result", label: "Result" },
    { id: "learnings", label: "Learnings" },
  ],

  content: [
    {
      id: "challenge",
      media: {
        src: null,
        alt: "Portfolio preview",
      },
      chips: [
        { label: "Rolle", value: "Produktdesigner (UX/UI)" },
        { label: "Tools", value: "Figma, FigJam, ChatGPT" },
        { label: "Fokus", value: "Dashboard Design" },
        { label: "Jahr", value: "2025" },
      ],
      heading:
        "Viele Fitness-Apps wirken überladen und bieten wenig persönliche Motivation. Wichtige Bereiche sind oft über mehrere Plattformen verteilt.",
      bullets: [
        "Unübersichtliche Oberflächen und fehlende Hierarchie",
        "Getrennte Bereiche für Training, Ernährung und Coaching",
        "Verlust von Orientierung und Motivation",
        "Bedarf an einer integrierten, motivierenden Gesamtlösung",
      ],
    },
    {
      id: "solution",
      heading:
        "Gymnio vereint alle relevanten Fitnessbereiche in einem visuell klaren, modularen Dashboard mit nachvollziehbarem Feedback.",
      bullets: [
        "Modulares Dashboard für individuelle Zusammenstellung",
        "Verknüpfung von Trainingsplänen, Ernährungszielen und Fortschritt",
        "Klare Nutzerführung mit visuellem Feedback",
        "Emotionales Design zur Steigerung von Motivation und Engagement",
      ],
    },
    {
      id: "process",
      heading:
        "Der Designprozess umfasste drei Phasen mit steigendem Detailgrad.",
      bullets: [
        "Lo-Fi: Layout und Informationshierarchie zur Absicherung der Nutzbarkeit",
        "Mid-Fi: Interaktionslogik für Workouts, Ernährung und Fortschritt",
        "Hi-Fi: visuelle Ausarbeitung und konsistentes, skalierbares System",
        "Fokus auf Struktur, Typografie und Komponentenaufbau",
      ],
    },
    {
      id: "flow",
      heading:
        "Der Userflow bildet zentrale Interaktionen im Dashboard ab, insbesondere das Management von Widgets.",
      bullets: [
        "Widgets hinzufügen, verschieben oder entfernen",
        "Rückmeldungen und optionale Bestätigungen",
        "Nachvollziehbarkeit von Änderungen",
        "Flüssige Nutzung ohne Verlust der Übersicht",
      ],
    },
    {
      id: "result",
      heading:
        "Das Ergebnis ist ein klar strukturiertes, erweiterbares Dashboard-Konzept.",
      bullets: [
        "Einheitliches Dashboard für Training, Ernährung und Fortschritt",
        "Transparente Fortschrittsdarstellung zur Motivationssteigerung",
        "Modularer Aufbau für individuelle Anpassungen und Erweiterungen",
      ],
    },
    {
      id: "learnings",
      heading:
        "Wesentliche Erkenntnisse aus Struktur, Iteration und Systematik.",
      bullets: [
        "Informationsarchitektur stärkt Fokus und Orientierung",
        "Iteratives Prototyping erhöht Vertrauen und Akzeptanz",
        "Ein Designsystem beschleunigt zukünftige Workflows und fördert Konsistenz",
      ],
    },
  ],
};
