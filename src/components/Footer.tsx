import React from 'react';
import styled from 'styled-components';

const Footer = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <ButtonWrapper>
      <Button>갤러리에 저장</Button>
      <Button onClick={handleClick}>앱 다운로드</Button>
    </ButtonWrapper>
  );
};

export default Footer;
const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: fixed;
  bottom: 10px;
`;
const Button = styled.div`
  cursor: pointer;
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
`;
