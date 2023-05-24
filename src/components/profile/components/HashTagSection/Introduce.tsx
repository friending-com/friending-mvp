import { motion } from 'framer-motion';
import styled from 'styled-components';
interface IFeature {
  islast?: boolean;
}
const isLast = (index: number, length: number) => {
  return index === length;
};
const Introduce = ({ data }: { data: { type: string; value: string }[] }) => {
  return (
    <Wrapper>
      <FeatureWrapper>
        {data.map((hashTag, index) => (
          <Feature
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <UnderLineWrapper islast={isLast(index, data.length - 1)}>
              <HashTagWrapper>
                <HashTag>{hashTag.type}</HashTag>
                <Value>{hashTag.value}</Value>
              </HashTagWrapper>
            </UnderLineWrapper>
          </Feature>
        ))}
      </FeatureWrapper>
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
  position: relative;

  color: #999999;
`;
const FeatureWrapper = styled.div`
  background: #f5f5f5;
  width: 90%;
  border-radius: 10px;
`;
const HashTagWrapper = styled.div`
  display: flex;

  width: 100%;
`;
const HashTag = styled.div`
  flex-basis: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Value = styled.div`
  flex-basis: 70%;
`;
const UnderLineWrapper = styled.div<IFeature>`
  width: 100%;
  height: 100%;
  border-bottom-style: solid;
  border-width: ${(props) => (props.islast ? '0px' : '1px')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-family: 'Pretendard';
  height: 50px;
  font-weight: 500;
  border-color: #e2e2e2;
`;
