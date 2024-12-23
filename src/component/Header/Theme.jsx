import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Theme() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Default to true if no value is found in localStorage
    const storedMode = localStorage.getItem("darkMode");
    return storedMode === null ? true : storedMode === "true";
  });

  // Update CSS variables based on dark mode
  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      // Dark mode variables
      root.style.setProperty("--body", "#1a1a1a");
      root.style.setProperty("--text", "#ffb703");
      root.style.setProperty("--primary", "#000000");
      root.style.setProperty("--secondary", "#000000");
      root.style.setProperty("--card", "#2b2b2b");
      root.style.setProperty("--secondText", "#ffb703");
      root.style.setProperty("--triedText", "#ffb703");
      root.style.setProperty("--accent", "#ff6700");
      root.style.setProperty("--accent-hover", "#ff4500");
    } else {
      // Light mode variables
      root.style.setProperty("--body", "#ffffff");
      root.style.setProperty("--text", "#000000");
      root.style.setProperty("--primary", "#f0f0f0");
      root.style.setProperty("--secondary", "#d1d1d1");
      root.style.setProperty("--card", "#e0e0e0");
      root.style.setProperty("--secondText", "#333333");
      root.style.setProperty("--triedText", "#555555");
      root.style.setProperty("--accent", "#0070f3");
      root.style.setProperty("--accent-hover", "#0059c1");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode); // Save the mode to localStorage
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="rounded-lg p-2 hover:bg-card mx-2"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <FaSun size={24} className="text-text" aria-hidden="true" />
      ) : (
        <FaMoon size={24} className="text-text" aria-hidden="true" />
      )}
    </button>
  );
}
