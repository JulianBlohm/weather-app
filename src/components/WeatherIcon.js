function WeatherIcon({icon}) {
    const weatherIconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
    
    return (
        <img src={weatherIconUrl} alt="" />

    )
}

export default WeatherIcon