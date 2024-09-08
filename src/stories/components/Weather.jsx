import React, { useEffect, useRef, useState } from 'react';
import './Weather.modules.css';
import { iconMap } from './Icons';
import { fetchWeatherData } from '../service/WeatherService';  


// Standard sök är Stockholm
const Weather = ({ searchCity = 'Stockholm' }) => { 
    const inputRef = useRef();
    const [weatherData, setWeatherData] = useState(false);

    const allIconns = {
        "01d": iconMap.clear,
        "01n": iconMap.clear,
        "02d": iconMap.cloud,
        "02n": iconMap.cloud,
        "03d": iconMap.cloud,
        "03n": iconMap.cloud,
        "04d": iconMap.drizzle,
        "04n": iconMap.drizzle,
        "09d": iconMap.rain,
        "09n": iconMap.rain,
        "10d": iconMap.rain,
        "10n": iconMap.rain,
        "13d": iconMap.snow,
        "13n": iconMap.snow,
    };

    const [loading, setLoading] = useState(false);

const search = async (city) => {
    if (city === "") {
        alert("Enter City Name");
        return;
    }

    setLoading(true);
    try {
        const data = await fetchWeatherData(city, import.meta.env.VITE_APP_API_KEY);
        const icon = allIconns[data.weather[0].icon] || iconMap.clear;
        setWeatherData({
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            icon: icon,
        });
    } catch (error) {
        setWeatherData(false);
        console.error("Error fetching weather data");
    } finally {
        setLoading(false);
    }
};
useEffect(() => {
    search(searchCity);  
}, [searchCity]);  

return (
    <div className="weather">
        <div className="search-bar">
            <input ref={inputRef} type="text" placeholder="Search" />
            <img src={iconMap.search} alt="search icon" onClick={() => search(inputRef.current.value)} />
        </div>

        {loading ? (
            <p>Loading...</p>
        ) : weatherData ? (
            <>
                <img src={weatherData.icon} alt="" className="weather-icon" />
                <p className="temperature">{weatherData.temperature}°C</p>
                <p className="location">{weatherData.location}</p>
                <div className="weather-data">
                    <div className="col">
                        <img src={iconMap.humidity} alt="humidity icon" />
                        <div>
                            <p>{weatherData.humidity} %</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <img src={iconMap.wind} alt="wind icon" />
                        <div>
                            <p>{weatherData.windSpeed} Km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
            </>
        ) : null}
    </div>
);
}

export default Weather;
