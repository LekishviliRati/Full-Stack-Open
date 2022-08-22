import { useState } from 'react'

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
      <p> <h2>Statistics </h2> </p>
      <p> Good : {good} </p>
      <p> Neutral : {neutral} </p>
      <p> Bad : {bad} </p>
      <p> Total : {total} </p>
      <p> Average : {averageTotal / total} </p>
      <p> Positive : {good*100/total} </p>
    </div>
  )
}

export default App