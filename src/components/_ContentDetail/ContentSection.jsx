import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  getAllBookmarkContents,
  saveBookmarkContent,
  deleteBookmarkContent,
} from '../../apis/userBookmarkApi';
import { getAllContents } from '../../apis/userContentApi';
import EmailCard from './EmailCard';
import './css/ContentSection.css';
import dummyEmails from '../../mocks/dummyEmails';

const ContentSection = ({ email, token }) => {
  const [searchParams] = useSearchParams();
  const useTestData = searchParams.get('test') === 'true';

  const [activeTab, setActiveTab] = useState('all'); // 'all' or 'favorites'
  const [emails, setEmails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // 사용자의 찜 목록 불러오기
  useEffect(() => {
    const getFavorites = async () => {
      if (useTestData || !email || !token) {
        if (useTestData) {
          setFavorites([1, 3, 5]);
        }
        return;
      }

      try {
        // setFavoritesLoading(true);
        // const result = await fetchUserFavorites(email, token);
        // if (result.data && Array.isArray(result.data)) {
        //   setFavorites(result.data.map((item) => item.contentId));
        // }
      } catch (err) {
        console.error('찜 목록 조회 실패:', err);
      } finally {
        // setFavoritesLoading(false);
      }
    };

    getFavorites();
  }, [email, token, useTestData]);

  // 이메일 목록 불러오기
  useEffect(() => {
    const getEmails = async () => {
      try {
        // setLoading(true);

        if (useTestData) {
          setTimeout(() => {
            setEmails(dummyEmails);
            setTotalPages(1);
            // setLoading(false);
          }, 500);
          return;
        }

        if (!email || !token) {
          // setError('이메일과 인증 토큰이 필요합니다');
          // setLoading(false);
          return;
        }

        // const result = await fetchEmailArchive(email, token, currentPage);
        // setEmails(result.emails || []);
        // setTotalPages(result.totalPages || 1);
      } catch (err) {
        // setError('이메일을 불러오는데 실패했습니다.');
        console.error(err);
      } finally {
        // setLoading(false);
      }
    };

    getEmails();
  }, [email, token, currentPage, useTestData]);

  const handleEmailClick = async (emailId) => {
    if (useTestData) {
      const selected = dummyEmails.find((email) => email.id === emailId);
      setSelectedEmail(selected);
      // setModalOpen(true);
      return;
    }

    try {
      // const emailDetail = await fetchEmailDetail(email, token, emailId);
      // setSelectedEmail(emailDetail);
      // setModalOpen(true);
    } catch (err) {
      console.error('이메일 상세 정보 조회 실패:', err);
    }
  };

  const handleFavoriteToggle = (contentId, isFavorite) => {
    if (isFavorite) {
      if (!favorites.includes(contentId)) {
        setFavorites([...favorites, contentId]);
      }
    } else {
      setFavorites(favorites.filter((id) => id !== contentId));
    }
  };

  const isEmailFavorited = (emailId) => {
    return favorites.includes(emailId);
  };

  const displayEmails =
    activeTab === 'favorites'
      ? emails.filter((emailItem) => isEmailFavorited(emailItem.id))
      : emails;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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

      {/* {!useTestData && favoritesLoading && (
        <div className="favorites-loading-toast">찜 목록을 불러오는 중...</div>
      )} */}

      {/* {loading ? (
        <div className="content-loading">
          <div className="content-loading-spinner"></div>
          <p>이메일을 불러오는 중...</p>
        </div>
      ) : error ? (
        <div className="content-error">{error}</div>
      ) : displayEmails.length === 0 ? ( */}
      {displayEmails.length === 0 ? (
        <div className="content-empty">
          {activeTab === 'favorites' ? (
            <p>찜한 지식이 없습니다. 마음에 드는 지식을 찜해보세요!</p>
          ) : (
            <p>아직 받은 지식이 없습니다.</p>
          )}
        </div>
      ) : (
        <>
          <div className="email-grid">
            {displayEmails.map((emailItem) => (
              <EmailCard
                key={emailItem.id}
                email={emailItem}
                onClick={() => handleEmailClick(emailItem.id)}
                userEmail={email}
                token={token}
                onFavoriteToggle={handleFavoriteToggle}
                isFavorite={isEmailFavorited(emailItem.id)}
              />
            ))}
          </div>

          {!useTestData && totalPages > 1 && activeTab === 'all' && (
            <div className="content-pagination">
              <button
                className="pagination-button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                이전
              </button>
              <span className="pagination-info">
                {currentPage} / {totalPages}
              </span>
              <button
                className="pagination-button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              >
                다음
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ContentSection;
