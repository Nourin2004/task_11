import React from "react";
import styled from "styled-components";
import Profiledata from "./Profiledata";
import Grapht from "./Grapht";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Mimage from "../../Assets/white icon.svg";
import Fimage from "../../Assets/white icon2.svg";
import Timage from "../../Assets/Group 3465418.svg";
import { Helmet } from "react-helmet";

function MainContent() {
    return (
        <>
            <Helmet>
                <title>Vorgez</title>
            </Helmet>
            <Header />
            <Container>
                <Sidebar />
                <SpotContainer>
                    <TopContainer>
                        <DivOne>
                            <MGuest>
                                <MGuestImage>
                                    <MIconImage src={Mimage} />
                                </MGuestImage>
                                <MaleGuest>Male Guest</MaleGuest>
                            </MGuest>
                            <MInvites>
                                <MLeft>
                                    <MH4>Total invites</MH4>
                                    <MH1>8,124</MH1>
                                </MLeft>

                                <HR />

                                <MRight>
                                    <MH4>Total Come</MH4>
                                    <MH1>4,204</MH1>
                                </MRight>
                            </MInvites>
                        </DivOne>
                        <DivTwo>
                            <FGuest>
                                <FGuestImage>
                                    <FIconImage src={Fimage} />
                                </FGuestImage>
                                <FemaleGuest>Female Guest</FemaleGuest>
                            </FGuest>
                            <FInvites>
                                <FLeft>
                                    <FH4>Total invites</FH4>
                                    <FH1>9,620</FH1>
                                </FLeft>

                                <HR />
                                <FRight>
                                    <FH4>Total Come</FH4>
                                    <FH1>6,125</FH1>
                                </FRight>
                            </FInvites>
                        </DivTwo>
                        <DivThree>
                            <TrafficH4>
                                <VisitorTraffic>Visitor Traffic</VisitorTraffic>
                                <TrafficDiv>
                                    <TrafficImage src={Timage} />
                                </TrafficDiv>
                            </TrafficH4>
                        </DivThree>
                    </TopContainer>
                    <Seemore>
                        <SeeRight>
                            <SH5>Recently Guest</SH5>
                            <See6>See more</See6>
                        </SeeRight>
                        <SeeLeft>
                            <SH5>Guest Traffic</SH5>
                            <See6>See more</See6>
                        </SeeLeft>
                    </Seemore>
                    <Bottom>
                        <ProfileContainer>
                            <Profiledata />
                        </ProfileContainer>
                        <GraphContainer>
                            <Grapht />
                        </GraphContainer>
                    </Bottom>
                </SpotContainer>
            </Container>
        </>
    );
}

export default MainContent;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        flex-wrap: wrap;
    }
`;
const ProfileContainer = styled.div`
    width: 45%;
    @media all and (max-width: 1280px) {
        width: 55%;
    }
`;
const GraphContainer = styled.div`
    width: 50%;
`;
const Container = styled.div`
    display: flex;
`;
const SpotContainer = styled.section`
    background: #f5f1f1;
    width: 80%;
    padding: 25px;

    @media all and (max-width: 768px) {
        width: 100%;
    }
`;
const TopContainer = styled.section`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1440px) {
        flex-wrap: wrap;
    }
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
    }
`;
const DivOne = styled.div`
    background-color: #a5e3e3;
    width: 34%;
    padding: 30px;
    border-radius: 18px;
    @media all and (max-width: 1440px) {
        width: 45%;
    }
    @media all and (max-width: 980px) {
        width: 65%;
        margin-bottom: 30px;
    }
    @media all and (max-width: 640px) {
        width: 84%;
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }
`;
const MGuest = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;
const MGuestImage = styled.span`
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    background: #000;
    display: inline-block;
`;
const MIconImage = styled.img`
    display: block;
    width: 100%;
`;
const MaleGuest = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
    color: #000;
`;
const MInvites = styled.section`
    display: flex;
    justify-content: space-between;
    /* @media all and (max-width: 768px) {
        justify-content: space-around;
    } */
`;
const MLeft = styled.div``;
const MH4 = styled.h4`
    font-size: 12px;
    /* margin-top: 10px; */
    font-weight: bold;
`;
const MH1 = styled.h1`
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
    color: #000;
    @media all and (max-width: 480px) {
        font-size: 35px;
    }
    @media all and (max-width: 360px) {
        font-size: 29px;
    }
`;
const MRight = styled.div``;
const DivTwo = styled.div`
    background-color: #d2a2f7;
    width: 34%;
    padding: 32px;
    border-radius: 18px;
    @media all and (max-width: 1440px) {
        width: 45%;
    }
    @media all and (max-width: 1440px) {
        width: 65%;
    }
    @media all and (max-width: 640px) {
        width: 84%;
        margin-bottom: 20px;
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }
`;
const FGuest = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;
const FGuestImage = styled.span`
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    background: #000;
    display: inline-block;
`;
const FIconImage = styled.img`
    display: block;
    width: 100%;
`;
const FemaleGuest = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
    color: #000;
`;
const VisitorTraffic = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
    color: #000;
    @media all and (max-width: 640px) {
        display: none;
    }
`;
const FInvites = styled.div`
    display: flex;
    justify-content: space-between;
`;
const FLeft = styled.div``;
const FH4 = styled.h4`
    font-size: 12px;
    margin-top: 10px;
    font-weight: bold;
`;
const FH1 = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: #000;
    @media all and (max-width: 480px) {
        font-size: 35px;
    }
    @media all and (max-width: 360px) {
        font-size: 29px;
    }
`;
const HR = styled.hr`
    border-right: 2px solid #000;
    height: 75px;
`;
const FRight = styled.div``;
const DivThree = styled.div`
    width: 14%;
    background-color: #fff;
    border-radius: 15px;
    @media all and (max-width: 1440px) {
        width: 20%;
    }
    @media all and (max-width: 1440px) {
        width: 31%;
    }
    @media all and (max-width: 640px) {
        width: 35%;
    }
    @media all and (max-width: 640px) {
        display: none;
    }
`;
const TrafficH4 = styled.h4`
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
`;
const TrafficDiv = styled.div`
    @media all and (max-width: 640px) {
        display: none;
    }
`;
const TrafficImage = styled.img`
    display: block;
    width: 100%;
    @media all and (max-width: 1440px) {
        width: 80%;
    }
`;
const Seemore = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    @media all and (max-width: 640px) {
        flex-wrap: wrap;
    }
`;
const SeeRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 42%;
    @media all and (max-width: 640px) {
        width: 59%;
    }
    @media all and (max-width: 360px) {
        display: none;
    }
`;
const SH5 = styled.h5`
    font-size: 18px;
    color: #000;
    font-weight: 500;
`;
const SeeLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 42%;
    @media all and (max-width: 640px) {
        width: 59%;
    }
    @media all and (max-width: 360px) {
        display: none;
    }
`;
const See6 = styled.h6`
    font-size: 12px;
    color: grey;
    font-weight: 700;
`;
