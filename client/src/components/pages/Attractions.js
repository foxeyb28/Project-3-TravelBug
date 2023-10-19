import React from 'react';
import AttractionsCard from '../AttractionsCard'; 

export default function Attractions({ attractions }) {
  console.log(attractions);
  return (
    <div>
      <h2>Local Attractions</h2>
      <p>Local Attractions you should check out:</p>

      <ul>
        {attractions.map((attraction, index) => (
          <li key={attraction.id}>
            {index<5? <AttractionsCard attraction={attraction} />:''} 
          </li>
        ))}
      </ul>
    </div>
  );
}
