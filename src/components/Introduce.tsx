import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Introduce = ({ data }: { data: string[] }) => {
  return (
    <Wrapper>
      {data.map((hashTag, index) => (
        <Feature
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {hashTag}
        </Feature>
      ))}
    </Wrapper>
  );
};

export default Introduce;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Feature = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #333333;
  font-size: 15px;
  font-family: 'Pretendard';
  border-radius: 50px;
  height: 44px;
  margin-top: 10px;
  background: #f4f4f4;
  border-radius: 8px;
  width: 80%;
`;
