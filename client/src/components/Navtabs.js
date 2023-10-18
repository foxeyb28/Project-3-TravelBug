import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import logo from './pages/images/logo1.png';
import Auth from '../utils/auth';
 
function NavTabs({ currentPage, handlePageChange }) {
  const handleLogout = function(){
    
      Auth.logout();
      handlePageChange('Login')
  
  };
  return (
    <div className="wrapper">
      <nav>
        <div className="nav-wrapper">
          <a href="#home" onClick={() => handlePageChange('Home')}>
            <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#attractions" onClick={() => handlePageChange('Attractions')}>
                Attractions
              </a>
            </li>
            <li>
              <a href="#placestogo" onClick={() => handlePageChange('PlacesToGo')}>
                Places to Visit
              </a>
            </li>
            <li>
              <a href="#Restaurants" onClick={() => handlePageChange('Restaurants')}>
                Restaurants
              </a>
            </li>
            <li>
            <a href="#MyTrips" onClick={() => handlePageChange('MyTrips')}>
                My Trips
              </a>
            </li>
            <li>
              <a href="#Login" onClick={() => handlePageChange('Login')}>
                Login
              </a>
            </li>
            <li>
              <a href="#Logout" onClick={() => handleLogout()}>
                Logout
              </a>
            </li>
            <li>
              <a href="#SignUp" onClick={() => handlePageChange('SignUp')}>
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavTabs;
