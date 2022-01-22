import React from "react";

const CountrySearch = (setSelectedCountry) => {
    
    const searchForCountry = (searchValue) => {
            const search = searchValue.toLowerCase();
            const searchedCountry = countries.filter((search) => {
                return country.name.toLowerCase().
            })
            setSelectedCountry(searchedCountry)
    }
    
    return(
        <>
            <h2>Country Search</h2>
            
        </>
    )
}

export default CountrySearch;