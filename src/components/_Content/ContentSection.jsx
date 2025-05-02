import { useState } from 'react';
import { useQueryParams } from '../../hooks/useQueryParams';
import ContentList from './ContentList';
import ContentTabs from './ContentTabs';
import { useContents } from '../../hooks/queries/useContents';
import { useBookmarks } from '../../hooks/queries/useBookmarks';
import { useSaveBookmark, useDeleteBookmark } from '../../hooks/mutations/useBookmarksMutation';
import LoadingSpinner from '../common/LoadingSpinner'
import './css/ContentSection.css';

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


  return (
    <div className="content-section-container">
      <h1 className="content-section-title">나의 하루한 콘텐츠</h1>
      <p className="content-section-subtitle">지금까지 받아보신 모든 하루한 지식을 확인하세요</p>

      <ContentTabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
        bookmarkCount={bookmarks.length}
      />

      {activeTab === 'all' ? (
        contents.length === 0 ? (
          <div className="content-empty">
            <p>아직 받은 지식이 없습니다.</p>
          </div>
        ) : (
          <ContentList
            contents={contents}
            isBookmark={false}
            bookmarkIdList={bookmarkIdList}
            onFavoriteToggle={toggleBookmark}
          />
        )
      ) : bookmarks.length === 0 ? (
        <div className="content-empty">
          <p>북마크한 지식이 없습니다. 마음에 드는 지식을 북마크해보세요!</p>
        </div>
      ) : (
        <ContentList
          contents={bookmarks}
          isBookmark={true}
          onFavoriteToggle={toggleBookmark}
        />
      )}
    </div>
  );
};

export default ContentSection;
