import React from 'react';
import { IonHeader, IonPage, IonToolbar, IonSearchbar,  } from '@ionic/react';

const SearchBar = (props) => {

  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
              <IonSearchbar value={props.searchInput} onIonChange={e => props.searchInputChanged}></IonSearchbar> 
          </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};
export default SearchBar;


