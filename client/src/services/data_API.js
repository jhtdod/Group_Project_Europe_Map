import React, {useEffect, useState} from 'react'

updateDatabase () => {

    const [countries, updateCountries] = .useState([])

    .useEffect(getData () => {
        async fetchData(countries) => {
            const response = await fetch("https://restcountries.com/v3.1/region/europe")
            const json = await response.json()
            // if {countries.country} === {name.common}
            updateCountries(json.data)
        }
        fetchData();
    }, []);

    return (
        <ul>
        countries.map(country => (
            <li key={country.name}>{country.capital}</li>
            <li key={country.name}>{country.population}</li>

        ))
        </ul>
    )
}

