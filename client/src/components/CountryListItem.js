import React from "react";

const CountryListItem = ({country, onCountryClick}) => {

    const handleClick = () => onCountryClick(country);

    return (
        <>
        <li onClick={handleClick}>{country}</li>
        </>
    )
}

export default CountryListItem;