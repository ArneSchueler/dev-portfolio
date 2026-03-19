import gymnioOverview from "../../../assets/images/gymnio/GYMNIO-dashboard-overview.png";
import gymnioOnboarding from "../../../assets/images/gymnio/GYMNIO-dashboard-onboarding.png";
import gymnioUserFlow from "../../../assets/images/gymnio/userflow-edit.png";
import gymnioWireframe from "../../../assets/images/gymnio/gymnio-wireframe.png";
import gymnioDesignSystem from "../../../assets/images/gymnio/gymnio-designsystem.png";

export const GYMNIO_DETAIL = {
  slug: "gymnio",

  header: {
    breadcrumb: [{ label: "UX", route: "/projects" }, { label: "Gymnio" }],
    title: "Gymnio",
    subtitle:
      "Dashboard-Konzept zur Zusammenführung von Training, Ernährung und Coaching in einer Anwendung.",
    links: [
      {
        type: "behance",
        href: "https://www.behance.net/gallery/234946097/GYMNIO-Your-AI-fitness-coach",
      },
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
      media: { src: gymnioOverview, alt: "Gymnio Überblick" },
      chips: [
        { label: "Rolle", value: "Product Designer (UX/UI)" },
        { label: "Tools", value: "Figma, FigJam" },
        { label: "Fokus", value: "Dashboard Design" },
        { label: "Jahr", value: "2025" },
      ],
      intro:
        "Gymnio ist eine KI-gestützte Fitness-Plattform, die als persönlicher digitaler Coach fungiert. Das Projekt konzentriert sich darauf, Training, Ernährung und Fortschrittsanalyse in einem nahtlosen, datengesteuerten Dashboard zu vereinen.",
      bullets: [
        "Zentralisierter Hub: Alle relevanten Metriken an einem Ort statt fragmentierter Daten.",
        "KI-Begleiter: „Coach Sam“ liefert personalisierte Einblicke und motivierendes Feedback basierend auf dem Nutzerverhalten.",
        "Klare Priorisierung: Fokus auf das Wesentliche, um den Nutzer nicht mit Rohdaten zu überfordern.",
      ],
    },
    {
      id: "challenge",
      media: { src: gymnioOnboarding, alt: "Gymnio Herausforderung" },
      intro:
        "Die größte Hürde moderner Fitness-Apps ist der Informations-Overload. Viele Apps bieten zwar viele Daten, aber keine klare Orientierung. Die Herausforderung war es, ein Dashboard zu entwickeln, das sowohl für Einsteiger als auch für Fortgeschrittene funktioniert und personalisierte Ziele greifbar macht.",
      bullets: [
        "Fehlende Struktur: Unübersichtliche Daten ohne direkten Handlungskontext.",
        "Keine Personalisierung: Statische Pläne, die nicht auf tägliche Fortschritte reagieren.",
        "Motivationsverlust: Fehlendes visuelles Feedback zur langfristigen Zielerreichung.",
      ],
    },
    {
      id: "process",
      media: { src: gymnioWireframe, alt: "Gymnio Prozess" },
      intro:
        "Der Prozess war darauf ausgerichtet, ein systematisches Design-Framework aufzubauen. Von der ersten Strukturierung der Informationshierarchie bis hin zum fertigen High-Fidelity-System stand die Benutzerführung im Vordergrund.",
      bullets: [
        "Modulare Architektur: Entwicklung eines Grid-Systems für flexible Widgets (Cards).",
        "Inklusives Design: Fokus auf Barrierefreiheit durch hohe Kontrastverhältnisse und eine klare, lesbare Typografie.",
        "Clean Aesthetic: Ein helles, freundliches UI-Design, das Professionalität und Übersichtlichkeit ausstrahlt.",
      ],
    },
    {
      id: "solution",
      media: { src: gymnioUserFlow, alt: "Gymnio Lösung" },
      intro:
        "Die Lösung ist ein anpassbares Dashboard, das sich dem Nutzer anpasst. Ein durchdachter Flow ermöglicht es, zwischen der groben Übersicht und detaillierten Performance-Daten nahtlos zu wechseln, während die KI den Prozess moderiert.",
      bullets: [
        "Interaktive Widgets: Wöchentliches Volumen, Performance-Trend und Rezept-Vorschläge.",
        "Smart Feedback: Coach Sam gibt proaktive Tipps (z.B. Gewichtserhöhung oder Ernährungstipps).",
        "Nahtlose Navigation: Schneller Zugriff auf Trainingshistorie und Ziel-Tracking.",
      ],
    },
    {
      id: "results",
      media: { src: gymnioDesignSystem, alt: "Gymnio Ergebnisse" },
      intro:
        "Gymnio zeigt, wie modulares Design und KI die Nutzererfahrung transformieren können. Das Ergebnis ist eine Plattform, die Komplexität reduziert und durch visuelles Feedback die Bindung an die sportlichen Ziele stärkt.",
      bullets: [
        "Skalierbarkeit: Das Design-System lässt sich problemlos um neue Features erweitern.",
        "Benutzervertrauen: Transparente Fortschrittsdarstellung durch klare Grafiken und Benchmarks.",
        "Fokus-Steigerung: Reduzierung der Search Time innerhalb der App auf ein Minimum.",
      ],
    },
  ],
};
