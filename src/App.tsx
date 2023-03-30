import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Icon from './components/Icon';
import Modal from './components/Modal';
import { AnimatePresence, motion } from 'framer-motion';
function App() {
  const [modal, setModal] = useState(false);
  // const timerRef = useRef<any>(null);
  const [rotate, setRotate] = useState(true);
  // useEffect(() => {
  //   timerRef.current = setTimeout(() => {
  //     setModal(true);
  //   }, 3000);
  //   return () => clearTimeout(timerRef.current);
  // }, []);
  const handleClick = () => {
    // clearTimeout(timerRef.current);
    setModal(true);
  };
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
  const animationProps = {
    initial: { rotateY: -180, opacity: 0 },
    animate: { rotateY: 0, opacity: 1, transition: { duration: 1 } },
    exit: { rotateY: 180, opacity: 0, transition: { duration: 1 } },
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {modal && <Modal setModal={() => setModal(false)} />}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {rotate ? (
          <Section
            variants={animationProps}
            initial="initial"
            animate="animate"
            exit="exit"
            key="section"
          >
            <FlipButton
              src="/flip.png"
              onClick={() => setRotate((prev) => !prev)}
            />

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
                <FeatureIcon
                  src="fire.png"
                  width="20px"
                  height="20px"
                  alt="img"
                />
                춤추기
              </Feature>
              <Feature>
                <FeatureIcon
                  src="fire.png"
                  width="20px"
                  height="20px"
                  alt="img"
                />
                코딩하기
              </Feature>
            </FeatureWrapper>
          </Section>
        ) : (
          <Section
            variants={animationProps}
            initial="initial"
            animate="animate"
            exit="exit"
            key="section1"
          >
            <FlipButton
              src="/flip.png"
              onClick={() => setRotate((prev) => !prev)}
            />
            <NameCard src="/namecard.jpeg" alt="img"></NameCard>
          </Section>
        )}
      </AnimatePresence>
      <ButtonWrapper>
        <Button>갤러리에 저장</Button>
        <Button onClick={handleClick}>앱 다운로드</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  flex-direction: column;
  max-width: 360px;
`;

const Section = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  border-radius: 25px;
  min-height: 600px;
  position: absolute;
`;
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
const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: fixed;
  bottom: 10px;
`;
const Button = styled.div`
  cursor: pointer;
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
`;
const NameCard = styled.img`
  width: 100%;
  max-width: 320px;
  margin-left: 20px;
  margin-right: 20px;
`;

const FlipButton = styled.img`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  width: 30px;
`;

const AnimationWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
