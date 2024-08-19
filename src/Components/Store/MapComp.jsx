import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComp = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        // Fetch stores data from the API
        const fetchStores = async () => {
            try {
                const response = await fetch('https://appy.trycatchtech.com/v3/chitale_foods/stores_list');
                const data = await response.json();
                setStores(data.stores);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };

        fetchStores();
    }, []);

    const getCoordinates = async (address) => {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
        const result = await response.json();
        if (result.length > 0) {
            return [result[0].lat, result[0].lon];
        }
        return [null, null];
    };

    return (
        <div>
            <h1>Chitale Stores Map</h1>
            <MapContainer center={[19.0760, 72.8777]} zoom={12} style={{ height: "600px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {stores && stores.map((store, index) => {
                    const [lat, lon] = getCoordinates(store.address);
                    if (lat && lon) {
                        return (
                            <Marker key={index} position={[lat, lon]}>
                                <Popup>
                                    {store.franchise_name}<br />{store.address}<br />{store.contact_number}
                                </Popup>
                            </Marker>
                        );
                    }
                    return null;
                })}
            </MapContainer>
        </div>
    )
}

export default MapComp