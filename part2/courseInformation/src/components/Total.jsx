import React from "react";

const Total = (props) => {
  const exercise = props.parts.parts;
  const total = exercise.reduce((t, e) => (t = t + e.exercises), 0);
  return <h4>Total of {total} Excercises </h4>;
};

export default Total;
