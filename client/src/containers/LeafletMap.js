import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import env from 'react-dotenv';
import './MapContainer.css'
import europe_json from "./../data/Europe.json";

const LeafletMap = ({setSelectedCountry, handleShow, getCountry, setCountryInfo}) => {

    const countryStyle = {
        fillColor: "green",
        color: "grey",
        weight: 1
    };

    const onEachCountry = (country, layer) => {
        layer.options.fillOpacity = country.properties.COL

        layer.on({
            click: () => {
                getCountry(country.properties.NAME)
                    .then(result => setCountryInfo(result));
                setSelectedCountry(country.properties.NAME);
                handleShow();
            },
            mouseover: (event) => {
                event.target.setStyle({color: "white", weight: 3, fillOpacity: 1})
            },
            mouseout: (event) => {
                event.target.setStyle({color: "grey", weight: 1, fillOpacity: country.properties.COL})
            }
        })
    }

    return (
            <div className="leaflet-container">
            <MapContainer center={[50, 28]} zoom={4} attributionControl={false} zoomControl={false} scrollWheelZoom={false} doubleClickZoom= {false} closePopupOnClick= {false} dragging= {false} zoomSnap= {false} zoomDelta= {false} trackResize= {false} touchZoom= {false} scrollWheelZoom= {false}>
                {/* <TileLayer
                url={env.MAP_TILESET_URL}
                /> */}
                <GeoJSON
                style={countryStyle} 
                data={europe_json}
                onEachFeature={onEachCountry}
                />
            </MapContainer>
            </div>
    )
}

export default LeafletMap;