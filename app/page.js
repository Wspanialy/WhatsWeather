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

  const weatherData = useFetchWeather(`/api/weather?city=${city}`);
  console.log(weatherData)

  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen space-y-4">
        <CitySearchForm onSearch={handleCitySearch} />
        {weatherData && (
          <WeatherCard weatherData={weatherData} className="mt-4" />
        )}
        {!weatherData  && <div className="text-red-500">City {city} not found.</div>}
      </main>
    </>
  );
};

export default Home;
