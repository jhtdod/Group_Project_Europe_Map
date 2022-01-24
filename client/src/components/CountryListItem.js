import React from "react";

const CountryListItem = ({country, countryList, onCountryClick}) => {

    const handleClick = () => onCountryClick(country.name.common);

    return (
        <>
            <li onClick={handleClick}>{country.name.common}</li>
        </>
    )
}

export default CountryListItem;