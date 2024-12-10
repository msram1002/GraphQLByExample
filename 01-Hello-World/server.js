// TypeDefs is the interface of our API - what our clients request
const typeDefs = `#graphql
  #syntax highlighting
  type Query {
    greeting: String
  }
`;
// Resolvers are the implementation - return the actual values
const resolvers = {
  Query: {
    greeting: () => 'Hello World!'
  }
};