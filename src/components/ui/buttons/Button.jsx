const buttonStyle = "size-fit rounded-full text-lg font-bold border p-6";

const base = "w-fit p-4 rounded-full ";

const variants = {
  // Button with fill
  primary: `${base} border border-slate-500`,
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
