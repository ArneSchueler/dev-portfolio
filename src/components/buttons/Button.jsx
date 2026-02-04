export default function Button({ label }) {
  return (
    <button className="primary-button" aria-label={label}>
      {label}
    </button>
  );
}
