// import React from 'react';
// import { render } from 'react-dom';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   gql,
//   HttpLink
// } from "@apollo/client";
// import App from './App';
// import CountriesList from './components/CountriesList'
// // import SearchBar from './components/SearchBar'
// import './core.css'



// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     uri: 'https://countries.trevorblades.com',
//   })
// });

// export const COUNTRIES = gql`
// query {
//   countries {
//     name
//     emoji
//   }

// }
// `;


// render(
  
//   <ApolloProvider client={client}>
//     <App />
//     <CountriesList />
//   </ApolloProvider>,


//   document.getElementById('root'),
// );

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
// import SearchBar from './components/SearchBar'
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

// function App () {
//   return (
//     <div className="Header">
//       <>
//       <h1>🇵🇱 🇮🇸 🇯🇵 🇲🇱 Countries List 🇧🇸 🇨🇦 🇧🇷 🇨🇳</h1>
//       <SearchBar />
//       </>
//     </div>
//   );
// }

render(

  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,


  document.getElementById('root'),
);