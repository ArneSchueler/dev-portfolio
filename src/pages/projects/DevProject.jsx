import { useState } from "react";
import { useParams } from "react-router-dom";
import TabNavigation from "../../components/ui/tabs/TabNavigation";
import { PROJECTS } from "../../data/en/projects";
import Button from "../../components/ui/buttons/Button";

export function DevProject() {
  const { slug } = useParams();
  const project = PROJECTS.find((project) => project.slug === slug);
  const [currentTab, setCurrentTab] = useState("overview");

  const details = project.detail;
  const content = details.body.find((content) => content.id === currentTab);

  if (!project) return <div>Project not found.</div>;

  console.log(details.hero.image);

  return (
    <main className="flex h-screen flex-col overflow-y-scroll p-6 sm:ms-40 sm:p-40 md:ms-30 md:snap-y md:snap-mandatory">
      <div className="grid max-w-400 items-start justify-center gap-x-20 gap-y-12 lg:grid-cols-3">
        <div>
          <a href="">Selected / schueler.dev</a>
          <h1 className="text-display font-semibold">{details.hero.title}</h1>
        </div>
        <TabNavigation
          items={details.tabs}
          currentTab={currentTab}
          onTabChange={setCurrentTab}
        />

        <div className="flex flex-col gap-4">
          <img
            className="rounded-2xl shadow-md"
            src={details.hero.image}
            alt="Project Image"
          />
          <div className="flex flex-wrap gap-2 ps-2">
            {details.hero.meta.map(({ label, value }) => {
              return (
                <div className="flex w-fit gap-2 rounded-full bg-slate-500/10 px-3 py-2 text-xs shadow">
                  <span className="font-bold">{label}</span>
                  <span>{value}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-2">
          <p className="font-normal">{details.hero.subtitle}</p>
          <div>
            <ul className="flex flex-col gap-6">
              <li className="border-s-2 border-cyan-500 ps-2">
                <p>
                  Clear navigation with a section-based layout and predictable
                  interactions
                </p>
              </li>
              <li className="border-s-2 border-cyan-500 ps-2">
                <p>
                  Content-driven components (data first, UI second) for
                  scalability
                </p>
              </li>
              <li className="border-s-2 border-cyan-500 ps-2">
                <p>
                  Accessible patterns: focus states, semantics, readable
                  contrast, keyboard support
                </p>
              </li>
              <li className="border-s-2 border-cyan-500 ps-2">
                <p>
                  Minimal visuals to keep attention on hierarchy, structure, and
                  work samples
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
