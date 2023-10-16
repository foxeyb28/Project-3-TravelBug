import React from 'react';

export default function Attractions({handleChange, handleSearch, cityName}) {
  return (
    <section>
            <h2>Local Attractions</h2>
            <input value ={cityName} name ='cityName' onChange={handleChange}/>
            <button onClick={handleSearch}>Search</button>
                <p>
                Local Attractions you should check out
                </p>
    </section>
  );
}