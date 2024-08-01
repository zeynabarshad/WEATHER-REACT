import React from 'react'

import '../Css/WeatherCard.css'
const WeatherCard3 = ({weather,warning,title}) => {
  return (
    <div className="weathercard3">
     

      <div className="info">
        {weather && <div className="weather3">{weather}</div>}
       
        {warning && <div className="warning3">{warning}</div>}
        <div className="title3">{title}</div>
      </div>
    </div>
  )
}

export default WeatherCard3