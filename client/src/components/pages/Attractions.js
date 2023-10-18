import React from 'react';
import AttractionsCard from '../AttractionsCard'; 

export default function Attractions({ attractions }) {
  console.log(attractions);
  return (
    <div>
      <h2>Local Attractions</h2>
      <p>Local Attractions you should check out:</p>

      <ul>
        {attractions.map((attraction) => (
          <li key={attraction.id}>
            {attraction.name}
            <AttractionsCard attraction={attraction} /> {/* Render AttractionCard */}
          </li>
        ))}
      </ul>
    </div>
  );
}
