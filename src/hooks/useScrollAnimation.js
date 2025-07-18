import { useEffect, useRef, useState } from 'react';

// 키네틱 타이포그래피를 위한 텍스트 분할 및 애니메이션 훅
const useKineticText = (text, options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [chars, setChars] = useState([]);

  const {
    threshold = 0.1,
    staggerDelay = 0.05,
    animationDuration = 0.8,
    animationType = 'fadeInUp'
  } = options;

  // 텍스트를 개별 문자로 분할하는 함수
  const splitTextIntoChars = (textContent) => {
    if (!textContent) return [];
    
    return textContent.split('').map((char, index) => ({
      char: char === ' ' ? '\u00A0' : char, // 공백을 non-breaking space로 변환
      index,
      delay: index * staggerDelay
    }));
  };

  useEffect(() => {
    if (text) {
      setChars(splitTextIntoChars(text));
    }
  }, [text, staggerDelay]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // 애니메이션 스타일 계산
  const getCharStyle = (charData, isVisible) => {
    const baseStyle = {
      display: 'inline-block',
      transition: `all ${animationDuration}s cubic-bezier(0.165, 0.84, 0.44, 1)`,
      transitionDelay: isVisible ? `${charData.delay}s` : '0s'
    };

    switch (animationType) {
      case 'fadeInUp':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
        };
      case 'fadeInScale':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.5)'
        };
      case 'slideInRight':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(20px)'
        };
      case 'rotateIn':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'rotate(0deg)' : 'rotate(180deg)'
        };
      default:
        return baseStyle;
    }
  };

  return {
    ref,
    chars,
    isVisible,
    getCharStyle
  };
};

// 스크롤 기반 애니메이션 훅 (기존 유지)
const useScrollAnimation = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

export { useKineticText };
export default useScrollAnimation; 