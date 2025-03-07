import { useState, useEffect } from 'react';

const useCombinedScrollEffect = (ref) => {
  const [effects, setEffects] = useState({
    blurAmount: 0,
    descOpacity: 1,
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
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const visibleThreshold = isMobile ? -0.3 : -0.1;

        if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
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
            setEffects({ blurAmount: 0, descOpacity: 1, closingOpacity: 0, translateY: 30 });
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile, ref]);

  return effects;
};

export default useCombinedScrollEffect;
