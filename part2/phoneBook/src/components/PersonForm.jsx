import React from "react";
import { useState } from "react";

const PersonForm = ({ name, number, changeName, changeNumber, submit }) => {
  return (
    <form onSubmit={submit}>
      <div>
        name: <input onChange={changeName} value={name} />
      </div>
      <div>
        number: <input onChange={changeNumber} value={number} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
