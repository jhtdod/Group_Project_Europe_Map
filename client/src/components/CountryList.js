import React from "react";
import CountryInfo from './CountryInfo'

const CountryList = ({countryList, onCountryClick}) => {
    
    const listOfCountries = countryList.map((country, index) => {
        return <CountryInfo key={index} onCountryClick={onCountryClick} country={country} countryList={countryList}/>
    })

    return (
        <>
            
            <ul>{listOfCountries}</ul>
        </>
    )
}

export default CountryList;