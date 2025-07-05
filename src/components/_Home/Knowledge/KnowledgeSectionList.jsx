import React from 'react';
import { knowledgeMockData } from '../../../mocks/knowledgeData';
import KnowledgeSectionItem from './KnowledgeSectionItem';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const KnowledgeSectionList = () => {
  return (
    <Container>
      {knowledgeMockData.map((item, index) => (
        <KnowledgeSectionItem
          key={index}
          icon={item.icon}
          title={item.title}
          summary={item.summary}
          contents={item.contents}
        />
      ))}
    </Container>
  );
};

export default KnowledgeSectionList;
