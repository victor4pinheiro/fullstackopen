import axios from "axios";
const OPEN_WHEATER_KEY = import.meta.env.VITE_COUNTRIES;
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?`;

/* const request = axios.get(     `${baseUrl}?q${capital},${cca2}&APPID=${OPEN_WHEATER_KEY}`   ); */

const getWeatherCountry = (lat: number, long: number) => {
  const request = axios.get(
    `${baseUrl}lat=${lat}&lon=${long}&appid=${OPEN_WHEATER_KEY}`
  );
  return request.then((response) => response.data);
};

const weatherService = { getWeatherCountry };
export default weatherService;
