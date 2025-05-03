import React, { useState } from "react";
import FeebackButton from "../components/props-states/FeebackButton";
import FeedbackStats from "../components/props-states/FeedbackStats";

// 🧠 App Requirements:
// App.jsx

// Owns the state: { good: 0, neutral: 0, bad: 0 }

// Passes a callback to FeedbackButtons to update the feedback.

// Passes the feedback data as props to FeedbackStats.

// FeedbackButtons.jsx

// Displays 3 buttons: "Good", "Neutral", "Bad"

// When clicked, they update the corresponding state in App using the callback received via props.

// FeedbackStats.jsx

// Displays the current count of each type of feedback.

// Also shows total feedback count and percentage of positive feedback (good / total * 100).

const PropsAndStates = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const changeFeedback = (type) => {
      setFeedback((prev) => ({
        ...prev,
        [type]: prev[type] + 1
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      <FeedbackStats feedback={feedback} />
      <FeebackButton giveFeedback={changeFeedback} />
    </div>
  );
};

export default PropsAndStates;
