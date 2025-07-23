import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 60%);
    z-index: 1;
    transition: background 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.01);
    &::before {
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 60%);
    }
  }
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Content = styled.div`
  color: white;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 2;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
  transition: bottom 0.3s ease-in-out;

  ${Container}:hover & {
    bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    bottom: 1.5rem;
    left: 1.5rem;
    right: 1.5rem;
    font-size: 1.25rem;

    ${Container}:hover & {
      bottom: 2rem;
    }
  }
`;

const PopularTopicItem = ({ title, image, index, className }) => {
  return (
    <Container className={`${className} item-${index}`}>
      <Img src={image} alt={title} loading="lazy" />
      <Content>{title}</Content>
    </Container>
  );
};

export default PopularTopicItem;
