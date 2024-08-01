// Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


const Weather = () => {
    console.log("API Key:", process.env.REACT_APP_WEATHER_API_KEY);  // Add this line to check if the key is being accessed

  const [location, setLocation] = useState({ city: '', country: '' });
  const [weather, setWeather] = useState({ temp: '', unit: 'C' });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherData(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  const fetchWeatherData = (lat, lon) => {
    const API_KEY = '6e1249e0553f2937eca777808dbed804';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    
    axios.get(url)
      .then((response) => {
        const { name, sys, main } = response.data;
        setLocation({ city: name, country: sys.country });
        setWeather({ temp: main.temp.toFixed(1), unit: 'C' });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const toggleUnit = () => {
    if (weather.unit === 'C') {
      setWeather({
        ...weather,
        temp: (weather.temp * 9/5 + 32).toFixed(1),
        unit: 'F'
      });
    } else {
      setWeather({
        ...weather,
        temp: ((weather.temp - 32) * 5/9).toFixed(1),
        unit: 'C'
      });
    }
  };

  return (
    <div className="weather-container">
      {error && <div className="alert alert-danger">{error}</div>}
      {location.city ? (
        <div className="weather-info">
          <div className="location">
            <FontAwesomeIcon icon={faLocationArrow} />
            <span>{location.city}, {location.country}</span>
          </div>
          <div className="temperature">
            <span>{weather.temp}°{weather.unit}</span>
          </div>
          <div className="icons">
           
            <button className="unit-toggle text-white" onClick={toggleUnit}>°{weather.unit === 'C' ? 'F' : 'C'}</button>
            <FontAwesomeIcon icon={faSearch} className="icon font-extrabold" style={{ color: 'white' }} />
            <FontAwesomeIcon icon={faCog} className="icon text-white" style={{ color: 'white' }} />
          </div>
        </div>
      ) : (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Weather;
