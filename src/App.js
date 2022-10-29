import "./App.css";
import React from "react";
import ProfilePage from "./components/screens/ProfilePage";
import MainContent from "./components/screens/MainContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Traffic from "./components/screens/Traffic";
import Catering from "./components/screens/Catering";
import Gifts from "./components/screens/Gifts";
import Rewards from "./components/screens/Rewards";
import Wallet from "./components/screens/Wallet";
import Help from "./components/screens/Help";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/guest" element={<ProfilePage />} />
                    <Route path="/traffic" element={<Traffic />} />
                    <Route path="/catering" element={<Catering />} />
                    <Route path="/gifts" element={<Gifts />} />
                    <Route path="/rewards" element={<Rewards />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/help" element={<Help />} />
                </Routes>
            </Router>
        </>
    );
}
export default App;
