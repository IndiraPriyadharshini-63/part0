import React from "react";

const ShowCountry = ({ country, weather, language, error }) => {
  return (
    <div>
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <p>Language(s): {country.languages && language(country.languages)}</p>
      <p>Flag:</p>
      {<img src={country.flags.png} alt={`${country.name.common}`} />}
      <p>Weather Map Data</p>
      {weather && (
        <div>
          <h3>Weather in {country.capital[0]}</h3>
          <p>Temperature: {weather.main.temp} Celcius</p>
          <p>Wind Speed:{weather.wind.speed} m/s</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ShowCountry;
