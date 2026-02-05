import HeroSection from "./HeroSection";

const heroHeader = "Frontend Developer with UX focus";
const heroSubheader =
  "I build accessible, structured web interfaces where design decisions and code belong together.";
const heroButtonLabel = "View projects →";

export default function Home() {
  return (
    <main className="flex max-h-dvh w-vw h-vh ms-30 p-40">
      <HeroSection header={heroHeader} subhead={heroSubheader} />
    </main>
  );
}
