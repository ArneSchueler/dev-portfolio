const buttonStyle = "size-fit rounded-full text-lg font-bold border p-6";

const base = "";

const variants = {
  // Button with fill
  primary: `${base}`,
  // Button with outline
  secondary: `${base}`,
  // Button as text
  tertiary: "text-cyan-500",
};

export default function Button({
  onClick,
  children,
  ariaLabel,
  variant = "primary",
}) {
  const className = variants[variant];

  return (
    <button className={className} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
}
