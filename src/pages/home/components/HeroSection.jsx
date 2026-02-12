import { hero } from "../../../data/hero/hero-en.js";

import profileImg from "../../../assets/images/profile-image.png";
import Button from "../../../components/ui/buttons/Button.jsx";

function TechStack() {
  return (
    <div className="flex w-fit lg:mr-40 border-y py-6">
      <span className="text-body tracking-label color-muted font-tech">
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

export function HeroSection() {
  return (
    <div className=" box-border h-full max-w-400">
      <div className="flex flex-col gap-4">
        <h1 className="text-display font-semibold">{hero.titleline1}</h1>
        <h1 className="text-display font-semibold">{hero.titleline2}</h1>
        <p>{hero.subhead}</p>
        <Button aria-label={hero.button.ariaLabel} variant="primary">
          View projects →
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <TechStack />
        <ProfileImg />
      </div>
    </div>
  );
}
