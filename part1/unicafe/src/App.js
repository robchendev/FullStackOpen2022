import { useState, useEffect } from 'react'

function calcAvg(good, neutral, bad) {
  const sum = good + bad * (-1)
  const avg = sum / (good + neutral + bad)
  return avg
}
function calcPos(good, neutral, bad) {
  return good * 100 / (good + neutral + bad)
}

const Button = ({ onClickHandler, text }) => (
  <button onClick={onClickHandler}>{text}</button>
)

const StatisticsLine = ({ text, value }) => (
  <p>{text} {value}</p>
)

const Statistics = (
  { good, neutral, bad, average, positive, feedbackGiven }
) => {
  return (

    <div>
      <h2>statistics</h2>
      {feedbackGiven ?
        <div>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={good + neutral + bad} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={`${positive} %`} />
        </div>
        :
        <p>No feedback given</p>
      }
    </div>

  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [feedbackGiven, setFeedbackGiven] = useState(false)

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
      setFeedbackGiven(true)
    }
  }, [good, neutral, bad])

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClickHandler={handleGood} text="good" />
      <Button onClickHandler={handleNeutral} text="neutral" />
      <Button onClickHandler={handleBad} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={average}
        positive={positive}
        feedbackGiven={feedbackGiven}
      />
    </div>
  )
}

export default App