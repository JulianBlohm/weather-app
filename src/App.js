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
                    <span>No wind</span>
                )}
                <Temperature>{weather.temp}°</Temperature>
                <span>
                    feels
                    <br /> like
                </span>
                <Temperature>{weather.feels_like}°</Temperature>

                <Subheading>7 Day Forecast</Subheading>
                <Forecast>
                    {weather.daily &&
                        weather.daily.map((day, index) => (
                            <Day key={index}>
                                <DailyTemp>
                                    {Math.round(day.temp.day)}°
                                </DailyTemp>

                                <span>{day.weather[0].description}</span>
                            </Day>
                        ))}
                </Forecast>
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
const Subheading = styled.h2`
    grid-column: 1 / 3;
    margin-bottom: 20px;
`

const Temperature = styled.h2`
    font-size: 6rem;
    margin: 50px 0;
    text-align: right;
`

const Forecast = styled.ul`
    list-style: none;
    text-align: left;
    grid-column: 1 / -1;
    width: 80%;
`

const Day = styled.li`
    display: grid;
    grid-template: auto / 20% 80%;
`

const DailyTemp = styled.span`
    text-align: center;
`
export default App
