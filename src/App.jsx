import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import NavbarDropdown from "./components/NavbarDropdown";
import Hero from "./components/Hero";

function App() {
  const [showNavDropdown, setNavDropdown] = useState(false);

  const handleDropdown = () => {
    setNavDropdown(!showNavDropdown);
  };
  return (
    <div className="relative">
      {showNavDropdown && <NavbarDropdown handleDropdown={handleDropdown} />}
      <div
        className={`${showNavDropdown && "bg-[rgba(0,0,0,.5)] h-[100vh]"}`}
        onClick={() => handleDropdown()}
      >
        <Navbar handleDropdown={handleDropdown} />
        <main>
          <Hero />
        </main>
      </div>
    </div>
  );
}

export default App;
