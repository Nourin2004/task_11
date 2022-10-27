import React from "react";
import styled from "styled-components";
import Avatar from "../../Assets/Rect 20695.jpg";
import ImagePen from "../../Assets/solid_pen.svg";
import ImageTrash from "../../Assets/bxs_trash.svg";
import ImageDots from "../../Assets/bi.svg";
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
                </Profiles>
            </ProfileContainer>
        </>
    );
}
export default Profiledata;

const ProfileContainer = styled.div``;
const Profiles = styled.div``;
const ProfileDiv1 = styled.div`
    display: flex;
`;
const ProfileLeft = styled.div``;
const ProfileImage = styled.div``;
const ProImage = styled.img``;
const ProfileName = styled.div``;
const ProfileInput = styled.input``;
const ProP = styled.div``;
const ProfileRight = styled.div``;
const ProfileIcon = styled.div``;
const ProEditIcon = styled.img``;
const ProDltIcon = styled.img``;
const ProIcon = styled.img``;
