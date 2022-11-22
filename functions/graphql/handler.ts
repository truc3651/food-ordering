import { ApolloServer } from 'apollo-server-lambda'

import resolvers from './resolvers'
import typeDefs from './typeDefs'

// import createCompanyBankAccount from "services/createCompanyBankAccount";

// interface PluginDefinition {
//   serverWillStart(): Promise<void>;
// }

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
  // formatError: err => {
  //   throw new Error("Internal server error");
  // },
  // context: authenticationMiddleware,
  // plugins: [ApolloLogPlugin() as PluginDefinition, initI18nPlugin],
})

export const graphql = server.createHandler()
