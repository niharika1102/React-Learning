import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const getDynamicText = (count) => {
    if (count == 0) {
      return "You haven't clicked yet";
    } else if (count >= 1 && count <= 4) {
      return "Keep going";
    } else {
      return "You are on fire";
    }
  };
  return (
    <div className="flex flex-col p-4 gap-2 w-max border border-white">
      <p>You have clicked the button {count} times.</p>
      <p>{getDynamicText(count)}</p>
      <div className="flex justify-center">
        <button
          onClick={() => setCount(count + 1)}
          className="border border-pink-700 bg-pink-700 w-max p-2 m-2 rounded-md hover:bg-pink-500 hover:border-pink-500"
        >
          Increase count
        </button>
      </div>
    </div>
  );
};

export default Counter;
