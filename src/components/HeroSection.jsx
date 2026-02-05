import Button from "./Buttons/Button";

const sectionStyle = "flex flex-col text-blue-300 font-general w-dvw h-dvh";

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

export default function HeroSection({ header, subhead }) {
  return (
    <section className="flex flex-col w-full h-full text-slate-950 gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-7xl font-semibold">{header}</h1>
        <p>{subhead}</p>
        <Button />
      </div>
      <TechStack />
      <ProfileImg />
    </section>
  );
}
