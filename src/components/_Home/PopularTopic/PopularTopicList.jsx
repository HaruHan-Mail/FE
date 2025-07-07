import React from 'react';
import styled from '@emotion/styled';
import PopularTopicItem from './PopularTopicItem';
import { usePopularContent } from '../../../hooks/queries';
import { getPopularImages } from '../../../utils/getPopularImages';
import LoadingSpinner from '../../common/LoadingSpinner';

const Container = styled.div`
  width: 100%;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
  grid-template-columns: 1fr;
  grid-auto-rows: 250px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GridItem = styled.div`
  @media (min-width: 768px) {
    &:nth-of-type(1) {
      grid-column: span 2;
    }
    &:nth-of-type(4) {
      grid-column: span 2;
    }
  }

  @media (min-width: 1024px) {
    &:nth-of-type(1) {
      grid-column: span 2;
      grid-row: span 2;
  }
    &:nth-of-type(4) {
      grid-column: span 2;
      grid-row: auto;
    }
  }
`;

const PopularTopicList = () => {
  const { data: popularContent, isLoading, error } = usePopularContent();
  const images = getPopularImages();

  if (isLoading) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div>인기 컨텐츠를 불러오는데 실패했습니다.</div>
      </Container>
    );
  }

  if (!popularContent || popularContent.length === 0) {
    return (
      <Container>
        <div>인기 컨텐츠가 없습니다.</div>
      </Container>
    );
  }

  return (
      <Container>
      <GridContainer>
        {popularContent.slice(0, 5).map((item, idx) => (
          <GridItem key={item.id || idx}>
            <PopularTopicItem title={item.title} image={images[idx]} />
          </GridItem>
          ))}
      </GridContainer>
      </Container>
  );
};

export default PopularTopicList;
