import showCaseOverview from "../../../assets/images/frontend-showcase/Showcase-Hero.png";
import showCaseChallenge from "../../../assets/images/frontend-showcase/MoSy_Monitoring.png";
import showCaseProcess from "../../../assets/images/frontend-showcase/Showcase-MoSy-Dashboard.png";
import showCaseSolution from "../../../assets/images/frontend-showcase/MoSy-Cockpitl-devices.png";
import showCaseResult from "../../../assets/images/frontend-showcase/Scale-Means.png";

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
    links: [],
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
      media: { src: showCaseOverview, alt: "Showcase Überblick" },
      chips: [
        { label: "Role", value: "UX/UI-Designer" },
        { label: "Tools", value: "Figma, Jira, UEQ+, NASA TLX" },
        { label: "Focus", value: "Informationsvisualisierung, User Research" },
        { label: "Year", value: "2024" },
      ],
      intro:
        "Ziel der Masterarbeit war die Entwicklung und Evaluierung eines UI/UX-Konzepts für ein Frontend-Showcase, das komplexe Fahrzeug- und Flottendaten verständlich visualisiert. Im Fokus standen die kognitive Entlastung der Nutzer und der Aufbau eines interaktiven Systems.",
      bullets: [
        "Interaktives Dashboard: Zugang zu großen Datenmengen aus den Systemen MoSy, Live View und BeIntelli.",
        "Echtzeit-Erfahrung: Ein funktionaler Prototyp, der die Leistungsfähigkeit autonomer Flotten direkt erlebbar macht.",
        "Kognitive Entlastung: Reduktion von Komplexität durch gezielte Informationsarchitektur.",
      ],
    },
    {
      id: "challenge",
      media: { src: showCaseChallenge, alt: "Showcase Herausforderung" },
      intro:
        "Vorhandene Systeme waren zwar informationsreich, aber visuell überladen, was die effiziente Nutzung erschwerte. Die Kernaufgabe bestand darin, komplexe Echtzeitdaten so aufzubereiten, dass sie intuitiv navigierbar bleiben, ohne den Nutzer zu überfordern.",
      bullets: [
        "Daten-Komplexität: Harmonisierung unterschiedlicher Datenquellen in einem Interface.",
        "Visueller Stress: Vermeidung von Überforderung bei gleichzeitig hoher Informationsdichte.",
        "Funktionalität vs. Ästhetik: Schaffung eines Dashboards, das sowohl optisch anspricht als auch höchste Effizienz bietet.",
      ],
    },
    {
      id: "process",
      media: { src: showCaseProcess, alt: "Showcase Prozess" },
      intro:
        "Der Entwicklungsprozess folgte einem iterativen UX-Vorgehen mit einem starken Fokus auf User-Centered Design. Jede Phase wurde genutzt, um die Interaktionslogik weiter zu verfeinern und auf Nutzerbedürfnisse anzupassen.",
      bullets: [
        "Low-Fidelity-Prototyping: Schnelle Iterationen zur Definition der grundlegenden Layoutstruktur.",
        "High-Fidelity-Prototyping: Ausarbeitung in Figma mit interaktiven Karten, Filterfunktionen und Systemkomponenten.",
        "Feedback-Schleifen: Kontinuierliche Optimierung durch Nutzertests und direkte Validierung der Konzepte.",
      ],
    },
    {
      id: "solution",
      media: { src: showCaseSolution, alt: "Showcase Lösung" },
      intro:
        "Ein zentrales Ziel war die Reduktion der kognitiven Belastung. Durch den Einsatz wissenschaftlicher Evaluationsmethoden wurde sichergestellt, dass das Design nicht nur subjektiv gefällt, sondern objektiv die Arbeit unterstützt.",
      bullets: [
        "Visuelle Kodierung: Einsatz von farbcodierten Statusanzeigen und Diagrammen (z. B. Anomaly Timeline) zur schnellen Fehlererkennung.",
        "Wissenschaftliche Validierung: Einsatz der Methoden UEQ+ (User Experience Questionnaire) und NASA TLX, um die mentale Belastung messbar zu machen.",
        "Hohe Effizienz: Die Ergebnisse bestätigen eine geringe mentale Belastung bei gleichzeitig hoher Benutzerfreundlichkeit.",
      ],
    },
    {
      id: "results",
      media: { src: showCaseResult, alt: "Showcase Ergebnisse" },
      intro:
        "Die Arbeit belegt, dass eine fundierte Informationsvisualisierung die UX signifikant verbessert. Das konsistente Farbsystem und die interaktiven Elemente steigern das Vertrauen der Nutzer in das System und fördern eine schnelle Entscheidungsfindung.",
      bullets: [
        "Nachgewiesene Qualität: Die Evaluation zeigt, dass Nutzer die Visualisierungen als verständlich, ansprechend und hilfreich empfinden.",
        "Skalierbares System: Ein konsistentes Farbsystem steigert die Orientierung innerhalb der Flottendaten.",
        "Zukunftspotenzial: Zukünftige Entwicklungen könnten Machine Learning und Predictive Analytics integrieren, um Muster automatisch zu erkennen.",
      ],
    },
  ],
};
