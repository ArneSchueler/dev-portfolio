import Button from "../Buttons/Button";

export default function ProjectCard({
  icon1: Icon1,
  icon2: Icon2,
  onClick,
  title,
  description,
  btnLabel,
  icon1,
  icon2,
  ariaLabel,
  variant = "primary",
}) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="flex justify-between">
        <Button>View projects →</Button>
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
