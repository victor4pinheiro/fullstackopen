import axios from "axios";
import { useEffect, useState } from "react";
import PersonFilter from "./components/PersonFilter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newNameSearch, setNewNameSearch] = useState("");
  const [newResults, setNewResults] = useState([]);

  const hookPersons = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = {
        id: persons.length + 1,
        name: newName,
        number: newPhoneNumber,
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

  useEffect(hookPersons, []);
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
