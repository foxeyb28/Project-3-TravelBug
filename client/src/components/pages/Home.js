import React from 'react';

export default function Home({handleChange, handleSearch, cityName}) {
  return (
    <div>
      <h1>Travel Bug</h1>
      <input value ={cityName} name ='cityName' onChange={handleChange}/>
      <button onClick={handleSearch}>Search</button>
      <p>
        Elevator Pitch
      </p>
    </div>
  );
}