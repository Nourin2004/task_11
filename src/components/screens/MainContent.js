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
                                <MIconImage src={require("../../Assets/white icon.svg").default}/>
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
                                <FIconImage src={require("../../Assets/white icon2.svg").default}/>
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
                                <TrafficImage src={require("../../Assets/Group 3465418.svg").default}/>
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
    width: 90%;
    padding: 25px;
`;
const TopContainer = styled.section`
    display: flex;
    justify-content: space-between;
`;
const DivOne = styled.div`
    background-color: #A5E3E3;
    width:34%;
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
    /* margin-top: 10px; */
    font-weight: bold;
`;
const MH1 = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    color: #000;
`;
const MRight = styled.div``;
const DivTwo = styled.div`
    background-color: #D2A2F7;
    width: 34%;
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
const VisitorTraffic = styled.h3`
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
    font-size: 30px;
    font-weight: bold;
    color: #000;
`;
const HR = styled.hr`
    border-right: 2px solid #000;
    height: 50px;
    
`;
const FRight = styled.div``;
const DivThree = styled.div`
    width: 14%;
    background-color: #fff;
    border-radius: 15px;

`;
const TrafficH4 = styled.h4`
     font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
`;
const TrafficDiv = styled.div`
   
`;
const TrafficImage = styled.img`
    display: block;
    width: 100%;
`;
const Seemore = styled.section`
     display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;
const SeeRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 38%;`;
const SH5 = styled.h5`
    font-size: 18px;
    color: #000;
    font-weight: 500;
`;
const SeeLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 55%;
`;
const See6 = styled.h6`
    font-size: 12px;
    color: grey;
    font-weight: 700;
`;
