import { useState } from "react";
import Button from "./Button";
import Statistics from "./statitics/Statitics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackValues = { good, neutral, bad };

  return (
    <main>
      <div>
        <h2>give feedback</h2>
        <Button handleClick={() => setGood(good + 1)} name="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} name="neutral" />
        <Button handleClick={() => setBad(bad + 1)} name="bad" />
      </div>

      <Statistics optionsValue={feedbackValues} />
    </main>
  );
};

export default App;
