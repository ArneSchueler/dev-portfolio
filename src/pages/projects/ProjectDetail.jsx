import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import TabNavigation from "../../components/ui/tabs/TabNavigation";
import { useLanguage } from "../../state/language.context";
import { CodeBlock } from "../../components/Codeblock";
import Button, {
  githubBtn,
  redirectBtn,
  behanceBtn,
} from "../../components/ui/buttons/Button";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ICONS } from "../../components/ui/icons";
import { Icon } from "@iconify/react";

export function ProjectDetail() {
  const { slug } = useParams();
  const { data } = useLanguage();

  const [open, setOpen] = useState(false);

  const project = data.projectDetails[slug];
  if (!project) return <div>Project not found.</div>;

  const [currentTab, setCurrentTab] = useState(`${project.content[0].id}`);

  const tabContent = project.content.find(
    (tabContent) => tabContent.id === currentTab
  );

  const links = project.header.links.map((link) => {
    return link;
  });

  const github = links.find((link) => link.type === "github")?.href;
  const external = links.find((link) => link.type === "external")?.href;
  const behance = links.find((link) => link.type === "behance")?.href;

  return (
    <main className="flex h-fit min-h-screen flex-col p-6 sm:ms-40 sm:px-40 sm:pt-40 md:ms-30">
      <div className="grid max-w-400 items-start justify-center gap-x-20 gap-y-12 2xl:grid-cols-[minmax(550px,2fr)_3fr]">
        <div className="lg:col-start-1">
          <nav
            className="flex items-center justify-between"
            aria-label="Breadcrumb"
          >
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
            <div className="flex gap-4">
              {github && <Button {...githubBtn} route={github} />}
              {external && <Button {...redirectBtn} route={external} />}
              {behance && <Button {...behanceBtn} route={behance} />}
            </div>
          </nav>
          <h1 className="text-display font-bold text-black">
            {project.header.title}
          </h1>
        </div>
        <div className="lg:col-start-2">
          <TabNavigation
            items={project.tabs}
            currentTab={currentTab}
            onTabChange={setCurrentTab}
          />
        </div>

        <div className="flex flex-col gap-8">
          {tabContent.media?.src && (
            <div className="group relative cursor-zoom-in">
              <img
                className="w-full rounded-2xl shadow"
                src={tabContent.media.src}
                alt={tabContent.media.alt}
                onClick={() => setOpen(true)}
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-black/10 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded-full bg-white/90 p-2 text-sm font-medium shadow-md">
                  <Icon className="text-4xl" icon={ICONS.enlarge}></Icon>
                </span>
              </div>
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src: tabContent.media.src }]}
                animation={{ fade: 300 }}
                render={{
                  buttonPrev: () => null,
                  buttonNext: () => null,
                  slide: ({ slide }) => (
                    <div className="flex h-full w-full items-center justify-center p-4">
                      <img
                        src={slide.src}
                        alt="Projekt Ansicht"
                        className="w-[clamp(300px, 90vw, 1200px)] h-auto max-h-[85vh] rounded-2xl object-fill shadow-2xl"
                      />
                    </div>
                  ),
                }}
                toolbar={{ buttons: ["close"] }}
                controller={{ closeOnBackdropClick: true }}
                styles={{
                  container: { backgroundColor: "rgba(0, 0, 0, .4)" },
                }}
              />
            </div>
          )}

          {tabContent.codeExamples && (
            <div className="flex w-full flex-col gap-8 rounded-2xl bg-slate-400/10 p-4">
              <div className="flex gap-8">
                <h4 className="font-bold">
                  {tabContent.codeExamples[0].title}
                </h4>
              </div>
              <CodeBlock code={tabContent.codeExamples[0].code} />
            </div>
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
        <div className="flex flex-col gap-8 text-black">
          <p className="max-w-150 font-semibold">{tabContent.intro}</p>
          {tabContent.bullets && (
            <div>
              <ul className="flex flex-col gap-6">
                {tabContent.bullets.map((bulletText, index) => {
                  return (
                    <li key={index} className="flex items-start text-black">
                      <span className="shrink-0 pe-4 text-xl text-cyan-500">
                        /
                      </span>
                      {bulletText}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
