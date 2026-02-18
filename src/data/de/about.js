// src/data/de/about.js

export const ABOUT_TABS = [
  {
    id: "about",
    label: "Über mich",
  },
  {
    id: "approach",
    label: "Arbeitsweise",
  },
  {
    id: "background",
    label: "Werdegang",
  },
  {
    id: "focus",
    label: "Fokus",
  },
  {
    id: "beyond",
    label: "Darüber hinaus",
  },
];

export const ABOUT_CONTENT = [
  {
    id: "about",
    title: "Arne Schüler",
    quote:
      "Ich entwerfe und entwickle Webinterfaces, in denen Struktur, Barrierefreiheit und Designentscheidungen als ein System gedacht werden.",
    body: {
      type: "text",
      text: "Ich verbinde UX und Frontend-Entwicklung, indem ich Designabsicht in saubere, konsistente Implementierung übersetze. Mein Fokus liegt auf React-basierten Interfaces, die standardmäßig barrierefrei sind, leicht wartbar bleiben und sich an Design-System-Denken orientieren.",
    },
  },
  {
    id: "approach",
    title: "Arbeitsprinzipien",
    quote:
      "Klarheit, Reduktion und UX-orientiertes Denken leiten meine Arbeit – vor visueller Politur oder technischer Komplexität.",
    body: {
      type: "items",
      items: [
        {
          id: "approach-ux-first",
          title: "UX vor Implementierung",
          text: "Start mit Absicht, Nutzerfluss und Rahmenbedingungen.",
        },
        {
          id: "approach-structure-first",
          title: "Struktur vor Styling",
          text: "Semantik, Layout, dann Komponenten und Details.",
        },
        {
          id: "approach-a11y-baseline",
          title: "Barrierefreiheit als Standard",
          text: "Kein Add-on – von Anfang an integriert.",
        },
        {
          id: "approach-design-in-code",
          title: "Designentscheidungen im Code",
          text: "Abstände, Typografie und Zustände werden systematisch behandelt.",
        },
        {
          id: "approach-reduction",
          title: "Reduktion statt Feature-Dichte",
          text: "Das Kernproblem mit weniger, besseren Bausteinen lösen.",
        },
      ],
    },
  },
  {
    id: "background",
    title: "Beruflicher Hintergrund",
    quote:
      "Meine Ausbildung und praktische Erfahrung verbinden Design, Entwicklung und menschenzentrierte Interaktion.",
    body: {
      type: "items",
      items: [
        {
          id: "background-msc-hci",
          title: "Master of Science Medieninformatik (HCI-Fokus)",
          text: "Human-Computer Interaction, UX-Prinzipien und nutzerzentrierte Systeme.",
        },
        {
          id: "background-bsc-mdi",
          title: "Bachelor of Science Mediendesigninformatik",
          text: "Grundlagen aus Design und Engineering mit praktischer Umsetzung.",
        },
        {
          id: "background-workstudent-5y",
          title: "Fünf Jahre Werkstudentenerfahrung",
          text: "Entwicklungs- und Designaufgaben in realen Projekten und Teams.",
        },
      ],
    },
  },
  {
    id: "focus",
    title: "Fokus",
    quote:
      "Was ich als Nächstes bauen möchte: zugängliche, wartbare Interfaces, in denen UX-Denken und Engineering sich gegenseitig stärken.",
    body: {
      type: "items",
      items: [
        {
          id: "focus-frontend-react-js",
          title: "Frontend-Implementierung (React + JavaScript)",
          text: "Komponenten, die lesbar bleiben und skalieren.",
        },
        {
          id: "focus-design-systems",
          title: "Design-Systeme und UI-Konsistenz",
          text: "Tokens, Patterns und wiederverwendbare Bausteine.",
        },
        {
          id: "focus-accessibility",
          title: "Barrierefreie Interfaces",
          text: "Semantisches HTML, Tastaturfluss und inklusive Standards.",
        },
        {
          id: "focus-collaboration",
          title: "Zusammenarbeit zwischen Design und Entwicklung",
          text: "Entscheidungen früh abstimmen, um spätere Reibung zu reduzieren.",
        },
        {
          id: "focus-junior-product-teams",
          title: "Junior-Rollen in produktorientierten Teams",
          text: "Offen für Umgebungen, die UX und sauberes Engineering wertschätzen.",
        },
      ],
    },
  },
  {
    id: "beyond",
    title: "Abseits der Arbeit",
    quote:
      "Außerhalb der Frontend-Entwicklung schätze ich handwerkliches Arbeiten, Natur und kreative Routinen, die mich geerdet und fokussiert halten.",
    body: {
      type: "items",
      items: [
        {
          id: "beyond-diy-craft",
          title: "Hands-on-Mindset (DIY und Handwerk)",
          text: "Ich baue und repariere gerne selbst. Die Arbeit mit realen Materialien schärft meinen Blick für Struktur, Präzision und Problemlösung.",
        },
        {
          id: "beyond-nature",
          title: "Natur und Perspektive",
          text: "Zeit draußen hilft mir, neu zu justieren und Klarheit zu halten – etwas, das ich auch in Design und Entwicklung wichtig finde.",
        },
        {
          id: "beyond-cooking",
          title: "Kochen als Prozessdenken",
          text: "Kochen verbindet Kreativität und Struktur: Zutaten, Timing, Verfeinerung. Diese Balance suche ich auch in Frontend-Projekten.",
        },
        {
          id: "beyond-curiosity",
          title: "Neugier jenseits von Bildschirmen",
          text: "Praktische und kreative Aktivitäten außerhalb des Digitalen halten mein Denken flexibel und geerdet.",
        },
      ],
    },
  },
];
