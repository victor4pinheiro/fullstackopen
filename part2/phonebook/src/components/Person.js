const Person = (props) => {
  const { handleDelete, person } = props;
  const { _id, name, number } = person;

  return (
    <li>
      <p>
        Name: {name}. Phone number: {number}.
        <button type="submit" onClick={() => handleDelete(_id)}>
          delete
        </button>
      </p>
    </li>
  );
};

export default Person;
