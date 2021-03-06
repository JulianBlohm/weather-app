export default function getdata() {
    return fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat=53.55&lon=9.98&units=metric&appid=39c3930949e7f373065570d91d4f6598'
    )
        .then((res) => res.json())
        .then((data) => {
            return {
                temp: Math.round(data.current.temp),
                feels_like: Math.round(data.current.feels_like),
                wind: data.current.wind_speed,
                description: data.current.weather[0].description,
                icon: data.current.weather[0].icon,
                daily: data.daily
            }
        })
        .catch((error) => console.log(error))
}
