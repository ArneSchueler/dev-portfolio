import Sidebar from "./components/sidebar";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";

function App() {
  return (
    <>
      <header>
        <Sidebar />
      </header>
      <main className="h-dvh overflow-y-scroll snap-y snap-mandatory">
        <HeroSection />
        <ProjectsSection />
      </main>
    </>
  );
}

export default App;
