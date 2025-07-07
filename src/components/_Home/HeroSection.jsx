import React from 'react';
import styled from '@emotion/styled';
import ThreeScene from './Hero/ThreeScene';
import Underlay from './Hero/Underlay';

const HeroContainer = styled.div`
  height: 100vh;
  position: relative;
  background: linear-gradient(180deg, #e6eaf5 0%, #f6f6f6 100%);
`;

const HeroSection = () => {
  return (
    <HeroContainer data-testid="hero-section">
      <Underlay />
      <ThreeScene />
    </HeroContainer>
  );
};

export default HeroSection;
