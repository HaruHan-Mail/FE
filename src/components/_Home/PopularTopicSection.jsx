import React from 'react';
import PopularTopicList from './PopularTopic/PopularTopicList';
import styled from '@emotion/styled';

const SectionContainer = styled.section`
  padding: 6rem 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #222;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PopularTopicSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>많은 사람들이 찾은 인기 지식</SectionTitle>
      <SectionSubtitle>
        지금 가장 주목받는 주제들을 확인하고 트렌드를 따라가 보세요.
      </SectionSubtitle>
      <PopularTopicList />
    </SectionContainer>
  );
};

export default PopularTopicSection;
