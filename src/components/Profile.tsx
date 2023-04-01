import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import MusicBar from './MusicBar';
import { AnimatePresence, motion } from 'framer-motion';
import Introduce from './Introduce';
import Interest from './Interest';
import useSlider from '../hook/useSlider';
import { PanInfo } from 'framer-motion';

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
const components = [<Introduce />, <Interest />];
const Profile = () => {
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
    <>
      <Wrapper>
        <ImageWrapper>
          <Image src="/profile.jpeg" alt="profile" />
        </ImageWrapper>
        <Name>이순신</Name>
        <MusicBar />
        <IconWrapper>
          {LinkObjectArray.map((link) => (
            <Icon src={link.src} key={link.src} link={link.link} />
          ))}
        </IconWrapper>
      </Wrapper>

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
          {components.map((com, i) => i === index && <div key={i}>{com}</div>)}
        </FeatureWrapper>
      </AnimatePresence>
    </>
  );
};

export default Profile;
const Wrapper = styled.div`
  background-color: #e1536f;
  width: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 25px;
  padding-bottom: 50px; ;
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
  font-size: 25px;
  font-weight: 700px;
  margin-top: 20px;
  color: white;
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
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const FeatureWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  gap: 10px;
  background: #fcfbfc;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding-top: 50px;
  padding-bottom: 80px;
  height: 200px;
`;
