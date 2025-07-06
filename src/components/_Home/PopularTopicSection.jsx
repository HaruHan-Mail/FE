import React from 'react';
import PopularTopicList from './PopularTopic/PopularTopicList';
import styled from '@emotion/styled';

const SectionContainer = styled.section`
  padding: 6rem 1.5rem;
  background: linear-gradient(180deg, #e6eaf5 0%, #f6f6f6 100%);
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: #555;
  margin-bottom: 5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 4rem;
  }
`;

const PopularTopicSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>오늘 사람들이 가장 많이 찾은 지식</SectionTitle>
      <SectionSubtitle>
        지금 가장 주목받는 주제들을 한눈에 확인하고 새로운 트렌드를 발견해 보세요.
      </SectionSubtitle>
      <PopularTopicList />
    </SectionContainer>
  );
};

export default PopularTopicSection;
