import React from 'react';
import './css/FeedbackCard.css';

const FeedbackCard = ({ feedback }) => {
  // 날짜 형식화
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  return (
    <div className="feedback-card">
      <div className="feedback-card-header">
        <span className="feedback-card-date">
          {formatDate(feedback.createdAt)}
        </span>
      </div>
      <div className="feedback-card-content">
        <p>{feedback.feedbackContent}</p>
      </div>
      <div className="feedback-card-quote-icon">❝</div>
    </div>
  );
};

export default FeedbackCard;