import { HttpStatusCode } from "axios";
import { useEffect, useState } from "react";
import Notification from "./components/Notification";
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
  const [message, setNewMessage] = useState(null);
  const [typeMessage, setTypeMessage] = useState(null);

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

        personService.update(person._id, newPerson).then((response) => {
          setNewMessage(`${newPerson.name}'s info was updated`);
          setTypeMessage(HttpStatusCode.Created);

          setTimeout(() => {
            setNewMessage(null);
            setTypeMessage(null);
          }, 2000);

          setPersons(
            persons.map((person) =>
              person._id !== newPerson._id ? person : newPerson
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
        setNewMessage(`${newPerson.name} sucessfully created`);
        setTypeMessage(HttpStatusCode.Created);

        setTimeout(() => {
          setNewMessage(null);
          setTypeMessage(null);
        }, 2000);

        setPersons(persons.concat(response));
      });
    }

    setNewName("");
    setNewPhoneNumber("");
  };

  const deletePerson = (id) => {
    const person = persons.find((person) => person._id === id);
    const stateDelete = window.confirm(`Do you want to delete ${person.name}`);

    if (!stateDelete) return;

    personService.remove(id).then((response) => {
      setNewMessage(`${person.name} was removed`);
      setTypeMessage(HttpStatusCode.BadRequest);

      setTimeout(() => {
        setNewMessage(null);
        setTypeMessage(null);
      }, 2000);

      setPersons(persons.filter((person) => person._id !== id));
    });
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

      <Notification message={message} type={typeMessage} />

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
