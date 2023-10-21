import React from "react";
import MyCardComponent from "./Card"; // Import your card component
import 'materialize-css/dist/css/materialize.min.css'; 
import { useQuery } from "@apollo/client"; // Import useQuery from Apollo Client
import QUERY_ME from "../../utils/queries";

function MyTrips() {
  const { loading, data } = useQuery(QUERY_ME);

  const myTrips = data?.myTrips || [];

  return (
    <div>
      <h1>My Trips</h1>
      
      {myTrips.map((trip) => (
        <MyCardComponent key={trip.id} trip={trip} />
      ))}
    </div>
  );
}

export default MyTrips;
