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
import Collapse from "react-bootstrap/esm/Collapse";
import {MDBIcon} from "mdbreact"

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
                    <Accordion defaultActiveKey="0" style={{ border: "none", zIndex: "0" }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header style={{ border: "none" }}></Accordion.Header>
                            <Collapse in={selectedCountry}>
                                <Accordion.Body>
                                    <CountryCard selectedCountry={selectedCountry} />
                                </Accordion.Body>
                            </Collapse>
                        </Accordion.Item>
                    </Accordion> :
                    <Card style={{ border: "none", zIndex: "0", background: "transparent" }}>
                        <Card.Header as='h4' style={{ margin: "8px" }}>Select a Country to Begin</Card.Header>
                    </Card>
                }
                <Accordion style={{ border: "none" }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header style={{ border: "none" }}><MDBIcon icon="search"/></Accordion.Header>
                        <Accordion.Body>
                            <CountrySearch />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>

            <CountryList />

        </>
    )
}

export default MapContainer;