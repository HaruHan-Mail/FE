import { useState, useEffect } from 'react';
import { useQueryParams } from '../../hooks/useQueryParams';
import { fetchAllContents } from '../../apis/userContentApi';
import { fetchAllBookmarkContents } from '../../apis/userBookmarkApi';
import ContentList from './ContentList';
import ContentTabs from './ContentTabs';
import './css/ContentSection.css';

const ContentSection = () => {
  const { email,token } = useQueryParams();

  const [activeTab, setActiveTab] = useState(['all', 'bookmark']);
  const [contents, setContents] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  // API 호출: 전체 콘텐츠
  useEffect(() => {
    const fetchContents = async () => {
      if (!email) return;
      try {
        const result = await fetchAllContents({ email });
        if (result.stateCode === 200) {
          setContents(result.data);
        } else {
          console.error('API 요청 실패:', result.message);
        }
      } catch (err) {
        console.error('콘텐츠 불러오기 실패:', err);
      }
    };

    fetchContents();
  }, [email]);

  // API 호출: 북마크한 콘텐츠
  useEffect(() => {
    const fetchBookmarks = async () => {
      if (!email) return;
      try {
        const result = await fetchAllBookmarkContents({ email, token });
        if (result.stateCode === 200) {
          setBookmarks(result.data);
        } else {
          console.error('북마크 API 요청 실패:', result.message);
        }
      } catch (err) {
        console.error('북마크 콘텐츠 불러오기 실패:', err);
      }
    };

    fetchBookmarks();
  }, [email]);

  const handleTabChange = (tab) => {
    setActiveTab([tab]);
  };

  return (
    <div className="content-section-container">
      <h1 className="content-section-title">나의 하루한 콘텐츠</h1>
      <p className="content-section-subtitle">지금까지 받아보신 모든 하루한 지식을 확인하세요</p>

      <ContentTabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
        bookmarkCount={bookmarks.length}
      />

      {activeTab[0] === 'all' ? (
        contents.length === 0 ? (
          <div className="content-empty">
            <p>아직 받은 지식이 없습니다.</p>
          </div>
        ) : (
          <ContentList contents={contents} />
        )
      ) : bookmarks.length === 0 ? (
        <div className="content-empty">
          <p>북마크한 지식이 없습니다. 마음에 드는 지식을 북마크해보세요!</p>
        </div>
      ) : (
        <ContentList contents={bookmarks} />
      )}
    </div>
  );
};

export default ContentSection;
