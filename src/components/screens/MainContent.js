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
                        </MInvites>
                        <HR />
                        <MCome>
                            <MRight>
                                <MH4>Total Come</MH4>
                                <MH1>4,204</MH1>
                            </MRight>
                        </MCome>
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
                        </FInvites>
                        <HR />
                        <FCome>
                            <FRight>
                                <FH4>Total Come</FH4>
                                <FH1>6,125</FH1>
                            </FRight>
                        </FCome>
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

const SpotContainer = styled.div``;
const TopContainer = styled.div``;
const DivOne = styled.div``;
const MGuest = styled.div``;
const MGuestImage = styled.div``;
const MIconImage = styled.div``;
const MaleGuest = styled.div``;
const MInvites = styled.div``;
const MLeft = styled.div``;
const MH4 = styled.div``;
const MH1 = styled.div``;
// const HR= styled.div``;
const MCome = styled.div``;
const MRight = styled.div``;
const DivTwo = styled.div``;
const FGuest = styled.div``;
const FGuestImage = styled.div``;
const FIconImage = styled.div``;
const FemaleGuest = styled.div``;
const FInvites = styled.div``;
const FLeft = styled.div``;
const FH4 = styled.div``;
const FH1 = styled.div``;
const HR = styled.div``;
const FCome = styled.div``;
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
