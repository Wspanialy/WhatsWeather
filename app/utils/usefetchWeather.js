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
            setWeatherData(result)
            
        }
        catch (error) {
            console.error("Error while while fetching data.", error)
        }
    }

    useEffect(() => {
        fetchWeatherData();
    }, [url])
    
    return weatherData;

}
