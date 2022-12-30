import Content from "./course/Content";
import Header from "./course/Header";
import Total from "./course/Total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        amount_exercises: 10,
      },
      {
        name: "Using props to pass data",
        amount_exercises: 7,
      },
      {
        name: "State of a component",
        amount_exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

export default App;
