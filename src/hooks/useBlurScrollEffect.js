import { useState, useEffect } from 'react';

const useBlurScrollEffect = (ref) => {
  const [blurAmount, setBlurAmount] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const { top, height } = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      
      // 중간 도달 기준점을 높이의 절반으로 설정
      const triggerPoint = viewportHeight * 0.05;

      if (top < triggerPoint) {
        const progress = Math.min((triggerPoint - top) / height, 1);
        const maxBlur = 80;
        const maxOpacityReduction = 1;

        setBlurAmount(progress * maxBlur);
        setOpacity(1 - progress * maxOpacityReduction);
      } else {
        setBlurAmount(0);
        setOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { blurAmount, opacity };
};

export default useBlurScrollEffect;
