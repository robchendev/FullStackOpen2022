import { useState, useEffect } from 'react'

function calcAvg(good, neutral, bad) {
  const sum = good + bad * (-1)
  const avg = sum / (good + neutral + bad)
  return avg
}
function calcPos(good, neutral, bad) {
  return good * 100 / (good + neutral + bad)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    console.log(good)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  useEffect(() => {
    if (
      !((good === 0) && (neutral === 0) && (bad === 0))
    ) {
      setAverage(calcAvg(good, neutral, bad))
      setPositive(calcPos(good, neutral, bad))
    }
  }, [good, neutral, bad])

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

export default App