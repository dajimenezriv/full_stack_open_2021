const Filter = ({ filter, handleFilter }) => {
  return (
    <form>
      <div>filter shown with <input value={filter} onChange={handleFilter} /></div>
    </form>
  )
}

export default Filter
