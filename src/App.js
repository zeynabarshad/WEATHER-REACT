
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun as regularSun,faCloudShowersHeavy 

 } from '@fortawesome/free-solid-svg-icons';

import React  from 'react'
import Getapp from './Components/Getapp';
import Header from './Components/Header';
import WeatherCard from './Components/WeatherCard';
import ExploreButton from './Components/ExploreButton';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


import {
  
  Link,
} from "react-router-dom"; 
import WeatherCard1 from './Components/WeatherCard1';
import WeatherCard3 from './Components/WeatherCard3';
import WeatherCard4 from './Components/WeatherCard4';
import Uvweather from './Components/Uvweather';
import Heatwaves from './Components/Heatwaves';
import Footer from './Components/Footer';

const App = () => {
  
 /*
  const x="zaina";
  var c="cumulative";
  const [Child, setChild] = useState('data any jany ky lye props ka concept use kr rhi ')
  const [Myage, setMyage] = useState(22) */
  return (
    
    <>
    
    <Header />

    <main>
     
      <div className='flex justify-center major '>
      <Getapp/>
      <div className='heading ' >
<h1>Precise Weather,<FontAwesomeIcon icon={regularSun} style={{ color: '#fffff' }} /> </h1>
<h1>precisely for you.</h1>
      </div>
      <div className='icons'>
        <Link to={'/'}>        <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', fontSize: '1.2em', margin: '10px' }} /> </Link>
     <Link to={'/'}> <FontAwesomeIcon icon={faFacebook} style={{ color: 'white', fontSize: '1.2em', margin: '10px' }} /></Link>
      </div>
      </div>
      
      
    </main>
    <div className='second '>
      <div className='second-2'>
        <div className='sec1'>
        <p>About<sup>[1]</sup> </p>
        </div>
        <div className='sec2'>
          <h1>Don't <span>guess  ,<FontAwesomeIcon icon={faCloudShowersHeavy} /></span> The</h1>
          <h1> Weather!</h1>
          <p>
            Rely on Clime for your xyz forecast location bla bla across the world.
          </p>
     
        </div>
        <div className='icons bg-zinc-700 sec3'>
        <Link to={'/'}>        <FontAwesomeIcon icon={faInstagram} style={{ color: 'black', fontSize: '1.3em', margin: '10px' }} /> </Link>
     <Link to={'/'}> <FontAwesomeIcon icon={faFacebook} style={{ color: 'black', fontSize: '1.3em', margin: '10px' }} /></Link>
      </div>
      </div>
      <div className='explore' >
      <Link  > <ExploreButton /></Link> </div>
      <div className="App ">
      <div className="weather-cards">
        <WeatherCard 
          title="Daily morning & evening weather outlooks."
          
          time="21h:30m:56s"
        />
        <WeatherCard1
          title="Get The App"
          image="path_to_image" 
          weather="10°"
          location="New York"
          date="Today 28.12.23"
        />
      <WeatherCard3 
          title="Use the weather sharing feature to warn your family..."
          image="path_to_image" 
          warning="weather warnings"
        />
         <WeatherCard4 
          title="livestreetview.com"
          image="path_to_image"
        />
       
      </div>
      <ExploreButton  />
    </div>
<Uvweather    />
    </div>
    <div>
      <Heatwaves/>
    </div>
    <Footer/>
  

   
    </>
    
  )
  
}

export default App 
