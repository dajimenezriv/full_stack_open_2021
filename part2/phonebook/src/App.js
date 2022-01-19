import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService.getAll().then(data => setPersons(data))
  }, [])

  const handleName = (e) => setNewName(e.target.value)
  const handleNumber = (e) => setNewNumber(e.target.value)
  const handleFilter = (e) => setFilter(e.target.value)

  const addPerson = (e) => {
    e.preventDefault()
    const person = persons.find(person => person.name === newName)
    if (person)
      updatePerson(person)
    else {
      const newPerson = { name: newName, number: newNumber }
      personService.create(newPerson).then(data => {
        setPersons(persons.concat(data))
        setSuccessMessage(`Added ${data.name}`)
        setTimeout(() => setSuccessMessage(null), 5000)
        setNewName('')
        setNewNumber('')
      })
        .catch(err => alert(err))
    }
  }

  const updatePerson = (person) => {
    if (window.confirm(`${person.name} is already added. Do you want to change the number?`)) {
      person = {
        ...person,
        number: newNumber
      }
      personService.update(person.id, person).then(() => {
        setPersons(persons.map(p => p.id !== person.id ? p : person))
      }).catch(() => {
        setErrorMessage(`${person.name} does not exist in the database.`)
        setTimeout(() => setErrorMessage(null), 5000)
      })
    }
  }

  /**
   * 
   * filter returns a copy of the array
   * 
   */

  const deletePerson = (e, person) => {
    e.preventDefault()
    if (window.confirm(`Delete ${person.name}`)) {
      personService.remove(person.id).then(() => {
        setPersons(persons.filter(p => p.id != person.id))
      })
    }
  }

  const personsShown = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} className='message success' />
      <Notification message={errorMessage} className='message error' />
      <Filter filter={filter} handleFilter={handleFilter} />

      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleName={handleName}
        handleNumber={handleNumber}
      />

      <h2>Numbers</h2>
      <Persons personsShown={personsShown} deletePerson={deletePerson} />
    </div>
  )

}

export default App
