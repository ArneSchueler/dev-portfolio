import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import TabNavigation from "../../components/ui/tabs/TabNavigation";
import { NAV_ITEMS } from "../home/components/ProjectsSection";

export const TABNAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "architectur", label: "Architecture" },
  { id: "technical", label: "Technical Decisions" },
  { id: "learnings", label: "Learnings" },
];

export const PROJECT_ITEMS = [
  {
    id: "portfolio",
    categorie: "selected",
    title: "schueler.dev · Portfolio",
    description:
      "Personal portfolio built with a design-system and accessibility focus.",
    btnLabel: "View projects →",
    gitIcon: "ph:github-logo-light",
    github: "https://github.com/ArneSchueler/dev-portfolio",
    redirectIcon: "ph:arrow-square-out-light",
    redirect: "https://www.schueler.dev/",
  },
  {
    id: "convert-o",
    categorie: "selected",

    title: "Convert-O · Modular Web App",
    description:
      "Modular conversion web app with a focus on structure and usability.",
    btnLabel: "View projects →",
    gitIcon: "ph:github-logo-light",
    redirectIcon: "ph:arrow-square-out-light",
  },
  {
    id: "workout",
    categorie: "selected",
    slug: "workout",
    title: "workout · Modular Web App",
    description:
      "Modular conversion web app with a focus on structure and usability.",
    btnLabel: "View projects →",
    gitIcon: "ph:github-logo-light",
    redirectIcon: "ph:arrow-square-out-light",
  },
];

export function DevProject() {
  const { slug } = useParams();
  const project = PROJECT_ITEMS.find((project) => project.id === slug);
  const [currentTab, setCurrentTab] = useState("overview");

  if (!project) return <div>Project not found.</div>;

  return (
    <main className="flex flex-col h-screen sm:ms-40 md:ms-30 p-6 sm:p-40 overflow-y-scroll md:snap-y md:snap-mandatory">
      <div className="grid lg:grid-cols-3 gap-x-20 gap-y-8 items-start justify-center max-w-400">
        <h1 className="text-display font-semibold">About</h1>
        <TabNavigation
          items={TABNAV_ITEMS}
          currentTab={currentTab}
          onTabChange={setCurrentTab}
        />

        <div className="flex flex-col gap-4">
          <h2>{project.title}</h2>
        </div>
      </div>
    </main>
  );
}
