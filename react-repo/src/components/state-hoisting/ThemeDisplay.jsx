import React from "react";

const ThemeDisplay = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`w-max p-2 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <p>Current theme: {theme}</p>
    </div>
  );
};
export default ThemeDisplay;
