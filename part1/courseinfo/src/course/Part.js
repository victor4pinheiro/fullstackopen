const Part = (props) => {
  const name = props.part.name;
  const exercise = props.part.amount_exercises;

  return (
    <p>
      {name} {exercise}
    </p>
  );
};

export default Part;
