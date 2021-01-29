import styled from 'styled-components/macro'

function Forecast({ weather }) {
    console.log('weather ' + weather)
    return (
        <ForecastList>
            {weather &&
                weather.map((day, index) => (
                    <Day key={index}>
                        <ForecastIcon
                            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            alt=""
                        />
                        <DailyTemp>{Math.round(day.temp.day)}°</DailyTemp>

                        <DailyDescription>
                            {day.weather[0].description}
                        </DailyDescription>
                    </Day>
                ))}
        </ForecastList>
    )
}

const ForecastList = styled.ul`
    list-style: none;
    text-align: left;
    grid-column: 1 / -1;
    width: 80%;
`

const Day = styled.li`
    display: grid;
    grid-template: auto / 10% 25% 60%;
`

const DailyTemp = styled.span`
    text-align: center;
    vertical-align: center;
    line-height: 30px;
`

const DailyDescription = styled.span`
    line-height: 30px;
`

const ForecastIcon = styled.img`
    width: 30px;
`

export default Forecast
