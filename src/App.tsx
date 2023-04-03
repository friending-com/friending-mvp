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

  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        <AnimatePresence>
          {modal && <Modal setModal={() => setModal(false)} />}
        </AnimatePresence>
        <Section>
          <Profile />
        </Section>
      </MainWrapper>
      <Footer handleClick={handleClick} />
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
