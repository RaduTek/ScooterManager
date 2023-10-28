import "./Map.css";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Scooter from "../../components/Scooter/Scooter";
import MapGeolocation from "../../components/Map/MapGeolocation";
import { useEffect, useState } from "react";
import { backendUrl } from "../../globals.js";

function Map() {
    const [scooterList, setScooterList] = useState([]);

    useEffect(() => {
        fetch(backendUrl + "/api/scooters")
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setScooterList(json);
            });
    }, [setScooterList]);

    return (
        <>
            <Navbar />
            <Outlet />
            <MapContainer
                center={[45.754, 21.226]}
                markerZoomAnimation={true}
                zoom={16}
                zoomControl={false}
                zoomAnimation={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl position="bottomright" />
                <MapGeolocation />

                {scooterList.map((info, key) => {
                    return (
                        <Scooter
                            key={key}
                            id={info["id"]}
                            location={[info["latitude"], info["longitude"]]}
                            batteryLevel={info["batteryLevel"]}
                            available={info["status"] === "online"}
                        />
                    );
                })}
            </MapContainer>
        </>
    );
}

export default Map;
