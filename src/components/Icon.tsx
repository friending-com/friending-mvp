import styled from 'styled-components';

const Icon = ({ src, link }: { src: string; link: string }) => {
  return (
    <IconBack>
      <a href={link.includes('010-') ? `tel:${link}` : link}>
        <IconImg src={src}></IconImg>
      </a>
    </IconBack>
  );
};

export default Icon;
const IconBack = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const IconImg = styled.img`
  width: 35px;
  height: 35px;
`;
