import React from "react";
import { useQuery } from "@apollo/client";
import { COUNTRIES } from '../index'
import '../core.css'
// import { IonButton } from "@ionic/react";

const CountriesList = () => {
  const result = useQuery(COUNTRIES);
  const { loading, error, data } = result;
  if (loading) return <p>Loading...</p>
  if (error) return <p>Whoops... Something is Wrong</p>
  return (
    <>
      <div className="CountriesList" >
        {data ?
          data.countries.map(({ code, name, emoji }) => (
            <p key={code}>{code} {name} {emoji} </p>
          ))
          :
          <h1>No data</h1>
        }
      </div>
    </>
  )
}

export default CountriesList