import { projectsOverview } from "../../../data/projects/projectsOverview-en.js";
import ProjectCardList from "../../../components/ui/card/ProjectCardList.jsx";
import ProjectCard from "../../../components/ui/card/ProjectCardList.jsx";
// import { projects } from "../../data/projects/projects-en.js";
import TabNavigation from "../../../components/ui/tabs/TabNavigation.jsx";

import { useState } from "react";

const githubIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-5 h-5"
  >
    <path
      fill="currentColor"
      d="M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.8 43.8 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.8 43.8 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.7 41.7 0 0 1 7 22.52Z"
    />
  </svg>
);

const openWindowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-5 h-5"
  >
    <path
      fill="currentColor"
      d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8"
    />
  </svg>
);

const NAV_ITEMS = [
  { id: "selected", label: "Selected" },
  { id: "dev", label: "Dev" },
  { id: "ux", label: "UX" },
];

const PROJECT_ITEMS = [
  {
    id: 1,
    categorie: "selected",
    title: "schueler.dev · Portfolio",
    description:
      "Personal portfolio built with a design-system and accessibility focus.",
    btnLabel: "View projects →",
    GitIcon: githubIcon,
    github: "https://github.com/ArneSchueler/dev-portfolio",
    RedirectIcon: openWindowIcon,
    redirect: "https://www.schueler.dev/",
  },
  {
    id: 2,
    categorie: "selected",

    title: "Convert-O · Modular Web App",
    description:
      "Modular conversion web app with a focus on structure and usability.",
    btnLabel: "View projects →",
    GitIcon: githubIcon,
    RedirectIcon: openWindowIcon,
  },
  {
    id: 3,
    categorie: "selected",

    title: "workout · Modular Web App",
    description:
      "Modular conversion web app with a focus on structure and usability.",
    btnLabel: "View projects →",
    GitIcon: githubIcon,
    RedirectIcon: openWindowIcon,
  },
];

export function ProjectsSection() {
  const [currentTab, setCurrentTab] = useState("selected");

  return (
    <div className="grid lg:grid-cols-3 gap-x-20 gap-y-8 items-start justify-center max-w-400">
      <h1 className="text-display font-semibold">Projects</h1>
      <TabNavigation
        items={NAV_ITEMS}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
      />
      <ProjectCardList items={PROJECT_ITEMS} />
    </div>
  );
}
