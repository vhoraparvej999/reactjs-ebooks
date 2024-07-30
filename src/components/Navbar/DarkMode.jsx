import React, { useEffect, useState } from 'react';
import DarkPng from "../../assets/images/dark-mode-button.png";
import LightPng from "../../assets/images/light-mode-button.png"; // Corrected import

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <div className="relative">
        <img
          src={LightPng}
          alt='Light'
          className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <img
          src={DarkPng}
          alt='Dark'
          className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] transition-all duration-300 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      </div>
    </>
  );
}

export default DarkMode;
