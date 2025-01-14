import React from "react";

const SearchCountry = ({ searchItem, setSearchItem }) => {
  return (
    <label>
      Search for a country:
      <input
        type="text"
        onChange={(e) => setSearchItem(e.target.value)}
        value={searchItem}
      />
    </label>
  );
};

export default SearchCountry;
