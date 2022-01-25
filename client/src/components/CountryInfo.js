import React from "react";
import './CountrySearch.css'

const CountryInfo = ({countryInfo}) => {

    if (!countryInfo){
        return null
    }

    return (

        <>
        <img src={countryInfo[1].flags.png} width="100" alt={`Flag of ${countryInfo[0].country}`}/>
        <p>Capital: {countryInfo[1].capital}</p>
        <p>Population: {countryInfo[1].population}</p>
        <p>Hello: {countryInfo[0].greeting}</p>
        <p>National Animal: {countryInfo[0].animal}</p>
        <p>National Dish: {countryInfo[0].dish}</p>
        </>
        
    )

}

export default CountryInfo;