import React from "react";
import { Chart } from "react-google-charts";
import CountryCard from '../components/CountryCard';
import CountryList from '../components/CountryList';
import CountrySearch from '../components/CountrySearch';
import {europe_data, europe_options, micro_europe_data, micro_europe_options} from './EuropeData';

const MapContainer = () => {

    return (
        <>
            <h2>Map Container</h2>
            <Chart
                className="map"
                chartType="GeoChart"
                width="85%"
                height="75%"
                data={europe_data}
                options={europe_options}
            />
            <CountryList/>
            <CountryCard/>
            <CountrySearch/>
        </>
    )
}

export default MapContainer;