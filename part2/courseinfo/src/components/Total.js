const Total = (props) => {
  const { parts } = props;
  const initialValue = 0;
  const total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialValue
  );

  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

export default Total;
