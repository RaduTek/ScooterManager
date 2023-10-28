import Icon from "@mdi/react";
import "./OverlayPage.css";
import { mdiClose } from "@mdi/js";
import { useNavigate } from "react-router-dom";

function OverlayPage({ fullHeight = false, children }) {
    const navigate = useNavigate();

    return (
        <div className={"overlay-page " + (fullHeight ? "full-height" : "")}>
            <button
                className="overlay-page-close"
                onClick={() => {
                    navigate("/map");
                }}
            >
                <Icon path={mdiClose} />
            </button>
            {children}
        </div>
    );
}

export default OverlayPage;
