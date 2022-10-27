import React from "react";
import styled from "styled-components";
import Avatar from "../../Assets/Rect 20695.jpg";
import ImagePen from "../../Assets/solid_pen.svg";
import ImageTrash from "../../Assets/bxs_trash.svg";
import ImageDots from "../../Assets/bi.svg";
import Avatar2 from "../../Assets/Recta 20696.jpg";
function Profiledata() {
    return (
        <>
            <ProfileContainer>
                <Profiles>
                    <ProfileDiv1>
                        <ProfileLeft>
                            <ProfileImage>
                                <ProImage src={Avatar} />
                            </ProfileImage>
                            <ProfileName>
                                <ProfileInput type={"text"} value={"Aisyah Namanya"} />
                                <ProP>2 minute ago</ProP>
                            </ProfileName>
                        </ProfileLeft>
                        <ProfileRight>
                            <ProfileIcon>
                                <ProEditIcon src={ImagePen} />
                            </ProfileIcon>
                            <ProfileIcon>
                                <ProDltIcon src={ImageTrash} />
                            </ProfileIcon>
                            <ProfileIcon>
                                <ProIcon src={ImageDots} />
                            </ProfileIcon>
                        </ProfileRight>
                    </ProfileDiv1>
                    <ProfileDiv2>
                        <ProfileLeft2>
                            <ProfileImage2>
                                <ProImage2 src={Avatar2} />
                            </ProfileImage2>
                            <ProfileTwoName>
                                <ProTwoInput type={"text"} value={"ACak Handoko"} />
                                <ProfileTwoP>6 minute ago</ProfileTwoP>
                            </ProfileTwoName>
                        </ProfileLeft2>
                        <ProfileRight2>
                            <ProfileIcon2>
                                <ProEditIcon2 src={ImagePen} />
                            </ProfileIcon2>
                            <ProfileIcon2>
                                <ProDltIcon2 src={ImageTrash} />
                            </ProfileIcon2>
                            <ProfileIcon2>
                                <ProIcon2 src={ImageDots} />
                            </ProfileIcon2>
                        </ProfileRight2>
                    </ProfileDiv2>
                    <ProfileDiv3>
                        <ProfileLeft3>
                            <ProfileImage3>
                                <ProImage3 src={Avatar} />
                            </ProfileImage3>
                            <ProfileThreeName>
                                <ProThreeInput type={"text"} value={"Aisyah Namanya"} />
                                <ProfileThreeP>2 minute ago</ProfileThreeP>
                            </ProfileThreeName>
                        </ProfileLeft3>
                        <ProfileRight3>
                            <ProfileIcon3>
                                <ProEditIcon3 src={ImagePen} />
                            </ProfileIcon3>
                            <ProfileIcon3>
                                <ProDltIcon3 src={ImageTrash} />
                            </ProfileIcon3>
                            <ProfileIcon3>
                                <ProIcon3 src={ImageDots} />
                            </ProfileIcon3>
                        </ProfileRight3>
                    </ProfileDiv3>
                </Profiles>
            </ProfileContainer>
        </>
    );
}
export default Profiledata;

const ProfileContainer = styled.section`
    width: 39%;
`;
const Profiles = styled.div``;
const ProfileDiv1 = styled.div`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    margin: 20px 0px;
    :hover {
        box-shadow: 3px 5px 20px 10px #d1d1d1;
    }
`;
const ProfileLeft = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProfileImage = styled.div`
    width: 40px;
    margin-right: 20px;
`;
const ProImage = styled.img`
    display: block;
    width: 100%;
    border-radius: 50px;
`;
const ProfileName = styled.div``;
const ProfileInput = styled.input`
    font-weight: bold;
    font-size: 13px;
    border: 0;
    outline: 0;
`;
const ProP = styled.p`
    color: grey;
    font-size: 10px;
`;
const ProfileRight = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;
const ProfileIcon = styled.section`
    width: 18px;
`;
const ProEditIcon = styled.img`
    display: block;
    width: 100%;
`;
const ProDltIcon = styled.img`
    display: block;
    width: 100%;
`;
const ProIcon = styled.img`
    display: block;
    width: 100%;
`;
const ProfileDiv2 = styled.section`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    margin: 20px 0px;
    :hover {
        box-shadow: 3px 5px 20px 10px #d1d1d1;
    }
`;
const ProfileLeft2 = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProfileImage2 = styled.div`
    width: 40px;
    margin-right: 20px;
`;
const ProImage2 = styled.img`
    display: block;
    width: 100%;
    border-radius: 50px;
`;
const ProfileTwoName = styled.div``;
const ProTwoInput = styled.input`
    font-weight: bold;
    font-size: 13px;
    border: 0;
    outline: 0;
`;
const ProfileTwoP = styled.p`
    color: grey;
    font-size: 10px;
`;
const ProfileRight2 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;
const ProfileIcon2 = styled.div`
    width: 18px;
`;
const ProDltIcon2 = styled.img`
    display: block;
    width: 100%;
`;
const ProIcon2 = styled.img`
    display: block;
    width: 100%;
`;
const ProEditIcon2 = styled.img`
    display: block;
    width: 100%;
`;
const ProfileDiv3 = styled.div`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    margin: 20px 0px;
    :hover {
        box-shadow: 3px 5px 20px 10px #d1d1d1;
    }
`;
const ProfileLeft3 = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProfileImage3 = styled.div`
    width: 40px;
    margin-right: 20px;
`;
const ProImage3 = styled.img`
    display: block;
    width: 100%;
    border-radius: 50px;
`;
const ProfileThreeName = styled.div``;
const ProThreeInput = styled.input`
    font-weight: bold;
    font-size: 13px;
    border: 0;
    outline: 0;
`;
const ProfileThreeP = styled.p`
    color: grey;
    font-size: 10px;
`;
const ProfileRight3 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;
const ProfileIcon3 = styled.div`
    width: 18px;
`;
const ProDltIcon3 = styled.img`
    display: block;
    width: 100%;
`;
const ProEditIcon3 = styled.img`
    display: block;
    width: 100%;
`;
const ProIcon3 = styled.img`
    display: block;
    width: 100%;
`;
