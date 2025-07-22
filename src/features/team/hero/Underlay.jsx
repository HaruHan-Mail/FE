import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const UnderlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 10%;
  left: 6%;
  max-width: 500px;
  text-align: left;

  @media (min-width: 768px) {
    bottom: 15%;
    left: 8%;
    max-width: 600px;
  }
  
  @media (min-width: 1280px) {
    max-width: 800px;
  }
`;

const AnimatedDiv = styled.div`
  animation: ${fadeIn} 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  opacity: 0;
  transform: translateY(30px);
`;

const Title = styled(AnimatedDiv)`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #282828;
  text-shadow: 0 1px 1px rgba(240, 240, 240, 0.6);
  word-break: keep-all;

  @media (min-width: 768px) {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
  
  @media (min-width: 1280px) {
    font-size: 5rem;
  }
`;

const Subtitle = styled(AnimatedDiv)`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  animation-delay: 0.2s;
  color: #4a4a4a;
  text-shadow: 0 1px 1px rgba(240, 240, 240, 0.5);

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1280px) {
    font-size: 1.25rem;
  }
`;

// const Hint = styled(AnimatedDiv)`
//   position: absolute;
//   bottom: 40px;
//   right: 40px;
//   font-size: 0.8rem;
//   font-weight: 500;
//   color: #555;
//   text-shadow: 0 1px 2px rgba(255, 255, 255, 0.4);
//   animation-delay: 0.5s;

//   @media (min-width: 768px) {
//     font-size: 0.9rem;
//   }
// `;

const Underlay = () => {
  return (
    <UnderlayContainer>
      <TextContainer>
        <Title>매일, 당신의 지성을 깨우는 시간</Title>
        <Subtitle>
          하루한은 일상에 영감을 더하는 <br/><b>지식과 컨텐츠</b>를 하루에 하나씩 전달합니다. <br/>성장을 위한 작은 습관을
          시작해보세요.
        </Subtitle>
      </TextContainer>
      {/* <Hint>화면의 구슬들과 상호작용 해보세요</Hint> */}
    </UnderlayContainer>
  );
};

export default Underlay; 