import React, { useState, useEffect } from 'react';
import NavTabs from './Navtabs';
import Home from './pages/Home';
// import PlacesToGo from './pages/PlacesToGo';
import getLocationId from '../utils/api/LocationSearch';
import getRestaurants from '../utils/api/RestaurantSearch';
import getAttractions from '../utils/api/Attractions';
import Restaurants  from './pages/Restaurants';
import Attractions from './pages/Attractions';
//import MainComponent from './MainComponent';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [locationId, setLocationId] = useState('');
  const [restaurant, setRestaurant] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [cityName, setCityName] = useState('');

  // useEffect(() => {
  //   getLocationId().then((data) => {
  //     setLocationId(data);
  //     getRestaurants(data).then((restaurantData) => {
  //       setRestaurant(restaurantData); // Store restaurants data in state.
  //     });

  //   getAttractions(data).then((attractionsData) => {
  //       setAttractions(attractionsData); // Store attractions data in state.
  //     });
  //   });
  // });

  const handleChange = (event) => {
    const {name, value} = event.target
    setCityName(value)
  }
  const handleSearch = (event) => {
    getLocationId(cityName).then(data=>{
      setLocationId(data)
      getRestaurants(data).then(restaurantData=>{
        setRestaurant(restaurantData.data)
      })
      getAttractions(data).then(attractionsData=>{
        setAttractions(attractionsData.data)
        console.log(attractionsData)
      })
    })
  }; 

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
   const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home handleChange={handleChange} handleSearch={handleSearch} cityName={cityName} />;
    }
    if (currentPage === 'Attractions') {
      return <Attractions attractions ={attractions} />;
    }
    if (currentPage === 'Restaurants') {
      return <Restaurants restaurant={restaurant} />;
    }
    if (currentPage === 'SignUp') {
      return <SignUpForm />;
    }
    if (currentPage === 'Login') {
      return <LoginForm />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      {console.log(restaurant)}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <MainComponent currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
      {renderPage()}
    </div>
);
}

