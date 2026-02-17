import Button, { behanceBtn } from "../buttons/Button";
import { projectDetailsBtn, githubBtn, redirectBtn } from "../buttons/Button";

export default function ProjectCardList({ items }) {
  return (
    <div className="grid flex-col gap-14 lg:col-span-3 xl:grid-cols-3">
      {items.map(({ slug, overview }) => {
        const { title, description, stack, links = [] } = overview;

        const github = links.find((link) => link.type === "github")?.href;
        const external = links.find((link) => link.type === "external")?.href;
        const behance = links.find((link) => link.type === "behance")?.href;

        return (
          <article
            key={slug}
            className="flex flex-col justify-between gap-6 border-b-2 p-4 transition hover:scale-102 hover:rounded-t-2xl hover:border-b-cyan-500 hover:bg-slate-200/10"
          >
            <div className="flex flex-col gap-4">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {stack.map((stack) => {
                return (
                  <div className="flex w-fit gap-2 rounded-full bg-slate-500/10 px-2 py-1 text-xs shadow">
                    <span>{stack}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between pb-6">
              <Button {...projectDetailsBtn} route={`/project/${slug}`} />
              <div className="flex gap-4">
                {github && <Button {...githubBtn} route={github} />}
                {external && <Button {...redirectBtn} route={external} />}
                {behance && <Button {...behanceBtn} route={behance} />}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
