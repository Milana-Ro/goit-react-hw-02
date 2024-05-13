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
const FEEDBACK_STORAGE_KEY = "feedbacks";
const feedbacksFromLocalStorage = JSON.parse(
  localStorage.getItem(FEEDBACK_STORAGE_KEY)
);
const currentFeedbacks = feedbacksFromLocalStorage || INITIAL_FEEDBACK_TYPES;

function App() {
  const [feedbacks, setFeedbacks] = useState(currentFeedbacks);
  const { good, neutral, bad } = feedbacks;
  const totalFeedback = good + neutral + bad;

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevValue) => {
      const newValue = { ...prevValue };
      newValue[feedbackType] += 1;

      localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(newValue));
      return newValue;
    });
  };

  const resetFeedback = () => {
    setFeedbacks(INITIAL_FEEDBACK_TYPES);
    localStorage.setItem(
      FEEDBACK_STORAGE_KEY,
      JSON.stringify(INITIAL_FEEDBACK_TYPES)
    );
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
