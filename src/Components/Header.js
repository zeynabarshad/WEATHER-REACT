import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is imported
import { Link } from 'react-router-dom';
import Weather from './Weather';


const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-neutral-700">
      <div className="container-fluid flex justify-center overflow-hidden">
        
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className='rounded-circle navbar-toggler-custom text-white'>
                  <FontAwesomeIcon icon={faBars} />
                </span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/">Services</Link></li>
                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
              </ul>
            </li>
            <div className='login'>
          <button> login</button>
          <button>Signup</button>
          </div>
            <Weather />
           
          <button className='services  ' > <Link className='link'  to="/">Services</Link> </button> 
          </ul>
          <form className="d-flex">
            <input className="form-control me-2 bar" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn submit" type="submit">
              <FontAwesomeIcon icon={faSearch} className="icon font-extrabold" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
