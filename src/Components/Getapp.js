import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const Getapp = () => {
  return (
    <div className="get-app-container">
      <p className='get'>Get the App</p>
      <div className="app-buttons">
        <Link to={{ pathname: "https://apps.apple.com" }} target="_blank" rel="noopener noreferrer" className="btn google">
          <FontAwesomeIcon icon={faApple} />
        </Link>
        <Link to={{ pathname: "https://play.google.com" }} target="_blank" rel="noopener noreferrer" className="btn google">
          <FontAwesomeIcon icon={faGooglePlay} />
        </Link>
      </div>
    </div>
  );
}

export default Getapp;
