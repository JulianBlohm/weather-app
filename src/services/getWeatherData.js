export default function getWeatherData() {
    return fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat=53.55&lon=9.98&units=metric&appid=39c3930949e7f373065570d91d4f6598'
    )
        .then((res) => res.json())
        .then((weatherData) => {
            return {
                temp: weatherData.current.temp,
                wind: weatherData.current.wind_speed,
                description: weatherData.weather[0].description,
                icon: weatherData.weather[0].icon,
            }
        })
        .catch(() => 'error')
}
