import React from 'react'
import '../Css/WeatherCard.css'
const Weathercard = ({ title,  time, weather, location, date, warning }) => {
  return (
    <div className="weather-card">
      {time && <div className="time">{time}</div>}

      <div className="info">
        {weather && <div className="weather">{weather}</div>}
        {location && <div className="location">{location}</div>}
        {date && <div className="date">{date}</div>}
        {warning && <div className="warning">{warning}</div>}
        <div className="title">{title}</div>
      </div>
    </div>
  )
}

export default Weathercard