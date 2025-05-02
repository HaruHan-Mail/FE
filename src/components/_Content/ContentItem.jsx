import React from 'react';
import './css/ContentItem.css';

const ContentItem = ({ content, onClick, isBookmark, bookmarkIdList, onFavoriteToggle }) => {
  const contentId = content.id || content.contentId;

  if(!isBookmark) {
    isBookmark = bookmarkIdList.includes(contentId);
  }
  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    if (onFavoriteToggle) {
      onFavoriteToggle(contentId, isBookmark);
    }
  };

  return (
    <div className="content-card" onClick={onClick}>
      <h3 className="content-card-title">{content.title}</h3>
      <p className="content-card-summary">{content.summary}</p>
      <div className="content-card-footer">
        <button
          className={`content-card-favorite ${isBookmark ? 'favorited' : ''}`}
          onClick={handleFavoriteClick}
          title={isBookmark ? '찜한 컨텐츠입니다' : '찜하기'}
        >
          {isBookmark ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
};

export default ContentItem;
