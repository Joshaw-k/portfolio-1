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
    setNavbar(!showNavbar);
    setNavDropdown(!showNavDropdown);
  };
  return (
    <>
      {showNavbar && <Navbar handleDropdown={handleDropdown} />}
      {showNavDropdown && <NavbarDropdown handleDropdown={handleDropdown} />}
    </>
  );
}

export default App;
