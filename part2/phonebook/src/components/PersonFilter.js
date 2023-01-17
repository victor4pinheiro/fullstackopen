import Persons from "./Persons";
import "../style.css";

const PersonFilter = (props) => {
  const { name, handleSearch, results } = props;

  return (
    <div>
      <h2>Filter</h2>
      <p className="alert">Alert: search are case sensitive.</p>
      <div>
        <label htmlFor="filter-name">Filter shown with</label>
        <input
          type="text"
          id="filter-name"
          value={name}
          onChange={handleSearch}
        />
      </div>

      <Persons persons={results} title="Resultado da pesquisa" />
    </div>
  );
};
export default PersonFilter;
