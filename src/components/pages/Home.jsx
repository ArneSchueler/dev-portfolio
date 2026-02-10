import HeroSection from "../sections/HeroSection.jsx";
import ProjectsSection from "../sections/ProjectsSection.jsx";
import AboutSection from "../sections/about/AboutSection.jsx";

const heroHeader = "Frontend Developer with UX focus";
const heroSubheader =
  "I build accessible, structured web interfaces where design decisions and code belong together.";
const heroButtonLabel = "View projects →";

export default function Home() {
  return (
    <main className=" flex flex-col h-screen overflow-y-scroll md:snap-y md:snap-mandatory">
      <HeroSection header={heroHeader} subhead={heroSubheader} />
      <ProjectsSection></ProjectsSection>
      <AboutSection></AboutSection>
    </main>
  );
}
