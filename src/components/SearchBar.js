import React, { useState } from 'react';
import { IonHeader, IonPage, IonToolbar, IonSearchbar, } from '@ionic/react';
import CountriesList from './CountriesList';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <div>
            <IonSearchbar value={searchInput} onIonChange={e => setSearchInput(e.detail.value)}></IonSearchbar>
            </div>
          </IonToolbar>
        </IonHeader>
      </IonPage>
      <CountriesList searchInput={searchInput} />
    </>
  );
};
export default SearchBar;


