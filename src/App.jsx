import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ProjectDetail } from "./pages/projects/ProjectDetail.jsx";
import LegalNotice from "./pages/LegalNotice.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <>
      <header>
        <Sidebar activeSection={activeSection} />
      </header>
      <Routes>
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route
          path="/"
          element={<Home setActiveSection={setActiveSection} />}
        />
        <Route
          path="/:section"
          element={<Home setActiveSection={setActiveSection} />}
        />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
      </Routes>
    </>
  );
}

export default App;
