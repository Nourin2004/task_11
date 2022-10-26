import React from "react";
import styled from "styled-components";

function MainContent() {
    return (
        <>
            <SpotContainer>
                <TopContainer>
                    <DivOne>
                        <MGuest>
                            <MGuestImage>
                                <MIconImage></MIconImage>
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
                                <FIconImage></FIconImage>
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
                            <TrafficDiv>
                                <TrafficImage />
                            </TrafficDiv>
                        </TrafficH4>
                    </DivThree>
                </TopContainer>
                <Seemore>
                    <SeeRight>
                        <SH5>Recently Guest</SH5>
                        <SH6>See more</SH6>
                    </SeeRight>
                    <SeeLeft>
                        <SH5>Guest Traffic</SH5>
                        <SeeH6>See more</SeeH6>
                    </SeeLeft>
                </Seemore>

                 
                {/* <Profiles /> */}
            </SpotContainer>
        </>
    );
}

export default MainContent;

// import styled from "styled-components";
// import Header from "./../screens/Header";
// import Profiles from "./Profiles";

// function MainContent() {
//     return (

//     );
// }
// export default MainContent;

const SpotContainer = styled.section`
    background: #f5f1f1;
    width: 80%;
    padding: 25px;
`;
const TopContainer = styled.section`
    display: flex;
    justify-content: space-between;
`;
const DivOne = styled.div`
    background-color: #A5E3E3;
    width: 39%;
    padding: 40px;
    border-radius: 18px;
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
`;
const MLeft = styled.div``;
const MH4 = styled.h4`
    font-size: 12px;
    margin-top: 10px;
    font-weight: bold;
`;
const MH1 = styled.h1`
    font-size: 45px;
    font-weight: bold;
    color: #000;
`;
const MRight = styled.div``;
const DivTwo = styled.div`
    background-color: #D2A2F7;
    width: 39%;
    padding: 40px;
    border-radius: 18px;
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
    width: 100%;`;
const FemaleGuest = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
    color: #000;
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
    font-size: 45px;
    font-weight: bold;
    color: #000;
`;
const HR = styled.hr`
    border-right: 1px solid #000;
`;
const FRight = styled.div``;
const DivThree = styled.div``;
const TrafficH4 = styled.div``;
const TrafficDiv = styled.div``;
const TrafficImage = styled.div``;
const Seemore = styled.div``;
const SeeRight = styled.div``;
const SH5 = styled.div``;
const SH6 = styled.div``;
const SeeLeft = styled.div``;
const SeeH6 = styled.div``;
