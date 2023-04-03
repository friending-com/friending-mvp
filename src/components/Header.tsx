import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Title>Friending</Title>
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;
  align-items: center;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  margin-left: 15px;
`;
const FlipButton = styled.img`
  cursor: pointer;
  width: 30px;
  margin-right: 15px;
`;
