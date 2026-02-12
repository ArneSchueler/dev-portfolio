import Button from "../buttons/Button";

export default function ProjectCardList({ items }) {
  return (
    <div className="flex flex-col xl:flex-row lg:col-span-3 gap-14">
      {items.map(
        ({
          id,
          title,
          description,
          btnLabel,
          GitIcon,
          github,
          RedirectIcon,
          redirect,
        }) => {
          return (
            <article
              key={id}
              className="flex flex-col gap-6 border-b-2 p-4 hover:bg-slate-200/10 hover:rounded-2xl hover:scale-102 hover:border-b-cyan-500"
            >
              <div className="flex flex-col gap-4">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <div className="flex justify-between   pb-6">
                <Button variant="secondary">{btnLabel}</Button>
                <div>
                  <Button link={github} variant="tertiary">
                    {GitIcon}
                  </Button>
                  <Button link={redirect} variant="tertiary">
                    {RedirectIcon}{" "}
                  </Button>
                </div>
              </div>
            </article>
          );
        },
      )}
    </div>
  );
}
