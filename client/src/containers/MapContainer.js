import React, { useState, useEffect } from "react";
import CountryCard from '../components/CountryCard';
import CountryInfo from '../components/CountryInfo';
import CountryList from '../components/CountryList';
import CountrySearch from '../components/CountrySearch';
import "../components/CountrySearch.css"
import LeafletMap from "./LeafletMap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Container, CloseButton, Modal } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import './MapContainer.css'
import { countryList } from './../data/EuropeData'
import { getCountry } from "../services/EuroService";
import CountryQuiz from "../components/CountryQuiz";
import CapitalsQuizContainer from "./CapitalsQuizContainer";
import FlagsQuizContainer from "./FlagsQuizContainer";

const MapContainer = () => {

    const [selectedCountry, setSelectedCountry] = useState(null)
    const [filter, setFilter] = useState('')
    const [show, setShow] = useState(false)
    const [showQuiz, setShowQuiz] = useState(false)
    const [countryInfo, setCountryInfo] = useState(null)
    const [quizInfo, setQuizInfo] = useState(null)

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

    const handleQuizClick = () => {
        setShowQuiz(true)
    }

    return (
        <>
            <LeafletMap setSelectedCountry={setSelectedCountry} handleShow={handleShow} getCountry={getCountry} setCountryInfo={setCountryInfo} countryInfo={countryInfo} quizInfo={quizInfo} />


            <div className="right-side">
                <div className="start-card">
                {showQuiz ?
                        <div className="quiz-card">
                        <Card style={{height:"35rem", width:"25rem"}}>
                            <CountryQuiz countryList={countryList} getCountry={getCountry} handleClose={handleClose} setQuizInfo={setQuizInfo}/>
                        </Card>
                        </div> :
                        null }
                

                {show ? 
                        <Card style={{height:"33.5rem", width:"25rem"}}>

                            <CountryCard selectedCountry={selectedCountry} countryInfo={countryInfo} handleClose={handleClose} />

                        </Card> :

                        <Card style={{ height: "33.5rem", width: "25rem" }}>
                            <Card.Body className="appBody">

                                <h4 className="appText">Select a country on the map to find out more information, or search below. Or try a quiz!</h4>
                                <button className="nameQuiz" onClick={handleQuizClick}><div className="linkText">Can you name every country in Europe?</div></button>

                                <CapitalsQuizContainer countryList={countryList} getCountry={getCountry}/>
                                <FlagsQuizContainer countryList={countryList} getCountry={getCountry}/>

                            </Card.Body>
                        </Card>
                    }
                </div>

                <div className="search-container">
                    <Accordion style={{ width: "25rem" }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="search-bar"><Search /><CountrySearch setFilter={setFilter} /></Accordion.Header>
                            <Accordion.Button style={{ backgroundImage: "none" }}>
                                <Accordion.Body className="searchBody" style={{ height: "13rem" }} eventKey="1">
                                    <div className="SearchList">
                                        <CountryList countryList={countryList} onCountryClick={onCountryClick} checkFilter={checkFilter} />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Button>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div>

        </>
    )
}

export default MapContainer;