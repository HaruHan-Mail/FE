import React from 'react';
import PopularTopicList from './PopularTopic/PopularTopicList';
import PopularTopicSectionLottie from './PopularTopic/PopularTopicSectionLottie';
import styled from '@emotion/styled';

const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const PopularTopicSection = () => {
  return (
    <Container>
      <PopularTopicSectionLottie />
      <PopularTopicList />
    </Container>
  );
};

export default PopularTopicSection;
