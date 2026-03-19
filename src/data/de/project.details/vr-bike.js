import vrOverview from "../../../assets/images/vr/vr-bicycleshop.png";
import vrGoal from "../../../assets/images/vr/hand-animation.png";
import vrImplementation from "../../../assets/images/vr/socket-interaction.png";
import vrTech from "../../../assets/images/vr/Scene-hierarchy.png";
import vrResult from "../../../assets/images/vr/WorkshopView_BicycleShop.png";

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
        type: "github",
        href: "https://github.com/ArneSchueler/AVR22_BicycleShop_Schueler",
      },
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
      media: { src: vrOverview, alt: "VR Überblick" },
      chips: [
        { label: "Rolle", value: "VR/UX Designer & Developer" },
        { label: "Tools", value: "Unity, MRTK 3, XR Interaction Toolkit" },
        { label: "Fokus", value: "VR Interaktion & Immersion" },
        { label: "Jahr", value: "2023" },
      ],
      intro:
        "VR-Prototyp zur Simulation einer strukturierten Fahrradwerkstatt.",
      bullets: [
        "Fokus auf Immersion und geführte Interaktion: Ziel ist ein tiefgreifendes Nutzererlebnis durch realitätsnahe Gestaltung.",
        "Klare räumliche Struktur: Aufteilung der virtuellen Umgebung in funktionale Bereiche wie Workstation, Storage und SalesRoom.",
        "Validierung von XR-Interaktionsmustern: Erprobung fortgeschrittener Techniken zur Manipulation virtueller Objekte.",
      ],
    },
    {
      id: "goal",
      media: {
        src: vrGoal,
        caption: "Darstellung des Interaktionsflusses für VR-Erstnutzer",
        alt: "VR Ziel",
      },
      intro:
        "Das Hauptziel des Projekts war die Entwicklung einer VR-Erfahrung, die technische Präzision mit hoher Benutzerfreundlichkeit vereint.",
      bullets: [
        "Gute Immersion: Schaffung eines glaubwürdigen Umgebungsgefühls für den Nutzer.",
        "SRealitätsnaher Stil: Verwendung eines ansprechenden und visuell authentischen Grafikstils.",
        "Nutzerführung: Einsatz von MRTK 3 UI-Elementen, um den Nutzer intuitiv zu leiten und Hilfestellungen zu geben",
      ],
    },
    {
      id: "implementation",
      media: {
        src: vrImplementation,
        caption:
          "Implementierung von Greif-, Teleport- und Socket-Interaktionen in Unity",
        alt: "VR Umsetzung",
      },
      intro:
        "Die Entwicklung konzentrierte sich darauf, die statische Umgebung durch komplexe Interaktionsmöglichkeiten lebendig zu gestalten.",
      bullets: [
        "Socket-Systeme: Intelligente Sockets an der Hebebühne, die spezifische Vorbedingungen für die Montage einzelner Fahrradteile prüfen.",
        "Umwelt-Interaktion: Funktionale Möbelstücke, wie benutzbare Schubladen zur Lagerung von Werkzeug oder Kleinteilen.",
        "Fortbewegung: Integration eines Teleportationssystems mit einem individuell gestalteten Reticle (Zielmarkierung).",
      ],
    },
    {
      id: "tech",
      media: {
        src: vrTech,
        caption:
          "Szenenhierarchie und zustandsgesteuerte Workflow-Logik-Struktur",
        alt: "VR Tech Stack",
      },
      intro:
        "Das Projekt basiert auf einer modularen Architektur innerhalb von Unity, um verschiedene Funktionsbereiche effizient zu verwalten.",
      bullets: [
        "Frameworks: Mixed Reality Toolkit 3 (MRTK 3) für modernste VR-Interaktionen und UI-Steuerung.",
        "XR-Infrastruktur: Verwendung des XR Interaction Managers und des XR Origin zur Handhabung von Kamera-Offsets und Controller-Input.",
        "Szenen-Management: Strukturierte Hierarchie bestehend aus einer Management-Szene, einer Workstation (3x3), einem Lager (Storage) und einem Verkaufsraum (SalesRoom 7x6).",
      ],
    },
    {
      id: "results",
      media: {
        src: vrResult,
        caption:
          "Vollständiger Interaktionszyklus, der geführte Nutzeraufgaben demonstriert",
        alt: "VR Ergebnisse",
      },
      intro:
        "Die VR Fahrradwerkstatt demonstriert die erfolgreiche Verknüpfung von technischer Simulation und intuitiver Bedienbarkeit.",
      bullets: [
        "Gesteigerte Immersion: Durch detaillierte Hand-Animationen und physikalisch basierte Interaktionen wurde ein hohes Maß an Realismus erreicht.",
        "Fehlerprävention: Das Socket-System mit Vorbedingungen stellt sicher, dass Montageprozesse in der logisch richtigen Reihenfolge durchgeführt werden.",
        "Effiziente Navigation: Nutzer können sich dank des Teleportationssystems sicher und zielgerichtet im großen Verkaufsraum und der Werkstatt bewegen.",
      ],
    },
  ],
};
