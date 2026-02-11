import Sidebar from "./components/Sidebar.jsx";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import Home from "./components/pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <>
      <header>
        <Sidebar activeSection={activeSection} />
      </header>
      <Routes>
        <Route
          path="/"
          element={<Home setActiveSection={setActiveSection} />}
        />
        {/* loads for all urls with section Home component */}
        <Route
          path="/:section"
          element={<Home setActiveSection={setActiveSection} />}
        />

        {/* <Route path="/#projects" element={<Home />}></Route>
        <Route path="/#about" element={<Home />}></Route>
        <Route path="/about" element={<HeroSection />}></Route>
        <Route path="/*" element={<HeroSection />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
