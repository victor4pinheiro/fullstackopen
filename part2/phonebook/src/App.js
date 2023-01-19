import axios from "axios";
import { useEffect, useState } from "react";
import PersonFilter from "./components/PersonFilter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newNameSearch, setNewNameSearch] = useState("");
  const [newResults, setNewResults] = useState([]);

  const hooksPerson = () => {
    personService.getAll().then((response) => {
      setPersons(response);
    });
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      const state = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );

      if (state) {
        const person = persons.find((person) => person.name === newName);

        const newPerson = {
          ...person,
          number: newPhoneNumber,
        };

        personService.update(person.id, newPerson).then((response) => {
          setPersons(
            persons.map((person) =>
              person.id !== newPerson.id ? person : newPerson
            )
          );
        });
      }
    } else {
      const newPerson = {
        name: newName,
        number: newPhoneNumber,
      };

      personService.create(newPerson).then((response) => {
        setPersons(persons.concat(response));
      });
    }

    setNewName("");
    setNewPhoneNumber("");
  };

  const deletePerson = (id) => {
    const person = persons.find((person) => person.id === id);
    const stateDelete = window.confirm(`Do you want to delete ${person.name}`);

    if (!stateDelete) return;

    personService
      .remove(id)
      .then(setPersons(persons.filter((person) => person.id !== id)));
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

  useEffect(hooksPerson, []);
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

      <Persons
        persons={persons}
        title="All persons"
        handleDelete={deletePerson}
      />
    </div>
  );
};

export default App;
