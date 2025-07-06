import React from 'react';
import Lottie from 'lottie-react';
import knowledgeAni from '../../../assets/lottiefiles/knowledgeAni.json';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto 4rem;
  padding: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const LottieContainer = styled.div`
  width: 300px;

  @media (min-width: 1024px) {
    width: 450px;
  }
`;

const Description = styled.div`
  flex: 1;
  text-align: center;

  h1 {
    font-size: 2rem;
    line-height: 1.5;
    font-weight: 600;
  }

  .highlight {
    color: var(--primary);
  }

  @media (min-width: 1024px) {
    text-align: left;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

const KnowledgeSectionLottie = () => {
  return (
    <Container>
      <LottieContainer>
        <Lottie animationData={knowledgeAni} loop={true} />
      </LottieContainer>
      <Description>
        <h1>
          <span className="highlight">매일 아침 7시</span>,
          <br />
          당신의 지적 호기심을
          <br />
          채워줄 이야기
        </h1>
      </Description>
    </Container>
  );
};

export default KnowledgeSectionLottie;
