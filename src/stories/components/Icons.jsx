import React from 'react';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import logo_icon from '../assets/gotologo.png';

export const iconMap = {
    search: search_icon,
    clear: clear_icon,
    cloud: cloud_icon,
    drizzle: drizzle_icon,
    humidity: humidity_icon,
    rain: rain_icon,
    snow: snow_icon,
    wind: wind_icon,
    logo: logo_icon,
};

const Icons = () => {
    return (
        <div>
            <h1>Weather Icons - We did not create these icons!</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {Object.keys(iconMap).map((key) => (
                    <div key={key} style={{ textAlign: 'center' }}>
                        <img 
                            src={iconMap[key]} 
                            alt={`${key} icon`} 
                            style={{ width: '50px', height: '50px' }}
                        />
                        <p>{key}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Icons;

