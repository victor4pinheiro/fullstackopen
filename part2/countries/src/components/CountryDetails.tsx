import { CountryArrayInterface } from "../interfaces/CountryArrayInterface";
import { WeatherInterface } from "../interfaces/WeatherInterface";
import Notification from "./Notification";

interface CountryDetailsProps extends CountryArrayInterface {
  weather: WeatherInterface;
  error: string;
}

const CountryDetails = (props: CountryDetailsProps) => {
  const { country, weather, error } = props;
  const { flags, name, capital, area, languages } = country;
  return (
    <div>
      <img src={flags.png} alt={`Flag of ${name.common}`} />
      <p>Common name: {name.common}</p>
      <p>Official name: {name.official}</p>
      <p>Capital: {capital}</p>
      <p>Area: {area} km²</p>

      <h4>Languages</h4>
      <ul>
        {Object.entries(languages).map((language) => (
          <li key={language[0]}>{language[1]}</li>
        ))}
      </ul>

      <div>
        <h4>Weather of {capital}</h4>
        {error === "" ? (
          <>
            <h5>Main:</h5>
            <p>Temp: {weather.main.temp - 273} ºC</p>
            <p>Feels like: {weather.main.feels_like - 273} ºC</p>
            <p>Humidity: {weather.main.humidity} %</p>
            <h5>Wind</h5>
            <p>Speed: {weather.wind.speed}</p>
            <p>Speed: {weather.wind.deg}</p>
          </>
        ) : (
          <Notification error={error} />
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
