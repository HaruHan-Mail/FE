import React, { useState } from 'react';
import { formatDate } from '../../utils/dateUtils';
import './css/EmailCard.css';
import { favoriteContent } from '../../apis/userEmailArchiveApi';

const EmailCard = ({ email, onClick, userEmail, token, onFavoriteToggle, isFavorite }) => {
  const [favoriteLoading, setFavoriteLoading] = useState(false);
  const [favoriteError, setFavoriteError] = useState(null);
  const [isFavorited, setIsFavorited] = useState(isFavorite || false);

  const handleFavoriteClick = async (e) => {
    e.stopPropagation(); // 카드 클릭 이벤트가 발생하지 않도록 방지

    if (favoriteLoading) return;

    try {
      setFavoriteLoading(true);
      setFavoriteError(null);
      
      // 테스트 모드일 경우 API 호출 없이 상태만 변경
      if (!userEmail || !token) {
        setIsFavorited(!isFavorited);
        if (onFavoriteToggle) onFavoriteToggle(email.id, !isFavorited);
        setFavoriteLoading(false);
        return;
      }
      
      // 실제 API 호출
      const response = await favoriteContent(userEmail, token, email.id);
      
      if (response.stateCode === 200) {
        setIsFavorited(true);
        if (onFavoriteToggle) onFavoriteToggle(email.id, true);
      } else if (response.stateCode === 409) {
        // 이미 찜한 경우
        setIsFavorited(true);
      }
    } catch (error) {
      setFavoriteError('찜하기에 실패했습니다.');
      console.error('찜하기 오류:', error);
    } finally {
      setFavoriteLoading(false);
    }
  };

  return (
    <div className="email-card" onClick={onClick}>
      <div className="email-card-date">{formatDate(email.sentAt)}</div>
      <h3 className="email-card-title">{email.title}</h3>
      <p className="email-card-preview">{email.preview}</p>
      <div className="email-card-footer">
        <span className="email-card-tag">{email.category}</span>
        <button 
          className={`email-card-favorite ${isFavorited ? 'favorited' : ''}`}
          onClick={handleFavoriteClick}
          disabled={favoriteLoading}
          title={isFavorited ? "찜한 컨텐츠입니다" : "찜하기"}
        >
          {favoriteLoading ? '...' : isFavorited ? '❤️' : '🤍'}
        </button>
      </div>
      {favoriteError && <div className="email-card-error">{favoriteError}</div>}
    </div>
  );
};

export default EmailCard;