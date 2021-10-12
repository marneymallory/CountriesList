import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  HttpLink
} from "@apollo/client";
import CountriesList from './components/CountriesList'
import SearchBar from './components/SearchBar'
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
    code
    name
    emoji
  }

}
`;

function App () {
  return (
    <div className="Header">
      <h1>🇵🇱 🇮🇸 🇯🇵 🇲🇱 Countries List 🇧🇸 🇨🇦 🇧🇷 🇨🇳</h1>
    </div>
  );
}

render(

  <ApolloProvider client={client}>
    <App />
    <CountriesList />
    <SearchBar />
  </ApolloProvider>,


  document.getElementById('root'),
);