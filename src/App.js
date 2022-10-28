import "./App.css";
import React from "react";
import Sidebar from "../src/components/includes/Header";
import styled from "styled-components";
import MainContent from "../src/components/includes/Sidebar";
import Header from "../src/components/includes/Header";
import { Route, Router, Routes } from "react-router-dom";
import MainPage from "../src/components/screens/MainPage";
import Catering from "../src/components/screens/Catering";
import Profiledata from "../src/components/screens/Profiledata";
import GuestTraffic from "../src/components/screens/GuestTraffic";
import Gifts from "../src/components/screens/Gifts";
import Accounts from "../src/components/screens/Accounts";
import Wallet from "../src/components/screens/Wallet";
import Help from "../src/components/screens/Help";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                </Routes>
                <Routes>
                    <Route path="/catering" element={<Catering/>}/>
                </Routes>
                <Routes>
                    <Route path="/profiledata" element={<Profiledata/>}/>
                </Routes>
                <Routes>
                    <Route path="/guestTraffic" element={<GuestTraffic/>}/>
                </Routes>
                <Routes>
                    <Route path="/gifts" element={<Gifts/>}/>
                </Routes>
                <Routes>
                    <Route path="/accounts" element={<Accounts/>}/>
                </Routes>
                <Routes>
                    <Route path="/wallet" element={<Wallet/>}/>
                </Routes>
                <Routes>
                    <Route path="/help" element={<Help/>}/>
                </Routes>
            </Router>
            <Header />
            <Container>
                <Sidebar />
                <MainContent />
            </Container>
        </>
    );
}
export default App;

const Container = styled.div`
    display: flex;
`;

