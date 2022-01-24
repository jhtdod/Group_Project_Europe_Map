import React from "react";
import CountryInfo from "./CountryInfo";
import Card from 'react-bootstrap/Card';

const CountryCard = ({ selectedCountry }) => {
    return (
        <>
            <Card style={{width: '100%', height: '100%'}}>
                <Card.Header as='h4'>{selectedCountry}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <CountryInfo />
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default CountryCard;