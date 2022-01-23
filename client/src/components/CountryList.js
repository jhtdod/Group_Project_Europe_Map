import React from "react";
import CountryInfo from './CountryInfo'

const CountryList = ({countryList, onCountryClick}) => {
    
    const listOfCountries = countryList.map((country, index) => {
        return <CountryInfo key={index} onCountryClick={onCountryClick} country={country}/>
    })
    
    return (
        <>
            <h4>Select a Country: </h4>
            <ul>{listOfCountries}</ul>
        </>
    )
}

export default CountryList;