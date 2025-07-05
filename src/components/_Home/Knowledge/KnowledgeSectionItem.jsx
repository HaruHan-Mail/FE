import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e0e0e0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
  color: #333;

  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

const Summary = styled.h4`
  font-size: 1.1rem;
  padding: 0 0 1.5rem 0;
  color: #555;
  font-weight: 500;
`;

const Content = styled.p`
  color: var(--d-grey);
  font-size: 1rem;
  line-height: 1.8;
`;


const KnowledgeSectionItem = ({ icon, title, summary, contents }) => {
  return (
    <Container>
      <Title>
        {icon} {title}
      </Title>
      <Summary>{summary}</Summary>
      {contents &&
        contents.map((content, index) => (
          <Content key={index}>
            {content}
          </Content>
        ))}
    </Container>
  );
};

export default KnowledgeSectionItem;
