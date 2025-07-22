import React, { Suspense, lazy } from 'react';
import styled from '@emotion/styled';
import Underlay from './Hero/Underlay';
import LoadingSpinner from '@common/LoadingSpinner';

const ThreeScene = lazy(() => import('./Hero/ThreeScene'));

const HeroContainer = styled.div`
  height: 100vh;
  position: relative;
  background: linear-gradient(180deg, #e6eaf5 0%, #f6f6f6 100%);
`;

const HeroSection = () => {
  return (
    <HeroContainer data-testid="hero-section">
      <Suspense fallback={<LoadingSpinner />}>
        <ThreeScene />
      </Suspense>
      <Underlay />
    </HeroContainer>
  );
};

export default HeroSection;
