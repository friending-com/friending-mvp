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
      src: '/twitter.png',
      link: 'https://www.facebook.com/profile.php?id=100010314162778&mibextid=ZbWKwL',
    },
    {
      src: '/talk.png',
      link: 'http://qr.kakao.com/talk/VRmFvjPr99eMWZ3iw72qoy5BndE-',
    },
    {
      src: '/etc.png',
      link: '',
    },
  ];
  const userData = {
    name: '김규민',
    age: 22,
    img: '/gyumin.jpeg',
    hashTag: [
      { type: '학력', value: 'DGIST 기초학부 3학년' },
      {
        type: '회사',
        value: 'Friending',
      },
      {
        type: '직업',
        value: 'Friending CEO',
      },
      {
        type: '기타',
        value: 'Seller X _ Ai',
      },
    ],
    interest: ['창업', 'Friending', '산책', 'Seller X', '공상'],
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
      <Footer handleClick={handleClick} fileName="screenshot2" />
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
  background: linear-gradient(
    172.17deg,
    #fff7a8 11.44%,
    #a8e0ff 26.14%,
    #a8ceff 76.41%,
    #b9d5ff 102.49%
  );
`;

const Section = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 25px;
  width: 90%;
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
