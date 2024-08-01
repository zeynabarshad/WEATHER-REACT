import React from 'react'
import '../Css/WeatherCard1.css'
const WeatherCard1 = ({ title,  weather, location, date, warning }) => {
  return (
    <div className="weathercard1">
    <div className="info">
        {weather && <div className="weather1">{weather}</div>}
        {location && <div className="location1">{location}</div>}
        {date && <div className="date1">{date}</div>}
        {warning && <div className="warning1">{warning}</div>}
        <div className="title1">{title}</div>
      </div>
      </div>
  )
}

export default WeatherCard1