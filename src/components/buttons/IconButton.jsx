function IconButton({ name, icon }) {
  return (
    <button aria-label={name} className="btn">
      {icon}
    </button>
  );
}

export default IconButton;
