import "./Map.css";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { iconUserLocation } from "../../map-icons";
import { useGeolocated } from "react-geolocated";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Scooter from "../../components/Scooter/Scooter";
import MapLocateButton from "./MapLocateButton";
import { useEffect, useState } from "react";
import { backendUrl } from "../../globals.js";

function Map() {
    const { coords, isGeolocationEnabled, getPosition } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        watchPosition: true,
        userDecisionTimeout: 5000,
    });

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

    // const testScooterList = [
    //     ["1", [45.754, 21.226], 54, true],
    //     ["2", [45.76, 21.215], 18, true],
    //     ["3", [45.763, 21.229], 99, false],
    // ];

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
                <MapLocateButton getPosition={getPosition} coords={coords} />

                {coords && isGeolocationEnabled && (
                    <Marker
                        position={[coords.latitude, coords.longitude]}
                        icon={iconUserLocation}
                    ></Marker>
                )}

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
