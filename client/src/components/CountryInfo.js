import React from "react";

const CountryInfo = ({country, countryList, onCountryClick}) => {
    
    const handleClick = () => onCountryClick(country);

    const alphabetiseCountries = (country) => {
        countryList.name.sort((a, b) => {
        if(a.common < b.common) {return -1;}
        if(a.common > b.common) {return 1;}
        return 0
        })
    }
    
    return (

        <li onClick={handleClick}>{country.name.common}</li>
    )

}

export default CountryInfo;