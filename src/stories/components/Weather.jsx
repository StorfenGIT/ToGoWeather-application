// import React, { useEffect, useRef, useState } from 'react';
// import './Weather.modules.css'
// import search_icon from '../assets/search.png';
// import clear_icon from '../assets/clear.png';
// import cloud_icon from '../assets/cloud.png';
// import drizzle_icon from '../assets/drizzle.png';
// import humidity_icon from '../assets/humidity.png';
// import rain_icon from '../assets/rain.png';
// import snow_icon from '../assets/snow.png';
// import wind_icon from '../assets/wind.png';
// import logo_icon from '../assets/gotologo.png';
// const Weather = ({ weatherData: initialData }) => {
//     const inputRef = useRef();
//     const [weatherData, setWeatherData] = useState(initialData || false);

//     const allIconns = () => {
//         const iconMap = {
//             search: search_icon,
//             clear: clear_icon,
//             cloud: cloud_icon,
//             drizzle: drizzle_icon,
//             humidity: humidity_icon,
//             rain: rain_icon,
//             snow: snow_icon,
//             wind: wind_icon,
//             logo: logo_icon,
            
//     }};

//     const search = async (city) => {
//         if (city === "") {
//             alert("Enter City Name");
//             return;
//         }

//         try {
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_API_KEY}`;
//             const response = await fetch(url);
//             const data = await response.json();
//             const icon = allIconns[data.weather[0].icon] || clear_icon;
//             setWeatherData({
//                 humidity: data.main.humidity,
//                 windSpeed: data.wind.speed,
//                 temperature: Math.floor(data.main.temp),
//                 location: data.name,
//                 icon: icon,
//             });
//         } catch (error) {
//             setWeatherData(false);
//             console.error("Error fetching weather data");
//         }
//     };

//     useEffect(() => {
//         if (!initialData) {
//             search("Stockholm");
//         }
//     }, []);

//     return (
//         <div className="weather">
//             <div className="search-bar">
//                 <input ref={inputRef} type="text" placeholder="Search" />
//                 <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
//             </div>

//             {weatherData ? (
//                 <>
//                     <img src={weatherData.icon} alt="" className="weather-icon" />
//                     <p className="temperature">{weatherData.temperature}°C</p>
//                     <p className="location">{weatherData.location}</p>
//                     <div className="weather-data">
//                         <div className="col">
//                             <img src={humidity_icon} alt="" />
//                             <div>
//                                 <p>{weatherData.humidity} %</p>
//                                 <span>Humidity</span>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <img src={wind_icon} alt="" />
//                             <div>
//                                 <p>{weatherData.windSpeed} Km/h</p>
//                                 <span>Wind Speed</span>
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             ) : (
//                 <></>
//             )}
//         </div>
//     );
// };

// export default Weather;
import React, { useEffect, useRef, useState } from 'react';
import './Weather.modules.css';
import { iconMap } from './Icons';

const Weather = ({ searchCity = 'Stockholm' }) => { // Accept city as a prop
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

    const search = async (city) => {
        if (city === "") {
            alert("Enter City Name");
            return;
        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();
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
        }
    };

    useEffect(() => {
        search(searchCity);  // Trigger search based on prop
    }, [searchCity]);  // Trigger whenever searchCity changes

    return (
        <div className="weather">
            <div className="search-bar">
                <input ref={inputRef} type="text" placeholder="Search" />
                <img src={iconMap.search} alt="search icon" onClick={() => search(inputRef.current.value)} />
            </div>

            {weatherData ? (
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
};

export default Weather;
