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
                <span>{weather.description}</span>
                {weather.icon && <img src={weatherIconUrl} alt="" />}
                {weather.wind > 0 ? (
                    <span>Wind {weather.wind} m/s</span>
                ) : (
                    <h2>No wind</h2>
                )}
                <Temperature>{weather.temp}°</Temperature>
                <span>feels<br/> like</span>
                <Temperature>{weather.feels_like}°</Temperature>
                

            </CurrentWeatherGrid>
        </Showcase>
    )
}

const Showcase = styled.main`
    background: var(--main-blue);
    height: 100vh;
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

const Temperature = styled.h2`
    font-size: 6rem;
    margin: 50px 0;
    text-align: right;
`
export default App
