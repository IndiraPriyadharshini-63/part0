import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = ({ value, text }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  );
};

const Statistics = ({ feedback, total, average, positiveFeedback }) => {
  if (total === 0) {
    return <p>no feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <tr>
          <StatisticsLine text="Good" value={feedback.good} />
        </tr>
        <tr>
          <StatisticsLine text="Neutral" value={feedback.neutral} />
        </tr>
        <tr>
          <StatisticsLine text="Bad" value={feedback.bad} />
        </tr>
        <tr>
          <StatisticsLine text="All" value={total} />
        </tr>
        <tr>
          <StatisticsLine text="Average" value={average} />
        </tr>
        <tr>
          <StatisticsLine text="Positive" value={positiveFeedback} />
        </tr>
      </tbody>
    </table>
  );
};

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = feedback.good + feedback.neutral + feedback.bad;
  const average = (total / 3).toFixed(1);
  const positiveFeedback = ((feedback.good / total) * 100).toFixed(1) + "%";

  const handleGoodFeedback = () => {
    setFeedback({ ...feedback, good: feedback.good + 1 });
  };

  const handleNeutralFeedback = () => {
    setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
  };

  const handleBadFeedback = () => {
    setFeedback({ ...feedback, bad: feedback.bad + 1 });
  };

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGoodFeedback} text="good" />
        <Button handleClick={handleNeutralFeedback} text="neutral">
          Neutral
        </Button>
        <Button handleClick={handleBadFeedback} text="bad">
          Bad
        </Button>
      </div>
      <h1>Statistics</h1>
      <Statistics
        feedback={feedback}
        total={total}
        average={average}
        positiveFeedback={positiveFeedback}
      />
    </div>
  );
};

export default Feedback;
