import React from 'react'
import styled from "styled-components"

// import image1 from "../../Assets/Logo.svg"
import image2 from "../../Assets/akar.svg"

function Sidebar() {
  return (
   <Container>
      <ProfileContainer>
        {/* <Logo src={image1}/> */}
        <H4>MAIN MENU</H4>
        <Links>
                    <Link1>
                        <Akar src={image2}/>
                        <H3>Dasboard</H3>
                    </Link1>
                    <Link>
                        <Catering src={require("../../Assets/cake.svg").default}/>
                        <H3>Catering status</H3>
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
      <Settings>
    
        <H4>SETTINGS</H4>
        <Links>
                    <Link>
                        <Akar src={require("../../Assets/account.svg").default}/>
                        <H3>Account</H3>
                    </Link>
                    <Link>
                        <Catering src={require("../../Assets/wallet.svg").default}/>
                        <H3>Wallet</H3>
                    </Link>
                    <Link>
                        <Traffic src={require("../../Assets/help.svg").default}/>
                        <H3>Help & Support</H3>
                    </Link>
                    
                 
                </Links>
      </Settings>
   </Container>
  )
}

export default Sidebar;

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
// const Logo = styled.img`
      
//    width: 70%;
//    margin: 0 auto;
//    border-radius: 50%;
//    margin-top: 65px;
//    margin-left: 35px;
//    margin-bottom: 20%;
// `;
const Links = styled.ul`
    list-style: none;
    line-height: 3em;
  
`;

const Link1 = styled.li`
    display: flex;
    font-size: 17px;
    font-weight: normal;
`;
const Link = styled.li`
    display: flex;
    font-size: 17px;
    font-weight: normal;
    color: #8D8989;
    &:hover{
      color: #000;
      
    }
    
    
`;
const Akar = styled.img`
    width: 15%;
    margin-right: 10px;

`;
const Catering = styled.img`
    width: 15%;
    margin-right: 10px;

`;const Traffic = styled.img`
     width: 15%;
    margin-right: 10px;
`;
const Reward = styled.img`
    width: 15%;
    margin-right: 10px;
`;
const H3 = styled.div``;

const H4 = styled.div`
    width: 60%;
    font-weight: bold;
    color: grey;

`;
const Settings = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`;


