import React from 'react';
import styled from '@emotion/styled';
import PopularTopicItem from './PopularTopicItem';
import { usePopularContent } from '../../../hooks/queries';
import { getPopularImages } from '../../../utils/getPopularImages';
import LoadingSpinner from '../../common/LoadingSpinner';

const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media (min-width: 1024px) {
    height: 450px;
  }
`;

const PopularTopicList = () => {
  const { data: popularContent, isLoading } = usePopularContent();
  const images = getPopularImages();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      {popularContent.map((item, idx) => (
        <PopularTopicItem 
          key={item.id || idx} 
          title={item.title} 
          image={images[idx]} 
        />
      ))}
    </Container>
  );
};

export default PopularTopicList;
