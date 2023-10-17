const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    savedTrips: [Trips]
  }

  type Trips {
    tripId: ID!
   title: String!
   description: String
  }

  input TripInput {
    tripId: String!
    title: String
    description: String
  }
type Auth {
  token: String!
  user: User
  travelAdvisorData: TravelAdvisorData
}

// type TravelAdvisorData {
//   # Define fields for the TravelAdvisorData type here
// }

 type Mutation {
      addUser(username: String!, email: String!, password: String!): Auth
      loginUser(email: String!, password: String!): Auth
      saveTrip(tripData: TripInput!): User
      removeTrip(tripId: ID!): User   
      }
`;

module.exports = typeDefs;