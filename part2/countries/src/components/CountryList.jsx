import React from "react";

const CountryList = ({ country, showCountry }) => {
  return (
    <li key={country.name.common}>
      {country.name.common}
      <button onClick={() => showCountry(country)}>show</button>
    </li>
  );
};

export default CountryList;
