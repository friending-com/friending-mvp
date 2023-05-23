import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { AnimatePresence, motion } from 'framer-motion';
import Introduce from './Introduce';
import Interest from './Interest';
import useSlider from '../hook/useSlider';
import { PanInfo } from 'framer-motion';
interface link {
  src: string;
  link: string;
}
interface IUserData {
  name: string;
  age: number;
  img: string;
  hashTag: string[];
  interest: string[];
}

const Profile = ({
  userData,
  linkObj,
}: {
  userData: IUserData;
  linkObj: link[];
}) => {
  const components = [
    <Introduce data={userData.hashTag} />,
    <Interest name={userData.name} interest={userData.interest} />,
  ];
  const [index, direction, increase, decrease, animationVariant] = useSlider(
    components,
    0.1,
    360
  );
  const [dragStartX, setdragStartX] = useState(0);
  const handleScroll = (_: any, info: PanInfo) => {
    if (dragStartX > info.point.x) increase();
    else decrease();
  };
  return (
    <Wrapper>
      <HeadWrapper>
        <ImageWrapper>
          <Image src={userData.img} alt="profile" />
        </ImageWrapper>
        <Name>{userData.name}</Name>
        <SubTitle>Friending CEO</SubTitle>
        <IconWrapper>
          {linkObj.map((link) => (
            <Icon src={link.src} key={link.src} link={link.link} />
          ))}
        </IconWrapper>
      </HeadWrapper>
      <RelativeWrapper>
        <AnimatePresence initial={false} custom={direction}>
          <FeatureWrapper
            drag="x"
            key={index}
            variants={animationVariant}
            initial="initial"
            animate="visible"
            exit="exit"
            onDragStart={(_, info) => {
              setdragStartX((prev) => (prev = info.point.x));
            }}
            onDragEnd={handleScroll}
            custom={direction}
          >
            {components.map(
              (com, i) => i === index && <div key={i}>{com}</div>
            )}
          </FeatureWrapper>
        </AnimatePresence>
      </RelativeWrapper>
      <IndexWrapper>
        {Array.from({ length: components.length }).map((_, i) =>
          i === index ? <SelectIndex /> : <Index />
        )}
      </IndexWrapper>
    </Wrapper>
  );
};

export default Profile;
const Wrapper = styled.div`
  margin-top: 20px;
  background: #ffffff;
  width: 90%;
`;
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
const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: -30px;
  background-color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 90%;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;
const RelativeWrapper = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  padding-bottom: 80px;
  height: 200px;
  overflow: hidden;
  position: relative;
`;
const FeatureWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 280px;
`;

const Index = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: black;
`;
const SelectIndex = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #ff7da4;
`;
const IndexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  padding: 5px;
`;
