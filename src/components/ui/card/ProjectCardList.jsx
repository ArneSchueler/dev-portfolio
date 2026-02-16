import Button from "../buttons/Button";
import { projectDetailsBtn, githubBtn, redirectBtn } from "../buttons/Button";

export default function ProjectCardList({ items }) {
  return (
    <div className="grid flex-col gap-14 lg:col-span-3 xl:grid-cols-3">
      {items.map(({ slug, overview }) => {
        const { title, description, links = [] } = overview;

        const github = links.find((link) => link.type === "github")?.href;
        const external = links.find((link) => link.type === "external")?.href;

        return (
          <article
            key={slug}
            className="flex flex-col justify-between gap-6 border-b-2 p-4 hover:scale-102 hover:rounded-t-2xl hover:border-b-cyan-500 hover:bg-slate-200/10"
          >
            <div className="flex flex-col gap-4">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="flex justify-between pb-6">
              <Button {...projectDetailsBtn} route={`/project/${slug}`} />
              <div className="flex gap-4">
                {github && <Button {...githubBtn} route={github} />}
                <Button {...redirectBtn} route={external} />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
