import React from "react";
import CountryInfo from './CountryInfo'

const CountryList = ({countryList, onCountryClick, checkFilter}) => {
    
        const alphabetiseCountries = (country) => {
        console.log(countryList)
        countryList.sort((a, b) => {
        if(a.name.common < b.name.common) {return -1;}
        if(a.name.common > b.name.common) {return 1;}
        return 0
        })
        console.log(countryList)
    }

    alphabetiseCountries()

    const listOfCountries = countryList.map((country, index) => {
        if (checkFilter(country)) {
        return <CountryInfo key={index} onCountryClick={onCountryClick} country={country} countryList={countryList}/>
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