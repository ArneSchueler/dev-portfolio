import Sidebar from "./components/sidebar";
import HeroSection from "./components/sections/HeroSection";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <header>
        <Sidebar />
      </header>
      <main className="flex flex-col w-vw  ms-30 p-40">
        <Home />
      </main>
    </>
  );
}

export default App;
