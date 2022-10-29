import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Profiledata from "./Profiledata";
import { Helmet } from "react-helmet";

function ProfilePage() {
    return (
        <>
            <Helmet>
                <title>Guestlist | Vorgez</title>
            </Helmet>
            <Header />
            <Container>
                <Sidebar />
                <Profiledata />
            </Container>
        </>
    );
}
export default ProfilePage;

const Container = styled.div`
    display: flex;
`;
