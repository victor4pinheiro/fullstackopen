import { useState } from "react";
import { CountryArrayInterface } from "../interfaces/CountryArrayInterface";
import { WeatherInterface } from "../interfaces/WeatherInterface";
import weatherService from "../services/weather";
import CountryDetails from "./CountryDetails";

interface CountryProps extends CountryArrayInterface {
  length: number;
}

const Country = (props: CountryProps) => {
  const { country, length } = props;
  const [error, setError] = useState("");
  const [weather, setWeather] = useState<WeatherInterface>({
    main: {
      temp: 0,
      feels_like: 0,
      humidity: 0,
    },
    wind: {
      speed: 0,
      deg: 0,
    },
  });
  const [state, setState] = useState(false);

  const label = !state ? "Show details" : "Hide details";

  const handleWeather = () => {
    console.log(country.capitalInfo.latlng);
    if (country.capitalInfo.latlng !== undefined) {
      weatherService
        .getWeatherCountry(
          country.capitalInfo.latlng[0],
          country.capitalInfo.latlng[1]
        )
        .then((response) => {
          setWeather(response);
        })
        .catch(() => setError(`Not possible to get weather data from ${country.capital}`));
    } else {
      setError(`No info found about the capital of ${country.name.common}`)
    }
  };

  const toggleDetailsOf = () => {
    handleWeather();
    setState(!state);
  };

  if (length !== 1) {
    return (
      <div>
        {state ? (
          <CountryDetails country={country} weather={weather} error={error} />
        ) : (
          <p>Common name: {country.name.common}</p>
        )}
        <button onClick={toggleDetailsOf}>{label}</button>
        <hr />
      </div>
    );
  }
  handleWeather();
  return <CountryDetails country={country} weather={weather} error={error}/>;
};

export default Country;
