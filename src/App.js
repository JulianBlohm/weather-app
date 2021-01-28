import { useEffect, useState } from 'react'
import getWeatherData from './services/getWeatherData'

function App() {
    const [weatherInformation, setWeatherInformation] = useState()
    
    useEffect(() => loadWeatherInformation(), [])

    async function loadWeatherInformation() {
        const loadedData = await getWeatherData()
        loadedData === 'error'
            ? console.log('Weather fetch error')
            : loadIcon(loadedData.icon) && setWeatherInformation(loadedData)
    }

    async function loadIcon() {
        const loadedIcon = await getWeatherIcon()
        loadedIcon === 'error' ? console.log('Icon fetch error') : showWeather()
    }

    return (
        <div>
            <h1>Test</h1>
        </div>
    )
}

export default App
