"use client";

import {useState, useEffect} from 'react'

export const useFetchWeather = (url) => {

    const [weatherData, setWeatherData] = useState(null);

    const headers = {
        'Content-Type': 'application/json',
    };

    const fetchWeatherData =  async () => {
        try {
            const response = await fetch(url, headers);
            const result = await response.json();
            response.status == 404 ? setWeatherData(null) : setWeatherData(result)
        }
        catch (error) {
            console.log("Error while while fetching data.", error)
        }
    }

    useEffect(() => {
        fetchWeatherData();
    }, [url])
    
    return weatherData;

}
