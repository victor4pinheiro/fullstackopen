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

      <div>
        {results.map((person) => (
          <p key={person.id}>
            Name: {person.name}. Phone number: {person.number}
          </p>
        ))}
      </div>
    </div>
  );
};
export default PersonFilter;
