import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {Icon, map} from 'leaflet';

const LeafletMap = () => {

    return (
            <div className="leaflet-container">
            <MapContainer center={[52, 27.5]} zoom={3.9} zoomControl={false} scrollWheelZoom={false} doubleClickZoom= {false} closePopupOnClick= {false} dragging= {false} zoomSnap= {false} zoomDelta= {false} trackResize= {false} touchZoom= {false} scrollWheelZoom= {false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            </div>
    )
}

export default LeafletMap;