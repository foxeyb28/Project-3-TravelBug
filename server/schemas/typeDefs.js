const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
  }

  type trips {
    _id: ID!
    trips1: String!
    trips2: String!
    trips1_votes: Int
    trips2_votes: Int
  }

  type Query {
    trips: [trips]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(trips11: String!, trips2: String!): Matchup
    createVote(_id: String!, tripsNum: Int!): Matchup
  }
`;

module.exports = typeDefs;