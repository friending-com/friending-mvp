import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
interface link {
  src: string;
  link: string;
}
const SNSSection = ({ linkObj }: { linkObj: link[] }) => {
  return (
    <>
      <IconWrapper>
        {linkObj.map((link) => (
          <Icon src={link.src} key={link.src} link={link.link} />
        ))}
      </IconWrapper>
    </>
  );
};

export default SNSSection;

const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: -30px;
  background-color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 90%;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;
