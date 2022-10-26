import React from "react";
import styled from "styled-components";
function header() {
    return (
        <>
            <Container>
                <HeaderContainer>
                    <LeftContainer>
                        <OverView> Overview</OverView>
                        <Guest>Guestlist</Guest>
                        <Traffic>Temporary traffic</Traffic>
                    </LeftContainer>
                    <RightContainer>
                        <ImageContainer src={require("../../Assets/bxs_bell.svg").default} />
                        <ImageContainer2 src={require("../../Assets/Rect 20695.jpg")}/>
                    </RightContainer>
                </HeaderContainer>
            </Container>
        </>
    );
}
const Container = styled.div`
    
`;
const OverView = styled.div``;
const Guest = styled.div``;
const Traffic = styled.div``;
const LeftContainer = styled.div`
`;

const RightContainer = styled.div``;
const HeaderContainer = styled.div`
/* 
margin-left: ; */
`;
const ImageContainer = styled.img``;
const ImageContainer2 = styled.img`
    width: 10%;
    border-radius: 50%;
`;

export default header;
