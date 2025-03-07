import React, { useState, useEffect, useRef } from 'react';
import './css/ClosingSection.css';
import SubscriptionButton from './common/SubscriptionButton';

const ClosingSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(50);
  const [blurAmount, setBlurAmount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 모바일 여부 확인 함수
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 초기 로드 및 리사이즈 시 모바일 여부 확인
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();

        // 모바일에서는 더 일찍 페이드인 시작
        const scrollStart = isMobile
          ? window.innerHeight * 1.1 // 모바일: 110% 뷰포트 높이
          : window.innerHeight * 1.5; // 데스크톱: 150% 뷰포트 높이

        if (rect.top < scrollStart) {
          // 모바일에서 더 빠른 진행률 계산
          const transitionLength = isMobile
            ? window.innerHeight * 0.2 // 모바일: 짧은 전환 구간
            : window.innerHeight * 0.4; // 데스크톱: 긴 전환 구간

          const progress = Math.min(1, (scrollStart - rect.top) / (scrollStart - transitionLength));
          setOpacity(progress);
          setTranslateY(50 * (1 - progress));
          setBlurAmount(15 * (1 - progress));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // 초기 계산
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]); // isMobile이 변경될 때마다 이펙트 재실행

  return (
    <section
      ref={sectionRef}
      className="ClosingSectionContainer"
      style={{
        opacity: opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out', // 전환 시간 증가
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        className="ClosingSectionOverlay"
        style={{
          backdropFilter: `blur(${blurAmount}px)`,
          transition: 'backdrop-filter 0.6s ease-out',
        }}
      ></div>
      <div className="ClosingSectionGradient"></div>
      <div className="ClosingSectionContent">
        <div className="ClosingSectionSubscribeText">
          <span className="ClosingSectionHighlight">Haruhan 지식</span>
          <br></br>무료로 구독하고 지식 얻어가세요!
        </div>
        <SubscriptionButton size={'Large'} />
      </div>
    </section>
  );
};

export default ClosingSection;
