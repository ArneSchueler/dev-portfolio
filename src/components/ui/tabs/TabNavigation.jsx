const activeItem = "pb-1 text-cyan-500 border-b-2";
const itemBase =
  "text-neutral-600 pb-1  border-b-2 border-transparent hover:text-cyan-500 ";

export default function TabNavigation({ items, currentTab, onTabChange }) {
  return (
    <nav role="tablist" className="flex h-full gap-5 items-center col-span-2">
      {items.map(({ id, label }) => {
        const isActive = currentTab === id;

        return (
          <button
            role="tab"
            key={id}
            aria-label={label}
            className={isActive ? activeItem : itemBase}
            onClick={() => onTabChange(id)}
          >
            {label}
          </button>
        );
      })}
    </nav>
  );
}
