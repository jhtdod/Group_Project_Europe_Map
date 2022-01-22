import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {Icon, map} from 'leaflet';

const LeafletMap = () => {

    return (
            <div className="leaflet-container">
            <MapContainer center={[52, 27.5]} zoom={3.9}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            </div>
    )
}

export default LeafletMap;