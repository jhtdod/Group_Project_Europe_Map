import React, { useState, useEffect } from "react";
import CountryCard from '../components/CountryCard';
import CountryInfo from '../components/CountryInfo';
import CountryList from '../components/CountryList';
import CountrySearch from '../components/CountrySearch';
import "../components/CountrySearch.css"
import LeafletMap from "./LeafletMap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Container, CloseButton, Modal} from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import './MapContainer.css'
import { countryList } from './../data/EuropeData'
import { getCountry } from "../services/EuroService";
import CountryQuiz from "../components/CountryQuiz";

const MapContainer = () => {

    const [selectedCountry, setSelectedCountry] = useState(null)
    const [filter, setFilter] = useState('')
    const [show, setShow] = useState(false)
    const [countryInfo, setCountryInfo] = useState(null)

    const checkFilter = (country) => {
        return (country.toUpperCase().includes(filter.toUpperCase()))
    }

    const onCountryClick = (country) => {
        getCountry(country)
        .then(result => setCountryInfo(result));
        setSelectedCountry(country);
        handleShow();
        
    }

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false); 
        setCountryInfo(null);
    }

    return (
        <>
            <LeafletMap setSelectedCountry={setSelectedCountry} handleShow={handleShow} getCountry={getCountry} setCountryInfo={setCountryInfo} countryInfo={countryInfo}/>

            <div className="right-side">
                <div className="start-card">
                {show ? 
                        <Card  style={{height:"30rem", width:"23rem"}}>

                                <CountryCard selectedCountry={selectedCountry} countryInfo={countryInfo} handleClose={handleClose} />

                        </Card>:

                        <Card style={{height:"30rem", width:"25rem"}}>
                            <Card.Body className="grid">
                                <h4>Select a country on the map, type one in below or select a quiz!</h4>
                                <button className="nameCountryQuiz"><a href=""><div className="linktext">Name every country in Europe</div></a></button>
                                <button className="nameCapitalsQuiz"><a href=""><div className="linktext">Test your knowledge of European Capitals</div></a></button>
                                <button className="nameFlagQuiz"><a href=""><div className="linktext">How is your flag knowledge?</div></a></button>
                            </Card.Body>
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

            <CountryQuiz countryList={countryList} getCountry={getCountry} setCountryInfo={setCountryInfo}/>

        </>
    )
}

export default MapContainer;