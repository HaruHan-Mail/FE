import React from 'react';
import '../css/EmptyState.css';

const EmptyState = ({ icon, message }) => {
  return (
    <div className="empty-state">
      {icon || (
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
      )}
      <p>{message || '데이터가 없습니다.'}</p>
    </div>
  );
};

export default EmptyState; 