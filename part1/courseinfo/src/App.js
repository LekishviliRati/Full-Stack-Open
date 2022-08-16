/* const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
} */

const Header = (props) => {

  return (
    <div>
      <p> Header name : {props.course} </p>
    </div>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'

  return (
    <div>
      <p> Name of part1 : {part1} </p>
      <p> Name of part2 : {part2} </p>
      <p> Name of part3 : {part3} </p>
    </div>
  )

}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <p> Total of exercises : {exercises1 + exercises2 + exercises3} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course} />
      <Content  />
      <Total  />
    </div>
  )
}

export default App;
