import Button from "../buttons/Button";

export default function ProjectCard({
  icon1: Icon1,
  icon2: Icon2,
  onClick,
  title,
  description,
  btnLabel,
  ariaLabel,
  variant = "primary",
}) {
  return (
    <div className="flex flex-col p-6 gap-8">
      <div className="flex flex-col gap-6">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="flex justify-between border-b pb-6">
        <Button variant="tertiary">View projects →</Button>
        <div>
          <Button variant="primary">
            <Icon1 />
          </Button>
          <Button>
            <Icon2 />
          </Button>
        </div>
      </div>
    </div>
  );
}
