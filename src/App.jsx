import { useState } from "react";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";

import "./App.css";

const INITIAL_FEEDBACK_TYPES = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedbacks, setFeedbacks] = useState(INITIAL_FEEDBACK_TYPES);
  const { good, neutral, bad } = feedbacks;
  const totalFeedback = good + neutral + bad;

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevValue) => {
      const newValue = { ...prevValue };
      newValue[feedbackType] += 1;
      return newValue;
    });
  };

  const resetFeedback = () => {
    setFeedbacks(INITIAL_FEEDBACK_TYPES);
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback feedbackTypes={feedbacks} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
