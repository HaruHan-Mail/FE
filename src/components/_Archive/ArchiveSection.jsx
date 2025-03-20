import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchEmailArchive, fetchEmailDetail, fetchUserFavorites } from '../../apis/userEmailArchiveApi';
import EmailCard from './EmailCard';
import EmailDetailModal from './EmailDetailModal';
import './css/ArchiveSection.css';
import dummyEmails from '../../mocks/dummyEmails';

const ArchiveSection = ({ email, token }) => {
  const [searchParams] = useSearchParams();
  const useTestData = searchParams.get('test') === 'true';
  
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [favoritesLoading, setFavoritesLoading] = useState(false);

  // 사용자의 찜 목록 불러오기
  useEffect(() => {
    const getFavorites = async () => {
      if (useTestData || !email || !token) {
        return;
      }

      try {
        setFavoritesLoading(true);
        const result = await fetchUserFavorites(email, token);
        if (result.data && Array.isArray(result.data)) {
          setFavorites(result.data.map(item => item.contentId));
        }
      } catch (err) {
        console.error('찜 목록 조회 실패:', err);
      } finally {
        setFavoritesLoading(false);
      }
    };

    getFavorites();
  }, [email, token, useTestData]);

  // 이메일 목록 불러오기
  useEffect(() => {
    const getEmails = async () => {
      try {
        setLoading(true);
        
        if (useTestData) {
          // 테스트용 더미 데이터 사용
          setTimeout(() => {
            setEmails(dummyEmails);
            setTotalPages(1);
            setLoading(false);
          }, 500); // 로딩 느낌을 주기 위한 딜레이
          return;
        }
        
        // 실제 API 호출 (이메일과 토큰이 있는 경우)
        if (!email || !token) {
          setError('이메일과 인증 토큰이 필요합니다');
          setLoading(false);
          return;
        }
        
        const result = await fetchEmailArchive(email, token, currentPage);
        setEmails(result.emails || []);
        setTotalPages(result.totalPages || 1);
      } catch (err) {
        setError('이메일을 불러오는데 실패했습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    getEmails();
  }, [email, token, currentPage, useTestData]);

  const handleEmailClick = async (emailId) => {
    if (useTestData) {
      const selected = dummyEmails.find(email => email.id === emailId);
      setSelectedEmail(selected);
      setModalOpen(true);
      return;
    }
    
    try {
      // 실제 API를 사용하는 경우의 로직
      const emailDetail = await fetchEmailDetail(email, token, emailId);
      setSelectedEmail(emailDetail);
      setModalOpen(true);
    } catch (err) {
      console.error('이메일 상세 정보 조회 실패:', err);
    }
  };

  // 찜하기 토글 핸들러
  const handleFavoriteToggle = (contentId, isFavorite) => {
    if (isFavorite) {
      if (!favorites.includes(contentId)) {
        setFavorites([...favorites, contentId]);
      }
    } else {
      setFavorites(favorites.filter(id => id !== contentId));
    }
  };

  const isEmailFavorited = (emailId) => {
    return favorites.includes(emailId);
  };

  return (
    <div className="archive-section-container">
      <h1 className="archive-section-title">나의 하루한 아카이브</h1>
      <p className="archive-section-subtitle">
        지금까지 받아보신 모든 하루한 메일을 확인하세요
      </p>

      {loading ? (
        <div className="archive-loading">
          <div className="archive-loading-spinner"></div>
          <p>이메일을 불러오는 중...</p>
        </div>
      ) : error ? (
        <div className="archive-error">{error}</div>
      ) : emails.length === 0 ? (
        <div className="archive-empty">
          <p>아직 받은 이메일이 없습니다.</p>
        </div>
      ) : (
        <>
          <div className="email-grid">
            {emails.map((emailItem) => (
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

          {!useTestData && totalPages > 1 && (
            <div className="archive-pagination">
              <button 
                className="pagination-button" 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              >
                이전
              </button>
              <span className="pagination-info">
                {currentPage} / {totalPages}
              </span>
              <button 
                className="pagination-button" 
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              >
                다음
              </button>
            </div>
          )}
        </>
      )}

      {modalOpen && selectedEmail && (
        <EmailDetailModal 
          email={selectedEmail} 
          onClose={() => setModalOpen(false)}
          userEmail={email}
          token={token}
          onFavoriteToggle={handleFavoriteToggle}
          isFavorite={isEmailFavorited(selectedEmail.id)}
        />
      )}

      {/* 찜하기 작업 중 알림 */}
      {favoritesLoading && (
        <div className="favorites-loading-toast">
          찜 목록을 불러오는 중...
        </div>
      )}
    </div>
  );
};

export default ArchiveSection;