import React from "react";
import styled from "styled-components";
import Grapht from "./Grapht";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Traffic() {
    return (
        <>
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

