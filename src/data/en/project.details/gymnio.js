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
      "Dashboard concept consolidating training, nutrition, and coaching into one single application.",
    links: [
      {
        type: "behance",
        href: "https://www.behance.net/gallery/234946097/GYMNIO-Your-AI-fitness-coach",
      },
    ],
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
      media: { src: gymnioOverview, alt: "Gymnio overview" },
      chips: [
        { label: "Role", value: "Product Designer (UX/UI)" },
        { label: "Tools", value: "Figma, FigJam" },
        { label: "Focus", value: "Dashboard Design" },
        { label: "Year", value: "2025" },
      ],
      intro:
        "Gymnio is an AI-powered fitness platform acting as a personal digital coach. The project focuses on uniting training, nutrition, and progress analysis into a seamless, data-driven dashboard.",
      bullets: [
        "Centralized hub: All relevant metrics in one place instead of fragmented data.",
        'AI companion: "Coach Sam" provides personalized insights and motivating feedback based on user behavior.',
        "Clear prioritization: Focus on the essentials to avoid overwhelming the user with raw data.",
      ],
    },
    {
      id: "challenge",
      media: { src: gymnioOnboarding, alt: "Gymnio challenge" },
      intro:
        "The biggest hurdle of modern fitness apps is information overload. While many apps offer a lot of data, they lack clear orientation. The challenge was to develop a dashboard that works for both beginners and advanced users, making personalized goals tangible.",
      bullets: [
        "Lack of structure: Cluttered data without direct context for action.",
        "No personalization: Static plans that do not react to daily progress.",
        "Loss of motivation: Missing visual feedback for long-term goal achievement.",
      ],
    },
    {
      id: "process",
      media: { src: gymnioWireframe, alt: "Gymnio process" },
      intro:
        "The process was aimed at building a systematic design framework. From the initial structuring of the information hierarchy to the final high-fidelity system, the focus remained on user guidance.",
      bullets: [
        "Modular architecture: Development of a grid system for flexible widgets (cards).",
        "Inclusive design: Focus on accessibility through high contrast ratios and clear, readable typography.",
        "Clean aesthetic: A bright, friendly UI design conveying professionalism and clarity.",
      ],
    },
    {
      id: "solution",
      media: { src: gymnioUserFlow, alt: "Gymnio solution" },
      intro:
        "The solution is an adaptable dashboard tailored to the user. A thoughtful flow enables seamless transitions between high-level overviews and detailed performance data, while the AI moderates the experience.",
      bullets: [
        "Interactive widgets: Weekly volume, performance trends, and recipe suggestions.",
        "Smart feedback: Coach Sam provides proactive tips (e.g., weight progression or nutrition advice).",
        "Seamless navigation: Quick access to training history and goal tracking.",
      ],
    },
    {
      id: "results",
      media: { src: gymnioDesignSystem, alt: "Gymnio results" },
      intro:
        "Gymnio demonstrates how modular design and AI can transform the user experience. The result is a platform that reduces complexity and strengthens commitment to fitness goals through clear visual feedback.",
      bullets: [
        "Scalability: The design system can be easily expanded with new features.",
        "User trust: Transparent progress visualization through clear charts and benchmarks.",
        "Increased focus: Minimizing search time within the app.",
      ],
    },
  ],
};
