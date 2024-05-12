import styles from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  const handleClick = (evt) => {
    updateFeedback(evt.target.name);
  };
  const renderResetBtn = !!totalFeedback && (
    <button onClick={resetFeedback}>Reset</button>
  );

  return (
    <>
      <button name="good" onClick={handleClick}>
        Good
      </button>
      <button name="neutral" onClick={handleClick}>
        Neutral
      </button>
      <button name="bad" onClick={handleClick}>
        Bad
      </button>
      {renderResetBtn}
    </>
  );
};

export default Options;
