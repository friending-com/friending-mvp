import React from 'react';
import styled from 'styled-components';

const MusicBar = ({ age }: { age: number }) => {
  return (
    <Wrapper>
      <PlayTime value={age} max="100" />
      <MusicDot age={age} />
      <Age>{age}세</Age>
    </Wrapper>
  );
};

export default MusicBar;
const Wrapper = styled.div`
  margin-top: 20px;
  background: #ffffff;
  border-radius: 25px;
  width: 90%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const PlayTime = styled.progress`
  width: 90%;
  background-color: #ff8a80;
  height: 3px;
  ::-webkit-progress-value {
    background-color: #ff0000;
    border-radius: 10px;
  }

  ::-moz-progress-bar {
    background-color: #ff0000;
    border-radius: 10px;
  }

  ::-webkit-progress-bar {
    background-color: #ff8a80;
    border-radius: 10px;
  }

  ::-moz-progress-bar {
    background-color: #ff8a80;
    border-radius: 10px;
  }
`;
const MusicDot = styled.div<{ age: number }>`
  position: absolute;
  width: 10px;
  height: 10px;
  background: #fff6f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  left: ${(props) => String(props.age)}%;
`;
const Age = styled.div`
  position: absolute;
  left: 51.5%;
  font-size: 10px;
  top: 25px;
  color: white;
`;
