import { motion } from 'framer-motion';
import styled from 'styled-components';
const circleData = [
  {
    size: '185px',
    x: '0px',
    y: '0px',
    color: '#FF7DA4',
    text: '등산',
  },
  {
    size: '100px',
    x: '10px',
    y: '185px',
    color: '#FF8A80',
    text: '활쏘기',
  },
  {
    size: '54px',
    x: '90px',
    y: '262px',
    color: '#B880FF',
    text: '산책',
  },
  {
    size: '100px',
    x: '125px',
    y: '180px',
    color: '#8A80FF',
    text: '말타기',
  },
  {
    size: '60px',
    x: '180px',
    y: '120px',
    color: '#FFEB80',
    text: '요리',
  },
];
const Interest = () => {
  return (
    <Wrapper>
      <Title>이순신님의 관심사</Title>
      <CircleWrapper>
        {circleData.map((data) => (
          <Circle
            size={data.size}
            color={data.color}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              ease: 'easeOut',
              duration: Math.random() * 2,
            }}
            x={data.x}
            y={data.y}
          >
            {data.text}
          </Circle>
        ))}
      </CircleWrapper>
    </Wrapper>
  );
};

export default Interest;
const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  position: absolute;
`;
const Title = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 20px;
`;
interface Props {
  size: string;
  color: string;
  x: string;
  y: string;
}
const CircleWrapper = styled.div`
  position: relative;
  height: 160px;
`;
const Circle = styled(motion.div)<Props>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  top: ${(props) => props.x};
  left: ${(props) => props.y};
`;
