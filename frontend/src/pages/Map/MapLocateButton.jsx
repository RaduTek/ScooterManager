import Icon from "@mdi/react";
import { mdiCrosshairs } from "@mdi/js";
import Button from "../../components/Controls/Button";
import Control from "react-leaflet-custom-control";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";

function MapLocateButton({ getPosition, coords }) {
    const map = useMap();
    const [waitingState, setWaitingState] = useState(false);
    const [initialState, setInitialState] = useState(true);

    useEffect(() => {
        if (waitingState && coords) {
            map.flyTo([coords.latitude, coords.longitude], 16);
            setWaitingState(false);
        }
        if (initialState && coords) {
            map.setView([coords.latitude, coords.longitude], 16);
            setInitialState(false);
        }
    }, [map, waitingState, initialState, coords]);

    return (
        <Control prepend position="bottomright">
            <Button
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
    );
}

export default MapLocateButton;
