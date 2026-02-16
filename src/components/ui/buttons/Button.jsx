import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const baseBtn = "flex w-fit items-center gap-2 ";
const primaryBtn = "px-4 py-2 rounded-full border  ";

export const ctaBtn = {
  title: "View Projects",
  icon: "ph:arrow-right-light",
  className: `${primaryBtn}`,
  isExternal: false,
};
export const enBtn = {
  title: "EN",
  icon: "",
  className: "",
  isExternal: false,
};
export const deBtn = {
  title: "DE",
  route: "",
  icon: "",
  className: "",
  isExternal: false,
};

export const projectDetailsBtn = {
  title: "View Projects",
  icon: "ph:arrow-right-light",
  className: `text-cyan-500`,
  isExternal: false,
};

export const githubBtn = {
  title: "",
  icon: "ph:github-logo-light",
  route: "",
  className: `w-fit`,
  isExternal: true,
};

export const redirectBtn = {
  title: "",
  icon: "ph:arrow-square-out-light",
  route: "",
  className: `w-fit`,
  isExternal: true,
};

export default function Button({
  title = "View Projects",
  icon,
  route = "/",
  className,
  isExternal = false,
}) {
  const navigate = useNavigate();

  if (!isExternal) {
    return (
      <button
        className={baseBtn + className}
        aria-label={title}
        onClick={() => {
          navigate(route);
        }}
      >
        {title}
        <Icon icon={icon} />
      </button>
    );
  } else {
    return (
      <a href={route} className={className} target="_blank" rel="noreferrer">
        {title}
        <Icon icon={icon} className="size-7" />
      </a>
    );
  }
}
