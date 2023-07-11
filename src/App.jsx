import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import NavbarDropdown from "./components/NavbarDropdown";

function App() {
  const [count, setCount] = useState(0);
  const [showNavbar, setNavbar] = useState(true);
  const [showNavDropdown, setNavDropdown] = useState(false);

  const handleDropdown = () => {
    setNavDropdown(!showNavDropdown);
  };
  return (
    <div className="relative">
      {showNavDropdown && <NavbarDropdown handleDropdown={handleDropdown} />}
      <div
        className={`${showNavDropdown && "bg-black opacity-50 h-[100vh]"}`}
        onClick={() => handleDropdown()}
      >
        {showNavbar && <Navbar handleDropdown={handleDropdown} />}
      </div>
    </div>
  );
}

export default App;
