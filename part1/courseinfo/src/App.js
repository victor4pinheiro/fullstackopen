const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  const listParts = props.parts.map((part, index) => <Part key={index} part={part} />)
  return (
    <div>
      {listParts}
    </div>
  )
}

const Part = (props) => {
  const name = props.part.name
  const exercise = props.part.exercise

  return <p>{name} {exercise}</p>
}

const Total = (props) => {
  const sum = props.total.reduce((total, value) => total = total + value.exercise, 0)

  return <p>Number of exercises {sum}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App;