import React, { useState } from "react";
import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

function CRMDashBoard() {
    const [showMenus, setShowMenus] = useState(false);
    const [selected, setSelected] = useState("");
    const [showInput, setShowInput] = useState(false);
    const [updatedName, setUpdatedName] = useState("");
    const [guests, setGuests] = useState([
        {
            id: 1,
            guest_name: "Aisyah Namanya",
            time: "2 minutes",
            guest_image: require("../../Assets/avatar.jpg"),
        },
        {
            id: 2,
            guest_name: "Cak Handoko",
            time: "4 minutes",
            guest_image: require("../../Assets/avatar1.jpg"),
        },
        {
            id: 3,
            guest_name: "Aisyah Namanya",
            time: "10 minutes",
            guest_image: require("../../Assets/avatar.jpg"),
        },
    ]);

    const editGuestname = (guest) => {
        guest.guest_name = updatedName;

        setShowInput(false);
        setUpdatedName("");
        setShowMenus(false);
    };

    const deleteGuest = (id) => {
        let new_list = guests.filter((item) => item.id !== id);
        setGuests(new_list);
        setShowMenus(false);
        setSelected("");
    };
    return (
        <MainContainer id="main-div">
            <Container>
                {guests.map((guest) => (
                    <MainBox key={guest.id}>
                        <GuestDetail className={selected === guest.id && showMenus && "shrink"}>
                            <ProfileDiv
                                onClick={() => {
                                    setShowMenus(false);
                                    setShowInput(false);
                                    setUpdatedName("");
                                }}
                            >
                                <Profile>
                                    <Img src={guest.guest_image} alt="Image" />
                                </Profile>
                                <Detail>
                                    <h4>{guest.guest_name}</h4>
                                    <span>{guest.time}</span>
                                </Detail>
                            </ProfileDiv>
                            <Menu
                                onClick={() => {
                                    setShowMenus(!showMenus);
                                    setSelected(guest.id);
                                    setUpdatedName("");
                                    setShowInput(false);
                                }}
                            >
                                <BiDotsVerticalRounded />
                            </Menu>
                        </GuestDetail>
                        <MenuBox>
                            <IconDiv
                                onClick={() => {
                                    setShowInput(!showInput);
                                    setUpdatedName("");
                                }}
                            >
                                <Pen />
                            </IconDiv>
                            <IconDiv onClick={() => deleteGuest(guest.id)}>
                                <Delete />
                            </IconDiv>
                        </MenuBox>
                        <InputContainer className={showInput && selected === guest.id && "show"}>
                            <input type="text" placeholder="your name" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
                            <span onClick={() => editGuestname(guest)}>Set</span>
                        </InputContainer>
                    </MainBox>
                ))}
            </Container>
        </MainContainer>
    );
}

export default CRMDashBoard;

const MainContainer = styled.div`
    padding: 30px 0;
`;
const Container = styled.div`
    width: 100%;
    height: 100%;
`;
const MainBox = styled.div`
    width: 500px;
    height: 100px;
    background-color: #fa8787;
    border-radius: 10px;
    margin: 15px 0;
    position: relative;
    &:hover {
        box-shadow: 1px 0px 13px 1px #c5c5c5;
    }
    @media all and (max-width: 1440px) {
        width: 470px;
    }
    @media all and (max-width: 640px) {
        width: 421px;
    }
    @media all and (max-width: 480px) {
        width: 328px;
    }
    @media all and (max-width: 360px) {
        width: 306px;
        margin-left: -18px;
    }
`;
const ProfileDiv = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Profile = styled.div`
    width: 50px;
    border-radius: 50%;
    margin-right: 20px;
`;
const Img = styled.img`
    width: 100%;
    display: block;
    border-radius: 50%;
    @media all and (max-width: 360px) {
        width: 75%;
    }
`;
const Detail = styled.div`
    flex: 1;
    h4 {
        font-size: 18px;
        color: #3f3f3f;
        text-transform: capitalize;
        @media all and (max-width: 360px) {
            font-size: 15px;
        }
    }
    span {
        color: #747474;
        font-size: 14px;
    }
`;
const Menu = styled.div`
    font-size: 20px;
    cursor: pointer;
    padding-right: 20px;
`;
const GuestDetail = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 20px 0 20px 20px;
    overflow-x: hidden;
    transition: 0.4s all ease;
    &.shrink {
        width: 80%;
        ${Menu} {
            display: none;
        }
    }
`;

const MenuBox = styled.div`
    width: 100px;
    height: 100%;
    background-color: #d2a2f7;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 10px;
    z-index: 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const IconDiv = styled.div`
    font-size: 17px;
    padding: 5px;
    margin-right: 5px;
    cursor: pointer;
`;
const Pen = styled(BsPencilFill)``;
const Delete = styled(FaTrash)``;
const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    height: 30px;
    position: absolute;
    top: 65px;
    z-index: 20;
    right: 15px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 1px 3px 9px 0 #acacac8f;
    padding: 0 10px;
    visibility: hidden;
    input {
        width: 100%;
    }
    span {
        display: inline-block;
        font-size: 13px;
        cursor: pointer;
    }
    &.show {
        visibility: visible;
    }
`;
