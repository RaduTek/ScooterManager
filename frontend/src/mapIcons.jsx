import L from "leaflet";
import scooterBlue from "./images/scooter-blue.svg";
import scooterGreen from "./images/scooter-green.svg";
import scooterRed from "./images/scooter-red.svg";
import scooterYellow from "./images/scooter-yellow.svg";
import userLocation from "./images/user-location.svg";

const MapIcon = L.Icon.extend({
    options: {
        iconAnchor: [16, 16],
        popupAnchor: [0, -16],
        iconSize: [32, 32],
        className: "leaflet-div-icon",
    },
});

const iconScooterBlue = new MapIcon({
    iconUrl: scooterBlue,
    iconRetinaUrl: scooterBlue,
});

const iconScooterGreen = new MapIcon({
    iconUrl: scooterGreen,
    iconRetinaUrl: scooterGreen,
});

const iconScooterRed = new MapIcon({
    iconUrl: scooterRed,
    iconRetinaUrl: scooterRed,
});

const iconScooterYellow = new MapIcon({
    iconUrl: scooterYellow,
    iconRetinaUrl: scooterYellow,
});

const iconUserLocation = new MapIcon({
    iconUrl: userLocation,
    iconRetinaUrl: userLocation,
    iconAnchor: [20, 40],
    iconSize: [40, 40],
    popupAnchor: [0, -40],
});

export {
    iconScooterBlue,
    iconScooterGreen,
    iconScooterRed,
    iconScooterYellow,
    iconUserLocation,
};
