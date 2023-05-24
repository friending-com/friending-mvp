import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { LinkObjectArray, userData } from '../data/DefaultProfile';
import { AnimatePresence } from 'framer-motion';
import Modal from '../components/modal/Modal';
import Header from '../components/background/Header';
import Profile from '../components/profile/Profile';
import Footer from '../components/background/Footer';

const DefaultProfile = () => {
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
};

export default DefaultProfile;
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
