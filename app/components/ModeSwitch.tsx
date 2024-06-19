import * as React from "react";
import { WiMoonAltFirstQuarter } from "react-icons/wi";

const ModeSwtich = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    // Check the current theme from local storage or default to the system preference
    const currentTheme = localStorage.getItem("theme") || "light";
    setIsDarkMode(currentTheme === "dark");
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme); // Save theme preference to local storage
  };

  return (
    <div>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 flex items-center space-x-2 transition-colors duration-500"
      >
        <WiMoonAltFirstQuarter className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ModeSwtich;
