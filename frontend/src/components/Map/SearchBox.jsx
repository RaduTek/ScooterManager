import "./SearchBox.css";
import Control from "react-leaflet-custom-control";
// import { useMap } from "react-leaflet";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

function SearchBox() {
    return (
        <Control position="topleft">
            <div className="map-search-box">
                <form
                    className="map-search-form"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input type="text" placeholder="Search" />
                    <button>
                        <Icon path={mdiMagnify} />
                    </button>
                </form>
                {/* <div className="map-search-results">
                    <button className="search-result">
                        <span className="primary">Location</span>
                        <span className="secondary">123 Street</span>
                    </button>
                    <button className="search-result">
                        <span className="primary">Location</span>
                        <span className="secondary">123 Street</span>
                    </button>
                    <button className="search-result">
                        <span className="primary">Location</span>
                        <span className="secondary">123 Street</span>
                    </button>
                </div> */}
            </div>
        </Control>
    );
}

export default SearchBox;
