import styles from "./Feedback.module.css";

const Feedback = ({ feedbackTypes, totalFeedback }) => {
  const { good, neutral, bad } = feedbackTypes;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback || 0}%</li>
    </ul>
  );
};

export default Feedback;
