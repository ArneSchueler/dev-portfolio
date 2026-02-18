import ProjectCardList from "../../../components/ui/card/ProjectCardList.jsx";
import TabNavigation from "../../../components/ui/tabs/TabNavigation.jsx";
import { useState } from "react";
import { useLanguage } from "../../../state/language.context";

export function ProjectsSection() {
  const [currentTab, setCurrentTab] = useState("selected");
  const { data } = useLanguage();
  const { PROJECTS } = data.site;
  const { PROJECT_CARDS, PROJECT_TABS } = data.projectsList;

  const filteredProjects = PROJECT_CARDS.filter((project) =>
    project.tabs.includes(currentTab)
  );

  return (
    <div className="grid max-w-400 items-start justify-center gap-x-20 gap-y-8 lg:grid-cols-3">
      <h1 className="text-display font-semibold">{PROJECTS.title}</h1>
      <TabNavigation
        items={PROJECT_TABS}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
      />
      <ProjectCardList items={filteredProjects} />
    </div>
  );
}
