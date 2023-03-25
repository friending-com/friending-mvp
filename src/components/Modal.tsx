import styled from 'styled-components';
import Layout from './Layout';

const Modal = ({ setModal }: { setModal: () => void }) => {
  return (
    <>
      <Layout />
      <Wrapper>
        <Xbutton src="/xbutton.png" onClick={setModal} />
        <Logo src="/logo.png" alt="img" />
        <PlayStore>
          <img src="/playstore.png" width="60px" alt="img" />
          Download
        </PlayStore>
        <RequireWrapper>
          <img src="nfc.png" width="40px" alt="img" />
          NFC
          <img src="qr.png" width="60px" alt="img" />
          QR
        </RequireWrapper>
      </Wrapper>
    </>
  );
};

export default Modal;
const Wrapper = styled.div`
  position: absolute;
  background-color: white;
  min-height: 400px;
  z-index: 999;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
const Logo = styled.img`
  width: 250px;
`;
const PlayStore = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 40px;
`;
const Xbutton = styled.img`
  width: 30px;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
`;
const RequireWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
`;
