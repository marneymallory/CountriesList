import SearchBar from './components/SearchBar'
import CountriesList from './components/CountriesList'
import flags from "./img/flags.png"

function App () {

  return (
    <div className="Header">
      
      <h1>🇵🇱 🇮🇸 🇯🇵 🇲🇱 Countries List 🇧🇸 🇨🇦 🇧🇷 🇨🇳</h1>
      <img className="photo"
      id="flags"
      alt="country flags"
      src={flags}
      />
        <SearchBar />
        <CountriesList />
      
    </div>
  );
}

export default App;
