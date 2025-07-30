import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background: linear-gradient(180deg, #f6f6f6 0%, #e6eaf5 100%);
  border-radius: 5px;
  padding: 2.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
    transform: scale(1.05);
  }
`;

const Title = styled.h4`
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  font-weight: bold;

  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

const Summary = styled.h5`
  font-size: 1.1rem;
  padding: 0 0 1.5rem 0;
  color: #333;
`;

const Content = styled.p`
  color: var(--l-grey);
  font-size: 1rem;
  line-height: 2;
`;

const KnowledgeSectionItem = ({ icon, title, summary, contents, onClick }) => {
  return (
    <Container onClick={onClick} className="item">
      <Title>
        {icon} {title}
      </Title>
      <Summary>{summary}</Summary>
      {contents && contents.map((content, index) => <Content key={index}>{content}</Content>)}
    </Container>
  );
};

export default KnowledgeSectionItem;
