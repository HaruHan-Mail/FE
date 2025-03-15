import React from 'react';
import './css/PopularTopicSection.css';
import PopularTopicList from './PopularTopicList';
import PopularTopicSectionAni from './PopularTopicSectionAni';

const PopularTopicSection = () => {
  return (
    <section className="PopularTopicSection">
      <PopularTopicSectionAni />
      <PopularTopicList />
    </section>
  );
};

export default PopularTopicSection;
