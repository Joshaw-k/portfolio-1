import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import NavbarDropdown from "./components/NavbarDropdown";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stack from "./components/Stack";

function App() {
  const [showNavDropdown, setNavDropdown] = useState(false);

  const handleDropdown = () => {
    setNavDropdown(!showNavDropdown);
  };
  return (
    <div className="relative">
      {showNavDropdown && <NavbarDropdown handleDropdown={handleDropdown} />}
      <div
        className={`${
          showNavDropdown && "bg-[rgba(0,0,0,0.6)] opacity-25 h-[100vh]"
        }`}
      >
        <Navbar handleDropdown={handleDropdown} />
        <main>
          <Hero />
          <Projects />
          <Stack />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
