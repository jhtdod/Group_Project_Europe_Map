import React from "react";

const CountryInfo = ({country, countryList, onCountryClick}) => {
    
    const handleClick = () => onCountryClick(country);

    return (

        <li onClick={handleClick}>{country.name.common}</li>
    )

}

export default CountryInfo;