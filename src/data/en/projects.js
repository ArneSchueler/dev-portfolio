import devPortfolioHero from "../../assets/images/dev-portfolio-hero.png";

export const PROJECT_TABS = [
  {
    id: "selected",
    label: "Selected",
  },
  {
    id: "dev",
    label: "Dev",
  },
  {
    id: "ux",
    label: "UX",
  },
];

export const PROJECTS = [
  /**
   * 1) Portfolio (schueler.dev)
   * - Hauptprojekt für deine Positionierung
   * - Bitte Links später ersetzen (Repo/Live), falls abweichend
   */
  {
    slug: "schueler-dev-portfolio",
    tabs: ["selected", "dev"],

    overview: {
      title: "schueler.dev Portfolio",
      description:
        "Personal portfolio built to showcase UX-first frontend thinking, system structure, and accessible UI patterns.",
      stack: ["React", "Vite", "Tailwind CSS", "React Router"],
      links: [
        {
          type: "github",
          href: "https://github.com/ArneSchueler/dev-portfolio",
        },
        {
          type: "external",
          href: "https://schueler.dev",
        },
      ],
    },

    detail: {
      hero: {
        title: "schueler.dev",
        subtitle:
          "A minimal portfolio that treats UX decisions and code structure as one system.",
        image: devPortfolioHero,
        meta: [
          {
            label: "Role",
            value: "Frontend / UX",
          },
          {
            label: "Type",
            value: "Personal brand + case study",
          },
          {
            label: "Stack",
            value: "React, Tailwind, Router",
          },
          {
            label: "Focus",
            value: "Accessibility, IA, component structure",
          },
        ],
      },

      tabs: [
        {
          id: "overview",
          label: "Overview",
        },
        {
          id: "system",
          label: "System",
        },
        {
          id: "ux",
          label: "UX Decisions",
        },
        {
          id: "tech",
          label: "Tech",
        },
        {
          id: "learnings",
          label: "Learnings",
        },
      ],

      body: [
        {
          id: "overview",
          blocks: [
            {
              type: "text",
              text: "schueler.dev is a personal portfolio designed as a structured, minimal interface to communicate my focus: building accessible web UI where information architecture, design decisions, and implementation belong together.",
            },
            {
              type: "bullets",
              items: [
                "Clear navigation with a section-based layout and predictable interactions",
                "Content-driven components (data first, UI second) for scalability",
                "Accessible patterns: focus states, semantics, readable contrast, keyboard support",
                "Minimal visuals to keep attention on hierarchy, structure, and work samples",
              ],
            },
            {
              type: "bullets",
              items: [
                "Primary goal: present selected work with a consistent, case-study-like detail view",
                "Secondary goal: build a reusable content structure for future projects and iterations",
              ],
            },
          ],
        },

        {
          id: "system",
          blocks: [
            {
              type: "text",
              text: "The site is built like a small design system: consistent tokens, reusable UI patterns, and content modeled as structured data. This keeps the UI maintainable and makes future projects easy to add.",
            },
            {
              type: "steps",
              items: [
                {
                  title: "Tokens → UI primitives",
                  text: "Typography, spacing and color decisions are centralized. Components consume tokens instead of hard-coded values to keep the UI consistent across pages and states.",
                },
                {
                  title: "Reusable patterns",
                  text: "Navigation, buttons, cards, and tab UI are designed as reusable patterns that work across overview pages and detail pages.",
                },
                {
                  title: "Content-first data model",
                  text: "Projects are defined as data objects (slug, overview, detail tabs, blocks). UI renders blocks by type, so adding a project is mostly writing content, not writing new components.",
                },
              ],
            },
          ],
        },

        {
          id: "ux",
          blocks: [
            {
              type: "text",
              text: "UX decisions aim for clarity, low cognitive load, and predictable navigation — especially important for portfolio reviewers who scan quickly.",
            },
            {
              type: "bullets",
              items: [
                "Minimal layout to emphasize hierarchy and reading flow",
                "Tab-based detail pages to avoid endless scrolling and keep context stable",
                "Clear CTA separation (visit / repo) to support recruiter workflows",
                "Consistent navigation states and interaction feedback",
              ],
            },
            {
              type: "steps",
              items: [
                {
                  title: "Information architecture",
                  text: "Overview pages show quick scanning info. Detail pages provide structured depth (overview, system, UX, tech, learnings).",
                },
                {
                  title: "Accessibility as baseline",
                  text: "Keyboard navigation, focus indicators, semantic headings, and meaningful labels are treated as non-negotiable, not optional enhancements.",
                },
              ],
            },
          ],
        },

        {
          id: "tech",
          blocks: [
            {
              type: "text",
              text: "Implementation prioritizes maintainability: shared helpers for navigation, consistent routing patterns, and strict separation of UI components vs. content data.",
            },
            {
              type: "bullets",
              items: [
                "React + Vite for a fast, modular setup",
                "React Router for routing (overview → project detail via slug)",
                "Tailwind for token-like utility styling and consistent spacing/typography",
                "Helpers for section navigation + URL synchronization (scroll/route logic)",
              ],
            },
            {
              type: "steps",
              items: [
                {
                  title: "Routing model",
                  text: "Projects use slugs for clean URLs and stable deep links (e.g. /projects/schueler-dev-portfolio).",
                },
                {
                  title: "Block renderer approach",
                  text: "Detail content uses typed blocks (text, bullets, steps). UI maps block types to components. This avoids JSX inside data and keeps content portable.",
                },
              ],
            },
          ],
        },

        {
          id: "learnings",
          blocks: [
            {
              type: "text",
              text: "Key learnings came from making navigation feel simple while keeping the codebase structured and extensible.",
            },
            {
              type: "bullets",
              items: [
                "Active state handling needs a stable strategy (scroll position vs. router state) to avoid jitter and edge cases",
                "Consistency beats novelty: a small set of well-defined patterns scales better than many one-offs",
                "Data modeling projects early prevents refactors when adding more case studies later",
                "Accessibility decisions are easiest when built into the component API from the start",
              ],
            },
          ],
        },
      ],
    },
  },

  /**
   * 2) BicycleShop VR (placeholder, falls back to your earlier structure)
   */
  {
    slug: "bicycleshop-vr",
    tab: "selected",

    overview: {
      title: "BicycleShop VR",
      description: "VR product experience prototype with focus on interaction.",
      stack: ["Unity", "C#", "XR"],
      links: [
        {
          type: "github",
          href: "https://github.com/...",
        },
        {
          type: "external",
          href: "https://...",
        },
      ],
    },

    detail: {
      hero: {
        title: "BicycleShop VR",
        subtitle: "A VR shopping prototype focused on interaction and clarity.",
        meta: [
          {
            label: "Role",
            value: "Dev / UX",
          },
          {
            label: "Timeline",
            value: "4 weeks",
          },
        ],
      },

      tabs: [
        {
          id: "overview",
          label: "Overview",
        },
        {
          id: "process",
          label: "Process",
        },
        {
          id: "outcome",
          label: "Outcome",
        },
        {
          id: "tech",
          label: "Tech",
        },
      ],

      body: [
        {
          id: "overview",
          blocks: [
            {
              type: "text",
              text: "VR prototype exploring how users can browse a product selection and understand product details in a spatial environment with clear interaction patterns.",
            },
            {
              type: "bullets",
              items: [
                "Interaction clarity",
                "Fast feedback",
                "Simple UI in 3D space",
              ],
            },
          ],
        },
        {
          id: "process",
          blocks: [
            {
              type: "steps",
              items: [
                {
                  title: "Research",
                  text: "Competitor scan and interaction pattern references for VR shopping.",
                },
                {
                  title: "Prototype",
                  text: "Built core interaction loops and UI affordances for selection and details.",
                },
                {
                  title: "Iterate",
                  text: "Refined navigation, feedback, and readability based on quick tests.",
                },
              ],
            },
          ],
        },
        {
          id: "outcome",
          blocks: [
            {
              type: "bullets",
              items: [
                "Working prototype",
                "Defined interaction loop",
                "Documented learnings for future VR UI",
              ],
            },
          ],
        },
        {
          id: "tech",
          blocks: [
            {
              type: "bullets",
              items: [
                "Unity scene setup",
                "XR interaction toolkit (if used)",
                "C# scripts for interactions and UI states",
              ],
            },
          ],
        },
      ],
    },
  },

  /**
   * 3) UX Case (Behance)
   */
  {
    slug: "behance-case",
    tab: "ux",

    overview: {
      title: "Case Study",
      description:
        "UX case study focusing on information architecture and user flows.",
      stack: ["Research", "IA", "Flows", "Wireframes"],
      links: [
        {
          type: "behance",
          href: "https://behance.net/...",
        },
      ],
    },

    detail: {
      hero: {
        title: "Case Study",
        subtitle:
          "Information architecture, flows, and structured UX decisions.",
        meta: [
          {
            label: "Type",
            value: "UX Case Study",
          },
          {
            label: "Focus",
            value: "IA / User Flows",
          },
        ],
      },
      tabs: [
        {
          id: "overview",
          label: "Overview",
        },
        {
          id: "process",
          label: "Process",
        },
        {
          id: "outcome",
          label: "Outcome",
        },
      ],
      body: [
        {
          id: "overview",
          blocks: [
            {
              type: "text",
              text: "A UX case study focusing on structuring information, defining flows, and translating insights into a coherent interface direction.",
            },
            {
              type: "bullets",
              items: [
                "Problem framing",
                "IA mapping",
                "User flows",
                "Wireframes → refined structure",
              ],
            },
          ],
        },
        {
          id: "process",
          blocks: [
            {
              type: "steps",
              items: [
                {
                  title: "Discover",
                  text: "Understand context, constraints, and user goals.",
                },
                {
                  title: "Structure",
                  text: "Build IA and flows to reduce friction and ambiguity.",
                },
                {
                  title: "Prototype",
                  text: "Wireframes and iteration to validate direction.",
                },
              ],
            },
          ],
        },
        {
          id: "outcome",
          blocks: [
            {
              type: "bullets",
              items: [
                "Defined IA + flows",
                "Prototype screens",
                "Rationale documented for key decisions",
              ],
            },
          ],
        },
      ],
    },
  },
];

// hilfreich für Detail-Lookup
export const PROJECTS_BY_SLUG = Object.fromEntries(
  PROJECTS.map((p) => [p.slug, p])
);
