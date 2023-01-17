import Person from "./Person";

const Persons = (props) => {
  const { persons, title } = props;
  return (
    <div>
      <h2>{title}</h2>
      {persons.map((person) => (
        <Person key={person.id} name={person.name} phone={person.phoneNumber} />
      ))}
    </div>
  );
};

export default Persons;
