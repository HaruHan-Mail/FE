import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    width: 400px;
    height: 400px;
    font-size: 2rem;
  }
`;

const PopularTopicItem = ({ icon, title, image }) => {
  const style = image
    ? {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        filter: 'brightness(0.5)',
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        borderRadius: 10,
      }
    : {};

  return (
    <>
      <Container>
        <img src={image} alt={title} style={style} />
        <div>
          {icon} {title}
        </div>
      </Container>
    </>
  );
};

export default PopularTopicItem;
