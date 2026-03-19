import overviewImg from "../../../assets/images/dev-portfolio/schueler-dev-overview.png";
import goalImg from "../../../assets/images/dev-portfolio/schueler-dev-goal.png";
import implementationImg from "../../../assets/images/dev-portfolio/schueler-dev-implementation.png";
import resultsImg from "../../../assets/images/dev-portfolio/schueler-dev-results.png";

export const SCHUELER_DEV_PORTFOLIO_DETAIL = {
  slug: "schueler-dev-portfolio",

  header: {
    breadcrumb: [
      { label: "Ausgewählte", route: "/projects" },
      { label: "schueler.dev" },
    ],
    title: "schueler.dev",
    subtitle:
      "Persönliches Portfolio zur Präsentation meiner Arbeit als Frontend Developer mit UX-Fokus und ausgewählten Projekten.",
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
      media: {
        src: overviewImg,
        alt: "Startansicht des Portfolios schueler.dev",
      },
      chips: [
        {
          label: "Rolle",
          value: "UX-Konzept, UI-Design, Frontend-Entwicklung",
        },
        { label: "Stack", value: "React, Vite, Tailwind CSS, React Router" },
        { label: "Fokus", value: "Struktur, Klarheit, Barrierefreiheit" },
        { label: "Zeitraum", value: "Februar 2026" },
      ],
      intro:
        "Persönliches Portfolio zur klaren Darstellung meiner Arbeitsweise, ausgewählter Projekte und UX-naher Frontend-Entwicklung.",
      bullets: [
        "Minimalistische, anwendungsähnliche Oberfläche mit Sidebar statt klassischer Top-Navigation",
        "Schnelle Orientierung für Recruiter durch klare Informationshierarchie",
        "Projektinhalte werden strukturiert und nachvollziehbar präsentiert",
      ],
    },
    {
      id: "goal",
      media: {
        src: goalImg,
        caption: "Projektübersicht von schueler.dev",
        alt: "Ziel und Positionierung des Portfolios",
      },
      intro:
        "Das Portfolio wurde entwickelt, um meine Art zu arbeiten sichtbar zu machen und Unternehmen eine fundierte Entscheidungshilfe zu geben.",
      bullets: [
        "Präsentation meiner Projekte, Fähigkeiten und Arbeitsweise in einer klaren Struktur",
        "Positionierung als Frontend Developer mit UX-Fokus und interdisziplinärem Denken",
        "Abgrenzung von generischen Portfolioseiten durch reduzierte Navigation und stärkeren Anwendungscharakter",
      ],
    },
    {
      id: "implementation",
      media: {
        src: implementationImg,
        caption: "Daten und Ordnerstruktur des Portfolios",
        alt: "Struktur und Aufbau des Portfolio-Projekts",
      },
      intro:
        "Die Seite verbindet eine fast Single-Page-artige Navigation mit separaten Projekt-Detailseiten für mehr inhaltliche Tiefe.",
      bullets: [
        "Sections auf der Hauptseite werden über eine Sidebar erschlossen",
        "Projektseiten nutzen Tabs für eine kompakte und geordnete Darstellung",
        "Projektdaten liegen in strukturierten Konfigurationsdateien und werden dynamisch über Slugs geladen",
      ],
    },
    {
      id: "tech",
      // media: { src: techImg, alt: "Technische Architektur des Portfolios" },
      intro:
        "Der technische Aufbau ist modular, komponentenbasiert und auf einfache Erweiterbarkeit ausgelegt.",
      bullets: [
        "React und Vite als performantes Frontend-Setup",
        "React Router für slug-basierte Detailseiten",
        "Tailwind CSS für konsistente Abstände, Typografie und wiederverwendbare UI-Muster",
        "Mehrsprachige Content-Struktur und observer-basierte Navigationslogik",
      ],
      codeExamples: [
        {
          title: "Scroll-Logik & History API",
          code: `// Synchronisiert Scroll-Position mit URL und Sidebar-Status
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      // Wählt die Sektion mit der größten sichtbaren Fläche
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleSection) {
        const sectionId = visibleSection.target.id;
        setActiveSection(sectionId);
        
        // URL anpassen ohne Reload (für Deep-Linking)
        const nextUrl = sectionId === "hero" ? "/" : \`/\${sectionId}\`;
        window.history.replaceState(null, "", nextUrl);
      }
    },
    { threshold: 0.6 }
  );

  sectionIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) observer.observe(element);
  });

  return () => observer.disconnect();
}, []);`,
        },
      ],
    },
    {
      id: "results",
      media: {
        src: resultsImg,
        caption: "Finale responsive Oberfläche mit Projektdetails",
        alt: "Ergebnis und Weiterentwicklung des Portfolios",
      },
      intro:
        "Das Ergebnis ist ein erweiterbares Portfolio-System, das Gestaltung, Inhalt und technische Struktur konsistent zusammenführt.",
      bullets: [
        "Klare Darstellung meiner Rolle zwischen UX, UI und Frontend-Entwicklung",
        "Gute Grundlage für das schrittweise Ergänzen weiterer Projekte und Case Studies",
        "Geplante Weiterentwicklung in den Bereichen Dark Mode und Responsiveness",
      ],
    },
  ],
};
