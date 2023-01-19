import Person from "./Person";

const Persons = (props) => {
  const { persons, title, handleDelete } = props;
  return (
    <div>
      <h2>{title}</h2>
      {persons.map((person) => (
        <Person key={person.id} person={person} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Persons;
