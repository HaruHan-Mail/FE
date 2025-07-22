import React from 'react';
import styled from '@emotion/styled';

const ContentTabsContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`

const ContentTab = styled.button`
  all: unset;
  flex: 1;
  text-align: center;
  padding: 15px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--primary);
    background-color: var(--white);
  }

  &.active {
    color: var(--primary);
    font-weight: 600;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--primary);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &.active::after {
    transform: scaleX(1);
  }
`

const BookmarkCount = styled.span`
  background-color: var(--primary);
  color: var(--white);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.8rem;
`

const ContentTabs = ({ activeTab, onTabChange, contentCount, bookmarkCount }) => {
  return (
    <ContentTabsContainer>
      <ContentTab
        className={activeTab === 'all' ? 'active' : ''}
        onClick={() => onTabChange('all')}
      >
        전체 지식{' '}
        {contentCount > 0 && <BookmarkCount>{contentCount}</BookmarkCount>}
      </ContentTab>
      <ContentTab
        className={activeTab === 'bookmarks' ? 'active' : ''}
        onClick={() => onTabChange('bookmarks')}
      >
        북마크한 지식{' '}
        {bookmarkCount > 0 && <BookmarkCount>{bookmarkCount}</BookmarkCount>}
      </ContentTab>
    </ContentTabsContainer>
  )
}

export default ContentTabs