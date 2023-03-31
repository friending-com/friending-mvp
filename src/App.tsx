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
  const [rotate, setRotate] = useState(true);

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

  const filp = () => {
    setRotate((prev) => !prev);
  };

  const animationProps = {
    initial: { rotateY: -180, opacity: 0 },
    animate: { rotateY: 0, opacity: 1, transition: { duration: 1 } },
    exit: { rotateY: 180, opacity: 0, transition: { duration: 1 } },
  };

  return (
    <Wrapper>
      <Header setRotate={filp} />
      <MainWrapper>
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
              <Profile />
            </Section>
          ) : (
            <Section
              variants={animationProps}
              initial="initial"
              animate="animate"
              exit="exit"
              key="section1"
            >
              <NameCard src="/namecard.jpeg" alt="img" />
            </Section>
          )}
        </AnimatePresence>
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
  background-color: #eeeeee;
  border-radius: 25px;
  min-height: 600px;
  max-width: 360px;
  position: absolute;
`;
const NameCard = styled.img`
  max-width: 320px;
  margin-left: 20px;
  margin-right: 20px;
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
`;
