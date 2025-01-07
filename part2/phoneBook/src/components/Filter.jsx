import React from "react";

const Filter = ({ onChange, value }) => {
  return (
    <p>
      filter shown with <input onChange={onChange} value={value} />
    </p>
  );
};

export default Filter;
