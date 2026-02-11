import LanguageButton from "./ui/buttons/LanguageButton";
import { scrollToSection } from "../utils/helpers";

const homeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="currentColor"
  >
    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
  </svg>
);

const projectIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="currentColor"
  >
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z" />
  </svg>
);

const aboutIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="currentColor"
  >
    <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z" />
  </svg>
);

const contactIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="currentColor"
  >
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
  </svg>
);

const activeItem = "pb-1 text-cyan-500 border-b-2";
const itemBase =
  "text-neutral-600 pb-1  border-b-2 border-transparent hover:text-cyan-500 ";

function Logo() {
  return (
    <a href="/" className="font-tech md:writing-vertical md:rotate-180">
      schueler.dev
    </a>
  );
}

const NAV_ITEMS = [
  { id: "hero", label: "Hero", Icon: homeIcon },
  { id: "projects", label: "Projects", Icon: projectIcon },
  { id: "about", label: "About", Icon: aboutIcon },
  { id: "contact", label: "Contact", Icon: contactIcon },
];

function Sidebar({ activeSection }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden bg-white box-border sm:flex flex-col fixed h-full justify-between items-center px-6 pt-20 pb-8 shadow-xl">
        <Logo />
        <div className="flex flex-col gap-8">
          {NAV_ITEMS.map(({ id, label, Icon }) => {
            const isActive = activeSection === id;

            return (
              <button
                key={id}
                aria-label={label}
                className={isActive ? activeItem : itemBase}
                onClick={() => scrollToSection(id)}
              >
                {Icon}
              </button>
            );
          })}
        </div>

        <LanguageButton />
      </aside>

      {/* Mobile Sidebar Header */}
      <aside className="flex justify-between sm:hidden fixed w-full bg-white items-center p-6 shadow-xl z-10">
        <Logo />
        <LanguageButton />
      </aside>

      {/* Mobile Sidebar Navigation */}
      <aside className="flex justify-center sm:hidden fixed bottom-0 bg-white w-full p-6 shadow-xl z-10">
        <div className="flex gap-8">
          {NAV_ITEMS.map(({ id, href, label, Icon }) => {
            const isActive = activeSection === id;

            return (
              <a
                href={href}
                key={id}
                aria-label={label}
                className={isActive ? activeItem : itemBase}
                onClick={() => scrollToSection(id)}
              >
                {Icon}
              </a>
            );
          })}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
