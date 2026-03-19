export const VR_BICYCLE_WORKSHOP_DETAIL = {
  slug: "bicycleshop-vr",

  header: {
    breadcrumb: [
      { label: "Dev", route: "/projects" },
      { label: "VR Bicycle Workshop" },
    ],
    title: "VR Bicycle Workshop",
    subtitle:
      "Interactive VR workshop prototype focusing on immersion and structured interaction.",
    links: [
      {
        type: "external",
        href: "https://drive.google.com/file/d/1VwHO-o0TO013wi_6vUDKDh19M4beqEce/view?usp=sharing",
      },
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
      media: { src: null, alt: "VR overview" },
      chips: [
        { label: "Role", value: "Developer" },
        { label: "Tools", value: "Unity, XR Toolkit" },
        { label: "Focus", value: "Interaction Design in VR" },
        { label: "Year", value: "2023" },
      ],
      intro:
        "VR prototype for simulating a structured bicycle repair workshop.",
      bullets: [
        "Focus on immersion and guided interaction",
        "Clear spatial structure",
        "Validation of XR interaction patterns",
      ],
    },
    {
      id: "goal",
      media: {
        src: null,
        caption: "Mapping interaction flow for first-time VR users",
        alt: "VR goal",
      },
      intro: "Intuitive interactions for first-time Virtual Reality users.",
      bullets: [
        "Reduction of confusion through clear affordances",
        "Step-based task flow",
        "Consistent interaction rules",
      ],
    },
    {
      id: "implementation",
      media: {
        src: null,
        caption:
          "Grab, teleport, and socket interaction implementations in Unity",
        alt: "VR implementation",
      },
      intro:
        "Implementation of grabbing, placing, teleporting, and guided logic.",
      bullets: [
        "Teleport navigation system",
        "Grab and socket interactions",
        "State-based task logic",
      ],
    },
    {
      id: "tech",
      media: {
        src: null,
        caption: "Scene hierarchy and state-driven workflow logic structure",
        alt: "VR tech stack",
      },
      intro:
        "Structured scene hierarchy and XR interaction systems ensure maintainability.",
      bullets: [
        "XR Toolkit interaction handling",
        "State-driven workflow logic",
        "Organized scene structure",
      ],
    },
    {
      id: "results",
      media: {
        src: null,
        caption: "Completed interaction cycle demonstrating guided user tasks",
        alt: "VR results",
      },
      intro: "Complete interaction cycle with clear user guidance.",
      bullets: [
        "Faster understanding of the task flow",
        "Reduced interaction errors through constraints",
        "Learning: Clarity beats visual complexity",
      ],
    },
  ],
};
