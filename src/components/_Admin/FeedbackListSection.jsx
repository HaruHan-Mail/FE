import React, { useEffect, useState } from 'react';
import './css/FeedbackListSection.css';
import { fetchAllFeedback } from '../../apis/adminApi';

const FeedbackListSection = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('newest');

  const itemsPerPage = 5;

  useEffect(() => {
    const fetchFeedbacks = async () => {
      setIsLoading(true);
      try {
        const result = await fetchAllFeedback();
        if (result.stateCode === 200) {
          setFeedbackList(result.data);
        } else {
          console.error('API 요청 실패:', result.message);
        }
      } catch (err) {
        console.error('피드백 불러오기 실패: ', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  // 정렬 함수
  const sortedFeedback = [...feedbackList].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  // 페이지네이션
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedFeedback.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(feedbackList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 페이지네이션 컴포넌트
  const renderPagination = () => {
    const pageNumbers = [];

    // 현재 페이지를 중심으로 좌우 2개씩의 페이지 번호만 표시
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) pageNumbers.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }

    return (
      <div className="feedback-pagination">
        <button
          className="pagination-button"
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {pageNumbers.map((number, index) => {
          if (number === '...') {
            return (
              <div key={`ellipsis-${index}`} className="pagination-ellipsis">
                ...
              </div>
            );
          }

          return (
            <button
              key={number}
              className={`pagination-button ${number === currentPage ? 'active' : ''}`}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          );
        })}

        <button
          className="pagination-button"
          onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    );
  };

  return (
    <div className="feedback-list-container">
      <div className="feedback-filter-controls">
        <select
          className="feedback-sort-dropdown"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">최신순</option>
          <option value="oldest">오래된순</option>
        </select>
      </div>

      {isLoading ? (
        <div className="feedback-list-loading">피드백을 불러오는 중...</div>
      ) : feedbackList.length === 0 ? (
        <div className="feedback-list-empty">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="#94A3B8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16V11"
              stroke="#94A3B8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8.5H12.01"
              stroke="#94A3B8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>아직 피드백이 없습니다.</p>
        </div>
      ) : (
        <>
          {currentItems.map((item, index) => (
            <div key={index} className="feedback-list-content-container">
              <p className="feedback-list-content">{item.feedbackContent}</p>
              <p className="feedback-list-content-date">{item.createdAt.slice(0, 10)}</p>
            </div>
          ))}

          {totalPages > 1 && renderPagination()}
        </>
      )}
    </div>
  );
};

export default FeedbackListSection;
