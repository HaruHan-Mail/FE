import React from 'react';
import Lottie from 'lottie-react';
import popularAni from '../../../assets/lottiefiles/popularAni.json';
import styled from '@emotion/styled'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LottieContainer = styled.div`
  width: 300px;

  @media (min-width: 1024px) {
    width: 400px;
  }
`;
const Content = styled.div`
  text-align: center;
  font-size: 1rem;

  @media (min-width: 1024px) {  
    font-size: 1.5rem;
  }

  .highlight {
    color: var(--primary);
  }
`;

const PopularTopicSectionLottie = () => {
  return (
    <Container>
      <LottieContainer>
        <Lottie animationData={popularAni} loop={true} />
      </LottieContainer>
      <Content>
        <h1>
          인기가 많은
          <span className="highlight"> 교양 지식</span>이에요!
        </h1>
      </Content>
    </Container>
  );
};

export default PopularTopicSectionLottie;
