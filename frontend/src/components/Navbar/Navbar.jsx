import Icon from "@mdi/react";
import {
    mdiAccountCircleOutline,
    mdiMagnify,
    mdiMap,
    mdiMapMarkerRadiusOutline,
} from "@mdi/js";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const navbarButtonList = [
        {
            label: "Explore",
            icon: mdiMap,
            target: "/map",
        },
        {
            label: "Search",
            icon: mdiMagnify,
            target: "/map/search",
        },
        {
            label: "Near Me",
            icon: mdiMapMarkerRadiusOutline,
            target: "/map/nearme",
        },
        {
            spacer: true,
        },
        {
            label: "Account",
            icon: mdiAccountCircleOutline,
            target: "/map/account",
        },
    ];

    return (
        <div className="navbar">
            {navbarButtonList.map((props, key) =>
                props.spacer ? (
                    <div key={key} className="spacer"></div>
                ) : (
                    <button key={key} onClick={() => navigate(props.target)}>
                        <Icon path={props.icon} size="32px" />
                        <span>{props.label}</span>
                    </button>
                )
            )}
        </div>
    );
}

export default Navbar;
