import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import TabNavigation from "../../components/ui/tabs/TabNavigation";
import { useLanguage } from "../../state/language.context";

export function ProjectDetail() {
  const { slug } = useParams();
  const { data } = useLanguage();
  const project = data.projectDetails[slug];
  if (!project) return <div>Project not found.</div>;

  const [currentTab, setCurrentTab] = useState(`${project.content[0].id}`);

  const tabContent = project.content.find(
    (tabContent) => tabContent.id === currentTab
  );

  return (
    <main className="flex h-screen flex-col overflow-y-scroll p-6 sm:ms-40 sm:p-40 md:ms-30 md:snap-y md:snap-mandatory">
      <div className="grid max-w-400 items-start justify-center gap-x-20 gap-y-12 lg:grid-cols-3">
        <div>
          <nav aria-label="Breadcrumb">
            <ol className="flex gap-2">
              {project.header.breadcrumb.map((item, index) => (
                <li key={index}>
                  {item.route ? (
                    <Link
                      className="transition hover:font-bold hover:text-cyan-500"
                      to={item.route}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span>/ {item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="text-display font-semibold">{project.header.title}</h1>
        </div>
        <TabNavigation
          items={project.tabs}
          currentTab={currentTab}
          onTabChange={setCurrentTab}
        />

        <div className="flex flex-col gap-4">
          {tabContent.media?.src && (
            <img
              className="rounded-2xl shadow"
              src={tabContent.media.src}
              alt={tabContent.media.alt}
            />
          )}
          {tabContent?.chips && (
            <div className="flex flex-wrap gap-2 ps-2">
              {tabContent.chips.map(({ label, value }) => {
                return (
                  <div className="flex w-fit gap-2 rounded-full bg-slate-500/10 px-3 py-2 text-xs shadow">
                    <span className="font-bold">{label}</span>
                    <span>{value}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 lg:col-span-2">
          <p className="font-bold">{tabContent.heading}</p>
          <div>
            <ul className="flex flex-col gap-6">
              {tabContent.bullets.map((bulletText) => {
                return (
                  <li className="border-s-2 border-cyan-500 ps-2">
                    {bulletText}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
