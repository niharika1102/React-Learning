import React from "react";

const FeebackButton = ({ giveFeedback }) => {
  return (
    <div className="flex flex-row gap-4">
      <button
        onClick={() => giveFeedback("bad")}
        className="border border-red-700 bg-red-700 px-2 py-1 rounded-md hover:bg-red-500 hover:border-red-500"
      >
        Bad
      </button>
      <button
        onClick={() => giveFeedback("neutral")}
        className="border border-yellow-600 bg-yellow-600 px-2 py-1 rounded-md hover:bg-yellow-500 hover:border-yellow  -500"
      >
        Neutral
      </button>
      <button
        onClick={() => giveFeedback("good")}
        className="border border-green-700 bg-green-700 px-2 py-1 rounded-md hover:bg-green-500 hover:border-green-500"
      >
        Good
      </button>
    </div>
  );
};

export default FeebackButton;
