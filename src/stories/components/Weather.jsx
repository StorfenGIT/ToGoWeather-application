import React from 'react';
import logo_icon from '../assets/gotologo.png';

const Weather = () => {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img 
                    src={logo_icon} 
                    alt="Logo icon" 
                    style={{ width: '100px', height: '100px' }}
                />
                <h1>Welcome to our weather app! We are ToGoWeather</h1>
            </div>
        </div>
    );
};

export default Weather;
