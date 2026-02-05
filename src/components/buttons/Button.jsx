const buttonStyle = "size-fit rounded-full text-lg font-bold border p-6";

const data = {
  label: "View projects →",
  ariaLabel: " Button to open project site",
};

export default function Button() {
  return (
    <button className={buttonStyle} aria-label={data.ariaLabel}>
      {data.label}
    </button>
  );
}
