import { CountriesFilterInterface } from "../interfaces/CountriesFilterInterface";

const CountriesFilter = (props: CountriesFilterInterface) => {
  const { value, handleSearch } = props;
  return (
    <div>
      <h3>Countries</h3>
      <div>
        <label htmlFor="countries">Find countries</label>
        <input
          type="text"
          id="countries"
          value={value}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default CountriesFilter;
