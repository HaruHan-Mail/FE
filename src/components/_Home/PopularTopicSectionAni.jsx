import React from 'react';
import Lottie from 'lottie-react';
import popularAni from '../../assets/lottiefiles/popularAni.json';
import './css/PopularTopicSectionAni.css';

const PopularTopicSectionAni = () => {
  return (
    <div className="PopularTopicSectionAni">
      <div className="PopularTopicSectionLottie">
        <Lottie animationData={popularAni} loop={true} />
      </div>
      <div className="PopularTopicSectionAniContent">
        <h1>
          인기가 많은
          <span className="PopuplarTopicSectionHighlight"> 교양 지식</span>이에요!
        </h1>
      </div>
    </div>
  );
};

export default PopularTopicSectionAni;
