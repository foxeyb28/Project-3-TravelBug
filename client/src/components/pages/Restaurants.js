import React from 'react';

export default function Restaurants({ handleChange, handleSearch, cityName }) {
  return (
    <div>
      <h2>Local Restaurants</h2>
      <input value={cityName} name='cityName' onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      <p>
        Local Restaurants you should check out
      </p>
    </div>

      );
}