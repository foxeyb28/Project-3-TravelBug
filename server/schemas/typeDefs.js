const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
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

  type Query {
    me: User
  }

  type Mutation {
    # addUser(username: String!, email: String!, password: String!): Auth
        # login(email: String!, password: String!): Auth
        saveTrip(tripData: TripInput!): User
        removeTrip(tripId: ID!): User
  }
`;

module.exports = typeDefs;