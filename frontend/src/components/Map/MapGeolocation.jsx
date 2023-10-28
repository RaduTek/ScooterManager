import { useEffect, useState } from "react";
import Button from "../Controls/Button";
import { Marker, Popup, useMap } from "react-leaflet";
import Control from "react-leaflet-custom-control";
import { useGeolocated } from "react-geolocated";
import Icon from "@mdi/react";
import { mdiCrosshairs } from "@mdi/js";
import { iconUserLocation } from "../../mapIcons";

function MapGeolocation() {
    const map = useMap();
    const [waitingState, setWaitingState] = useState(false);
    const [initialState, setInitialState] = useState(true);

    const { coords, isGeolocationAvailable, getPosition } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        watchPosition: true,
        userDecisionTimeout: 5000,
    });

    useEffect(() => {
        if (waitingState && coords) {
            map.flyTo([coords.latitude, coords.longitude], 16);
            setWaitingState(false);
        }
        if (initialState && coords) {
            map.setView([coords.latitude, coords.longitude], 16, {
                animate: false,
            });
            setInitialState(false);
        }
    }, [map, waitingState, initialState, coords]);

    return (
        <>
            <Control prepend position="bottomright">
                <Button
                    enabled={isGeolocationAvailable}
                    color="map-round"
                    onClick={() => {
                        getPosition();
                        if (coords) {
                            map.flyTo([coords.latitude, coords.longitude], 16);
                        }
                        setWaitingState(true);
                    }}
                >
                    <Icon path={mdiCrosshairs} size="22px" />
                </Button>
            </Control>
            {coords && (
                <Marker
                    position={[coords.latitude, coords.longitude]}
                    icon={iconUserLocation}
                >
                    <Popup>You are located here</Popup>
                </Marker>
            )}
        </>
    );
}

export default MapGeolocation;
