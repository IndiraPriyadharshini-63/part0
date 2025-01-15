import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import CountryList from "./components/CountryList";
import ShowCountry from "./components/ShowCountry";
import SearchCountry from "./components/SearchCountry";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (searchItem.trim() === "") {
      setCountries([]);
      return;
    }

    const fetchCountry = async () => {
      try {
        const url = `https://restcountries.com/v3.1/name/${searchItem}`;
        const response = await axios.get(url);
        setCountries(response.data);
        setSelectedCountry(null);
        setWeather(null);
        if (response.data.length === 1) {
          const capital =
            response.data[0].capital && response.data[0].capital[0];
          fetchWeather(capital);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountry();
  }, [searchItem]);

  const fetchWeather = async (capital) => {
    try {
      const apiKey = import.meta.env.VITE_SOME_KEY;
      const v2_5 = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`;
      const weatherResponse = await axios.get(v2_5);
      setWeather(weatherResponse.data);
    } catch (error) {
      console.error("Error while fetching weather", error.data);
      setWeather(null);
    }
  };

  const language = (languages) => {
    if (Array.isArray(languages)) {
      return languages.join(", ");
    } else if (typeof languages === "object") {
      return Object.values(languages).join(", ");
    } else {
      return "Unknown";
    }
  };

  const handleShowCountry = (country) => {
    setSelectedCountry(country);
    const capital = country.capital;
    fetchWeather(capital);
  };
  return (
    <div>
      <h1>Country Information</h1>
      <SearchCountry search={searchItem} setSearchItem={setSearchItem} />
      {countries.length > 10 && (
        <p>Too many countries, please make your query specific</p>
      )}

      {countries.length <= 10 && countries.length > 1 && (
        <>
          <h3>Matching Countries</h3>
          {countries.map((country) => (
            <CountryList
              key={country.name.common}
              country={country}
              showCountry={handleShowCountry}
            />
          ))}
        </>
      )}

      {selectedCountry && (
        <ShowCountry
          country={selectedCountry}
          weather={weather}
          language={language}
        />
      )}
    </div>
  );
};

export default App;
