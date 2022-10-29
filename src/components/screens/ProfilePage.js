import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Profiledata from "./Profiledata";

function ProfilePage() {
    return (
        <>
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
