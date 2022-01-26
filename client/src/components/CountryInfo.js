import React from "react";
import './CountrySearch.css'
import "./CountryCard.css"

const CountryInfo = ({countryInfo}) => {

    if (!countryInfo){
        return null
    }

    return (

        <>
        <img src={countryInfo[1].flags.png} width="100%" alt={`Flag of ${countryInfo[0].country}`} className="cardImage"/>
        <div className="pulledInfo">
        <p>Capital: {countryInfo[1].capital}<br/>
        Population: {countryInfo[1].population}<br/>
        Hello: {countryInfo[0].greeting}<br/>
        National Animal: {countryInfo[0].animal}<br/>
        National Dish: {countryInfo[0].dish}</p>
        </div>
        </>
        
    )

}

export default CountryInfo;