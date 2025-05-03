import React from "react";
import ThemeParent from "../components/state-hoisting/ThemeParent";

// 🎯 Goal:
// Demonstrate state lifting by allowing two sibling components to share and modify the same state via their parent.

// 🧩 Requirements:
// Create a Parent component that:

// Holds a state: theme with values "light" or "dark"

// A ThemeToggler child component:

// Shows a button to toggle the theme

// A ThemeDisplay sibling component:

// Displays the current theme visually (e.g., background color or text)

// 🔄 Flow:
// Parent owns the theme state.

// ThemeToggler can toggle it using a callback.

// ThemeDisplay reads the theme and styles accordingly.

// 🔨 Bonus:
// Style background/text with Tailwind: bg-white for light, bg-gray-800 text-white for dark.

const StateHoisting = () => {
  return (
    <div>
      <ThemeParent />
    </div>
  );
};

export default StateHoisting;
