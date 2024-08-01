import React from 'react'
import '../Css/WeatherCard.css'
const WeatherCard4 = ({location,title}) => {
  return (
    <div className="weathercard4">
     

      <div className="info">
        
        {location && <div className="location4">{location}</div>}
       
     
        <div className="title4">{title}</div>
      </div>
    </div>
  )
}

export default WeatherCard4