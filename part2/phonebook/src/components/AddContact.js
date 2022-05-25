import React from 'react'

const AddContact = ({ addName, newName, newNumber, handleNameChange, handleNumberChange }) => {

  return (
    <div>
      <h2>Add new contact</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default AddContact