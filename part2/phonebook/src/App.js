import { useEffect, useState } from 'react'
import AddContact from './components/AddContact'
import PhoneBook from './components/PhoneBook'
import SearchFilter from './components/SearchFilter'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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