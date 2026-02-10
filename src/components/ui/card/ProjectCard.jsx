import Button from "../buttons/Button";

export default function ProjectCard({ items }) {
  return (
    <div className="flex col-span-3 p-6 gap-14">
      {items.map(
        ({
          title,
          description,
          btnLabel,
          GitIcon,
          github,
          RedirectIcon,
          redirect,
        }) => {
          return (
            <article className="flex flex-col border-b-2 hover:border-b-cyan-500">
              <div className="flex flex-col gap-6">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <div className="flex justify-between  pb-6">
                <Button variant="tertiary">{btnLabel}</Button>
                <div>
                  <Button link={github} variant="primary">
                    {GitIcon}{" "}
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
// export default function ProjectCard({
//   icon1: Icon1,
//   icon2: Icon2,
//   onClick,
//   title,
//   description,
//   btnLabel,
//   ariaLabel,
//   variant = "primary",
// }) {
//   return (
//     <div className="flex flex-col p-6 gap-8">
//       <div className="flex flex-col gap-6">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//       <div className="flex justify-between border-b pb-6">
//         <Button variant="tertiary">View projects →</Button>
//         <div>
//           <Button variant="primary">
//             <Icon1 />
//           </Button>
//           <Button>
//             <Icon2 />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
