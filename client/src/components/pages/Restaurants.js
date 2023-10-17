import React from 'react';

export default function Restaurants({ restaurant }) {
  console.log(restaurant)
  return (
    <div>
      <h2>Local Restaurants</h2>
      <p>Local Restaurants you should check out:</p>
      
      <ul>
        {restaurant.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}