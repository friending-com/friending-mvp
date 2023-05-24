import { motion } from 'framer-motion';
import styled from 'styled-components';

const Interest = ({ name, interest }: { name: string; interest: string[] }) => {
  const circleData = [
    {
      size: '170px',
      x: '0px',
      y: '0px',
      color: '#FF7DA4',
      text: interest[0],
    },
    {
      size: '100px',
      x: '10px',
      y: '170px',
      color: '#FF8A80',
      text: interest[1],
    },
    {
      size: '54px',
      x: '95px',
      y: '245px',
      color: '#B880FF',
      text: interest[2],
    },
    {
      size: '100px',
      x: '125px',
      y: '160px',
      color: '#8A80FF',
      text: interest[3],
    },
    {
      size: '60px',
      x: '170px',
      y: '100px',
      color: '#FFEB80',
      text: interest[4],
    },
  ];
  return (
    <Wrapper>
      <Title>{name}님의 관심사</Title>
      <CircleWrapper>
        {circleData.map((data, index) => (
          <Circle
            key={index}
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
