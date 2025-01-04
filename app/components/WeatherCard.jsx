const WeatherCard = ({ weatherData }) => {
  const parseDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <div className="bg-blue-500 shadow-lg rounded-lg p-6 max-w-sm mx-auto text-white">
      <div className="text-2xl font-bold mb-4">City: {weatherData.name}</div>
      <div className="flex justify-between mb-2">
        <div className="text-sm">Sunrise: {parseDate(weatherData.sys.sunrise)}</div>
        <div className="text-sm">Sunset: {parseDate(weatherData.sys.sunset)}</div>
      </div>
      <div className="text-4xl font-semibold mb-4">{weatherData.main.temp_min}°C</div>
      <div className="text-lg capitalize mb-4">{weatherData.weather[0].description}</div>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        width={100}
        height={100}
        alt="Weather icon"
        className="mx-auto mb-4"
      />
      <div className="flex justify-between mb-2">
        <div className="text-sm">Humidity: {weatherData.main.humidity}%</div>
        <div className="text-sm">Pressure: {weatherData.main.pressure} hPa</div>
      </div>
      <div className="text-sm">Wind speed: {weatherData.wind.speed} m/s</div>
    </div>
  );
};

export default WeatherCard;
