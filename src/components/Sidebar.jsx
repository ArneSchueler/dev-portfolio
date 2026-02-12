import LanguageButton from "./ui/buttons/LanguageButton";
import { scrollToSection } from "../utils/helpers";

const homeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <path
      fill="currentColor"
      d="m217.9 110.1l-80-80a14 14 0 0 0-19.8 0l-80 80A13.92 13.92 0 0 0 34 120v96a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6v-58h36v58a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6v-96a13.92 13.92 0 0 0-4.1-9.9M210 210h-52v-58a6 6 0 0 0-6-6h-48a6 6 0 0 0-6 6v58H46v-90a2 2 0 0 1 .58-1.42l80-80a2 2 0 0 1 2.84 0l80 80A2 2 0 0 1 210 120Z"
    />
  </svg>
);

const projectIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <path
      fill="currentColor"
      d="M216 74h-86l-28.27-21.2a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176.89A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14m2 126.89a1.11 1.11 0 0 1-1.11 1.11H40a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4l29.87 22.4A6 6 0 0 0 128 86h88a2 2 0 0 1 2 2Z"
    />
  </svg>
);

const aboutIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <path
      fill="currentColor"
      d="M229.19 213c-15.81-27.32-40.63-46.49-69.47-54.62a70 70 0 1 0-63.44 0C67.44 166.5 42.62 185.67 26.81 213a6 6 0 1 0 10.38 6c19.21-33.19 53.15-53 90.81-53s71.6 19.81 90.81 53a6 6 0 1 0 10.38-6M70 96a58 58 0 1 1 58 58a58.07 58.07 0 0 1-58-58"
    />
  </svg>
);

const contactIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <path
      fill="currentColor"
      d="M224 50H32a6 6 0 0 0-6 6v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a6 6 0 0 0-6-6m-15.42 12L128 135.86L47.42 62ZM216 194H40a2 2 0 0 1-2-2V69.64l86 78.78a6 6 0 0 0 8.1 0L218 69.64V192a2 2 0 0 1-2 2"
    />
  </svg>
);

const activeItem = " w-9 pb-1 text-cyan-500 border-b-2";
const itemBase =
  "w-9 text-neutral-600 pb-1  border-b-2 border-transparent hover:text-cyan-500 ";

function Logo() {
  return (
    <a href="/" className="font-tech md:rotate-180">
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
      <aside className="hidden bg-white box-border sm:flex flex-col fixed h-full justify-between items-center px-6 pt-20 pb-8 ">
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
      <aside className="flex justify-between sm:hidden fixed w-full bg-white items-center py-2 px-4 z-10">
        <Logo />
        <LanguageButton />
      </aside>

      {/* Mobile Sidebar Navigation */}
      <aside className="flex justify-center sm:hidden fixed bottom-0 bg-white w-full p-6 z-10">
        <div className="flex w-full justify-between px-6">
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
      </aside>
    </>
  );
}

export default Sidebar;
