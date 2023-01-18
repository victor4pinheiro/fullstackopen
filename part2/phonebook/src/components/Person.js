const Person = (props) => {
  return (
    <li>
      <p>
        Name: {props.name}. Phone number: {props.number}
      </p>
    </li>
  );
};

export default Person;
