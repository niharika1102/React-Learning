import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import ThemeDisplay from "./ThemeDisplay";

const ThemeParent = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div className="flex flex-col gap-4 border border-white p-4 w-max">
      <ThemeDisplay theme={theme} />
      <ThemeToggle onToggle={toggleTheme} />
    </div>
  );
};

export default ThemeParent;
