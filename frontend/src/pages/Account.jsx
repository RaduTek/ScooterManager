import { useState } from "react";
import Button from "../components/Controls/Button";
import TextBox from "../components/Controls/TextBox";
import OverlayPage from "../layout/OverlayPage/OverlayPage";
import { backendUrl } from "../globals.js";
import { useNavigate } from "react-router-dom";

function Account() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        fetch(backendUrl + "/api/account/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });

        e.preventDefault();
        return false;
    };

    return (
        <OverlayPage>
            <h1>My Account</h1>
            <form onSubmit={login}>
                <label>
                    Email Address:
                    <TextBox
                        className="block"
                        type="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <TextBox
                        className="block"
                        type="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <Button color="blue">Log In</Button>
            </form>
            <div className="text-center">or</div>
            <Button onClick={() => navigate("/map/signup")}>Sign Up</Button>
        </OverlayPage>
    );
}

export default Account;
