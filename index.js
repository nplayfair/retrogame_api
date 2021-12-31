const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    platforms: String
  }
`;

const resolvers = {
  Query: {
    platforms: () => 'A list of platforms',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: 9000 })
  .then(serverInfo => console.log(`Server running at ${serverInfo.url}`));