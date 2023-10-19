iimport React from "react";
import MyCardComponent from "./Card"; // Import your card component
import 'materialize-css/dist/css/materialize.min.css'; 
import React, { useRef } from 'react';
import AttractionsCard from "../AttractionsCard";
import RestaurantCard from "../RestaurantCard";

function MyTrips() {
  const inputRef = useRef("MyTrips");
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <h1>My Trips</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
      {trips.map((trip) => (
        <MyCardComponent key={trip.id} trip={trip} />
      ))}
    </div>
  );
}

export default MyTrips;
