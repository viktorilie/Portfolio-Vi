import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button className="btn btn-sm btn-outline-dark" onClick={toggleTheme}>
        <small className="text-capitalize">
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </small>
      </button>
    </>
  );
};

export default ThemeToggle;
