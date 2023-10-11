import React, { useState } from 'react';
import NavTabs from './Navtabs';
import Home from './pages/Home';
import PlacesToGo from './pages/PlacesToGo';
import Resteraunts from './pages/Resteraunts';
import Attractions from './pages/Attractions';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Attractions') {
      return <Attractions />;
    }
    if (currentPage === 'PlacesToGo') {
      return <PlacesToGo />;
    }
    if (currentPage === 'Resteraunts') {
        return <Resteraunts />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      { }
      {renderPage()}
      <Footer/> 
    </div>
  );
}
