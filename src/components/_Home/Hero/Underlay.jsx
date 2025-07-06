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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
`;

const AnimatedDiv = styled.div`
  animation: ${fadeIn} 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  opacity: 0;
`;

const Title = styled(AnimatedDiv)`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1rem;
  
  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
`;

const Subtitle = styled(AnimatedDiv)`
  font-size: 1.25rem;
  font-weight: 400;
  max-width: 500px;
  line-height: 1.5;
  animation-delay: 0.2s;
  color: #555;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    padding: 0 20px;
  }
`;

const Hint = styled(AnimatedDiv)`
  position: absolute;
  bottom: 40px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #888;
  animation-delay: 0.5s;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const Underlay = () => {
  return (
    <UnderlayContainer>
      <Title>매일, 당신의 지성을 깨우는 시간</Title>
      <Subtitle>하루한은 일상에 영감을 더하는 지식과 컨텐츠를 매일 전달합니다. 성장을 위한 작은 습관을 시작해보세요.</Subtitle>
      <Hint>화면의 구슬들과 상호작용 해보세요</Hint>
    </UnderlayContainer>
  );
};

export default Underlay; 