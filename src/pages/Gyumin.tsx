import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/modal/Modal';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from '../components/background/Footer';
import Profile from '../components/Profile';
import Header from '../components/background/Header';
import { GyuData, GyuLinkObjectArray } from '../data/Gyumin';
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

  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        <AnimatePresence>
          {modal && <Modal setModal={() => setModal(false)} />}
        </AnimatePresence>
        <Section>
          <Profile userData={GyuData} linkObj={GyuLinkObjectArray} />
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
