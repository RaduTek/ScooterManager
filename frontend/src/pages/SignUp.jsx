import { useState } from "react";
import Button from "../components/Controls/Button";
import TextBox from "../components/Controls/TextBox";
import OverlayPage from "../layout/OverlayPage/OverlayPage";
import { backendUrl } from "../globals.js";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (rePassword !== password) {
            alert("Passwords do not match!");
            return false;
        }

        fetch(backendUrl + "/api/account/signup", {
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

        return false;
    };

    return (
        <OverlayPage>
            <h1>Create Account</h1>
            <form onSubmit={submit}>
                <label>
                    Your Name:
                    <TextBox
                        className="block"
                        type="text"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
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
                <label>
                    Repeat password:
                    <TextBox
                        className="block"
                        type="password"
                        value={rePassword}
                        required
                        onChange={(e) => setRePassword(e.target.value)}
                    />
                </label>
                <Button color="blue">Sign Up</Button>
            </form>
        </OverlayPage>
    );
}

export default SignUp;
