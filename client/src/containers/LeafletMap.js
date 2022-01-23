import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import env from 'react-dotenv';
import europe_json from "./NewEurope.json";

const LeafletMap = ({setSelectedCountry}) => {

    const countryStyle = {
        fillColor: "#7eca7e",
        color: "grey",
        fillOpacity: 0.3,
        weight: 1
    };

    const onEachCountry = (country, layer) => {

        layer.on({
            click: () => {
                setSelectedCountry(country.properties.NAME);
            },
            mouseover: (event) => {
                event.target.setStyle({weight: 3, fillOpacity: 1})
            },
            mouseout: (event) => {
                event.target.setStyle({weight: 1, fillOpacity: 0.3})
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