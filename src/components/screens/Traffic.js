import React from "react";
import styled from "styled-components";
import Grapht from "./Grapht";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Helmet } from "react-helmet";

function Traffic() {
    return (
        <>
            <Helmet>
                <title>Temporary Traffic | Vorgez</title>
            </Helmet>
            <Header />
            <Container>
                <Sidebar />
                <Grapht />
            </Container>
        </>
    );
}

export default Traffic;
const Container = styled.div`
    display: flex;
`;
