import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  function checkFeedbackEmpty(object) {
    return Object.values(object).every((x) => x === 0);
  }

  if (checkFeedbackEmpty(props.optionsValue)) return <p>No feedback give</p>;

  const { good, bad, neutral } = props.optionsValue;
  const all = good + bad + neutral;
  const positive = (good / all) * 100;
  const average = (good - bad) / all;

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average.toFixed(1)} />
          <StatisticLine text="positive" value={`${positive.toFixed(1)} %`} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
