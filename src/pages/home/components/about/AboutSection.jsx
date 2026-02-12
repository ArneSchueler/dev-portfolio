import { useState } from "react";
import TabNavigation from "../../../../components/ui/tabs/TabNavigation";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "approach", label: "Approach" },
  { id: "background", label: "Background" },
  { id: "beyond", label: "Beyond" },
];
const TAB_CONTENT = [
  {
    id: "about",
    title: "Arne Schüler",
    quote:
      "I design and build web interfaces where structure, accessibility, and design decisions are treated as one system.",
    content: {
      type: "text",
      text: "I design and build web interfaces where structure, accessibility, and visual design are considered together. My work focuses on clear information architecture, maintainable components, and implementations that translate design decisions directly into code.",
    },
  },
  {
    id: "approach",
    title: "Working principles",
    quote:
      "My work is driven by clarity, reduction, and UX-first thinking rather than visual or technical complexity.",
    content: {
      type: "items",
      items: [
        {
          id: "bullet1",
          title: "UX before implementation",
          subhead: "user, context, problem",
        },
        {
          id: "bullet2",
          title: "Structure before styling:",
          subhead: "content, components, systems",
        },
        {
          id: "bullet3",
          title: "Accessibility as a baseline,",
          subhead: "not an add-on",
        },
        {
          id: "bullet4",
          title: "Design and code without friction",
          subhead: "(tokens, components, states)",
        },
        {
          id: "bullet5",
          title: "Reduction over feature density",
          subhead: "Lorem Ipsum",
        },
      ],
    },
  },

  {
    id: "background",
    title: "Professional background",
    quote:
      "My background combines design education and frontend development with a strong focus on human-centered interaction.",
    content: {
      type: "items",
      items: [
        {
          id: "bullet1",
          title: "Degree in Media Informatics / Media Design Informatics",
          subhead: "Focus on Human-Computer Interaction",
        },
        {
          id: "bullet2",
          title: "Vocational training in media design",
          subhead: "content, components, systems",
        },
        {
          id: "bullet3",
          title:
            "Practical experience through portfolio, practice, and client web projects",
          subhead: "not an add-on",
        },
      ],
    },
  },
  {
    id: "beyond",
    title: "More than Design",
    quote:
      "When I’m not designing, I enjoy building things with my hands and experimenting beyond the screen.",
    content: {
      type: "text",
      text: "When I’m not designing, I enjoy cooking or building things with my hands. Cooking often reminds me of design: you explore what people enjoy, experiment, adjust, and refine until it feels right. Whether it’s food or interfaces, I value experimentation, learning, and improving with every iteration.",
    },
  },
];

export function AboutSection() {
  const [currentTab, setCurrentTab] = useState("about");
  const content = TAB_CONTENT.find((content) => content.id === currentTab);

  return (
    <div className="grid lg:grid-cols-3 gap-x-20 gap-y-8 items-start justify-center max-w-400">
      <h1 className="text-display font-semibold">About</h1>
      <TabNavigation
        items={NAV_ITEMS}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
      />

      <div className="flex flex-col gap-4">
        <h2>{content.title}</h2>
        <em>{content.quote}</em>
      </div>
      <div className="lg:col-span-2 items-start ">
        {renderContentType(content)}
      </div>
    </div>
  );
}

function renderContentType(content) {
  const type = content.content.type;

  if (type === "text") {
    return (
      <p className="ps-2 border-s-2 text-lg  border-cyan-500">
        {content.content.text}
      </p>
    );
  } else if (type === "items") {
    return (
      <ul className="flex flex-col gap-6">
        {content.content.items.map(({ title, subhead }) => {
          return (
            <li className="ps-2 border-s-2  border-cyan-500">
              <h3>{title}</h3>
              <p>{subhead}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
