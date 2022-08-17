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
     <p> Name of the course : {course} </p> 
     <p> Name of part1 : {part1.name}. Number of exercises : {part1.exercises} </p>
     <p> Name of part2 : {part2.name}. Number of exercises : {part2.exercises} </p>
     <p> Name of part3 : {part3.name}. Number of exercises : {part3.exercises} </p>
     <p> Total of exercises : {part1.exercises + part2.exercises + part3.exercises} </p>
    </div>
  )
}

export default App;
