import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [countriesShown, setCountriesShown] = useState([])
  const [countryShown, setCountryShown] = useState(null)

  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
        setCountries(res.data)
        setCountriesShown(res.data)
      })
  }, [])

  /**
   * 
   * THIS IS IMPORTANT
   * When we execute a setX in a function it doesn't get the update until the function finish
   * 
   */

  const handleFilter = (e) => {
    setFilter(e.target.value)
    let copy = [...countries]
    copy = copy.filter(country => country.name.common.toLowerCase().includes(e.target.value))
    setCountriesShown(copy)
    if (copy.length === 1)
      setCountryShown(copy[0])
    else
      setCountryShown(null)
  }

  const showCountry = (e, country) => {
    e.preventDefault()
    setCountryShown(country)
  }

  return (
    <div className='App'>
      <form>
        <div>find countries <input value={filter} onChange={handleFilter} /></div>
      </form>

      <div>
        {
          (countriesShown.length > 10) ?
            'Too many matches, specify another filter' :
            (countriesShown.length > 1) ?
              countriesShown.map(country => {
                return (
                  <form key={country.name.common} onSubmit={(e) => showCountry(e, country)}>
                    <div>{country.name.common}</div>
                    <div><button type="submit">show</button></div>
                  </form>
                )
              }) :
              null
        }

        {
          (countryShown) ?
            <Country country={countryShown} api_key={api_key} /> :
            null
        }
      </div>
    </div>
  )
}

export default App
