import "./App.css";
import React from "react";
import Sidebar from "./components/screens/Sidebar";
import styled from "styled-components";
import MainContent from "./components/screens/MainContent";
import Header from "./components/screens/Header";
function App() {
    return (
        <>
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

