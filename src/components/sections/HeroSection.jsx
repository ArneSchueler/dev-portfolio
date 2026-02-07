import Button from "../ui/Buttons/Button.jsx";
import { hero } from "../../content/hero/hero-en.js";

function TechStack() {
  return (
    <div className="flex w-fit m-8 border-y py-6">
      <span className="text-slate-600 tracking-[8px] font-tech">
        HTML · CSS · JavaScript · React · Accessibility
      </span>
    </div>
  );
}

function ProfileImg() {
  return (
    <img
      className="absolute right-px bottom-px w-md -rotate-6"
      src="src/assets/images/profile-image.png"
      alt="Profile image of Arne Schüler"
    />
  );
}

export default function HeroSection() {
  return (
    <section className="flex flex-col w-full h-dvh text-slate-950 gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-7xl font-semibold">{hero.titleline1}</h1>
        <h1 className="text-7xl font-semibold">{hero.titleline2}</h1>
        <p>{hero.subhead}</p>
        <Button aria-label={hero.button.ariaLabel} variant="primary">
          {hero.buttonLabel}
        </Button>{" "}
      </div>
      <TechStack />
      <ProfileImg />
    </section>
  );
}
