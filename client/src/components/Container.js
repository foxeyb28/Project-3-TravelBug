import React, { useState, useEffect } from 'react';
import NavTabs from './Navtabs';
import Home from './pages/Home';
import PlacesToGo from './pages/PlacesToGo';
import getLocationId from '../utils/api/LocationSearch';
import getRestaurants from '../utils/api/RestaurantSearch';
import Restaurants  from './pages/Restaurants';
import Attractions from './pages/Attractions';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [locationId, setLocationId] = useState('')
  const [restaurant, setRestaurant] = useState('')
  const [cityName, setCityName] = useState('')
  
  useEffect(()=>{
    getLocationId().then(data=>{
      setLocationId(data)
      getRestaurants(data).then(restaurantData=>{
        setRestaurant(restaurantData)
      })
    })
  },[])
  const handleChange = (event) => {
    const {name, value} = event.target
    setCityName(value)
  }
  const handleSearch = (event) => {
    getLocationId(cityName).then(data=>{
      setLocationId(data)
      getRestaurants(data).then(restaurantData=>{
        setRestaurant(restaurantData)
      })
    })
  }
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home handleChange={handleChange} handleSearch={handleSearch} cityName={cityName}/>;
    }
    if (currentPage === 'Attractions') {
      return <Attractions />;
    }
    if (currentPage === 'PlacesToGo') {
      return <PlacesToGo />;
    }
    if (currentPage === 'Restaurants ') {
        return <Restaurants  />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {console.log(restaurant)}
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
