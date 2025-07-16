import React from 'react';
import styled from '@emotion/styled';

const ContentItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--sliver);
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px 10px;
  }
`

const ContentTitleSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  h3 {
    font-size: 1rem;
    }
    
    p {
      font-size: 0.8rem;
      color: var(--d-grey);
      margin: 0;
      text-align: start;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.7rem;
    }
`
const ContentFavorite = styled.div`
  margin: 0px 10px;
  font-size: 1.2rem;

  button {
    all: unset;
  }
`

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
    <ContentItemContainer onClick={onClick}>
      <ContentTitleSummary>
        <h3>{content.title}</h3>
        <p>{content.summary}</p>
      </ContentTitleSummary>
      <ContentFavorite>
        <button
          className={`content-card-favorite ${isBookmark ? 'favorited' : ''}`}
          onClick={handleFavoriteClick}
          title={isBookmark ? '찜한 컨텐츠입니다' : '찜하기'}
        >
          {isBookmark ? '❤️' : '🤍'}
        </button>
      </ContentFavorite>
    </ContentItemContainer>
  );
};

export default ContentItem;
