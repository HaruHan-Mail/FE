import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentItem from './ContentItem';
import './css/ContentList.css';

const ContentList = ({ contents, isBookmark, onFavoriteToggle }) => {
  const navigate = useNavigate();

  return (
    <div className="content-list">
      {contents.map((content, index) => (
        <ContentItem
          key={index}
          content={content}
          isBookmark={isBookmark}
          onClick={() =>
            navigate(`/content/${content.id || content.contentId}`)
          }
          onFavoriteToggle={onFavoriteToggle}
        />
      ))}
    </div>
  );
};

export default ContentList;
