import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
const LinkObjectArray = [
  {
    src: '/call.png',
    link: '010-4854-3312',
  },
  {
    src: '/instagram.png',
    link: 'https://instagram.com/kgm0_24?igshid=ZDdkNTZiNTM=',
  },
  {
    src: '/facebook.png',
    link: 'https://www.facebook.com/profile.php?id=100010314162778&mibextid=ZbWKwL',
  },
  {
    src: '/twitter.png',
    link: 'https://twitter.com/hVG5DrtLn08n7TA',
  },
  {
    src: '/talk.png',
    link: 'http://qr.kakao.com/talk/VRmFvjPr99eMWZ3iw72qoy5BndE-',
  },
];
const Profile = () => {
  return (
    <>
      <ImageWrapper>
        <Image src="/profile.jpeg" alt="profile" />
      </ImageWrapper>
      <Name>김규민</Name>
      <IconWrapper>
        {LinkObjectArray.map((link) => (
          <Icon src={link.src} key={link.src} link={link.link} />
        ))}
      </IconWrapper>
      <FeatureWrapper>
        <Feature>
          <FeatureIcon src="fire.png" width="20px" height="20px" alt="img" />
          춤추기
        </Feature>
        <Feature>
          <FeatureIcon src="fire.png" width="20px" height="20px" alt="img" />
          코딩하기
        </Feature>
      </FeatureWrapper>
    </>
  );
};

export default Profile;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
const ImageWrapper = styled.div`
  border-radius: 50%;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: rgba(68, 64, 105, 0.08) 3px 3px 3px 3px;
`;
const Name = styled.div`
  font-size: 30px;
  font-weight: 700px;
  margin-top: 20px;
`;
const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  gap: 10px;
  margin-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
`;

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 95%;
  gap: 10px;
`;
const Feature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: black;
  color: white;
  font-size: 20px;
  background-color: #fcbdbd;
  border-radius: 25px;
  height: 35px;
`;
const FeatureIcon = styled.img`
  position: absolute;
  left: 10px;
  width: 20px;
  height: 20px;
`;
