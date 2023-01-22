import { CountriesInterface } from "../interfaces/CountriesInterface";
import Country from "./Country";

const Countries = (props: CountriesInterface) => {
  const { countries } = props;

  if (countries.length >= 10) {
    return <div>Too many matches, specify another filter</div>;
  }
  return (
    <div>
      {countries.map((country) => (
        <Country
          key={country.cca3}
          country={country}
          length={countries.length}
        />
      ))}
    </div>
  );
};

export default Countries;
