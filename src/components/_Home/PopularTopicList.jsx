import React, { useEffect, useState } from 'react';
import PopularTopicItem from './PopularTopicItem';
import './css/PopularTopicList.css';
import useShowcaseAnimation from '../../hooks/useShowcaseAnimation';
import { getPopularContent } from '../../apis/userContentApi';
import { getPopularImages } from '../../utils/getPopularImages';

const PopularTopicList = () => {
  const [index, setIndex] = useState(0);
  const [popularData, setPopularData] = useState([]);

  const images = getPopularImages();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPopularContent();
        setPopularData(res.data);
      } catch (error) {
        console.error('인기 콘텐츠 불러오기 실패:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % popularData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [popularData]);

  useShowcaseAnimation(index, 'PopularTopicItem', popularData.length);

  return (
    <div className="PopularTopicList">
      {popularData.map((item, idx) => (
        <PopularTopicItem key={idx} title={item.title} image={images[idx]} />
      ))}
    </div>
  );
};

export default PopularTopicList;
