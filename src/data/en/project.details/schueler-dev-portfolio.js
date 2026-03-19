import overviewImg from "../../../assets/images/dev-portfolio/schueler-dev-overview.png";
import goalImg from "../../../assets/images/dev-portfolio/schueler-dev-goal.png";
import implementationImg from "../../../assets/images/dev-portfolio/schueler-dev-implementation.png";
import resultsImg from "../../../assets/images/dev-portfolio/schueler-dev-results.png";

export const SCHUELER_DEV_PORTFOLIO_DETAIL = {
  slug: "schueler-dev-portfolio",

  header: {
    breadcrumb: [
      { label: "Selected", route: "/projects" },
      { label: "schueler.dev" },
    ],
    title: "schueler.dev",
    subtitle:
      "Personal portfolio to showcase my work as a frontend developer with a UX focus and selected projects.",
    links: [
      { type: "github", href: "https://github.com/ArneSchueler/dev-portfolio" },
      { type: "external", href: "https://schueler.dev" },
    ],
  },

  tabs: [
    { id: "overview", label: "Overview" },
    { id: "goal", label: "Goal" },
    { id: "implementation", label: "Implementation" },
    { id: "tech", label: "Tech" },
    { id: "results", label: "Results" },
  ],

  content: [
    {
      id: "overview",
      media: {
        src: overviewImg,
        alt: "Start view of the portfolio schueler.dev",
      },
      chips: [
        {
          label: "Role",
          value: "UX Concept, UI Design, Frontend Development",
        },
        { label: "Stack", value: "React, Vite, Tailwind CSS, React Router" },
        { label: "Focus", value: "Structure, Clarity, Accessibility" },
        { label: "Timeframe", value: "February 2026" },
      ],
      intro:
        "Personal portfolio designed for a clear presentation of my workflow, selected projects, and UX-oriented frontend development.",
      bullets: [
        "Minimalist, app-like interface featuring a sidebar instead of a classic top navigation",
        "Fast orientation for recruiters through a clear information hierarchy",
        "Project content is presented in a structured and traceable manner",
      ],
    },
    {
      id: "goal",
      media: {
        src: goalImg,
        caption: "Project overview of schueler.dev",
        alt: "Goal and positioning of the portfolio",
      },
      intro:
        "The portfolio was developed to make my way of working visible and provide companies with a well-founded basis for decision-making.",
      bullets: [
        "Presentation of my projects, skills, and working methods in a clear structure",
        "Positioning as a frontend developer with a UX focus and interdisciplinary thinking",
        "Differentiation from generic portfolio sites through reduced navigation and a stronger app character",
      ],
    },
    {
      id: "implementation",
      media: {
        src: implementationImg,
        caption: "Data and folder structure of the portfolio",
        alt: "Structure and architecture of the portfolio project",
      },
      intro:
        "The site combines an almost single-page-like navigation with separate project detail pages for more in-depth content.",
      bullets: [
        "Sections on the main page are accessed via a sidebar",
        "Project pages use tabs for a compact and organized presentation",
        "Project data is stored in structured configuration files and loaded dynamically via slugs",
      ],
    },
    {
      id: "tech",
      // media: { src: techImg, alt: "Technical architecture of the portfolio" },
      intro:
        "The technical architecture is modular, component-based, and designed for easy extensibility.",
      bullets: [
        "React and Vite for a highly performant frontend setup",
        "React Router for slug-based detail pages",
        "Tailwind CSS for consistent spacing, typography, and reusable UI patterns",
        "Multilingual content structure and observer-based navigation logic",
      ],
      codeExamples: [
        {
          title: "Scroll Logic & History API",
          code: `// Synchronizes scroll position with URL and sidebar status
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      // Selects the section with the largest visible area
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleSection) {
        const sectionId = visibleSection.target.id;
        setActiveSection(sectionId);
        
        // Update URL without reload (for deep linking)
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
        caption: "Final responsive interface displaying project details",
        alt: "Result and future development of the portfolio",
      },
      intro:
        "The result is an extensible portfolio system that consistently brings together design, content, and technical structure.",
      bullets: [
        "Clear presentation of my role between UX, UI, and frontend development",
        "Solid foundation for gradually adding further projects and case studies",
        "Planned future developments include Dark Mode and improved responsiveness",
      ],
    },
  ],
};
