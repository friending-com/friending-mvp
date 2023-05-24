import { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import Introduce from './components/HashTagSection/Introduce';
import Interest from './components/HashTagSection/Interest';
import useSlider from '../../hook/useSlider';
import { PanInfo } from 'framer-motion';
import KakaoSendButton from './components/KakaoSendButton';
import Header from './components/Header';
export interface link {
  src: string;
  link: string;
}
export interface IUserData {
  name: string;
  age: number;
  img: string;
  hashTag: {
    type: string;
    value: string;
  }[];
  interest: string[];
}
interface IIndex {
  index: number;
}

const Profile = ({
  userData,
  linkObj,
}: {
  userData: IUserData;
  linkObj: link[];
}) => {
  const components = [
    <Introduce data={userData.hashTag} />,
    <Interest name={userData.name} interest={userData.interest} />,
  ];
  const [index, direction, increase, decrease, animationVariant] = useSlider(
    components,
    0.1,
    360
  );
  const [dragStartX, setdragStartX] = useState(0);
  const handleScroll = (_: any, info: PanInfo) => {
    if (dragStartX > info.point.x) increase();
    else decrease();
  };
  return (
    <Wrapper>
      <Header userData={userData} linkObj={linkObj} />
      <RelativeWrapper index={index}>
        <AnimatePresence initial={false} custom={direction}>
          <FeatureWrapper
            drag="x"
            key={index}
            variants={animationVariant}
            initial="initial"
            animate="visible"
            exit="exit"
            onDragStart={(_, info) => {
              setdragStartX((prev) => (prev = info.point.x));
            }}
            onDragEnd={handleScroll}
            custom={direction}
          >
            {components.map(
              (com, i) => i === index && <div key={i}>{com}</div>
            )}
          </FeatureWrapper>
        </AnimatePresence>
      </RelativeWrapper>
      <KakaoSendButton />
      <IndexWrapper>
        {Array.from({ length: components.length }).map((_, i) =>
          i === index ? <SelectIndex /> : <Index />
        )}
      </IndexWrapper>
    </Wrapper>
  );
};

export default Profile;
const Wrapper = styled.div`
  margin-top: 20px;
  background: #ffffff;
  width: 90%;
  border-radius: 20px;
`;

const RelativeWrapper = styled.div<IIndex>`
  margin-top: 40px;
  padding-top: 20px;
  padding-bottom: 10px;
  height: ${(props) => (props.index === 0 ? '200px' : '300px')};
  overflow: hidden;
  position: relative;
`;
const FeatureWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
`;

const Index = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: black;
`;
const SelectIndex = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #ff7da4;
`;
const IndexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  padding: 5px;
`;
