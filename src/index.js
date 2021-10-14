import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  HttpLink
} from "@apollo/client";
import App from './App';
import './core.css'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://countries.trevorblades.com',
  })
});

export const COUNTRIES = gql`
query {
  countries {
    name
    emoji
  }
}
`;

render(

  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,


  document.getElementById('root'),
);