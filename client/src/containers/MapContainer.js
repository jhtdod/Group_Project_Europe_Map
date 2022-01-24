import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import CountryCard from '../components/CountryCard';
import CountryInfo from '../components/CountryInfo';
import CountryList from '../components/CountryList';
import CountrySearch from '../components/CountrySearch';
import {europe_data, europe_options, micro_europe_data, micro_europe_options} from './EuropeData';
import "../components/CountrySearch.css"

const MapContainer = () => {

    const [selectedCountry, setSelectedCountry] = useState("")
    const [countryList, setCountryList] = useState([])
    const [filter, setFilter] = useState('')

    const checkFilter = (country) => {
        return (country.name.common.toUpperCase().includes(filter.toUpperCase()))
    }


    const searchForCountry = (searchValue) => {
            const searched = searchValue.toLowerCase()
            const values = europe_data
            let searchedCountry = values.filter(name => name.toLowerCase().includes(searched))
            console.log(searchedCountry)
            setSelectedCountry(searchedCountry)
    }    

        const getCountries = () => {
        fetch('https://restcountries.com/v3.1/region/europe')
        .then(res => res.json())
        .then(data => setCountryList(data));
    }
        const onCountryClick = (country) => {
        setSelectedCountry(country)
    }
        useEffect(() => {
        getCountries();
    }, [])

    return (
        <>
            <h2>Map Container</h2>
            <h3>Selected country is: {selectedCountry}</h3>
            {/* <Chart
                chartEvents={[  
                    { eventName: "select",
                    callback: ({chartWrapper}) => {
                        const chart = chartWrapper.getChart();
                        const selection = chart.getSelection();
                        if (selection.length === 0) return;
                        const country = europe_data[selection[0].row + 1];
                        setSelectedCountry(country);
                        },
                    },
                ]}
                className="map"
                chartType="GeoChart"
                width="85%"
                height="75%"
                data={europe_data}
                options={europe_options}
            /> */}
            <div className="SearchList">
            <CountryList countryList={countryList} onCountryClick={onCountryClick} checkFilter={checkFilter}/>
            {selectedCountry ? <CountryInfo country = {selectedCountry}/> : null}
            </div>
            <div className="SearchBar">
            <CountrySearch handleChange={searchForCountry} filter={filter} setFilter={setFilter}/>
            </div>

        </>
    )
}

export default MapContainer;