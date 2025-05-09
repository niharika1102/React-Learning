import React from "react";

const ThemeToggle = ({ onToggle }) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="border border-pink-700 p-2 w-max bg-pink-700 rounded-md hover:bg-pink-500 hover:border-pink-500"
      >
        Change theme
      </button>
    </div>
  );
};

export default ThemeToggle;
