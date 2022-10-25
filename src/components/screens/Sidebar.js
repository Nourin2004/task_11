import React from 'react'
import styled from "styled-components"

import image1 from "../../Assets/Logo.svg"

function Sidebar() {
  return (
   <Container>
      <ProfileContainer>
        <Logo src={image1}/>
        <h2>MAIN CONTAINER</h2>
        <Links>
                    <Link>
                        <Akar src={require("../../Assets/akar.svg").default}/>
                        <H3>Dasboard</H3>
                    </Link>
                    <Link>
                        <Catering src={require("../../Assets/ant.svg").default}/>
                        <H3>Catering</H3>
                    </Link>
                    <Link>
                        <Traffic src={require("../../Assets/ant.svg").default}/>
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

const Container = styled.div``;
const ProfileContainer = styled.div``;
const Logo = styled.img``;
const Links = styled.div``;
const Link = styled.div``;
const Akar = styled.img`
    width: 100px;
    height: 100px;

`;
const Catering = styled.img``;
const Traffic = styled.img``;
const Reward = styled.img``;
const H3 = styled.div``;




