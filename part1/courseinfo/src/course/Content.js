import Part from "./Part";

const Content = (props) => {
  const listParts = props.parts.map((part, index) => (
    <Part key={index} part={part} />
  ));

  return <div>{listParts}</div>;
};

export default Content;
