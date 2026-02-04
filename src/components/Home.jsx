import HeroSection from "./HeroSection";

const heroHeader = "Frontend Developer with UX focus";
const heroSubheader =
  "I build accessible, structured web interfaces where design decisions and code belong together.";
const heroButtonLabel = "View projects →";

export default function Home() {
  return (
    <main>
      <HeroSection
        header={heroHeader}
        subhead={heroSubheader}
        buttonLabel={heroButtonLabel}
      />
      <HeroSection
        header={heroHeader}
        subhead={heroSubheader}
        buttonLabel={heroButtonLabel}
      />
    </main>
  );
}
