import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import CountriesFilter from "./components/CountriesFilter";
import countriesService from "./services/countries";
import { CountryInterface } from "./interfaces/CountryInterface";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newResults, setNewResults] = useState([]);
  const [newSearch, setNewSearch] = useState("");

  const hooksCountries = () => {
    countriesService.getAll().then((response) => {
      setCountries(response);
    });
  };

  const handleSearch = (event: any) => {
    const value = event.target.value;
    const results = countries.filter((country: CountryInterface) =>
      country.name.common.startsWith(value)
    );

    setNewResults(results);
    setNewSearch(value);
  };

  useEffect(hooksCountries, []);
  return (
    <div>
      <CountriesFilter value={newSearch} handleSearch={handleSearch} />
      <Countries countries={newResults} />
    </div>
  );
}

export default App;
