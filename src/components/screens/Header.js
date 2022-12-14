import React from "react";
import styled from "styled-components";
import image1 from "../../Assets/Logo.svg";
import image2bell from "../../Assets/bxs_bell.svg";
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <Container>
                <HeaderContainer>
                    <HeaderImage>
                        <Logo src={image1} />
                    </HeaderImage>

                    <LeftContainer>
                        <HeaderLi>
                            <OverView to="/"> Overview</OverView>
                        </HeaderLi>
                        <HeaderLi>
                            <Guest to="/guest">Guestlist</Guest>
                        </HeaderLi>
                        <HeaderLi>
                            <Traffic to="/traffic">Temporary traffic</Traffic>
                        </HeaderLi>
                    </LeftContainer>
                </HeaderContainer>
                <HeaderImageContainer>
                    <RightContainer>
                        <ImageContainer src={image2bell} />

                        <ImageContainer2 src={require("../../Assets/avatar1.jpg")} />
                    </RightContainer>
                </HeaderImageContainer>
            </Container>
        </>
    );
}
export default Header;

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
    align-items: center;
    height: 130px;
    @media all and (max-width: 360px) {
        justify-content: center;
        height: 80px;
    }
`;
const HeaderLi = styled.li`
    margin-right: 30px;
`;
const HeaderImageContainer = styled.ul`
    justify-content: space-between;
    display: flex;
    list-style: none;
`;
const OverView = styled(Link)`
    font-size: 17px;
    display: block;
    font-weight: normal;
    color: #8d8989;
    &:hover {
        color: #000;
        border-bottom: 2px solid #000;
    }
    @media all and (max-width: 640px) {
        font-size: 15px;
    }
`;
const Guest = styled(Link)`
    font-size: 17px;
    display: block;
    font-weight: normal;
    color: #8d8989;
    &:hover {
        color: #000;
        border-bottom: 2px solid #000;
    }
    @media all and (max-width: 640px) {
        font-size: 15px;
    }
`;
const Traffic = styled(Link)`
    font-size: 17px;
    font-weight: normal;
    display: block;
    color: #8d8989;
    &:hover {
        color: #000;
        border-bottom: 2px solid #000;
    }
    @media all and (max-width: 640px) {
        font-size: 15px;
    }
`;
const LeftContainer = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    width: 100%;
    margin-left: 30px;
    @media all and (max-width: 640px) {
        display: none;
    }
`;
const HeaderImage = styled.div`
    @media all and (max-width: 360px) {
        width: 50%;
        margin: 0 auto;
    }
`;
const Logo = styled.img`
    width: 100%;
`;
const RightContainer = styled.div`
    width: 40px;
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
`;
const HeaderContainer = styled.div`
    margin: 0;
    display: flex;
    align-items: center;
    @media all and (max-width: 360px) {
        display: block;
        width: 100%;
    }
`;
const ImageContainer = styled.img`
    display: block;
    width: 100%;
    border-radius: 50%;
    @media all and (max-width: 360px) {
        display: none;
    }
`;
const ImageContainer2 = styled.img`
    display: block;
    width: 100%;
    border-radius: 50%;
    @media all and (max-width: 640px) {
        display: none;
    }
`;
