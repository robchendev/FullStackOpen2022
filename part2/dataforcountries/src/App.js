import { useEffect, useState } from 'react'
import AddContact from './components/AddContact'
import PhoneBook from './components/PhoneBook'
import SearchFilter from './components/SearchFilter'
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState(countries)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearch = (event) => {
    const searchWord = event.target.value.toLowerCase()
    const newFilter = countries.filter(country => (
      country.name.common.toLowerCase().includes(searchWord)
    ))
    setFilter(newFilter)
  }

  useEffect(() => {
    setFilter(countries)
  }, [countries])

  return (
    <div>
      <div>
        find countries <input onChange={handleSearch} />
      </div>
      <ul>
        {
          filter.length < 10 ?
            filter.length === 1 ?
              <div>
                <h1>{filter[0].name.common}</h1>
                <p>capital {filter[0].capital}</p>
                <p>area {Math.round(filter[0].area)}</p>
                <p><strong>languages:</strong></p>
                <ul>
                  {
                    Object.keys(filter[0].languages).map(languageKey => (
                      <li>{filter[0].languages[languageKey]}</li>
                    ))
                  }
                </ul>
                <br />
                <img width="150px" src={filter[0].flags.svg} alt={filter[0].name.common} />
              </div>
              : filter.map(country => {
                return (
                  <li key={country.name.common}>{country.name.common}</li>
                )
              })
            : <li>Too many matches, specific another filter</li>
        }
      </ul>
    </div>
  )
}

export default App