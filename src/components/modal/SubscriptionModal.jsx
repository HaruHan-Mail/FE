import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/SubscriptionModal.css';
import { registerSubscription } from '../../apis/subscriptionApi';

const SubscriptionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // 하나의 객체로 상태 관리
  const [formState, setFormState] = useState({
    email: '',
    preferedTime: '',
    isDaily: true,
    error: '',
    isSubmitting: false,
  });

  const TIME_OPTIONS = {
    '오전 7시': '07:00',
    '오후 12시': '12:00',
    '오후 6시': '18:00',
  };

  const handleEmailChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      email: e.target.value,
      error: '',
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    const { email, preferedTime } = formState;
    if (!email || !preferedTime) {
      setFormState((prev) => ({ ...prev, error: '모든 필드를 입력해주세요' }));
      return;
    }

    if (!validateEmail(email)) {
      setFormState((prev) => ({ ...prev, error: '유효하지 않은 이메일 형식입니다' }));
      return;
    }

    try {
      setFormState((prev) => ({ ...prev, isSubmitting: true }));
      const data = {
        email,
        preferedTime,
        isDaily: formState.isDaily,
      };
      const responseData = await registerSubscription(data);

      if (responseData.stateCode === 200) {
        alert('구독이 완료되었습니다!');
        onClose();
        // 상태 초기화
        setFormState({
          email: '',
          preferedTime: '',
          isDaily: true,
          error: '',
          isSubmitting: false,
        });
      }
    } catch (error) {
      console.error('구독 실패:', error);
      let errorMessage = '구독 처리 중 오류가 발생했습니다';
      if (error.response?.data?.statusCode === 409) {
        errorMessage = '이미 존재하는 이메일입니다.';
      } else if (error.response?.status === 500) {
        errorMessage = '백엔드 담당자에게 연락바람';
      }
      setFormState((prev) => ({ ...prev, error: errorMessage }));
    } finally {
      setFormState((prev) => ({ ...prev, isSubmitting: false }));
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2 style={{ margin: '10px 0px 40px 0px' }}>
          <span style={{ color: '#E86912' }}>HaruHan</span>지식 구독
        </h2>

        {/* 수신 빈도 */}
        <p>수신 빈도</p>
        <label>
          <input
            type="radio"
            name="frequency"
            value="daily"
            onChange={() => setFormState((prev) => ({ ...prev, isDaily: true }))}
            checked={formState.isDaily}
          />
          <span className="custom-checkbox" />
          하루 하나 (월~금)
        </label>
        <label>
          <input
            type="radio"
            name="frequency"
            value="weekly"
            onChange={() => setFormState((prev) => ({ ...prev, isDaily: false }))}
            checked={!formState.isDaily}
          />
          <span className="custom-checkbox" />
          하루 다섯 (월요일)
        </label>

        {/* 수신 시간 */}
        <p>수신 시간</p>
        {Object.entries(TIME_OPTIONS).map(([label, value]) => (
          <label key={value}>
            <input
              type="radio"
              name="time"
              value={label}
              onChange={(e) =>
                setFormState((prev) => ({
                  ...prev,
                  preferedTime: e.target.value,
                }))
              }
              checked={formState.preferedTime === label}
            />
            <span className="custom-checkbox" />
            {label}
          </label>
        ))}

        {/* 이메일 입력 */}
        <p>이메일</p>
        <input
          type="email"
          placeholder="example@naver.com"
          value={formState.email}
          onChange={handleEmailChange}
          className={formState.error ? 'input-error' : ''}
        />

        {formState.error && <div className="error-message">{formState.error}</div>}

        <button
          className="subscribe-btn"
          onClick={handleSubscribe}
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? '처리 중...' : '구독하기'}
        </button>
      </div>
    </div>,
    document.body,
  );
};

export default SubscriptionModal;
