// import React from "react";
// import { useQuery } from "@apollo/client";
// import { COUNTRIES } from '../index'
// import '../core.css'
// // import { IonButton } from "@ionic/react";

// const CountriesList = () => {

//   // const { searchText } = props;
//   const result = useQuery(COUNTRIES);
//   // const [countriesToFilter, setCountriesToFilter] = useState(result);
//   // const [countries, setCountries] = useState(result);
//   const { loading, error, data } = result;

//   // const handleSearch = () => {
//   //   if(searchText){
//   //     const searchResult = countriesToFilter.data.countries.filter(countries => countries.name.includes(searchText));
//   //     setCountriesToFilter(searchResult);
//   //     console.log(data);
//   //   }
//   }

//   // useEffect(() => {
//   //   !loading ?
//   //   handleSearch()
//   //   // console.log(countriesToFilter)
//   //   : console.log('loading')
//   //   // handleSearch();
//   // },[searchText])

//   if (loading) return <p>Loading...</p>
//   if (error) return <p>Whoops... Something is Wrong</p>
//   return (
//     <>
//       <div className="CountriesList" >
//         {data ?
//           data.countries.map(({ name, emoji }) => (
//             <p key={name}>{name} {emoji} </p>
//           ))
//           :
//           <h1>No data</h1>
//         }
//       </div>
//     </>
//   )


// export default CountriesList

import React from "react";
import { useQuery } from "@apollo/client";
import { COUNTRIES } from '../index'
import '../core.css'
// import { IonButton } from "@ionic/react";

const CountriesList = (props) => {
  console.log(props)
  const result = useQuery(COUNTRIES);

  const { loading, error, data } = result;
  if (loading) return <p>Loading...</p>
  if (error) return <p>Whoops... Something is Wrong</p>
  const countries = data.countries.filter(country => country.name.includes(props.search));
  return (
    <>
      <div className="CountriesList" >
        {data ?
          countries.map(({ code, name, emoji }) => (
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