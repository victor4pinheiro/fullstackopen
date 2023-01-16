import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const Course = (props) => {
  const { course } = props;
  const { name, parts } = course;
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default Course;
