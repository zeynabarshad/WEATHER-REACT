import React from 'react'
import '../Css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <>
    <div className='main' >
        <h1 style={{fontSize:'53px', paddingLeft:'20px'}}>Subscribe to get updated information <br></br> about weather</h1>
        <div  className='newsletter'>
        <div className='child1'>
            <p>The world's Most Accurate Forecaster.It's so easy <br></br> to recieve the weather condition NOW.</p>
        </div>
        <div className='child2' >
            <div className='input'>
            <input type='submit ' placeholder='Enter Your Email..'
            >
            </input>
            <button>Subscribe</button>
            </div>
        </div>
        </div>
    </div>
    <div className='copywrite'>
      <div className='p'>
    <p>
        <a href="/privacy-policy.html">Privacy Policy</a> |
        <a href="/terms-of-service.html">Terms of Service</a>
      </p>
      </div>
      <div className='c'>
    <p>&copy; 2024 Weather App. All rights reserved.</p>
    <p>Contact us: <a  href="mailto:zainabarshadd4@gmail.com">zainabarshadd4@gmail.com</a></p>
    </div>
    <div>
    <p className='links'>
        Follow us on:
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a> |
        <a href="https://www.linkedin.com/in/zainab-arshad-b63329286/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}> </FontAwesomeIcon></a> |
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
      </p>
    </div>
    </div>
    </>
  )
}

export default Footer