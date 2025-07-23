import React from 'react';
import styled from '@emotion/styled';
import PopularTopicItem from './PopularTopicItem';
import { usePopularContent } from '@hooks/queries';
import { PopularImages } from './utils/getPopularImages';
import LoadingSpinner from '@common/LoadingSpinner';

const AdditionalContent = {
  id: '999',
  title: '하루의 소식 Haruhan',
  summary: '',
  background: '',
  importance: '',
  tip: '',
  additionalResources: '',
};

const Container = styled.div`
  width: 100%;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  grid-template-rows: 300px 300px 300px;
  gap: 1rem;
  grid-template-areas:
    'item-1 item-1 item-2 item-3'
    'item-4 item-4 item-6 item-6'
    'item-4 item-4 item-5 item-5';

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 250px;
    grid-template-areas:
      'item-1 item-2'
      'item-3 item-4'
      'item-5 item-4'
      'item-6 item-6';
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-template-areas:
      'item-1'
      'item-2'
      'item-3'
      'item-4'
      'item-5'
      'item-6';
  }
`;

const GridItem = styled.div`
  grid-area: ${({ index }) => `item-${index + 1}`};
  will-change: transform;
`;

const PopularTopicList = () => {
  const { data: popularContent = [], isLoading, error } = usePopularContent();

  const withAdditionalContent = [...popularContent, AdditionalContent];

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

  if (!withAdditionalContent || withAdditionalContent.length === 0) {
    return (
      <Container>
        <div>인기 컨텐츠가 없습니다.</div>
      </Container>
    );
  }

  return (
    <Container>
      <GridContainer>
        {withAdditionalContent.map((item, idx) => (
          <GridItem key={item.id || idx} index={idx}>
            <PopularTopicItem title={item.title} image={PopularImages[idx]} index={idx} />
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  );
};

export default PopularTopicList;
