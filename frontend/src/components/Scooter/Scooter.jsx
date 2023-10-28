import Icon from "@mdi/react";
import { Marker, Popup } from "react-leaflet";
import Button from "../Controls/Button";
import {
    mdiBatteryHigh,
    mdiBatteryLow,
    mdiBatteryMedium,
    mdiBatteryRemoveOutline,
    mdiMapMarkerDistance,
} from "@mdi/js";
import {
    iconScooterGreen,
    iconScooterRed,
    iconScooterYellow,
} from "../../map-icons";
import { useNavigate } from "react-router-dom";

function Scooter({
    id = "0",
    location = [0, 0],
    available = false,
    batteryLevel = 50,
    levelRangeRatio = 0.3,
}) {
    const navigate = useNavigate();

    return (
        <Marker
            position={location}
            icon={
                available
                    ? batteryLevel > 20
                        ? iconScooterGreen
                        : iconScooterYellow
                    : iconScooterRed
            }
        >
            <Popup>
                <div className="scooter-popup">
                    <div>
                        <h1>Scooter {id}</h1>
                        <h2>
                            {available
                                ? "Available" +
                                  (batteryLevel < 20 ? ", low on charge" : "")
                                : "In Use"}
                        </h2>
                    </div>
                    <div className="stats">
                        <Icon
                            path={
                                batteryLevel > 80
                                    ? mdiBatteryHigh
                                    : batteryLevel > 40
                                    ? mdiBatteryMedium
                                    : batteryLevel > 20
                                    ? mdiBatteryLow
                                    : mdiBatteryRemoveOutline
                            }
                            color={
                                batteryLevel > 80
                                    ? "green"
                                    : batteryLevel > 60
                                    ? "darkkhaki"
                                    : batteryLevel > 40
                                    ? "orange"
                                    : "red"
                            }
                        />
                        <span>{batteryLevel}%</span>
                        <Icon path={mdiMapMarkerDistance} />
                        <span>
                            {Math.round(batteryLevel * levelRangeRatio * 10) /
                                10}{" "}
                            km
                        </span>
                    </div>
                    {available && (
                        <Button
                            color="blue"
                            onClick={() => {
                                navigate("rent");
                            }}
                        >
                            Rent
                        </Button>
                    )}
                    <Button>More Information</Button>
                </div>
            </Popup>
        </Marker>
    );
}

export default Scooter;
