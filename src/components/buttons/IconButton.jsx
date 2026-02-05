function IconButton({ name, icon }) {
  return (
    <button
      aria-label={name}
      className="p-3 text-neutral-600 hover:text-cyan-500 active:border-b-2"
    >
      {icon}
    </button>
  );
}

export default IconButton;
