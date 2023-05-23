import React, { useEffect } from 'react';
import styled from 'styled-components';
const { Kakao } = window as any;
const KakaoSendButton = () => {
  useEffect(() => {
    createKaKaoButton();
  }, [Kakao]);
  console.log(Kakao);
  console.log((window as any).Kakao);
  const createKaKaoButton = () => {
    if (Kakao) {
      if (!Kakao.isinitialized()) {
        Kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      Kakao.Link.createDefaultButton({
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '타이틀',
          description: '#리액트 #카카오 #공유버튼',

          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        social: {
          likeCount: 77,
          commentCount: 55,
          sharedCount: 333,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };
  return (
    <>
      <Wrapper>
        <StyleDiv>
          <Button id="kakao-link-btn">
            <img src="send.png" alt="send" width="20px"></img>
            <Text>전송하기</Text>
          </Button>
        </StyleDiv>
      </Wrapper>
    </>
  );
};

export default KakaoSendButton;
const Wrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 95%;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
`;
const StyleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid transparent;
  height: 60px;
  border-radius: 10px;
  background-image: linear-gradient(#ffffff, #ffffff),
    linear-gradient(to right, #948bff, #bababa, #5cbbff);
  background-origin: border-box;
  background-clip: content-box, border-box;
  width: 90%;
`;
const Text = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  margin-left: 10px;
`;
