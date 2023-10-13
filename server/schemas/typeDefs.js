const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
<<<<<<< HEAD
  _id: ID!
  name: String!
}

  type Trips {
  _id: ID!
  trips1: String!
  trips2: String!
  trips1_votes: Int
  trips2_votes: Int
}
=======
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
>>>>>>> f72d64e86dd7e0528a44078b63bcc0032a22bc3c

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