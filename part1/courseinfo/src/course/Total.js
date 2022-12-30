const Total = (props) => {
  const parts = props.total;
  let sum = 0;

  for (let index = 0; index < parts.length; index++) {
    sum += parts[index].amount_exercises;
  }

  return <p>Number of exercises {sum}</p>;
};

export default Total;
