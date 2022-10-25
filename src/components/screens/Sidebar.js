import React from 'react'
import styled from "styled-components"

function Sidebar() {
  return (
   <Container>
      <ProfileContainer>
        <Logo src={require("../../Assets/Logo.svg")}/>
        <h2>MAIN CONTAINER</h2>
        <Links>
                    <Link>
                        <Trofi src={require("").default}/>
                        <h3>Dasboard</h3>
                    </Link>
                    <Link>
                        <Calender src={require("").default}/>
                        <h3>Catering</h3>
                    </Link>
                    <Link>
                        <Technology src={require("").default}/>
                        <h3>Guest traffic</h3>
                    </Link>
                    <Link>
                        <Reward src={require("").default}/>
                        <h3>Gifts</h3>
                    </Link>
                    <Link>
                       
                </Links>
        
      </ProfileContainer>
   </Container>
  )
}


const Container = styled.div``;
const ProfileContainer = styled.div``;
const Logo = styled.img``;
const Links = styled.div``;
const Link = styled.div``;
const Trofi = styled.div``;
const Calender = styled.div``;
const Technology = styled.div``;
const Reward = styled.div``;



export default Sidebar
