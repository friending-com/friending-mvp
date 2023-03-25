import React from 'react';
import styled from 'styled-components';

const Layout = () => {
  return <Background />;
};

export default Layout;
const Background = styled.div`
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
`;
