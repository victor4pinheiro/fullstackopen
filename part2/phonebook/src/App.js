import { useState } from "react";
import PersonFilter from "./components/PersonFilter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNumber: "040-123456", id: 1 },
    { name: "Ada Lovelace", phoneNumber: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phoneNumber: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phoneNumber: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newNameSearch, setNewNameSearch] = useState("");
  const [newResults, setNewResults] = useState([]);

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = {
        id: persons.length + 1,
        name: newName,
        phoneNumber: newPhoneNumber,
      };

      setPersons(persons.concat(newPerson));
    }

    setNewName("");
  };

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneNumber = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    const results = persons.filter((person) => person.name.startsWith(value));

    setNewResults(results);
    setNewNameSearch(value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <PersonFilter
        name={newNameSearch}
        handleSearch={handleSearch}
        results={newResults}
      />

      <PersonForm
        handleSubmit={addPerson}
        name={newName}
        handleName={handleName}
        phone={newPhoneNumber}
        handlePhone={handlePhoneNumber}
      />

      <Persons persons={persons} title="All persons" />
    </div>
  );
};

export default App;
