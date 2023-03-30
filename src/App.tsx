import { useState } from 'react';
import styled from 'styled-components';
import Modal from './components/Modal';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from './components/Footer';
import Profile from './components/Profile';
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
            <FlipButton
              src="/flip.png"
              onClick={() => setRotate((prev) => !prev)}
            />
            <NameCard src="/namecard.jpeg" alt="img" />
          </Section>
        )}
      </AnimatePresence>
      <Footer handleClick={handleClick} />
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
