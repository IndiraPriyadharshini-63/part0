import React from "react";

const Persons = ({ person, onDelete }) => {
  return (
    <div>
      {person.name} {person.number}
      <button onClick={() => onDelete(person.id, person.name)}>delete</button>
    </div>
  );
};

export default Persons;
