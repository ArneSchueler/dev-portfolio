import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/home/Home.jsx";
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
        />{" "}
      </Routes>
    </>
  );
}

export default App;
