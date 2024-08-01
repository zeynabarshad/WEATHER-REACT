import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../Css/explorebutton.css'
const ExploreButton = () => {
  return (
    <button className="explore-button">
    Explore benefits <FontAwesomeIcon icon={faArrowRight} />
  </button>
  )
}

export default ExploreButton