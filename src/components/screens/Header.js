import React from "react";
import styled from "styled-components";
function header() {
    return (
        <>
            <Container>
                <LeftContainer>
                    <OverView> Overview</OverView>
                    <Guest>Guestlist</Guest>
                    <Traffic>Temporary traffic</Traffic>
                </LeftContainer>
                <RightContainer>
                    <ImageContainer src={require("../../Assets/bxs_bell.svg").default} />
                    <ImageContainer2 src={require("../../Assets/Rect 20695.jpg")}/>
                </RightContainer>
            </Container>
        </>
    );
}
const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;
const OverView = styled.div``;
const Guest = styled.div``;
const Traffic = styled.div``;
const LeftContainer = styled.div`
`;
const RightContainer = styled.div``;

const ImageContainer = styled.img``;
const ImageContainer2 = styled.img`
    width: 15%;
`;

export default header;
