import { ctaBtn } from "../../../components/ui/buttons/Button.jsx";

import profileImg from "../../../assets/images/profile-image.png";
import Buttons from "../../../components/ui/buttons/Button.jsx";
import { useLanguage } from "../../../state/language.context.jsx";

function TechStack({ techStack }) {
  return (
    <div className="col-span-3 row-start-4 flex w-fit border-y py-6 lg:mr-40">
      <span className="text-body color-muted font-tech tracking-wide">
        {techStack}
      </span>
    </div>
  );
}

function ProfileImg() {
  return (
    <div className="col-end-5 row-start-3 row-end-5 translate-y-1/4">
      <img
        className="hidden w-120 -rotate-6 lg:block"
        src={profileImg}
        alt="Profile image of Arne Schüler"
      />
    </div>
  );
}

export function HeroSection() {
  const { data } = useLanguage();
  const { HERO } = data.site;
  return (
    <div className="sm:auto-rows-4 grid h-full max-h-screen max-w-400 items-start justify-center gap-y-8 sm:gap-y-0 lg:grid-cols-4">
      <div className="col-span-4 flex flex-col gap-13">
        <h1>{HERO.header}</h1>
        <p className="max-w-145 text-xl">{HERO.subheader}</p>

        <Buttons {...ctaBtn} route="/projects"></Buttons>
      </div>
      <TechStack techStack={HERO.techStack} />
      <ProfileImg />
    </div>
  );
}
