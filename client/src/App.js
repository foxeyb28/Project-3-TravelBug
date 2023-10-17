import React from "react";
import Container from "./components/Container";
import getLocationId from "./utils/api/LocationSearch";
import getRestaurants from "./utils/api/RestaurantSearch";
import getAttractions from "./utils/api/Attractions";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

 // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();

  const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });

function App() {
    return (
 <ApolloProvider client={client}>
    <Container></Container>
     </ApolloProvider>
    )
}

export default App;