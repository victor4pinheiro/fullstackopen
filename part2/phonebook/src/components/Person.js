const Person = (props) => {
  return (
    <li>
      <p>
        Name: {props.name}. Phone number: {props.phone}
      </p>
    </li>
  );
};

export default Person;
