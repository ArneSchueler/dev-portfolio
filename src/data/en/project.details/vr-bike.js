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
      { label: "VR Bicycle Workshop" },
    ],
    title: "VR Bicycle Workshop",
    subtitle:
      "Interactive VR workshop prototype focusing on immersion and structured interaction.",
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
    { id: "overview", label: "Overview" },
    { id: "goal", label: "Goal" },
    { id: "implementation", label: "Implementation" },
    { id: "tech", label: "Tech" },
    { id: "results", label: "Results" },
  ],

  content: [
    {
      id: "overview",
      media: { src: vrOverview, alt: "VR overview" },
      chips: [
        { label: "Role", value: "VR/UX Designer & Developer" },
        { label: "Tools", value: "Unity, MRTK 3, XR Interaction Toolkit" },
        { label: "Focus", value: "VR Interaction & Immersion" },
        { label: "Year", value: "2023" },
      ],
      intro:
        "VR prototype for simulating a structured bicycle repair workshop.",
      bullets: [
        "Focus on immersion and guided interaction: The goal is a deep user experience through realistic design.",
        "Clear spatial structure: Division of the virtual environment into functional areas like Workstation, Storage, and SalesRoom.",
        "Validation of XR interaction patterns: Testing advanced techniques for manipulating virtual objects.",
      ],
    },
    {
      id: "goal",
      media: {
        src: vrGoal,
        caption: "Mapping interaction flow for first-time VR users",
        alt: "VR goal",
      },
      intro:
        "The main goal of the project was to develop a VR experience that combines technical precision with high usability.",
      bullets: [
        "Good immersion: Creating a credible sense of environment for the user.",
        "Realistic style: Using an appealing and visually authentic graphic style.",
        "User guidance: Use of MRTK 3 UI elements to guide the user intuitively and provide assistance.",
      ],
    },
    {
      id: "implementation",
      media: {
        src: vrImplementation,
        caption:
          "Grab, teleport, and socket interaction implementations in Unity",
        alt: "VR implementation",
      },
      intro:
        "The development focused on bringing the static environment to life through complex interaction possibilities.",
      bullets: [
        "Socket systems: Intelligent sockets on the lift that check specific preconditions for the assembly of individual bicycle parts.",
        "Environmental interaction: Functional furniture, such as usable drawers for storing tools or small parts.",
        "Locomotion: Integration of a teleportation system with a custom-designed reticle.",
      ],
    },
    {
      id: "tech",
      media: {
        src: vrTech,
        caption: "Scene hierarchy and state-driven workflow logic structure",
        alt: "VR tech stack",
      },
      intro:
        "The project is based on a modular architecture within Unity to efficiently manage various functional areas.",
      bullets: [
        "Frameworks: Mixed Reality Toolkit 3 (MRTK 3) for state-of-the-art VR interactions and UI control.",
        "XR Infrastructure: Use of the XR Interaction Manager and XR Origin to handle camera offsets and controller input.",
        "Scene management: Structured hierarchy consisting of a management scene, a workstation (3x3), storage (Storage), and a sales room (SalesRoom 7x6).",
      ],
    },
    {
      id: "results",
      media: {
        src: vrResult,
        caption: "Completed interaction cycle demonstrating guided user tasks",
        alt: "VR results",
      },
      intro:
        "The VR bicycle workshop demonstrates the successful combination of technical simulation and intuitive usability.",
      bullets: [
        "Increased immersion: A high level of realism was achieved through detailed hand animations and physically-based interactions.",
        "Error prevention: The socket system with preconditions ensures that assembly processes are carried out in the logically correct order.",
        "Efficient navigation: Users can move safely and purposefully through the large sales room and workshop thanks to the teleportation system.",
      ],
    },
  ],
};
