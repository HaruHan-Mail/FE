import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentItem from './ContentItem';
import styled from '@emotion/styled';

const ContentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const ContentList = ({ contents, isBookmark, bookmarkIdList, onFavoriteToggle }) => {
  const navigate = useNavigate();

  return (
    <ContentListContainer>
      {contents.map((content, index) => {
        return (
        <ContentItem
          key={index}
          content={content}
          isBookmark={isBookmark}
          bookmarkIdList={bookmarkIdList}
          onClick={() =>
            navigate(`/content/${content.id || content.contentId}`)
          }
          onFavoriteToggle={onFavoriteToggle}
        />
        );
      })}
    </ContentListContainer>
  );
};

export default ContentList;
