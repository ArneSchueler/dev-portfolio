export const TAMI_KITA_APP_DETAIL = {
  slug: "tami-kita-app",

  header: {
    breadcrumb: "Projekte / Tami",
    title: "Tami",
    subtitle:
      "Eine Kita-App im Human-Centered Design Prozess – entwickelt mit Fokus auf Nutzerbedürfnisse und Alltagstauglichkeit.",

    links: [],
  },

  tabs: [
    { id: "research", label: "Research" },
    { id: "personas", label: "Personas" },
    { id: "concept", label: "Konzept" },
    { id: "design", label: "Design" },
    { id: "evaluation", label: "Evaluation" },
    { id: "conclusion", label: "Fazit" },
  ],

  content: [
    {
      id: "research",
      chips: [
        { label: "Rolle", value: "Produktdesigner (UX/UI)" },
        { label: "Tools", value: "Figma, Miro" },
        { label: "Fokus", value: "Human-Centered Design" },
        { label: "Jahr", value: "2023/2024" },
      ],
      heading:
        "Zur Erhebung des Nutzungskontexts wurde eine Online-Umfrage mit 39 Teilnehmenden (Eltern und Erzieher:innen) durchgeführt.",
      bullets: [
        "Krankmeldungen erfolgen meist telefonisch und sind fehleranfällig",
        "Fehlende Transparenz bei Terminen und Abholregelungen",
        "Wunsch nach digitaler, datenschutzkonformer Lösung",
        "Top-Funktionen: Krankmeldung, Aktuelles, Chat/Postfach, Kalender, Dokumente und Abholerlaubnisse",
      ],
    },
    {
      id: "personas",
      heading:
        "Auf Basis der Ergebnisse entstanden drei Kernpersonas und Nutzungsszenarien zur Validierung realer Anwendungsfälle.",
      bullets: [
        "Lisa (Erzieherin): organisiert, empathisch, wünscht effizientere Prozesse",
        "Laura (Mutter): jongliert Familie und Beruf, benötigt schnellen Überblick",
        "Anna (Doppelrolle): verbindet beide Perspektiven",
        "Szenarien zur Überprüfung von Struktur, Verständnis und Abläufen",
      ],
    },
    {
      id: "concept",
      heading:
        "Aus Research und Analyse wurden Gestaltungsprinzipien abgeleitet, um Orientierung und Zugänglichkeit zu verbessern.",
      bullets: [
        "Flache Informationsarchitektur: jede Funktion in einem eigenen Bereich",
        "Aktionen statt Informationen im Fokus",
        "Ruhige, warme Farbwelt: Flieder, Apricot, Creme",
        "Barrierearme Gestaltung: große Touch-Zonen, gute Kontraste, einfache Typografie",
      ],
    },
    {
      id: "design",
      heading:
        "Das finale Design übersetzt die Erkenntnisse in eine ruhige, klare und emotional zugängliche Oberfläche.",
      bullets: [
        "Klare Struktur und wiedererkennbare Navigation",
        "Reduzierte Informationsdichte zur besseren Orientierung",
        "Visuelle Wärme und Vertrauen durch Farb- und Formensprache",
        "Konsequent auf Alltagstauglichkeit ausgelegt",
      ],
    },
    {
      id: "evaluation",
      heading:
        "Für die Evaluation kam der UEQ-Fragebogen zum Einsatz, um zentrale UX-Faktoren zu messen.",
      bullets: [
        "Durchgehend positive Bewertungen (≥ 2,5)",
        "Hohe Werte bei Effizienz und Übersichtlichkeit",
        "Vertrauen als besonders stark bewerteter Faktor",
        "Geringe mentale Belastung durch klare Struktur und ruhige Darstellung",
      ],
    },
    {
      id: "conclusion",
      heading:
        "Tami ist das Ergebnis eines vollständigen Human-Centered Design Prozesses von der Kontextanalyse bis zur Evaluation.",
      bullets: [
        "Konsequente Ausrichtung an Nutzerbedürfnissen",
        "Funktionalität, emotionale Wärme und Barrierearmut kombiniert",
        "Entlastung für Eltern und Erzieher:innen durch klare Abläufe",
      ],
    },
  ],
};
