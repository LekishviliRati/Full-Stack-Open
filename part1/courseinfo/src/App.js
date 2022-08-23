import { useState } from 'react'

// a proper place to define a component
const Statistics = (props) => {
  if (props.total) {
    return(
      <div> 
        <p> <h2> Statistics </h2> </p>
        <p> Good : {props.good} </p>
        <p> Neutral : {props.neutral} </p>
        <p> Bad : {props.bad} </p>
        <p> Total of feedbacks : {props.total} </p>
        <p> Average : {props.averageTotal / props.total} </p>
        <p> Positive : {props.good*100/props.total} </p>
      </div>
    )
  }
  return(
    <div> No Feedback </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [averageTotal, setAll] = useState(0)
  const total = (good + neutral + bad)

  const handleGoodClick = () => {
    setAll(averageTotal + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(averageTotal -1)
    setBad(bad + 1)
  }


  return (
    <div>
      <p> <h2>Give feedback</h2> </p>
      <p> 
      <button onClick={handleGoodClick}>
        Good 
      </button>
      <button onClick={handleNeutralClick}>
        Neutral
      </button>
      <button onClick={handleBadClick}>
        Bad
      </button>
      </p>
      <Statistics 
      good={good} 
      neutral={neutral}
      bad={bad}
      total={total}
      averageTotal={averageTotal}
      />
    </div>
  )
}

export default App