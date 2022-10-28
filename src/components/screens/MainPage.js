import React from "react";
import Header from "../includes/Header";
import MainContent from "./screens/MainContent";
import styled from "styled-components";
import { Helmet } from "react-helmet";
function MainPage() {
    return (
        <>
            <Helmet>
                <title>Vorgez</title>
            </Helmet>
            <Container>
                <Header />
                <MainContent />
            </Container>
        </>
    );
}

export default MainPage;
const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
`;
