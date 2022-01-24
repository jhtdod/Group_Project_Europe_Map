import React, { useState, useEffect } from "react";
import CountryCard from '../components/CountryCard';
import CountryInfo from '../components/CountryInfo';
import CountryList from '../components/CountryList';
import CountrySearch from '../components/CountrySearch';
import "../components/CountrySearch.css"
import LeafletMap from "./LeafletMap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Collapse from "react-bootstrap/esm/Collapse";
import { Search } from 'react-bootstrap-icons';
import './MapContainer.css'
import { countryList } from './../data/EuropeData'

const MapContainer = () => {

    const [selectedCountry, setSelectedCountry] = useState("")
    const [filter, setFilter] = useState('')

    const checkFilter = (country) => {
        return (country.toUpperCase().includes(filter.toUpperCase()))
    }

    const onCountryClick = (country) => {
        setSelectedCountry(country)
    }

    return (
        <>
            <LeafletMap setSelectedCountry={setSelectedCountry} />

            <div className="right-side">
                <div className="dropdown-card">
                    {selectedCountry ?
                        <Accordion defaultActiveKey="0" style={{ border: "none", zIndex: "0" }}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header style={{ border: "none" }}></Accordion.Header>
                                <Accordion.Body style={{ height: "25rem" }}>
                                    <CountryCard selectedCountry={selectedCountry} />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion> :
                        <Card style={{ border: "none", background: "transparent" }}>
                            <Card.Header as='h4' style={{ margin: "8px" }}>Select a Country to Begin</Card.Header>
                        </Card>
                    }
                </div>

                <div className="search-container">
                    <Accordion style={{ border: "none" }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="search-bar" style={{ border: "none" }}><Search /><CountrySearch setFilter={setFilter}/></Accordion.Header>
                            <Accordion.Body style = {{ height:"13rem" }}>
                                <div className="SearchList">
                                    <CountryList countryList={countryList} onCountryClick={onCountryClick} checkFilter={checkFilter} />
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div>


        </>
    )
}

export default MapContainer;