import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
import { useEffect } from "react";
import personService from "./services/persons";
import Notification from "./components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [msg, setMsg] = useState(null);
  const [msgType, setMsgType] = useState("");

  useEffect(() => {
    personService.getAllPersons().then((res) => {
      setPersons(res.data);
    });
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    const isNameExists = persons.find((person) => person.name === newName);

    if (isNameExists) {
      const confirmUpdate = window.confirm(
        `${newName} is already in the phonebook, do you want to replace with a new one?`
      );

      if (confirmUpdate) {
        handleUpdatePerson(isNameExists.id, {
          ...isNameExists,
          number: newNumber,
        });
      }
    } else {
      const personObject = {
        id: String(persons.length + 1),
        name: newName,
        number: newNumber,
      };

      personService
        .create(personObject)
        .then((res) => {
          setPersons(persons.concat(res.data));
          setNewName("");
          setNewNumber("");
          showMsg(`Added ${personObject.name}!!!`);
        })
        .catch((err) => {
          showMsg("Failed to add a person", "error");
        });
    }
  };

  const handlePersonNameChange = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  };

  const handlePersonNumberChange = (e) => {
    e.preventDefault();
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredPerson = persons.filter((person) =>
    person.name?.toLowerCase().includes(filter?.toLowerCase())
  );

  const handleUpdatePerson = (id, updatePerson) => {
    personService
      .update(id, updatePerson)
      .then((res) => {
        setPersons(
          persons.map((person) => (person.id === id ? res.data : person))
        );
        showMsg(
          `Person ${updatePerson.name} is updated successfully`,
          "success"
        );
      })
      .catch((err) => {
        showMsg("Failed to update a person", "error");
      });
  };

  const handleDeletePerson = (id, name) => {
    const confirmDelete = window.confirm(`Delete ${name}`);
    if (confirmDelete) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          showMsg("Person deleted successfully", "success");
        })
        .catch((err) => {
          showMsg("Failed to delete a person", "error");
        });
    }
  };

  const showMsg = (text, type) => {
    setMsg(text);
    setMsgType(type);
    setTimeout(() => {
      setMsg(null);
    }, 5000);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification msg={msg} type={msgType} />
      <Filter onChange={handleFilterChange} value={filter} />
      <h2>add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        changeName={handlePersonNameChange}
        changeNumber={handlePersonNumberChange}
        submit={addPerson}
      />
      <h2>Numbers</h2>

      <div>
        {filteredPerson.map((filterPerson) => (
          <Persons
            key={filterPerson.id}
            person={filterPerson}
            onDelete={handleDeletePerson}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
