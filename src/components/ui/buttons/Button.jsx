import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const baseBtn = "flex w-fit items-center gap-2 ";
const primaryBtn = "px-4 py-2 rounded-full border  ";

export const ctaBtn = {
  title: "View Projects",
  route: "/projects",
  icon: "ph:arrow-right-light",
  className: `${primaryBtn}`,
  isExternal: false,
};
export const enBtn = {
  title: "EN",
  route: "",
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
  route: "/:detailProject",
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
      <a href={route} className={className}>
        {title}
        <Icon icon={icon} />
      </a>
    );
  }
}

// const base = "cursor-pointer w-fit p-4 rounded-full ";
// const hover = "hover:text-cyan-500 hover:border-cyan-500";
// const active =
//   "active:bg-cyan-500/5 active:text-cyan-400 active:border-cyan-400";

// const variants = {
//   // Button with fill
//   primary: `${base} ${hover} ${active} border border-slate-500  `,
//   // Button with outline
//   secondary: `${base} text-cyan-500`,
//   // Button as text
//   tertiary: "",
// };

// export default function Button({
//   onClick,
//   children,
//   ariaLabel,
//   variant = "primary",
//   link,
// }) {
//   const className = variants[variant];

//   return (
//     <button className={className} aria-label={ariaLabel} onClick={onClick}>
//       <a href={link} target="_blank">
//         {children}
//       </a>
//     </button>
//   );
// }
