import React from 'react';
import { IUserData, link } from '../Profile';
import SNSSection from './SNSSection/SNSSection';
import styled from 'styled-components';

const Header = ({
  userData,
  linkObj,
}: {
  userData: IUserData;
  linkObj: link[];
}) => {
  return (
    <>
      <HeadWrapper>
        <ImageWrapper>
          <Image src={userData.img} alt="profile" />
        </ImageWrapper>
        <Name>{userData.name}</Name>
        <SubTitle>Friending CEO</SubTitle>
        <SNSSection linkObj={linkObj} />
      </HeadWrapper>
    </>
  );
};

export default Header;
const SubTitle = styled.div`
  color: #666666;
  font-size: 15px;
  font-weight: 400;
  margin-top: 12px;
`;
const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 25px;
  padding-bottom: 50px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
const ImageWrapper = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: rgba(68, 64, 105, 0.08) 3px 3px 3px 3px;
`;
const Name = styled.div`
  margin-top: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;
