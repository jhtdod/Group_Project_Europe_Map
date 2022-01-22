import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {Icon, map} from 'leaflet';
import env from 'react-dotenv';

const LeafletMap = () => {

    return (
            <div className="leaflet-container">
            <MapContainer center={[50, 28]} zoom={4} attributionControl={false} zoomControl={false} scrollWheelZoom={false} doubleClickZoom= {false} closePopupOnClick= {false} dragging= {false} zoomSnap= {false} zoomDelta= {false} trackResize= {false} touchZoom= {false} scrollWheelZoom= {false}>
                {/* <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> */}
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={env.MAP_TILESET_URL}
                />
            </MapContainer>
            </div>
    )
}

export default LeafletMap;