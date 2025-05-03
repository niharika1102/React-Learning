import React from "react";
import Counter from "../components/states/Counter";

// 🎯 Goal:
// Build a component with a button and a message that updates based on how many times the button was clicked.

// 🧩 Requirements:
// A Counter component that:

// Has its own local state (useState)

// Shows a button labeled: Clicked X times

// When clicked, increments the count

// Below the button, show a dynamic message:

// "You haven't clicked yet!" if count is 0

// "Keep going!" if count is between 1–4

// "You're on fire!" if count is 5+

const States = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default States;
