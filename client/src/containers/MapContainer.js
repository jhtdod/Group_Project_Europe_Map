import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CountryCard from '../components/CountryCard';
import CountryList from '../components/CountryList';
import CountrySearch from '../components/CountrySearch';
import { europe_data, europe_options, micro_europe_data, micro_europe_options } from './EuropeData';
import LeafletMap from "./LeafletMap";
import './MapContainer.css'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";

const MapContainer = () => {

    const [selectedCountry, setSelectedCountry] = useState("")

    return (
        <>
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
            <LeafletMap setSelectedCountry={setSelectedCountry} />

            <div className="right-side">
                {selectedCountry ?
                    <Accordion defaultActiveKey="0" style={{border: "none", zIndex:"0"}}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header style={{border: "none", width:"5rem"}}></Accordion.Header>
                            <Accordion.Body>
                                <CountryCard selectedCountry={selectedCountry} />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion> :
                    <Card style={{border: "none", zIndex:"0"}}>
                        <Card.Header as='h4'>Select a Country</Card.Header>
                    </Card>
                }
                <CountrySearch />
            </div>

            <CountryList />

        </>
    )
}

export default MapContainer;