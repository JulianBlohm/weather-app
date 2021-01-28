import { useEffect, useState } from 'react'
import getWeatherData from './services/getWeatherData'

function App() {
    const [weatherInformation, setWeatherInformation] = useState({})

    useEffect(() => loadWeatherInformation(), [])
    const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherInformation.icon}@2x.png`

    console.log(weatherInformation)

    async function loadWeatherInformation() {
        const loadedData = await getWeatherData()
        setWeatherInformation(loadedData)
    }

    return (
        <div>
            <h1>Closelink Weather</h1>
            {weatherInformation.icon && <img src={weatherIconUrl} alt="" />}
        </div>
    )
}

export default App
