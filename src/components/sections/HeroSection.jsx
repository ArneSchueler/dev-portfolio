import Button from "../ui/buttons/Button.jsx";
import { hero } from "../../content/hero/hero-en.js";

function TechStack() {
  return (
    <div className="flex w-fit border-y py-6">
      <span className="text-slate-600 tracking-[8px] font-tech">
        HTML · CSS · JavaScript · React · Accessibility
      </span>
    </div>
  );
}

function ProfileImg() {
  return (
    <img
      className="w-md -rotate-6"
      src="../../assets/images/profile-image.png"
      alt="Profile image of Arne Schüler"
    />
  );
}

export default function HeroSection() {
  return (
    <section className="flex flex-col w-vw h-dvh ms-30 p-40 text-slate-950 gap-12 snap-start">
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
    </section>
  );
}
