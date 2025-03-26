import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchFeedbacks } from '../../apis/userFeedbackApi';
import FeedbackCard from './FeedbackCard';
import './css/FeedbackListSection.css';

const FeedbackListSection = () => {
  const [searchParams] = useSearchParams();
  const isTest = searchParams.get('test') === 'true';
  
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadFeedbacks = async () => {
      try {
        setLoading(true);
        const result = await fetchFeedbacks(isTest, currentPage);
        
        if (result.stateCode === 200 && result.data) {
          setFeedbacks(result.data.feedbacks || []);
          setTotalPages(result.data.totalPages || 1);
        } else {
          setError('피드백 데이터를 가져오지 못했습니다.');
        }
      } catch (err) {
        console.error('피드백 목록 로딩 실패:', err);
        setError('피드백 목록을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadFeedbacks();
  }, [isTest, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="feedback-list-container">
      <h1 className="feedback-list-title">하루한 피드백 모음</h1>
      <p className="feedback-list-description">
        사용자분들이 보내주신 소중한 피드백입니다.
      </p>

      {loading ? (
        <div className="feedback-list-loading">
          <div className="feedback-list-spinner"></div>
          <p>피드백을 불러오는 중...</p>
        </div>
      ) : error ? (
        <div className="feedback-list-error">{error}</div>
      ) : feedbacks.length === 0 ? (
        <div className="feedback-list-empty">
          <p>아직 등록된 피드백이 없습니다.</p>
        </div>
      ) : (
        <>
          <div className="feedback-list">
            {feedbacks.map((feedback) => (
              <FeedbackCard key={feedback.feedback_id} feedback={feedback} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="feedback-pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination-button ${page === currentPage ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default FeedbackListSection;