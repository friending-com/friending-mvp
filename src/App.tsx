import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from './components/Modal';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Header from './components/Header';
function App() {
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
      link: '010-1234-5678',
    },
    {
      src: '/instagram.png',
      link: 'https://www.instagram.com/isunsinnn/',
    },
    {
      src: '/facebook.png',
      link: 'https://www.facebook.com/profile.php?id=100091051016525&mibextid=ZbWKwL',
    },
    {
      src: '/twitter.png',
      link: 'https://twitter.com/_890uuu?t=_rbjxJjgYpvmMpWDqVy4yQ&s=09',
    },
    {
      src: '/talk.png',
      link: 'https://open.kakao.com/o/s4gKh2cf',
    },
  ];
  const userData = {
    name: '이순신',
    age: 53,
    img: '/profile.jpeg',
    hashTag: [
      { tag: '전라좌도 수군절도사', img: 'solider.png' },
      {
        tag: '1545년생',
        img: 'birth.png',
      },
      {
        tag: '난중일기 저자',
        img: 'writer.png',
      },
    ],
    interest: ['등산', '활쏘기', '산책', '말타기', '요리'],
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
      <Footer handleClick={handleClick} fileName="screenshot" />
    </Wrapper>
  );
}

export default App;
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
