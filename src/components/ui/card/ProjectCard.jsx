import Button from "../buttons/Button";

export default function ProjectCardList({ items }) {
  return (
    <div className="flex col-span-3 p-6 gap-14">
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
              className="flex flex-col border-b-2 hover:border-b-cyan-500"
            >
              <div className="flex flex-col gap-6">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <div className="flex justify-between  pb-6">
                <Button variant="tertiary">{btnLabel}</Button>
                <div>
                  <Button link={github} variant="primary">
                    {GitIcon}
                  </Button>
                  <Button link={redirect}>{RedirectIcon} </Button>
                </div>
              </div>
            </article>
          );
        },
      )}
    </div>
  );
}
