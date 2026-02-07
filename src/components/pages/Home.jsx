import HeroSection from "../sections/HeroSection.jsx";
import ProjectsSection from "../sections/ProjectsSection";

const heroHeader = "Frontend Developer with UX focus";
const heroSubheader =
  "I build accessible, structured web interfaces where design decisions and code belong together.";
const heroButtonLabel = "View projects →";

export default function Home() {
  return (
    <>
      <HeroSection header={heroHeader} subhead={heroSubheader} />
      <ProjectsSection></ProjectsSection>
    </>
  );
}
