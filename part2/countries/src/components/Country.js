import { useEffect, useState } from "react"
import axios from "axios"

const Country = ({ country, api_key }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&APPID=${api_key}`)
      .then(res => setWeather(res.data))
  }, [country, api_key])

  return (
    <div className="Country">
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>

      <h2>languages</h2>
      {
        Object.values(country.languages).map(value => {
          return (
            <li key={value}>{value}</li>
          )
        })
      }
      <img src={country.flags.png} width={100} alt="flag" />

      {
        (weather) ?
          <div>
            <h2>Weather in {country.capital}</h2>
            <b>temperature:</b> {weather.main.temp}
            <br />
            <b>wind:</b> {weather.wind.speed}
          </div> :
          null
      }
    </div>
  )
}

export default Country
