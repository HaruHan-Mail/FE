import React from 'react';
import styled from '@emotion/styled';
import aboutImg from './assets/about.avif';
import bgImg from './assets/about-bg.svg';

const Container = styled.div`…`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1rem;
  position: relative;
  padding: 20vh 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  padding: 3.5rem;
`;
const ImageHolder = styled.div`
  height: 750px;
  width: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 96%;
    width: 96%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 400px;
    width: 300px;
  }
`;
const TextContainer = styled.div`
  flex: 1;
  padding: 3.5rem;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  h1 {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 7rem;
    font-weight: bold;
    transform: translateX(-350px);
    line-height: 1;
    text-align: end;
    align-self: flex-start;

    @media (max-width: 768px) {
      font-size: 4rem;
      transform: translateX(0);
      text-align: center;
      align-self: center;
    }
  }

  p {
    font-size: 1.5rem;
    opacity: 0.8;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      text-align: center;
      align-self: center;
    }
  }
`;

const AbsoluteBox = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
`;
const TopLeft = styled(AbsoluteBox)`
  top: 0;
  left: 0;
  border-left: 5px solid #111;
  border-top: 5px solid #111;
`;

const BottomRight = styled(AbsoluteBox)`
  bottom: 0;
  right: 0;
  border-right: 5px solid #111;
  border-bottom: 5px solid #111;
`;

const BgImage = styled.img`
  position: absolute;
  right: 200px;
  opacity: 0.1;
  animation: rotation 30s linear infinite;

  @keyframes rotation {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    right: 10px;
  }
`;

const TeamAbout = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <ImageHolder>
            <TopLeft />
            <BottomRight />
            <img src={aboutImg} alt="about" />
          </ImageHolder>
        </ImageContainer>
        <TextContainer>
          <BgImage src={bgImg} alt="bg" />
          <h1>
            매일 아침 한 가지, <br />
            New Insight
          </h1>
          <p>Haruhan은 바쁜 일상 속에서도 매일 한 가지 새로운 지식을 쉽고 재미있게 전해드립니다</p>
          <p>짧지만 깊이 있는 인사이트로, 오늘 하루도 성장하는 경험을 해보세요</p>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default TeamAbout;
