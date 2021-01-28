import { useEffect, useState } from 'react'
import getWeatherData from './services/getWeatherData'

function App() {
    const [weather, setWeather] = useState({})

    useEffect(() => loadWeather(), [])
    const weatherIconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`

    console.log(weather)

    async function loadWeather() {
        const loadedData = await getWeatherData()
        setWeather(loadedData)
    }

    return (
        <main>
            {weather.icon && <img src={weatherIconUrl} alt="" />}
            <h1>{weather.temp}°</h1>
            <h2>{weather.description}</h2>
            {weather.wind > 0 ? <h2>Wind {weather.wind} m/s</h2> : <h2>No wind</h2>}
        </main>
    )
}

export default App
