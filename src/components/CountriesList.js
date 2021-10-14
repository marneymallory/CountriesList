import React from "react";
import { useQuery } from "@apollo/client";
import { COUNTRIES } from '../index'
import '../core.css'


const CountriesList = ({ searchInput }) => {
  console.log(`searchInput:`, searchInput)
  const result = useQuery(COUNTRIES);

  const { loading, error, data } = result;
  if (loading) return <p>Loading...</p>
  if (error) return <p>Whoops... Something is Wrong</p>
  const countries = data.countries.filter(countries => countries.name.includes(searchInput));
  return (
    <>
      <div className="CountriesList" >
        {data ?
          countries.map(({ name, emoji }) => (
            <p key={name}> {name} {emoji} </p>
          ))
          :
          <h1>No data</h1>
        }
      </div>
    </>
  )
}

export default CountriesList