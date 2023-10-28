import Icon from "@mdi/react";
import { mdiAccountCircleOutline, mdiMagnify, mdiMap } from "@mdi/js";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <button
                onClick={() => {
                    navigate("/map");
                }}
            >
                <Icon path={mdiMap} size="32px" />
                <span>Explore</span>
            </button>
            <button
                onClick={() => {
                    navigate("/map/search");
                }}
            >
                <Icon path={mdiMagnify} size="32px" />
                <span>Search</span>
            </button>
            <div className="spacer"></div>
            <button
                onClick={() => {
                    navigate("/map/account");
                }}
            >
                <Icon path={mdiAccountCircleOutline} size="32px" />
                <span>Account</span>
            </button>
        </div>
    );
}

export default Navbar;
