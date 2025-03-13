import React from 'react';
import './css/PopularTopicItem.css';

const PopularTopicItem = ({ icon, title, image }) => {
  const style = image
    ? {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        filter: 'brightness(0.5)',
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        borderRadius: 10,
      }
    : {};

  return (
    <>
      <div className="PopularTopicItem">
        <img src={image} alt={title} style={style} />
        <div className="PopularTopicItemContent">
          {icon} {title}
        </div>
      </div>
    </>
  );
};

export default PopularTopicItem;
