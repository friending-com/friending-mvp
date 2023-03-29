import React from 'react';
import styled from 'styled-components';

const Icon = ({ src, link }: { src: string; link: string }) => {
  return (
    <IconBack>
      <a href={link}>
        <IconImg src={src}></IconImg>
      </a>
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
