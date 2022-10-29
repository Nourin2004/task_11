import React from "react";
import styled from "styled-components";
import image2 from "../../Assets/akar.svg";
import cateringimg from "../../Assets/cake.svg";
import Trafficimg from "../../Assets/bx.svg";
import Rewardimg from "../../Assets/ant.svg";
import Accountimg from "../../Assets/account.svg";
import walletimg from "../../Assets/wallet.svg";
import Trafficimgs from "../../Assets/help.svg";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <Container>
            <ProfileContainer>
                <H4>MAIN MENU</H4>
                <Links>
                    <AkarBox to="/">
                        <Akar src={image2} />
                        <H3>Dasboard</H3>
                    </AkarBox>
                    <CateringBox to="/catering">
                        <Catering src={cateringimg} />
                        <H3>Catering status</H3>
                    </CateringBox>
                    <TrafficBox to="/traffic">
                        <Traffic src={Trafficimg} />
                        <H3>Guest traffic</H3>
                    </TrafficBox>
                    <RewardBox to="/gifts">
                        <Reward src={Rewardimg} />
                        <H3>Gifts</H3>
                    </RewardBox>
                </Links>
            </ProfileContainer>
            <Settings>
                <H4>SETTINGS</H4>
                <Links>
                    <AccountBox  to="/rewards">
                        <Akar src={Accountimg} />
                        <H3>Account</H3>
                    </AccountBox>
                    <WalletBox  to="/wallet">
                        <Catering src={walletimg} />
                        <H3>Wallet</H3>
                    </WalletBox>
                    <HelpBox  to="/help">
                        <Traffic src={Trafficimgs} />
                        <H3>Help & Support</H3>
                    </HelpBox>
                </Links>
            </Settings>
        </Container>
    );
}

export default Sidebar;

const Container = styled.div`
    width: 20%;
    height: 100%;
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
const Links = styled.div`
    list-style: none;
    line-height: 3em;
`;

const AkarBox = styled(Link)`
    display: flex;
    font-size: 17px;
    font-weight: normal;
    color: #8d8989;
    &:hover {
        color: #000;
    }
`;
const CateringBox = styled(Link)`
    display: flex;
    font-size: 17px;
    font-weight: normal;
    color: #8d8989;
    &:hover {
        color: #000;
    }
`;
const TrafficBox = styled(Link)`
    display: flex;
    font-size: 17px;
    font-weight: normal;
    color: #8d8989;
    &:hover {
        color: #000;
    }
`;
const RewardBox = styled(Link)`
    display: flex;
    font-size: 17px;
    font-weight: normal;
    color: #8d8989;
    &:hover {
        color: #000;
    }
`;
const HelpBox = styled(Link)`
    display: flex;
    font-size: 17px;
    font-weight: normal;
    color: #8d8989;
    &:hover {
        color: #000;
    }
`;
const AccountBox = styled(Link)`
    display: flex;
    font-size: 17px;
    font-weight: normal;
    color: #8d8989;
    &:hover {
        color: #000;
    }
`;
const WalletBox = styled(Link)`
    display: flex;
    font-size: 17px;
    font-weight: normal;
    color: #8d8989;
    &:hover {
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
    display: block;
`;
const Traffic = styled.img`
    width: 15%;
    margin-right: 10px;
`;
const Reward = styled.img`
    width: 15%;
    margin-right: 10px;
`;
const H3 = styled.h3`
    font-size: 18px;
`;

const H4 = styled.div`
    width: 70%;
    font-weight: bold;
    color: grey;
    margin: 30px 0;
`;
const Settings = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`;
