"use client";
import WeatherCard from "@app/components/WeatherCard";
import { useFetchWeather } from "@app/utils/usefetchWeather";
import CitySearchForm from "@app/components/SearchCityForm";
import { useState } from "react";

const Home = () => {
  const [city, setCity] = useState("London");

  const handleCitySearch = (newCity) => {
    setCity(newCity);
  };

  const weatherData = useFetchWeather(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
  );

  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen space-y-4">
        <CitySearchForm onSearch={handleCitySearch} />
        {weatherData && (
          <WeatherCard weatherData={weatherData} className="mt-4" />
        )}
        {!weatherData && <div className="text-red-500">City {city} not found.</div>}
      </main>
    </>
  );
};

export default Home;
