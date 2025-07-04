import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 1024px) {
    width: 400px;
    height: 400px;
    font-size: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const Content = styled.div`
  color: white;
  position: relative;
  z-index: 2;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const PopularTopicItem = ({ icon, title, image }) => {
  return (
    <Container style={{ backgroundImage: `url(${image})` }}>
      <Content>
        {icon} {title}
      </Content>
    </Container>
  );
};

export default PopularTopicItem;
