import React from 'react';
import './css/FeedbackListSection.css';
import useSorting from '@hooks/useSorting';
import usePagination from '@hooks/usePagination';
import Pagination from '@features/admin/common/Pagination';
import LoadingSpinner from '@common/LoadingSpinner';

const FeedbackListSection = ({ feedbacks, isFeedbacksLoading }) => {
  // 정렬 로직 적용
  const { sortedData, sortOrder, setSort } = useSorting(feedbacks, {
    initialSortField: 'createdAt',
    initialSortOrder: 'desc',
    getSortValue: (item, field) => item[field],
  });

  // 페이지네이션 로직 적용
  const { currentItems, currentPage, totalPages, handlePageChange } = usePagination(sortedData, 5);

  // 정렬 변경 핸들러
  const handleSortOrderChange = (e) => {
    const order = e.target.value;
    setSort('createdAt', order);
  };

  if (isFeedbacksLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="feedback-list-container">
      <h2 className="admin-section-title">피드백 모아보기</h2>
      <div className="feedback-filter-controls">
        <select
          className="feedback-sort-dropdown"
          value={sortOrder}
          onChange={handleSortOrderChange}
        >
          <option value="desc">최신순</option>
          <option value="asc">오래된순</option>
        </select>
      </div>

      {currentItems.map((item, index) => (
        <div key={index} className="feedback-list-content-container">
          <p className="feedback-list-content">{item.feedbackContent}</p>
          <p className="feedback-list-content-date">{item.createdAt.slice(0, 10)}</p>
        </div>
      ))}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default FeedbackListSection;
