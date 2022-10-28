import React from "react";
import Header from "../includes/Header";
import Profiledata from "./Profiledata";
import styled from "styled-components";

function Guestlist() {
    return (
        <Cotainer>
            <Header />
            <Profiledata />
        </Cotainer>
    );
}

export default Guestlist;
const Cotainer = styled.section`
    display: flex;
    flex-wrap: wrap;
`;
