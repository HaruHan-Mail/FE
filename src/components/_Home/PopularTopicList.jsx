import React, { useEffect, useState } from 'react';
import { popularMockData } from '../../mocks/popularityData';
import PopularTopicItem from './PopularTopicItem';
import './css/PopularTopicList.css';
import useShowcaseAnimation from '../../hooks/useShowcaseAnimation';

const PopularTopicList = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % popularMockData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useShowcaseAnimation(index, 'PopularTopicItem', popularMockData.length);

  return (
    <div className="PopularTopicList">
      {popularMockData.map((item, idx) => (
        <PopularTopicItem key={idx} icon={item.icon} title={item.title} />
      ))}
    </div>
  );
};

export default PopularTopicList;
