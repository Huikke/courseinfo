const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
    return (
      <div>
        <Header course={course} />
        <Content part1={part1} part2={part2} part3={part3} />
        <Total part1={part1} part2={part2} part3={part3} />
      </div>
    )
  }

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Part = (props) => {
  const part = props.part

  return (
      <div>
        <p>{part.name} {part.exercises}</p>
      </div>
  )
}

const Total = (props) => {
  const part1 = props.part1
  const part2 = props.part2
  const part3 = props.part3

  return (
    <div>
        <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

export default App