import Sidebar from "./components/Sidebar.jsx";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import Home from "./components/pages/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <Sidebar />
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/#projects" element={<Home />}></Route>
        <Route path="/#about" element={<Home />}></Route>
        <Route path="/about" element={<HeroSection />}></Route>
        <Route path="/*" element={<HeroSection />}></Route>
      </Routes>
    </>
  );
}

export default App;
