import React from "react";
import MyCardComponent from "./Card"; // Import your card component
import 'materialize-css/dist/css/materialize.min.css'; 

function MyTrips({ trips }) {
  return (
    <div>
      <h1>My Trips</h1>
      {trips.map((trip) => (
        <MyCardComponent key={trip.id} trip={trip} />
      ))}
    </div>
  );
}

export default MyTrips;
