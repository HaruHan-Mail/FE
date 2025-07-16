import { useState } from 'react';
import { useQueryParams } from '../../hooks/useQueryParams';
import ContentList from './ContentList';
import ContentTabs from './ContentTabs';
import { useContents, useBookmarks } from '../../hooks/queries';
import { useSaveBookmark, useDeleteBookmark } from '../../hooks/mutations';
import LoadingSpinner from '../common/LoadingSpinner'
import styled from '@emotion/styled';

const ContentSectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`
const ContentSectionTitle = styled.h1`
  color: var(--primary);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const ContentSectionSubtitle = styled.p`
  color: var(--d-grey);
  text-align: center;
  margin-bottom: 2rem;
`
const ContentEmpty = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--d-grey);
  background-color: var(--sliver);
  border-radius: 8px;
  margin: 2rem 0;
  border: 1px dashed var(--m-grey);

  p {
    margin: 0;
    padding: 0;
    font-size: 1.1rem;
  }
`

const ContentSection = () => {
  const { email, token } = useQueryParams();
  const [activeTab, setActiveTab] = useState('all');

  const {
    data: contents = [],
    isLoading: isContentsLoading,
  } = useContents(email, token);

  const {
    data: bookmarks = [],
    isLoading: isBookmarksLoading,
  } = useBookmarks(email, token);

  const saveBookmark = useSaveBookmark();
  const deleteBookmark = useDeleteBookmark();

  if (isContentsLoading || isBookmarksLoading) {
    return <LoadingSpinner fullscreen size={200} />
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // 북마크 토글 함수
  const toggleBookmark = (contentId, isBookmarked) => {
    if (isBookmarked) {
      deleteBookmark.mutate({ email, token, contentId });
    } else {
      saveBookmark.mutate({ email, token, contentId });
    }
  };

  const bookmarkIdList = bookmarks.map((b) => b.id || b.contentId)

  const renderContentList = () => {
    const isAllTab = activeTab === 'all'
    const listToRender = isAllTab ? contents : bookmarks
    const isEmpty = listToRender.length === 0

    if (isEmpty) {
      return (
        <ContentEmpty>
          <p>
            {isAllTab
              ? '아직 받은 지식이 없습니다.'
              : '북마크한 지식이 없습니다. 마음에 드는 지식을 북마크해보세요!'}
          </p>
        </ContentEmpty>
      )
    }

    return (
      <ContentList
        contents={listToRender}
        isBookmark={!isAllTab}
        bookmarkIdList={isAllTab ? bookmarkIdList : undefined}
        onFavoriteToggle={toggleBookmark}
      />
    )
  }

  return (
    <ContentSectionContainer>
      <ContentSectionTitle>나의 하루한 콘텐츠</ContentSectionTitle>
      <ContentSectionSubtitle>
        지금까지 받아보신 모든 하루한 지식을 확인하세요
      </ContentSectionSubtitle>

      <ContentTabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
        contentCount={contents.length}
        bookmarkCount={bookmarks.length}
      />

      {renderContentList()}
    </ContentSectionContainer>
  )
}

export default ContentSection
