import React from 'react';
import './css/ContentItem.css';

const ContentItem = ({
  content,
  onClick,
  isBookmark,
  favoriteLoading = false,
  favoriteError = null,
}) => {
  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    console.log('즐겨찾기 클릭');
    // 즐겨찾기 API 호출 로직 추가 가능
  };

  return (
    <div className="content-card" onClick={onClick}>
      <h3 className="content-card-title">{content.title}</h3>
      <p className="content-card-summary">{content.summary}</p>
      <div className="content-card-footer">
        <button
          className={`content-card-favorite ${isBookmark ? 'favorited' : ''}`}
          onClick={handleFavoriteClick}
          disabled={favoriteLoading}
          title={isBookmark ? '찜한 컨텐츠입니다' : '찜하기'}
        >
          {favoriteLoading ? '...' : isBookmark ? '❤️' : '🤍'}
        </button>
      </div>
      {favoriteError && <div className="content-card-error">{favoriteError}</div>}
    </div>
  );
};

export default ContentItem;
