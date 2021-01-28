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
            <Heading>Weather at Closelink</Heading>
            <CurrentWeatherGrid>
                {weather.icon && <Icon src={weatherIconUrl} alt="" />}
                <Temperature>{weather.temp}°</Temperature>
                <Description>{weather.description}</Description>
                {weather.wind > 0 ? (
                    <Wind>Wind {weather.wind} m/s</Wind>
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
    text-align: center;
`

const CurrentWeatherGrid = styled.article`
    display: grid;
    grid-template: auto / 30% 40% 30%;
    place-items: center;
`

const Heading = styled.h1`
    padding: 20px 0;
`

const Icon = styled.img`
    grid-column: 2 / 3;
`

const Temperature = styled.h2`
    font-size: 6rem;
    grid-column: 1 / -1;
    margin: 50px 0;
`

const Description = styled.span`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
`

const Wind = styled.span`
    grid-column: 3 / 4;
    grid-row: 1 / 2;
`

export default App
