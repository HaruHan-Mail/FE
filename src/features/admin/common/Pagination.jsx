import React from 'react';
import '../css/Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
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
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
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
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        );
      })}

      <button
        className="pagination-button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination; 