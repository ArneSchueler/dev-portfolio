export const VR_BICYCLE_WORKSHOP_DETAIL = {
  slug: "bicycleshop-vr",

  header: {
    breadcrumb: [
      { label: "Dev", route: "/projects" },
      { label: "VR Bicycle Workshop" },
    ],
    title: "VR Bicycle Workshop",
    subtitle:
      "An interactive VR workshop prototype focused on immersion and structured interaction.",
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
      heading:
        "A VR prototype simulating a structured bicycle repair workshop environment.",
      bullets: [
        "Focus on immersion and guided interaction",
        "Clear spatial structure and navigation",
        "Prototype built for validating XR interaction patterns",
      ],
    },
    {
      id: "goal",
      media: { src: null, alt: "VR goals" },
      heading:
        "Design intuitive interactions that feel natural even for first-time VR users.",
      bullets: [
        "Reduce confusion through clear affordances",
        "Step-based interaction flow",
        "Maintain consistent interaction rules",
      ],
    },
    {
      id: "implementation",
      media: { src: null, alt: "VR implementation" },
      heading:
        "Interaction patterns implemented for grabbing, placing, teleporting, and guided task logic.",
      bullets: [
        "Teleport navigation system",
        "Grab and socket-based interactions",
        "Conditional task progression logic",
      ],
    },
    {
      id: "tech",
      media: { src: null, alt: "VR tech stack" },
      heading:
        "XR interaction systems and structured scene hierarchy ensure maintainability.",
      bullets: [
        "XR toolkit interaction handling",
        "State-driven workflow logic",
        "Organized scene structure",
      ],
    },
    {
      id: "results",
      media: { src: null, alt: "VR results" },
      heading:
        "A complete interactive loop demonstrating clear guidance and immersive interaction.",
      bullets: [
        "Users understand task flow faster",
        "Constraints reduce interaction errors",
        "Learning: clarity beats visual complexity",
      ],
    },
  ],
};
