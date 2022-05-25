import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  // controls form input element
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const nameObject = {
        name: newName
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App