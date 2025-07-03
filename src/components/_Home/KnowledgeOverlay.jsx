import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import SubscriptionButton from '../common/SubscriptionButton';

// 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const Container = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  pointer-events: none;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  pointer-events: auto;
  text-align: center;
`;

const Text = styled.div`
  width: 400px;
  color: var(--d-grey);
  font-size: 1.5rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;
  
  .highlight {
    color: var(--primary);
    font-weight: 600;
    
  }
  
  .fade-text {
    display: inline-block;
    margin-top: 0.5rem;
    animation: ${fadeIn} 1s ease-out;
  }
    
  @media (min-width: 1024px) {
    width: 500px;
    font-size: 2rem;
  }


`;

const ButtonWrapper = styled.div`
  animation: ${fadeIn} 1s ease-out;
`;

const KnowledgeOverlay = ({ opacity = 0, translateY = 0 }) => {
  if (opacity === 0) return null;

  return (
    <Container
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
      }}
    >
      <Content>
        <Text>
          <div className="highlight fade-text">Haruhan 지식</div>
          <div className="fade-text">무료로 구독하고 지식 얻어가세요!</div>
        </Text>
        <ButtonWrapper>
          <SubscriptionButton size="Large" />
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

export default KnowledgeOverlay;
