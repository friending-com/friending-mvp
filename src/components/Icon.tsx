import React from 'react';
import styled from 'styled-components';

const Icon = ({ src }: { src: string }) => {
  return (
    <IconBack>
      <IconImg src={src}></IconImg>
    </IconBack>
  );
};

export default Icon;
const IconBack = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
const IconImg = styled.img`
  width: 30px;
  height: 30px;
`;
