import { projectsOverview } from "../../content/projects/projectsOverview-en.js";
import ProjectCard from "../ui/card/ProjectCard.jsx";
import { projects } from "../../content/projects/projects-en.js";

export default function ProjectsSection() {
  return (
    <section className="flex flex-col w-full h-dvh text-slate-950 gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-7xl font-semibold">{projectsOverview.title}</h1>
      </div>
      <div className="flex gap-8">
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
