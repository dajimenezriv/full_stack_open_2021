import React, { useState } from 'react'


const Button = ({ handleClick, feedbackTitle, feedbackValue, setFeedback }) => {
  return (
    <button
      onClick={() => handleClick(feedbackValue, setFeedback)}>
      {feedbackTitle}
    </button>
  )
}


const Statistics = ({ good, neutral, bad }) => {
  const results = () => (
    <table>
      <tbody>
        <StatisticLine text={'good'} value={good} />
        <StatisticLine text={'neutral'} value={neutral} />
        <StatisticLine text={'bad'} value={bad} />
        <StatisticLine text={'all'} value={good + neutral + bad} />
        <StatisticLine text={'average'} value={(good - bad) / (good + bad + neutral)} />
        <StatisticLine text={'positive'} value={`${good / (good + neutral + bad) * 100} %`} />
      </tbody>
    </table>
  )

  return (
    <div>
      <h1>statistics</h1>

      {
        (good + neutral + bad) > 0 ?
          results() :
          <p>No feedback given</p>
      }

    </div>
  )
}


const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (feedbackValue, setFeedback) => setFeedback(feedbackValue + 1)

  return (
    <div>
      <h1>give feedback</h1>

      <div>
        <Button
          handleClick={handleClick}
          feedbackTitle='good'
          feedbackValue={good}
          setFeedback={setGood}
        />

        <Button
          handleClick={handleClick}
          feedbackTitle='neutral'
          feedbackValue={neutral}
          setFeedback={setNeutral}
        />

        <Button
          handleClick={handleClick}
          feedbackTitle='bad'
          feedbackValue={bad}
          setFeedback={setBad}
        />
      </div>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
