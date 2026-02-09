import Sidebar from "./components/Sidebar.jsx";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";

function App() {
  return (
    <>
      <header>
        <Sidebar />
      </header>
      <main className="h-dvh overflow-y-scroll md:snap-y md:snap-mandatory">
        <HeroSection />
        <ProjectsSection />
        <HeroSection />
        <ProjectsSection />
      </main>
    </>
  );
}

export default App;
