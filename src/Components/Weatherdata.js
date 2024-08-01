import React, { useState, useEffect } from 'react';
import '../Css/uvweather.css'
import clearsky from '../clearsky.jpg';
import cloudy from '../cloudy.jpg';
import rain from '../rainyy.jpg';
import scatter from '../scatter.jpg';

const Weatherdata = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecentSearches(storedSearches);
  }, []);

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleSearch = async () => {
    const apiKey = '6e1249e0553f2937eca777808dbed804';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);

      const updatedSearches = [searchTerm, ...recentSearches.slice(0, 2)];
      setRecentSearches(updatedSearches);
      setSearchTerm('');
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  const getWeatherImage = (description) => {
    switch (description) {
      case 'clear sky':
        return clearsky;
        
      case 'few clouds':
        return cloudy;
      case 'scattered clouds':
        return scatter;
      case 'rain':
        return rain;
      // Add more cases as needed...
      default:
        return null;
    }
  };
  const weatherImage = weatherData ? getWeatherImage(weatherData.weather[0].description) : null;
  return (
    <div >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a location"
        className='search'
      />
      <button onClick={handleSearch} className='bg-black text-white search-btn '>Search</button>

      {weatherData && (
        <div  className="weather-info"
        style={{
          backgroundImage: `url(${weatherImage})`,
          backgroundSize: 'cover',
          height: '240px',
          overflow: 'hidden',
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          marginLeft:'-8px',
  backgroundRepeat:'no-repeat',
          backgroundPosition: 'center',
         
          padding: '20px',
          borderRadius: '10px',
          color: '#fff',
          textShadow: '0 0 10px rgba(0, 0, 0, 0.5)'}}>
         
          <h3 className='update'>Weather in {weatherData.name}

          </h3>
        
          <p>{Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>{weatherData.weather[0].description}</p>
          
            
           
        </div>
      )}

      <h3 className='viewed-place'>Recently Viewed Places</h3>
      <ul>
        {recentSearches.map((place, index) => (
          <li style={{color:'black' , fontSize:'16px' ,fontWeight:'400'}} key={index}>{place}</li>
        ))}
      </ul>
    </div>
  );
};

export default Weatherdata;
