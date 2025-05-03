import React from 'react'

const FeedbackStats = ({ feedback }) => {
  const positive = (feedback) => {
    const sum = feedback.good + feedback.bad + feedback.neutral;
    const percent = Math.floor((feedback.good / sum) * 100);
    return percent;
  }
  return (
    <div className='flex flex-col border border-white w-max p-4'>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Positive Feedback: {positive(feedback)}%</p>
    </div>
  );
}

export default FeedbackStats