import { useState, useEffect } from 'react';

const useCombinedScrollEffect = (ref) => {
  // 초기값 설정 - 기본적으로 컴포넌트가 보이도록 설정
  const [effects, setEffects] = useState({
    blurAmount: 0,
    descOpacity: 1,  // 항상 1로 시작하여 내용이 보이게 함
    closingOpacity: 0,
    translateY: 30,
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (!ref.current) return; // ref가 없으면 아무것도 하지 않음
      
      const rect = ref.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const visibleThreshold = isMobile ? -0.3 : -0.1;

      // 화면에 표시되는 여부 확인 - 더 관대한 조건으로 변경
      const isVisible = sectionTop < window.innerHeight * 1.5;
      
      if (isVisible) {
        const normalizedPosition = sectionTop / window.innerHeight;
        if (normalizedPosition < visibleThreshold) {
          const scrollProgress = Math.max(
            0,
            Math.min(
              1,
              (visibleThreshold - normalizedPosition) / (Math.abs(visibleThreshold) + 0.2),
            ),
          );
          const maxBlur = isMobile ? 8 : 12;
          const blurAmount = scrollProgress * maxBlur;
          const descOpacity = 1 - scrollProgress * 0.7;
          const closingProgress = Math.max(0, Math.min(1, (scrollProgress - 0.05) / 0.5));
          const closingOpacity = closingProgress;
          const translateY = 30 * (1 - closingProgress);

          setEffects({ blurAmount, descOpacity, closingOpacity, translateY });
        } else {
          // 기본 상태 - 항상 표시
          setEffects({ blurAmount: 0, descOpacity: 1, closingOpacity: 0, translateY: 30 });
        }
      }
    };

    // 초기 렌더링 시 즉시 실행
    setTimeout(handleScroll, 100);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('load', handleScroll);
    };
  }, [isMobile, ref]);

  return effects;
};

export default useCombinedScrollEffect;
