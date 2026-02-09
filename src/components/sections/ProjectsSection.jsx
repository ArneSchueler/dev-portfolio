import { projectsOverview } from "../../content/projects/projectsOverview-en.js";
import ProjectCard from "../ui/card/ProjectCard.jsx";
import { projects } from "../../content/projects/projects-en.js";

export default function ProjectsSection() {
  return (
    <section className="flex flex-col box-border items-center justify-items-center w-vw h-dvh lg:ms-30 p-6 sm:p-40 text-slate-950 snap-start">
      <div className="flex flex-col h-dvh gap-10 box-border max-w-400">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-semibold">{projectsOverview.title}</h1>
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
      </div>
    </section>
  );
}
