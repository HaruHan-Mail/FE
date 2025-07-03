import { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import SubscriptionButton from '../common/SubscriptionButton';
import { getBackgroundVideos } from '../../utils/getBackgroundVideos';

// Styled Components
const Container = styled.section`
  position: relative;
  width: 100vw;
  height: auto;
  background-color: rgba(255, 255, 255, 0.7);
  padding-block: 6rem;

  @media (min-width: 1024px) {
    padding-block: 9rem;
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  height: auto;
  font-size: 1.5rem;
  text-align: center;
  line-height: 3rem;
  margin-bottom: 2.5rem;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    line-height: 5rem;
    margin-bottom: 5rem;
  }
`;

const Highlight = styled.span`
  color: var(--primary);
`;

const HeroSection = () => {
  const videos = getBackgroundVideos();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000);

    return () => clearTimeout(timer);
  }, [currentVideoIndex, videos.length]);

  return (
    <Container>
      <BackgroundVideo
        key={currentVideoIndex}
        ref={videoRef}
        src={videos[currentVideoIndex]}
        autoPlay
        muted
        playsInline
      />
      <Content>
        <Title>
          <Highlight>HaruHan지식</Highlight>이 <br />
          알아두면 쓸모 있는 지식을
          <br />
          <Highlight>하루</Highlight>에{' '}
          <Highlight>하나</Highlight>씩 보내드릴게요!
        </Title>
        <SubscriptionButton size={'Large'} />
      </Content>
    </Container>
  );
};

export default HeroSection;
