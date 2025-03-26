import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllContents } from '../../apis/userContentApi';
import ContentItem from './ContentItem';
import './css/ContentSection.css';

const ContentSection = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  const [activeTab, setActiveTab] = useState('all');
  const [contents, setContents] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      if (!email) {
        console.log('이메일이 제공되지 않았습니다.');
        return;
      }
      console.log('콘텐츠를 가져옵니다. 이메일:', email);
      try {
        const result = await getAllContents({ email });
        console.log('API 응답:', result);
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const displayContents =
    activeTab === 'favorites'
      ? contents.filter((content) => favorites.includes(content.id))
      : contents;

  return (
    <div className="content-section-container">
      <h1 className="content-section-title">나의 하루한 콘텐츠</h1>
      <p className="content-section-subtitle">지금까지 받아보신 모든 하루한 지식을 확인하세요</p>

      <div className="content-tabs">
        <button
          className={`content-tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => handleTabChange('all')}
        >
          전체 지식
        </button>
        <button
          className={`content-tab ${activeTab === 'favorites' ? 'active' : ''}`}
          onClick={() => handleTabChange('favorites')}
        >
          찜한 지식{' '}
          {favorites.length > 0 && <span className="favorite-count">{favorites.length}</span>}
        </button>
      </div>

      {displayContents.length === 0 ? (
        <div className="content-empty">
          {activeTab === 'favorites' ? (
            <p>찜한 지식이 없습니다. 마음에 드는 지식을 찜해보세요!</p>
          ) : (
            <p>아직 받은 지식이 없습니다.</p>
          )}
        </div>
      ) : (
        <div className="content-grid">
          {displayContents.map((content) => (
            <ContentItem key={content.id} content={content} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentSection;
