import React from "react";
import CountryListItem from "./CountryListItem";
import './CountrySearch.css'

const CountryList = ({countryList, onCountryClick, checkFilter}) => {
    
    
    const alphabetiseCountries = (country) => {
        countryList.sort((a, b) => {
        if(a.name.common < b.name.common) {return -1;}
        if(a.name.common > b.name.common) {return 1;}
        return 0
        })
    }

    alphabetiseCountries()

    const listOfCountries = countryList.map((country, index) => {
        if (checkFilter(country)) {
        return <CountryListItem key={index} onCountryClick={onCountryClick} country={country} countryList={countryList}/>
        }
        return null
    })

    return (
        <>
            
            <ul>{listOfCountries}</ul>
        </>
    )
}

export default CountryList;