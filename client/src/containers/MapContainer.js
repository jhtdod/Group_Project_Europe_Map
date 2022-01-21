import React from 'react';
import CountryCard from '../components/CountryCard';
import CountryList from '../components/CountryList';
import CountrySearch from '../components/CountrySearch';

const MapContainer = () => {

    return (
        <>
            <h2>Map Container</h2>
            <CountryList/>
            <CountryCard/>
            <CountrySearch/>
        </>
    )
}

export default MapContainer;