import KakaoSendButton from './KakaoSendButton';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Kakao = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <script src="https://developers.kakao.com/sdk/js/kakao.js" />
        </Helmet>
      </HelmetProvider>
      <KakaoSendButton />
    </>
  );
};

export default Kakao;
