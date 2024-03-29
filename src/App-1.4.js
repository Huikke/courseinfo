const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
    return (
      <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />
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
  const parts = props.parts

  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
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
  const parts = props.parts
  
  return (
    <div>
        <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}

export default App