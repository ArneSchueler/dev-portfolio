import TechStack from "./TechStack/TechStack";
import Button from "./buttons/Button";
import ProfileImg from "./ProfileImg";

export default function HeroSection({ header, subhead, buttonLabel }) {
  return (
    <section className="hero-section">
      <div className="hero-header">
        <h1>{header}</h1>
        <p>{subhead}</p>
        <Button label={buttonLabel} />
      </div>
      <TechStack />
      <ProfileImg />
    </section>
  );
}
