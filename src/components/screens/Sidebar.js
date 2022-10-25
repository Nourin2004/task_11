import React from 'react'
import styled from "styled-components"

import image1 from "../../Assets/Logo.svg"
import image2 from "../../Assets/akar.svg"

function Sidebar() {
  return (
   <Container>
      <ProfileContainer>
        <Logo src={image1}/>
        <H4>MAIN CONTAINER</H4>
        <Links>
                    <Link>
                        <Akar src={image2}/>
                        <H3>Dasboard</H3>
                    </Link>
                    <Link>
                        <Catering src={require("../../Assets/cake.svg").default}/>
                        <H3>Catering</H3>
                    </Link>
                    <Link>
                        <Traffic src={require("../../Assets/bx.svg").default}/>
                        <H3>Guest traffic</H3>
                    </Link>
                    <Link>
                        <Reward src={require("../../Assets/ant.svg").default}/>
                        <H3>Gifts</H3>
                    </Link>
                 
                </Links>
        
      </ProfileContainer>
   </Container>
  )
}

export default Sidebar

const Container = styled.div`
   width:15%;
   height: 100% !important;
   border-radius: 2rem;
   display: flex;
   flex-direction: column;
    align-items: center;
`;

const ProfileContainer = styled.div`
     display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`;
const Logo = styled.img`
      height: 5rem;
   width: 50%;
   margin: 0 auto;
   border-radius: 50%;
   margin-top: 15px;
   margin-left: 30px;
   margin-bottom: 20%;
`;
const Links = styled.ul`
    list-style: none;
    
`;
const Link = styled.li`
 display: flex;
    
`;
const Akar = styled.img`
     width: 10%;
    margin-right: 10px;

`;
const Catering = styled.img`
     width: 10%;
    margin-right: 10px;

`;
const Traffic = styled.img`
     width: 10%;
    margin-right: 10px;
`;
const Reward = styled.img`
     width: 10%;
    margin-right: 10px;
`;
const H3 = styled.div``;

const H4 = styled.div`

`;


