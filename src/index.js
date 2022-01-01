const { ApolloServer } = require('apollo-server');
const { ApolloServerPluginLandingPageDisabled } = require('apollo-server-core');
const connectDb = require('./config/db');
const typeDefs = require('./types');
const resolvers = require('./resolvers');
const models = require('./models');

connectDb();

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: {models},
  plugins: [
    ApolloServerPluginLandingPageDisabled(),
  ]
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(serverInfo => console.log(`Server running at: ${serverInfo.url}`));