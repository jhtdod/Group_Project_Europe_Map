import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CountryCard from '../components/CountryCard';
import CountryList from '../components/CountryList';
import CountrySearch from '../components/CountrySearch';
import {europe_data, europe_options, micro_europe_data, micro_europe_options} from './EuropeData';

const MapContainer = () => {

    const [selectedCountry, setSelectedCountry] = useState("")

    return (
        <>
            <h2>Map Container</h2>
            <h3>Selected country is: {selectedCountry}</h3>
            <Chart
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
            />
            <CountryList/>
            <CountryCard/>
            <CountrySearch setSelectedCountry={setSelectedCountry}/>
        </>
    )
}

export default MapContainer;