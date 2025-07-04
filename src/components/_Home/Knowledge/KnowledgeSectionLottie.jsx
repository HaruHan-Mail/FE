import React from 'react';
import Lottie from 'lottie-react';
import knowledgeAni from '../../../assets/lottiefiles/knowledgeAni.json';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin: 0 auto;
  max-width: 1000px;
  padding: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
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
  display: flex;

  h1 {
    padding: 20px 0;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2;
  }

  .highlight {
    color: var(--primary);
    font-weight: 700;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 2rem;
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
          원하는 시간에
          <span className="highlight"> 메일</span>을 통해 <br />
          <span className="highlight">짧지만 알찬 지식</span>을
          <br /> 아래와 같이 공유해드려요!
        </h1>
      </Description>
    </Container>
  );
};

export default KnowledgeSectionLottie;
