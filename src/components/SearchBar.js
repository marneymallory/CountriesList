import React, { useState } from 'react';
import { IonPage, IonSearchbar, } from '@ionic/react';
import CountriesList from './CountriesList';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <IonPage>
        <br />
        <br />
        <br />
          <div class="SearchInput">
            <CountriesList searchInput={searchInput} />
          </div>
          <div class="SearchBar">
            <IonSearchbar value={searchInput} onIonChange={e => setSearchInput(e.detail.value)}></IonSearchbar>
          </div>
      </IonPage>
    </>
  );
};
export default SearchBar;


