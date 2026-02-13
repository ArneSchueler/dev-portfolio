import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { DevProject } from "./pages/projects/DevProject.jsx";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <>
      <header>
        <Sidebar activeSection={activeSection} />
      </header>
      <Routes>
        <Route path="/project/:slug" element={<DevProject />} />
        <Route
          path="/"
          element={<Home setActiveSection={setActiveSection} />}
        />
        {/* loads for all urls with section Home component */}
        <Route
          path="/:section"
          element={<Home setActiveSection={setActiveSection} />}
        />
      </Routes>
    </>
  );
}

export default App;
