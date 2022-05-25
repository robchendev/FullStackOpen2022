import React from 'react'

const SearchFilter = ({ handleSearch }) => {



  return (
    <div>
      <h2>Phonebook Search</h2>
      <p>
        filter: <input
          id='searchName'
          placeholder='Search name...'
          onChange={handleSearch}
        />
      </p>
    </div>
  )
}

export default SearchFilter