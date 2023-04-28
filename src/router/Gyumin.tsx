import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import Header from '../components/Header';
function Gyumin() {
  const [modal, setModal] = useState(false);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setModal(true);
    }, 5000);
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleClick = () => {
    clearTimeout(timerRef.current);
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
      link: 'https://www.facebook.com/profile.php?id=100010314162778&mibextid=ZbWKwL',
    },
    {
      src: '/talk.png',
      link: 'http://qr.kakao.com/talk/VRmFvjPr99eMWZ3iw72qoy5BndE-',
    },
  ];
  const userData = {
    name: '김규민',
    age: 22,
    img: '/gyumin.jpeg',
    hashTag: [
      {
        tag: 'Friending CEO',
        img: 'writer.png',
      },
      {
        tag: 'DGIST 기초학부 3학년',
        img: 'writer.png',
      },
      {
        tag: 'Seller X _ Ai',
        img: 'writer.png',
      },
      {
        tag: '물리학 전공',
        img: 'writer.png',
      },
    ],
    interest: ['창업', 'Friending', 'Seller', '산책', '공상'],
  };
  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        <AnimatePresence>
          {modal && <Modal setModal={() => setModal(false)} />}
        </AnimatePresence>
        <Section>
          <Profile userData={userData} linkObj={LinkObjectArray} />
        </Section>
      </MainWrapper>
      <Footer handleClick={handleClick} />
    </Wrapper>
  );
}

export default Gyumin;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-style: solid;
  flex-direction: column;
  max-width: 360px;
  position: relative;
  height: calc(var(--vh, 1vh) * 100 + 100px);
`;

const Section = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 25px;
  min-height: 600px;
  max-width: 360px;
  position: absolute;
`;

const MainWrapper = styled.div`
  position: relative;
  max-width: 360px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 600px;
  padding-bottom: 20px;
`;
