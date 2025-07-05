import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%);
    z-index: 1;
  }

  @media (min-width: 1024px) {
    width: 350px;
    height: 350px;
  }
`;

const Content = styled.div`
  color: white;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  z-index: 2;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: left;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
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
