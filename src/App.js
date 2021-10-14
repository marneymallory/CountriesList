// import React, { useState } from "react";
// import CountriesList from './components/CountriesList'
// import SearchBar from './components/SearchBar'

// function App () {
//   // const [searchText, setSearchText] = useState('');
//   return (
    
//     <div className="Header">
//       <>
//         <h1>🇵🇱 🇮🇸 🇯🇵 🇲🇱 Countries List 🇧🇸 🇨🇦 🇧🇷 🇨🇳</h1>
//         {/* <SearchBar searchText={searchText} setSearchText={setSearchText}/>
//         <CountriesList searchText={searchText}/> */}
//     </>
//     </div>
//   );
// }
  

// export default App;

import React,{ useState } from "react";
import SearchBar from './components/SearchBar'
import CountriesList from './components/CountriesList'


function App () {
  const [searchInput, setSearchInput] = useState('');
  const fuck = (e) => {
    console.log(e)
  }
  return (
    <>
    <SearchBar searchInputChanged={(e) => fuck(e)} search={searchInput} />
    <CountriesList search={searchInput} />
    </>
  );
}

export default App;
