import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Icon from './components/Icon';
import Modal from './components/Modal';
import { AnimatePresence } from 'framer-motion';
function App() {
  const [modal, setModal] = useState(false);
  const timerRef = useRef<any>(null);
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setModal(true);
    }, 3000);
    return () => clearTimeout(timerRef.current);
  }, []);
  const handleClick = () => {
    clearTimeout(timerRef.current);
    setModal(true);
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {modal && <Modal setModal={() => setModal(false)} />}
      </AnimatePresence>
      <Section>
        <ImageWrapper>
          <Image src="/rabit.png" alt="rabbit" />
        </ImageWrapper>
        <Name>Jeans</Name>
        <IconWrapper>
          {[
            '/call.png',
            '/instagram.png',
            '/facebook.png',
            '/twitter.png',
            '/talk.png',
          ].map((src) => (
            <Icon src={src} key={src} />
          ))}
        </IconWrapper>
        <FeatureWrapper>
          <Feature>
            <FeatureIcon src="fire.png" width="20px" height="20px" alt="img" />
            춤추기
          </Feature>
          <Feature>
            <FeatureIcon src="fire.png" width="20px" height="20px" alt="img" />
            코딩하기
          </Feature>
        </FeatureWrapper>
      </Section>
      <ButtonWrapper>
        <Button>갤러리에 저장</Button>
        <Button onClick={handleClick}>앱 다운로드</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  flex-direction: column;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  border-radius: 25px;
  min-height: 600px;
`;
const Image = styled.img`
  width: 100px;
`;
const ImageWrapper = styled.div`
  border-radius: 50%;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: rgba(68, 64, 105, 0.08) 3px 3px 3px 3px;
`;
const Name = styled.div`
  font-size: 30px;
  font-weight: 700px;
  margin-top: 20px;
`;
const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  gap: 10px;
  margin-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
`;

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 95%;
  gap: 10px;
`;
const Feature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: black;
  color: white;
  font-size: 20px;
  background-color: #fcbdbd;
  border-radius: 25px;
  height: 35px;
`;
const FeatureIcon = styled.img`
  position: absolute;
  left: 10px;
  width: 20px;
  height: 20px;
`;
const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Button = styled.div`
  cursor: pointer;
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
`;
