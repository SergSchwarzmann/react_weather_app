import * as React from 'react';


function Weather ({ latitude, longitude }) {
    const [currentWeather, setCurrentWeather] = React.useState(null);
    const [dailyForecast, setDailyForecast] = React.useState([]);

    React.useEffect(() => {
        if (latitude && longitude) {
          const apiKey = 'af9e862c1cd391096bdd3b21e57ecbd7';
          // Запрос данных о текущей погоде
      const currentWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=ru`;

      fetch(currentWeatherApiUrl)
        .then(response => response.json())
        .then(data => {
          // Обработка текущей погоды
          setCurrentWeather(data);
        })
        .catch(error => {
          // Обработка ошибок
          console.error('Ошибка при получении данных о текущей погоде:', error);
        });

      // Запрос прогноза погоды на пять дней
      const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=ru`;

      fetch(forecastApiUrl)
        .then(response => response.json())
        .then(data => {
          // Обработка прогноза погоды на пять дней
          setDailyForecast(data.list);
        })
        .catch(error => {
          // Обработка ошибок
          console.error('Ошибка при получении прогноза погоды на пять дней:', error);
        });
    }
  }, [latitude, longitude]);

  return (
    <div>
      <h2>Текущая погода</h2>
      {currentWeather && (
        <div>
          <p>Температура: {currentWeather.main.temp} °C</p>
          <p>Описание: {currentWeather.weather[0].description}</p>
        </div>
      )}

      <h2>Прогноз на один день</h2>
      {dailyForecast.length > 0 && (
        <div>
          <p>Дата: {new Date(dailyForecast[0].dt_txt).toLocaleDateString()}</p>
          <p>Температура: {dailyForecast[0].main.temp} °C</p>
          <p>Описание: {dailyForecast[0].weather[0].description}</p>
        </div>
      )}

      <h2>Прогноз на пять дней</h2>
      <ul>
        {dailyForecast.map((forecast, index) => (
          <li key={index}>
            <p>Дата: {new Date(forecast.dt_txt).toLocaleDateString()}</p>
            <p>Температура: {forecast.main.temp} °C</p>
            <p>Описание: {forecast.weather[0].description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Weather;