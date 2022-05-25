import { useEffect, useState } from 'react'
import AddContact from './components/AddContact'
import PhoneBook from './components/PhoneBook'
import SearchFilter from './components/SearchFilter'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState(persons)

  const addName = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    const searchWord = event.target.value.toLowerCase()
    const newFilter = persons.filter(person => (
      person.name.toLowerCase().includes(searchWord)
    ))
    setFilter(newFilter)
  }

  useEffect(() => {
    setFilter(persons)
    document.getElementById('searchName').value = ''
  }, [persons])

  return (
    <div>
      <SearchFilter
        persons={persons}
        handleSearch={handleSearch}
      />
      <AddContact
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <PhoneBook filter={filter} />
    </div>
  )
}

export default App