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
      "Concept for information visualization of autonomous vehicle fleets.",
    links: [],
  },

  tabs: [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "Challenge" },
    { id: "process", label: "Process" },
    { id: "solution", label: "Solution" },
    { id: "results", label: "Results" },
  ],

  content: [
    {
      id: "overview",
      media: {
        src: showCaseOverview,
        alt: "Showcase overview",
      },
      chips: [
        { label: "Role", value: "UX/UI Designer" },
        { label: "Tools", value: "Figma, Jira, UEQ+, NASA TLX" },
        { label: "Focus", value: "Information Visualization, User Research" },
        { label: "Year", value: "2024" },
      ],
      intro:
        "The goal of the master's thesis was to develop and evaluate a UI/UX concept for a frontend showcase that visualizes complex vehicle and fleet data comprehensibly. The focus was on reducing cognitive load for users and building an interactive system.",
      bullets: [
        "Interactive dashboard: Access to large datasets from the MoSy, Live View, and BeIntelli systems.",
        "Real-time experience: A functional prototype that makes the performance of autonomous fleets directly tangible.",
        "Cognitive relief: Reduction of complexity through targeted information architecture.",
      ],
    },
    {
      id: "challenge",
      media: {
        src: showCaseChallenge,
        caption: "Existing MoSy Monitoring interface showing visual overload",
        alt: "Showcase challenge",
      },
      intro:
        "Existing systems were rich in information but visually overloaded, making efficient use difficult. The core task was to prepare complex real-time data so that it remains intuitively navigable without overwhelming the user.",
      bullets: [
        "Data complexity: Harmonizing different data sources into a single interface.",
        "Visual stress: Avoiding overload while maintaining a high information density.",
        "Functionality vs. aesthetics: Creating a dashboard that is both visually appealing and highly efficient.",
      ],
    },
    {
      id: "process",
      media: {
        src: showCaseProcess,
        caption: "Low-fidelity wireframe establishing the new layout structure",
        alt: "Showcase process",
      },
      intro:
        "The development process followed an iterative UX approach with a strong focus on user-centered design. Each phase was used to further refine the interaction logic and adapt it to user needs.",
      bullets: [
        "Low-fidelity prototyping: Rapid iterations to define the basic layout structure.",
        "High-fidelity prototyping: Elaboration in Figma with interactive maps, filter functions, and system components.",
        "Feedback loops: Continuous optimization through user testing and direct validation of the concepts.",
      ],
    },
    {
      id: "solution",
      media: {
        src: showCaseSolution,
        caption: "Interactive device cards designed to reduce cognitive load",
        alt: "Showcase solution",
      },
      intro:
        "A central goal was the reduction of cognitive load. The use of scientific evaluation methods ensured that the design was not only subjectively appealing but also objectively supported the workflow.",
      bullets: [
        "Visual encoding: Use of color-coded status indicators and charts (e.g., Anomaly Timeline) for quick error detection.",
        "Scientific validation: Application of the UEQ+ (User Experience Questionnaire) and NASA TLX methods to make mental workload measurable.",
        "High efficiency: The results confirm a low mental workload combined with high usability.",
      ],
    },
    {
      id: "results",
      media: {
        src: showCaseResult,
        caption:
          "UEQ+ evaluation results demonstrating high usability and efficiency",
        alt: "Showcase results",
      },
      intro:
        "The thesis proves that well-founded information visualization significantly improves UX. The consistent color system and interactive elements increase user trust in the system and promote rapid decision-making.",
      bullets: [
        "Proven quality: The evaluation shows that users perceive the visualizations as understandable, appealing, and helpful.",
        "Scalable system: A consistent color system increases orientation within the fleet data.",
        "Future potential: Future developments could integrate Machine Learning and Predictive Analytics to automatically detect patterns.",
      ],
    },
  ],
};
