import React from "react";
import styled from "styled-components";
import image1 from "../../Assets/Logo.svg"
// import {Link} from "react-router-dom"
function Header() {
    return (
        <>
            <Container>
                <HeaderContainer>
                    <HeaderImage>
                         <Logo src={image1}/>
                    </HeaderImage>
                
                    <LeftContainer>
                        <HeaderLi>
                            <OverView> Overview</OverView>
                        </HeaderLi>
                        <HeaderLi>
                            <Guest>Guestlist</Guest>
                        </HeaderLi>
                        <HeaderLi>
                            <Traffic>Temporary traffic</Traffic>
                        </HeaderLi>
                    </LeftContainer>
                 </HeaderContainer>
                 <HeaderImageContainer>
                    <RightContainer>
                      
                        <ImageContainer src={require("../../Assets/bxs_bell.svg").default} />
                     
                       
                        <ImageContainer2 src={require("../../Assets/Rect 20695.jpg")}/>
                        
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
  padding-top: 0px;
  margin-top: 70px;
`;

// const HeaderContainer = styled.div``;
// const HeaderImage = styled.div``;
const HeaderLi = styled.li`
 margin-right: 30px;
`;
const HeaderImageContainer = styled.ul`
  justify-content: space-between;
  display: flex;
  list-style: none;
`;
const OverView = styled.div`
     font-size: 17px;
    font-weight: normal;
    color: #8D8989;
    &:hover{
      color: #000;
      border-bottom: 2px solid #000;
    }
`;
const Guest = styled.div`
     font-size: 17px;
    font-weight: normal;
    color: #8D8989;
    &:hover{
      color: #000;
      border-bottom: 2px solid #000;
    }
`;
const Traffic = styled.div`
     font-size: 17px;
    font-weight: normal;
    color: #8D8989;
    &:hover{
      color: #000;
      border-bottom: 2px solid #000;
    }
`;
const LeftContainer = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  width: 100%;
  margin-left: 110px;
`;
const HeaderImage = styled.div``;
const Logo = styled.img`
    width: 100%;
    margin-top: 20px;
    margin-left: 30px;
`;
const RightContainer = styled.div`
     width: 40px;
     display: flex; 
     justify-content: space-between; 
  margin-left: 10px;
`;
const HeaderContainer = styled.h1`
    margin: 0;
  display: flex;
`;
const ImageContainer = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
`;
const ImageContainer2 = styled.img`
display: block;
  width: 100%;
  border-radius: 50%;
 
`;

