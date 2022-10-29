import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Helmet } from "react-helmet";

function Gifts() {
    return (
        <>
            <Helmet>
                <title>Gifts | Vorgez</title>
            </Helmet>
            <Header />
            <Container>
                <Sidebar />
                <Content>Page Not Found</Content>
            </Container>
        </>
    );
}

export default Gifts;

const Container = styled.div`
    display: flex;
`;
const Content = styled.h5`
    font-size: 20px;
    font-weight: bold;
`;
