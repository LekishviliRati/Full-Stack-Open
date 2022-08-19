/* Exercise 1.3
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
*/
/* Exercise 1.4
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
     <p> Name of the course : {course} </p> 
     <p> Name of part1 : {parts[0].name}. Number of exercises : {parts[0].exercises} </p>
     <p> Name of part2 : {parts[1].name}. Number of exercises : {parts[1].exercises} </p>
     <p> Name of part3 : {parts[2].name}. Number of exercises : {parts[2].exercises} </p>
     <p> Total of exercises : {parts[0].exercises + parts[1].exercises + parts[2].exercises} </p>
    </div>
  )
}
*/

/* Exercise 1.5 */
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
     <p> Name of the course : {course.name} </p> 
     <p> Name of part1 : {course.parts[0].name}. Number of exercises : {course.parts[0].exercises} </p>
     <p> Name of part2 : {course.parts[1].name}. Number of exercises : {course.parts[1].exercises} </p>
     <p> Name of part3 : {course.parts[2].name}. Number of exercises : {course.parts[2].exercises} </p>
     <p> Total of exercises : {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} </p>
    </div>
  )
}

export default App;
