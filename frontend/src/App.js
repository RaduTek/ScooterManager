import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Map from "./pages/Map/Map";
import Rent from "./pages/Rent";
import Search from "./pages/Search";
import Account from "./pages/Account";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Navigate to="map" />} />
                    <Route path="map" element={<Map />}>
                        <Route path="rent" element={<Rent />} />
                        <Route path="search" element={<Search />} />
                        <Route path="account" element={<Account />} />
                        <Route path="signup" element={<SignUp />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
