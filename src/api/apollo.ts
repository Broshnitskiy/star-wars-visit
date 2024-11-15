import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL = "https://swapi-graphql.netlify.app/.netlify/functions/index";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL ?? API_URL,
  cache: new InMemoryCache(),
});
