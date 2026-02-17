import LanguageButton from "./ui/buttons/LanguageButton";
import { handleSectionNavigation } from "../utils/helpers";
import { NAV_ITEMS } from "../data/en/nav";
import { ICONS } from "./ui/icons";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";

const activeItem = " w-8 pb-1 text-cyan-500 border-b-2";
const itemBase =
  "w-8 text-neutral-600 pb-1  border-b-2 border-transparent hover:text-cyan-500 ";

function Logo() {
  return (
    <a href="/" className="font-tech sm:writing-vertical sm:rotate-180">
      schueler.dev
    </a>
  );
}

function Sidebar({ activeSection }) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed box-border hidden h-full flex-col items-center justify-between bg-white px-6 pt-20 pb-8 sm:flex">
        <Logo />
        <div className="flex flex-col gap-8">
          {NAV_ITEMS.map(({ id, label, iconKey }) => {
            const isActive = activeSection === id;

            const icon = ICONS[iconKey];
            return (
              <button
                key={id}
                aria-label={label}
                className={isActive ? activeItem : itemBase}
                onClick={() =>
                  handleSectionNavigation({ id, location, navigate })
                }
              >
                <Icon icon={icon} className="size-8" />
              </button>
            );
          })}
        </div>

        <LanguageButton />
      </aside>

      {/* Mobile Sidebar Header */}
      <aside className="fixed z-10 flex w-full items-center justify-between bg-white px-4 py-2 sm:hidden">
        <Logo />
        <LanguageButton />
      </aside>

      {/* Mobile Sidebar Navigation */}
      <aside className="fixed bottom-0 z-10 flex w-full justify-center bg-white p-6 sm:hidden">
        <div className="flex w-full justify-between px-6">
          {NAV_ITEMS.map(({ id, label, iconKey }) => {
            const isActive = activeSection === id;
            const icon = ICONS[iconKey];

            return (
              <button
                key={id}
                aria-label={label}
                className={isActive ? activeItem : itemBase}
                onClick={() =>
                  handleSectionNavigation({ id, location, navigate })
                }
              >
                <Icon icon={icon} className="size-8" />
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
