import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { handleSectionNavigation } from "../../../utils/helpers.js";

/**
 * STYLES & KONFIGURATION
 */

const animClasses =
  "group relative cursor-pointer overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0.5";

const primaryBtn = "px-6 py-3 rounded-full border border-slate-200";
const hoverBtnBorder = "hover:border-cyan-500 transition-colors duration-300";

export const ctaBtn = {
  title: "View Projects",
  icon: "ph:arrow-right-light",
  route: "projects",
  className: `${primaryBtn} ${hoverBtnBorder} bg-white text-slate-900 active:text-white`,
  isExternal: false,
  noAnim: false,
};

export const enBtn = {
  title: "EN",
  route: "en",
  className:
    "text-slate-600 hover:text-cyan-500 transition-colors cursor-pointer",
  isExternal: false,
  noAnim: true,
};

export const deBtn = {
  title: "DE",
  route: "de",
  className:
    "text-slate-600 hover:text-cyan-500 transition-colors cursor-pointer",
  isExternal: false,
  noAnim: true,
};

export const projectDetailsBtn = {
  title: "View Projects",
  icon: "ph:arrow-right-light",
  route: "projects",
  className: "text-cyan-500 font-medium hover:underline cursor-pointer",
  isExternal: false,
  noAnim: true,
};

export const githubBtn = {
  title: "",
  icon: "ph:github-logo-light",
  ariaLabel: "GitHub Repository öffnen",
  className:
    "w-fit h-fit aspect-square p-2 bg-slate-500/10 rounded-full shadow transition hover:bg-slate-500/20 hover:text-cyan-500 cursor-pointer flex items-center justify-center",
  isExternal: true,
};

export const redirectBtn = {
  title: "",
  icon: "ph:arrow-square-out-light",
  ariaLabel: "Link öffnen",
  className:
    "w-fit h-fit aspect-square p-2 bg-slate-500/10 rounded-full shadow transition hover:bg-slate-500/20 hover:text-cyan-500 cursor-pointer flex items-center justify-center",
  isExternal: true,
};

export const behanceBtn = {
  title: "",
  icon: "ph:behance-logo-light",
  ariaLabel: "Behance Projekt öffnen",
  className:
    "w-fit h-fit aspect-square p-2 bg-slate-500/10 rounded-full shadow transition hover:bg-slate-500/20 hover:text-cyan-500 cursor-pointer flex items-center justify-center",
  isExternal: true,
};

/**
 * HAUPT-KOMPONENTE
 */

export default function Button({
  title,
  icon,
  ariaLabel,
  route = "hero",
  className,
  isExternal = false,
  noAnim = false,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const onHandleClick = (e) => {
    if (isExternal) return;

    // WICHTIG: Wenn die Route eine echte Seite ist (Projekt-Detail, Impressum etc.)
    const isRealPage =
      route.startsWith("/project/") ||
      route === "/imprint" ||
      route === "/privacy";

    if (isRealPage) {
      // Normaler Seitenwechsel ohne Scroll-Logik
      navigate(route);
    } else {
      // Sektions-Navigation (Scrollen)
      e.preventDefault();
      const cleanId = route.replace("/", "").replace("#", "");

      handleSectionNavigation({
        id: cleanId,
        location,
        navigate,
      });
    }
  };

  if (isExternal || noAnim) {
    const Tag = isExternal ? "a" : "button";

    const sharedProps = {
      className: `flex w-fit items-center gap-2 cursor-pointer ${className}`,
      "aria-label": ariaLabel || title,
    };

    const specificProps = isExternal
      ? { href: route, target: "_blank", rel: "noreferrer" }
      : { onClick: onHandleClick };

    return (
      <Tag {...sharedProps} {...specificProps}>
        {title && <span>{title}</span>}
        {icon && (
          <Icon icon={icon} className={isExternal ? "size-7" : "size-5"} />
        )}
      </Tag>
    );
  }

  return (
    <button
      className={`flex w-fit cursor-pointer items-center gap-2 ${animClasses} ${className}`}
      aria-label={ariaLabel || title}
      onClick={onHandleClick}
    >
      <span className="pointer-events-none relative z-10 flex items-center gap-2">
        {title && <span>{title}</span>}
        {icon && <Icon icon={icon} className="size-5" />}
      </span>

      <span className="absolute top-1/2 left-1/2 aspect-square w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-800 opacity-0 transition-all duration-700 ease-out group-active:w-[300%] group-active:opacity-100 group-active:duration-[2500ms] group-active:ease-out"></span>
    </button>
  );
}
