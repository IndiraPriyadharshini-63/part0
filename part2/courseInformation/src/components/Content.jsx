import React from "react";
import Part from "./Part";

const Content = (parts) => {
  const list = parts.parts.parts;

  return (
    <div>
      {list.map((l) => (
        <Part key={l.id} part={l.name} exercises={l.exercises} />
      ))}
    </div>
  );
};

export default Content;
