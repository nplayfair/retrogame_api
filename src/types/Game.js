const { gql } = require('apollo-server');

module.exports = gql`
  type Game  {
    id: ID!
    title: String!
  }

  type Query {
    games: [Game]
  }

`;