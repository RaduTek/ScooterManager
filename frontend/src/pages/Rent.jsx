import { useState } from "react";
import Button from "../components/Controls/Button";
import TextBox from "../components/Controls/TextBox";
import OverlayPage from "../layout/OverlayPage/OverlayPage";
import ProgressBar from "../components/Controls/ProgressBar";

function Rent() {
    const [tripDuration, setTripDuration] = useState(60);
    const [tripCost, setTripCost] = useState(Math.round(200 + 59 * 4) / 100);

    return (
        <OverlayPage>
            <h1>Rent this scooter</h1>
            <ProgressBar indeterminate />
            <label>
                Reserve for: (minutes)
                <TextBox
                    className="block"
                    type="number"
                    value={tripDuration}
                    onChange={(e) => {
                        setTripDuration(e.target.value);
                        setTripCost(
                            Math.round(200 + (e.target.value - 1) * 4) / 100
                        );
                    }}
                />
            </label>
            <div className="flex-row">
                <div className="flex-2">Total cost:</div>
                <div className="flex-1 text-right">{tripCost} Euro</div>
            </div>
            <Button color="blue">Rent now</Button>
        </OverlayPage>
    );
}

export default Rent;
