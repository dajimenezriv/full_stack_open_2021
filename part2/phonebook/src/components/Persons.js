const Persons = ({ personsShown, deletePerson }) => {
  return (
    <div>
      {
        personsShown.map(person => {
          return (
            <form key={person.name} onSubmit={(e) => deletePerson(e, person)}>
              <div>{person.name} {person.number} <button type="submit">delete</button></div>
            </form>
          )
        })
      }
    </div>
  )
}

export default Persons
