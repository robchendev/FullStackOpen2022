import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const initialArray = new Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(initialArray)
  const [mostVoted, setMostVoted] = useState({
    voteShow: selected,
    voteCount: votes[selected]
  }) // anecdote,votes

  function handleNext() {
    setSelected(Math.floor(Math.random() * 7))
  }
  function handleVote() {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes([...votesCopy])
    if (mostVoted.voteCount < votesCopy[selected]) {
      setMostVoted({
        voteShow: selected,
        voteCount: votesCopy[selected]
      })
    }
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVoted.voteShow]}</p>
      <p>has {mostVoted.voteCount} votes</p>
    </div>
  )
}

export default App