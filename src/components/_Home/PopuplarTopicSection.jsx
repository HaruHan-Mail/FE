import React from 'react';
import './css/PopuplarTopicSection.css';
import PopularTopicList from './PopularTopicList';
import PopularTopicSectionAni from './PopularTopicSectionAni';

const PopuplarTopicSection = () => {
  return (
    <section className="PopuplarTopicSection">
      <PopularTopicSectionAni />
      <PopularTopicList />
    </section>
  );
};

export default PopuplarTopicSection;
