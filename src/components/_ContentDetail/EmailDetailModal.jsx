import React, { useState } from 'react';
import { formatDate } from '../../utils/dateUtils';
import './css/EmailDetailModal.css';
import { favoriteContent } from '../../apis/userEmailArchiveApi';

const EmailDetailModal = ({ email, onClose, userEmail, token, onFavoriteToggle, isFavorite }) => {
  const [favoriteLoading, setFavoriteLoading] = useState(false);
  const [favoriteError, setFavoriteError] = useState(null);
  const [isFavorited, setIsFavorited] = useState(isFavorite || false);

  const handleFavoriteClick = async () => {
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
    <div className="email-modal-overlay" onClick={onClose}>
      <div className="email-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="email-modal-header">
          <h2 className="email-modal-title">{email.title}</h2>
          <button className="email-modal-close" onClick={onClose}>×</button>
        </div>
        <div className="email-modal-info">
          <span>받은 날짜: {formatDate(email.sentAt)}</span>
          <span className="email-modal-tag">{email.category}</span>
        </div>
        <div 
          className="email-modal-body"
          dangerouslySetInnerHTML={{ __html: email.content }}
        ></div>
        <div className="email-modal-footer">
          <div className="email-modal-actions">
            <button 
              className={`email-modal-favorite ${isFavorited ? 'favorited' : ''}`}
              onClick={handleFavoriteClick}
              disabled={favoriteLoading}
            >
              {favoriteLoading ? '처리 중...' : isFavorited ? '❤️ 찜함' : '🤍 찜하기'}
            </button>
            {favoriteError && <span className="email-modal-error">{favoriteError}</span>}
          </div>
          <button className="email-modal-button" onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default EmailDetailModal;