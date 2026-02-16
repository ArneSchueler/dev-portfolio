import ProjectCardList from "../../../components/ui/card/ProjectCardList.jsx";
import TabNavigation from "../../../components/ui/tabs/TabNavigation.jsx";
import { PROJECTS, PROJECT_TABS } from "../../../data/en/projects.js";
import { useState } from "react";

export function ProjectsSection() {
  const [currentTab, setCurrentTab] = useState("selected");

  return (
    <div className="grid max-w-400 items-start justify-center gap-x-20 gap-y-8 lg:grid-cols-3">
      <h1 className="text-display font-semibold">Projects</h1>
      <TabNavigation
        items={PROJECT_TABS}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
      />
      <ProjectCardList items={PROJECTS} />
    </div>
  );
}
