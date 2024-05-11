import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

import "./App.css";

const feedbackTypes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  return (
    <>
      <Description />
      <Options />
      <Feedback />
    </>
  );
}

export default App;
