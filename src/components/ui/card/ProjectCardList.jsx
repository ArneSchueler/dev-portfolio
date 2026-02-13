import Button from "../buttons/Button";
import { projectDetailsBtn, githubBtn, redirectBtn } from "../buttons/Button";

export default function ProjectCardList({ items }) {
  return (
    <div className="flex flex-col xl:flex-row lg:col-span-3 gap-14">
      {items.map(({ id, title, description }) => {
        return (
          <article
            key={id}
            className="flex flex-col gap-6 border-b-2 p-4 hover:bg-slate-200/10 hover:rounded-t-2xl hover:scale-102 hover:border-b-cyan-500"
          >
            <div className="flex flex-col gap-4">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="flex justify-between   pb-6">
              <Button {...projectDetailsBtn} route={`/project/${id}`} />
              <div>
                <Button {...githubBtn} />
                <Button {...redirectBtn} />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
