import React, { useEffect, useState, useRef } from 'react';
import './css/HeroSection.css';
import SubscriptionButton from './SubscriptionButton';
import { getBackgroundVideos } from './utils/getBackgroundVideos';

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
    <section className="HeroSectionContainer">
      <video
        key={currentVideoIndex} // 영상 변경 시 재마운트되어 새 영상 시작
        className="HeroSectionBackgroundVideo"
        ref={videoRef}
        src={videos[currentVideoIndex]}
        autoPlay
        muted
        playsInline
      />
      <div className="HeroSectionContent">
        <h1 className="HeroSectionH1">
          <span className="HeroSectionHighlight">HaruHan지식</span>이 <br />
          알아두면 쓸모 있는 지식을
          <br />
          <span className="HeroSectionHighlight">하루</span>에{' '}
          <span className="HeroSectionHighlight">하나</span>씩 보내드릴게요!
        </h1>
        <SubscriptionButton size={'Large'} />
      </div>
    </section>
  );
};

export default HeroSection;
