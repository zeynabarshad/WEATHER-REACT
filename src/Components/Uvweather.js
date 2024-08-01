import React from 'react'
import '../Css/uvweather.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Weatherdata from './Weatherdata'

const Uvweather = ({uvindex}) => {
  return (
    <>
    <div className='maindiv'>
<div className='uvdiv'>

<div className='uvpic'>
 
  
<div className='uparwali'>

</div>

</div>

</div>
<div className='worldwide'>
  <div className='h1'>
<h1 >Provide You a World Wide weather ForeCast</h1></div>

<div className='recent-places' >

  <Weatherdata/>
</div>

</div>
</div>
    </>
  )
}

export default Uvweather