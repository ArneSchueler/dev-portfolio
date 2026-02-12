import { hero } from "../../../data/hero/hero-en.js";

import profileImg from "../../../assets/images/profile-image.png";
import Button from "../../../components/ui/buttons/Button.jsx";
import { scrollToSection } from "../../../utils/helpers.js";

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
    <div className="overflow-visible flex">
      <img
        className="hidden w-80 lg:flex -rotate-6"
        src={profileImg}
        alt="Profile image of Arne Schüler"
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <div className="flex flex-col box-border gap-24 h-full max-w-400">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1>{hero.titleline1}</h1>
          <h1>{hero.titleline2}</h1>
          <p>{hero.subhead}</p>
        </div>
        <Button
          onClick={() => scrollToSection("projects")}
          aria-label={hero.button.ariaLabel}
          variant="primary"
        >
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
