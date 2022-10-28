import React from "react";
import Header from "../includes/Header";
import Grapht from "./screens/Grapht";
import styled from "styled-components";
function GuestTraffic() {
    return function GuestTaffic() {
        return (
            <>
                <Container>
                    <Header />
                    <Grapht />
                </Container>
            </>
        );
    };
}

export default GuestTraffic;
const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
`;
