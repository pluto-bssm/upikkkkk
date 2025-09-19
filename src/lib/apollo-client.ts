"use client";

import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';


const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6ImFjY2VzcyIsInVzZXJuYW1lIjoiZ29vZ2xlXzExMDkzMjU1MzgwNzUzNDkzMDE4MSIsInJvbGUiOiJST0xFX05PQlNNIiwiaWF0IjoxNzU4MTc1ODAyLCJleHAiOjE4NDgxNzU4MDJ9.ubTLTvrChlYy_8T-wECquoSDo-PP5FjFgNNXtN1fZMk';


const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${JWT_TOKEN}`,
      'Content-Type': 'application/json',
    }
  };
});


const errorLink = onError(({ graphQLErrors, networkError }: any) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }: any) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.error(`[Network error]: ${networkError}`);
});


const httpLink = new HttpLink({
  uri: 'https://realupik-659794985248.asia-northeast3.run.app/graphql',
  credentials: 'include'
});


const apolloClient = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

export default apolloClient;