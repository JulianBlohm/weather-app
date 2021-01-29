import { useEffect, useState } from 'react'
import getWeatherData from './services/getWeatherData'
import styled from 'styled-components/macro'
import Forecast from './components/Forecast'
import WeatherIcon from './components/WeatherIcon'

function App() {
    const [weather, setWeather] = useState()

    useEffect(() => loadWeather(), [])

    async function loadWeather() {
        const loadedData = await getWeatherData()
        setWeather(loadedData)
    }

    if (!weather) {
        return 'loading'
    }


    return (
        <Showcase>
            <Heading>Weather at Closelink</Heading>
            <CurrentWeatherGrid>
                <span>{weather.description}</span>
                <WeatherIcon icon={weather.icon}/>
                {weather.wind > 0 ? (
                    <span>Wind {weather.wind} m/s</span>
                ) : (
                    <span>No wind</span>
                )}
                <Temperature>{weather.temp}°</Temperature>
                <span>
                    feels
                    <br /> like
                </span>
                <Temperature>{weather.feels_like}°</Temperature>

                <Subheading>7 Day Forecast</Subheading>
                <Forecast weather={weather.daily} />
            </CurrentWeatherGrid>
        </Showcase>
    )
}

const Showcase = styled.main`
    background: var(--main-blue);
    color: white;
    text-align: center;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CurrentWeatherGrid = styled.article`
    display: grid;
    grid-template: auto / 40% 20% 40%;
    place-items: center;
    max-width: 500px;
`

const Heading = styled.h1`
    padding: 20px 0;
`
const Subheading = styled.h2`
    grid-column: 1 / 3;
    margin-bottom: 20px;
`

const Temperature = styled.h2`
    font-size: 6rem;
    margin: 50px 0;
    text-align: right;
`

export default App
