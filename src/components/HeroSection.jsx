import TechStack from "./TechStack";

export default function HeroSection({ header, subhead, buttonLabel }) {
  return (
    <section className="hero-section">
      <h1>{header}</h1>
      <p>{subhead}</p>
      <button aria-label={buttonLabel}>{buttonLabel}</button>
      <TechStack></TechStack>
    </section>
  );
}
