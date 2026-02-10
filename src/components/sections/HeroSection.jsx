import Button from "../ui/buttons/Button.jsx";
import { hero } from "../../data/hero/hero-en.js";

import profileImg from "../../assets/images/profile-image.png";

function TechStack() {
  return (
    <div className="flex w-fit mr-40 border-y py-6">
      <span className="text-slate-600 tracking-[8px] font-tech">
        HTML · CSS · JavaScript · React · Accessibility
      </span>
    </div>
  );
}

function ProfileImg() {
  return (
    <div className="flex">
      <img
        className="hidden lg:flex -rotate-6"
        src={profileImg}
        alt="Profile image of Arne Schüler"
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col box-border items-center justify-items-center min-h-screen lg:ms-30 p-6 sm:p-40 text-slate-950 snap-start"
    >
      <div className=" box-border h-full max-w-400">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-semibold">{hero.titleline1}</h1>
          <h1 className="text-7xl font-semibold">{hero.titleline2}</h1>
          <p>{hero.subhead}</p>
          <Button aria-label={hero.button.ariaLabel} variant="primary">
            {hero.buttonLabel}
          </Button>{" "}
        </div>
        <div className="flex items-center justify-between">
          <TechStack />
          <ProfileImg />
        </div>
      </div>
    </section>
  );
}
