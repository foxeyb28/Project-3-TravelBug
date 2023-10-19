import React from "react";
import MyCardComponent from "./Card"; // Import your card component
import 'materialize-css/dist/css/materialize.min.css'; 
import QUERY_ME from "../../utils/queries";
import useQuery from "@apollo/client";
import AttractionsCard from "../AttractionsCard";
import RestaurantCard from "../RestaurantCard";

function MyTrips() {
  const { loading, data } = useQuery(QUERY_ME);
  const MyTrips = data?.tech || [];
  console.log(data);
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
