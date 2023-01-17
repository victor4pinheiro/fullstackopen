const PersonForm = (props) => {
  const { handleSubmit, name, handleName, phone, handlePhone } = props;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add new person</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleName} />
        </div>

        <div>
          <label htmlFor="phone">Number:</label>
          <input type="text" id="phone" value={phone} onChange={handlePhone} />
        </div>

        <button type="submit">Add new person</button>
      </form>
    </>
  );
};

export default PersonForm;
