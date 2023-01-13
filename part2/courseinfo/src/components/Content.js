import Part from "./Part";

const Content = (props) => {
  const { parts } = props;
  const collectionParts = parts.map((part) => (
    <Part key={part.id} name={part.name} exercise={part.exercises} />
  ));

  return (
    <>
      <div>{collectionParts}</div>
    </>
  );
};

export default Content;
