import LanguageButton from "./ui/buttons/LanguageButton";
import { handleSectionNavigation } from "../utils/helpers";
import { NAV_ITEMS } from "../data/nav.config";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";

const activeItem = " w-8 pb-1 text-cyan-500 border-b-2";
const itemBase =
  "w-8 text-neutral-600 pb-1  border-b-2 border-transparent hover:text-cyan-500 ";

function Logo() {
  return (
    <a href="/" className="font-tech md:rotate-180">
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
      <aside className="hidden bg-white box-border sm:flex flex-col fixed h-full justify-between items-center px-6 pt-20 pb-8 ">
        <Logo />
        <div className="flex flex-col gap-8">
          {NAV_ITEMS.map(({ id, label, icon }) => {
            const isActive = activeSection === id;

            return (
              <button
                key={id}
                aria-label={label}
                className={isActive ? activeItem : itemBase}
                onClick={() =>
                  handleSectionNavigation({ id, location, navigate })
                }
              >
                <Icon icon={icon} className="w-8 h-8" />
              </button>
            );
          })}
        </div>

        <LanguageButton />
      </aside>

      {/* Mobile Sidebar Header */}
      <aside className="flex justify-between sm:hidden fixed w-full bg-white items-center py-2 px-4 z-10">
        <Logo />
        <LanguageButton />
      </aside>

      {/* Mobile Sidebar Navigation */}
      <aside className="flex justify-center sm:hidden fixed bottom-0 bg-white w-full p-6 z-10">
        <div className="flex w-full justify-between px-6">
          {NAV_ITEMS.map(({ id, label, icon }) => {
            const isActive = activeSection === id;

            return (
              <button
                key={id}
                aria-label={label}
                className={isActive ? activeItem : itemBase}
                onClick={() => scrollToSection(id)}
              >
                <Icon icon={icon} className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
