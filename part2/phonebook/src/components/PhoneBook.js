import React from 'react'

const PhoneBook = ({ filter }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul id="filterList">
        {filter.map(person => (
          <li key={person.id}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default PhoneBook