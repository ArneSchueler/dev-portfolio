import { ctaBtn } from "../../../components/ui/buttons/Button.jsx";

import profileImg from "../../../assets/images/profile-image.png";
import Buttons from "../../../components/ui/buttons/Button.jsx";
import { useLanguage } from "../../../state/language.context.jsx";

function TechStack({ techStack }) {
  return (
    <div className="bg flex flex-col gap-8 rounded-2xl border border-slate-500/10 p-6 shadow-md">
      <h3>Tech Stack</h3>
      <div className="flex w-full flex-wrap gap-2">
        {techStack.map((stack) => {
          return (
            <div className="text-md flex w-fit gap-2 rounded-full bg-slate-500/10 px-2 py-1 shadow">
              <span>{stack}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProfileImg() {
  return (
    <img
      className="shrink-0 -rotate-6 shadow-md"
      src={profileImg}
      alt="Profile image of Arne Schüler"
    />
  );
}

export function HeroSection() {
  const { data } = useLanguage();
  const { HERO } = data.site;

  return (
    <div className="relative flex min-h-[70vh] w-full flex-col items-start justify-between lg:flex-row">
      <div className="flex h-full flex-col gap-20">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-bold">{HERO.header}</h1>
          <p className="max-w-145 text-xl">{HERO.subheader}</p>
          <div className="w-fit">
            <Buttons {...ctaBtn} route="/projects" />
          </div>
        </div>

        <div className="mt-20">
          <TechStack techStack={HERO.techStack} />
        </div>
      </div>

      <div className="lg:mbe-5 hidden w-[clamp(350px,30vw,350px)] self-center lg:block lg:self-end">
        <ProfileImg />
      </div>
    </div>
  );
}
