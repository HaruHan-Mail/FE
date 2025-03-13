import { useEffect } from 'react';
import { animate } from '@motionone/dom';

const useShowcaseAnimation = (activeIndex, itemClassName, itemCount, options = {}) => {
  const { duration = 1.5, offset = 200 } = options;

  useEffect(() => {
    const elements = document.querySelectorAll(`.${itemClassName}`);
    elements.forEach((el, i) => {
      const prevIndex = (activeIndex - 1 + itemCount) % itemCount;
      const nextIndex = (activeIndex + 1) % itemCount;

      if (i === activeIndex) {
        animate(el, { opacity: 1, scale: 1, x: 0, zIndex: 3 }, { duration });
      } else if (i === prevIndex) {
        animate(el, { opacity: 0.5, scale: 0.8, x: -offset, zIndex: 2 }, { duration });
      } else if (i === nextIndex) {
        animate(el, { opacity: 0.5, scale: 0.8, x: offset, zIndex: 2 }, { duration });
      } else {
        animate(el, { opacity: 0, scale: 0.5, x: 0, zIndex: 1 }, { duration });
      }
    });
  }, [activeIndex, itemCount, duration, offset, itemClassName]);
};

export default useShowcaseAnimation;
