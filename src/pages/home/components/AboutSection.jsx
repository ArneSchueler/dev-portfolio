import { useState } from "react";
import TabNavigation from "../../../components/ui/tabs/TabNavigation";
import { ABOUT_TABS, ABOUT_CONTENT } from "../../../data/en/about";

export function AboutSection() {
  const [currentTab, setCurrentTab] = useState("about");
  const content = ABOUT_CONTENT.find((content) => content.id === currentTab);

  return (
    <div className="grid max-w-400 items-start justify-center gap-x-20 gap-y-8 lg:grid-cols-3">
      <h1 className="text-display font-semibold">About</h1>
      <TabNavigation
        items={ABOUT_TABS}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
      />

      <div className="flex flex-col gap-4">
        <h2>{content.title}</h2>
        <em>{content.quote}</em>
      </div>
      <div className="items-start lg:col-span-2">{renderContent(content)}</div>
    </div>
  );
}

function renderContent(content) {
  const type = content.body.type;

  if (type === "text") {
    return (
      <p className="border-s-2 border-cyan-500 ps-2 text-lg">
        {content.body.text}
      </p>
    );
  } else if (type === "items") {
    return (
      <ul className="flex flex-col gap-6">
        {content.body.items.map(({ title, text }) => {
          return (
            <li className="border-s-2 border-cyan-500 ps-2">
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
