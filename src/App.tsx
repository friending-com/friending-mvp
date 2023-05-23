import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from './components/Modal';
import { AnimatePresence } from 'framer-motion';
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
      src: '/twitter.png',
      link: 'https://twitter.com/_890uuu?t=_rbjxJjgYpvmMpWDqVy4yQ&s=09',
    },
    {
      src: '/talk.png',
      link: 'https://open.kakao.com/o/s4gKh2cf',
    },
    {
      src: '/etc.png',
      link: '',
    },
  ];
  const userData = {
    name: '문소리',
    age: 53,
    img: '/profile.png',
    hashTag: [
      '보스턴대학교 경영학전공',
      '카카오 모빌리티 프로덕트 디자이너',
      'DeepL AI ToolChains of KSM',
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
        <Profile userData={userData} linkObj={LinkObjectArray} />
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
  background: linear-gradient(
    172.17deg,
    #fff7a8 11.44%,
    #a8e0ff 26.14%,
    #a8ceff 76.41%,
    #b9d5ff 102.49%
  );
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
