import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Layout = () => {
  const animation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <Background
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
    />
  );
};

export default Layout;
const Background = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;
