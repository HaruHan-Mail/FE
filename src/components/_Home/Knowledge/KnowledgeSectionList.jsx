import React from 'react';
import { knowledgeMockData } from '../../../mocks/knowledgeData';
import KnowledgeSectionItem from './KnowledgeSectionItem';
import styled from '@emotion/styled';
import useModal from '../../../hooks/useModal';
import SubscriptionModal from '../../modal/SubscriptionModal';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const KnowledgeSectionList = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <Container>
      {knowledgeMockData.map((item, index) => (
        <KnowledgeSectionItem
          key={index}
          icon={item.icon}
          title={item.title}
          summary={item.summary}
          contents={item.contents}
          onClick={openModal}
        />
      ))}
    {isModalOpen && <SubscriptionModal isOpen={isModalOpen} onClose={closeModal} />}
    </Container>
  );
};

export default KnowledgeSectionList;
