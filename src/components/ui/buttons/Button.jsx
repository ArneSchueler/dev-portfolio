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
  ariaLabel: "GitHub Repository öffnen",
  route: "",
  className: `w-fit h-fit aspect-1 p-2 bg-slate-500/10 rounded-full shadow transition hover:bg-slate-500/20 hover:text-cyan-500`,
  isExternal: true,
};

export const redirectBtn = {
  title: "",
  icon: "ph:arrow-square-out-light",
  ariaLabel: "Link öffnen",
  route: "",
  className: `w-fit h-fit aspect-1 p-2 bg-slate-500/10 rounded-full shadow transition hover:bg-slate-500/20 hover:text-cyan-500`,
  isExternal: true,
};
export const behanceBtn = {
  title: "",
  icon: "ph:behance-logo-light",
  ariaLabel: "Behance Projekt öffnen",
  route: "",
  className: `w-fit h-fit aspect-1 p-2 bg-slate-500/10 rounded-full shadow transition hover:bg-slate-500/20 hover:text-cyan-500`,
  isExternal: true,
};

export default function Button({
  title = "View Projects",
  icon,
  ariaLabel,
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
      <a
        href={route}
        className={className}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel}
      >
        {title}
        <Icon icon={icon} className="size-7" />
      </a>
    );
  }
}
