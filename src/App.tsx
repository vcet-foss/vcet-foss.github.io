import { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Community from "./pages/Community";
import About from "./pages/About";
import type { Tab } from "./utils/types";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <div className="bg-black min-h-screen text-white flex flex-col font-sans selection:bg-foss-green selection:text-black">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow">
        {activeTab === "home" && <Home changeTab={setActiveTab} />}
        {activeTab === "projects" && <Projects />}
        {activeTab === "community" && <Community />}
        {activeTab === "about" && <About />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
