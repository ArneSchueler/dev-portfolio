const base = "cursor-pointer w-fit p-4 rounded-full ";
const hover = "hover:text-cyan-500 hover:border-cyan-500";
const active =
  "active:bg-cyan-500/5 active:text-cyan-400 active:border-cyan-400";

const variants = {
  // Button with fill
  primary: `${base} ${hover} ${active} border border-slate-500  `,
  // Button with outline
  secondary: `${base} text-cyan-500`,
  // Button as text
  tertiary: "",
};

export default function Button({
  onClick,
  children,
  ariaLabel,
  variant = "primary",
  link,
}) {
  const className = variants[variant];

  return (
    <button className={className} aria-label={ariaLabel} onClick={onClick}>
      <a href={link} target="_blank">
        {children}
      </a>
    </button>
  );
}
