import React from 'react';
import RestaurantCard from '../RestaurantCard';

export default function Restaurants({ restaurant }) {
  console.log(restaurant);
  return (
    <div>
      <h2>Local Restaurants</h2>
      <p>Local Restaurants you should check out:</p>
      {restaurant.map((restaurantData, index) => (
       index<5? <RestaurantCard key={restaurantData.id} restaurant={restaurantData} />:''
      ))}
      <ul>
        {/* You can render a list of restaurants here if needed */}
      </ul>
    </div>
  );
}
