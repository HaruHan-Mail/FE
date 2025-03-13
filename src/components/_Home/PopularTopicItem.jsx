import React from 'react';
import './css/PopularTopicItem.css';

const PopularTopicItem = ({ icon, title }) => {
  return (
    <div className="PopularTopicItem">
      {icon} {title}
    </div>
  );
};

export default PopularTopicItem;
