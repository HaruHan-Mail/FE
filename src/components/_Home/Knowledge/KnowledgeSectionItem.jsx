import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 2.5rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  font-weight: bold;

  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

const Summary = styled.h4`
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
    <Container onClick={onClick}>
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
