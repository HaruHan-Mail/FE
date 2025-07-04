import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 3rem 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 2rem 0;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const Summary = styled.h4`
  font-size: 1rem;
  padding:  0 0 1rem 0;
`;

const Content = styled.p`
  color: var(--d-grey);
  font-size: 1rem;
  line-height: 2;
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
