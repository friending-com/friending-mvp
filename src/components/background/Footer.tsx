import styled from 'styled-components';

const Footer = ({
  handleClick,
  fileName,
}: {
  handleClick: () => void;
  fileName: string;
}) => {
  return (
    <ButtonWrapper>
      <a href={`/${fileName}.png`} download>
        <Button>갤러리에 저장</Button>
      </a>
      <Button onClick={handleClick}>앱 다운로드</Button>
    </ButtonWrapper>
  );
};

export default Footer;
const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  a,
  a:link {
    text-decoration: none;
  }
`;
const Button = styled.div`
  cursor: pointer;
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
`;
