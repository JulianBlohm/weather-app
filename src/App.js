import { useEffect, useState } from 'react'
import getWeatherData from './services/getWeatherData'
import styled from 'styled-components/macro'

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
        <Showcase>
            <CurrentWeatherGrid>
                <Temperature>{weather.temp}°</Temperature>
                {weather.icon && <img src={weatherIconUrl} alt="" />}
                <h2>{weather.description}</h2>
                {weather.wind > 0 ? (
                    <h2>Wind {weather.wind} m/s</h2>
                ) : (
                    <h2>No wind</h2>
                )}
            </CurrentWeatherGrid>
        </Showcase>
    )
}

const Showcase = styled.main`
    background: var(--main-blue);
    height: 100vh;
    color: white;
`

const CurrentWeatherGrid = styled.article`
    display: grid;
    grid-template: 50% 50% / 50% 50%;
    place-items: center;
`

const Temperature = styled.h1`
    font-size: 6rem;
`

export default App
