import KakaoSendButton from './KakaoSendButton';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Kakao = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
 
        </Helmet>
      </HelmetProvider>
      <KakaoSendButton />
    </>
  );
};

export default Kakao;
