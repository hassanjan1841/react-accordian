import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import "./styles.css";

const ThemeTogler = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <>
      <span onClick={() => handleTheme(!theme)} className="theme-toggler">
        {theme ? (
          <IoSunnySharp color="white" size={40} />
        ) : (
          <FaMoon color="black" size={40} />
        )}
      </span>
    </>
  );
};

export default ThemeTogler;
