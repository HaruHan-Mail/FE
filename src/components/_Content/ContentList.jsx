import React from 'react';
import ContentItem from './ContentItem';
import './css/ContentList.css';

const ContentList = ({ contents }) => {
  return (
    <div className="content-list">
      {contents.map((content) => (
        <ContentItem key={content.id} content={content} />
      ))}
    </div>
  );
};

export default ContentList;
