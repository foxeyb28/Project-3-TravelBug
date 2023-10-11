import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#attractions"
          onClick={() => handlePageChange('Attractions')}
          className={currentPage === 'Attractions' ? 'nav-link active' : 'nav-link'}
        >
          Attractions
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#placestogo"
          onClick={() => handlePageChange('PlacesToGo')}
          className={currentPage === 'PlacesToGo' ? 'nav-link active' : 'nav-link'}
        >
          Places to Visit
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resteraunts"
          onClick={() => handlePageChange('Resteraunts')}
          className={currentPage === 'Resteraunts' ? 'nav-link active' : 'nav-link'}
        >
          Resteraunts
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;