import { projectsOverview } from "../../data/projects/projectsOverview-en.js";
import ProjectCard from "../ui/card/ProjectCard.jsx";
import { projects } from "../../data/projects/projects-en.js";
import TabNavigation from "../ui/tabs/TabNavigation.jsx";

import { useState } from "react";

const NAV_ITEMS = [
  { id: "selected", label: "Selected Projects" },
  { id: "dev", label: "Dev Projects" },
  { id: "ux", label: "UX Projects" },
];

const PROJECT_ITEMS = [{ title: "Test", description: "" }];

export default function ProjectsSection() {
  const [currentTab, setCurrentTab] = useState("selected");

  return (
    <section
      id="projects"
      className="flex flex-col box-border items-center justify-items-center w-vw h-dvh lg:ms-30 p-6 sm:p-40 text-slate-950 snap-start"
    >
      <div className="grid grid-cols-3 gap-x-20 gap-y-8 h-full max-w-400">
        <h1 className="text-7xl font-semibold">{projectsOverview.title}</h1>
        <TabNavigation
          items={NAV_ITEMS}
          currentTab={currentTab}
          onTabChange={setCurrentTab}
        />
        {PROJECT_ITEMS.map}
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <ProjectCard
          title={projects.converto.title}
          description={projects.converto.description}
          icon1={projects.converto.icon1}
          icon2={projects.converto.icon2}
        ></ProjectCard>
        <ProjectCard
          title={projects.portfolio.title}
          description={projects.portfolio.description}
          icon1={projects.portfolio.icon1}
          icon2={projects.portfolio.icon2}
        ></ProjectCard>
        <ProjectCard
          title={projects.elementsOfFire.title}
          description={projects.elementsOfFire.description}
          icon1={projects.elementsOfFire.icon1}
          icon2={projects.elementsOfFire.icon2}
        ></ProjectCard>
      </div>
    </section>
  );
}
