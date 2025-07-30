import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentItem from './ContentItem';
import styled from '@emotion/styled';

const ContentListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
`;

const ContentListItem = styled.li`
  list-style-type: none;
`;

const ContentList = ({ contents, isBookmark, bookmarkIdList, onFavoriteToggle }) => {
  const navigate = useNavigate();

  return (
    <ContentListContainer>
      {contents.map((content, index) => {
        return (
          <ContentListItem key={index}>
            <ContentItem
              content={content}
              isBookmark={isBookmark}
              bookmarkIdList={bookmarkIdList}
              onClick={() => navigate(`/content/${content.id || content.contentId}`)}
              onFavoriteToggle={onFavoriteToggle}
            />
          </ContentListItem>
        );
      })}
    </ContentListContainer>
  );
};

export default ContentList;
