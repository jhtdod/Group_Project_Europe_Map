import React, { useState } from "react";
import CountryCard from '../components/CountryCard';
import CountryList from '../components/CountryList';
import CountrySearch from '../components/CountrySearch';
import LeafletMap from "./LeafletMap";

const MapContainer = () => {

    const [selectedCountry, setSelectedCountry] = useState("")

    return (
        <>
            <h2>Map Container</h2>
            <h3>Selected country is: {selectedCountry}</h3>
            <LeafletMap setSelectedCountry={setSelectedCountry}/>
            <CountryList/>
            <CountryCard/>
            <CountrySearch/>
        </>
    )
}

export default MapContainer;