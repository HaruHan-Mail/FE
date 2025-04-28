import { useState } from 'react';
import { registerSubscription } from '../../apis/userSubscriptionApi';
import './css/Subscription.css';

const Subscription = ({ onSuccess }) => {
  const [formState, setFormState] = useState({
    email: '',
    preferedTime: '',
    isDaily: true,
    agreed: false,
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
    const { email, preferedTime, agreed } = formState;
    if (!email || !preferedTime) {
      setFormState((prev) => ({ ...prev, error: '모든 필드를 입력해주세요' }));
      return;
    }
    if (!validateEmail(email)) {
      setFormState((prev) => ({ ...prev, error: '유효하지 않은 이메일 형식입니다' }));
      return;
    }
    if (!agreed) {
      setFormState((prev) => ({ ...prev, error: '개인정보취급방침에 동의하셔야 합니다.' }));
      return;
    }
    try {
      setFormState((prev) => ({ ...prev, isSubmitting: true }));

      const registrationDate = new Date().toISOString();

      const data = {
        email,
        preferedTime,
        isDaily: formState.isDaily,
        registrationDate,
      };

      await registerSubscription(data);
      onSuccess(email, preferedTime, formState.isDaily);
    } catch (error) {
      console.error('구독 실패:', error);
      let errorMessage = '구독 처리 중 오류가 발생했습니다';
      setFormState((prev) => ({ ...prev, error: errorMessage }));
    } finally {
      setFormState((prev) => ({ ...prev, isSubmitting: false }));
    }
  };

  const handleAgreeChange = (e) => {
    setFormState((prev) => ({ ...prev, agreed: e.target.checked, error: '' }));
  };

  return (
    <div>
      <h2 style={{ margin: '10px 0 40px 0' }}>
        <span style={{ color: '#E86912' }}>HaruHan</span>지식 구독
      </h2>
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
      <p>이메일</p>
      <input
        type="email"
        placeholder="example@naver.com"
        value={formState.email}
        onChange={handleEmailChange}
        className={formState.error ? 'input-error' : ''}
      />
      <div style={{ marginTop: '20px' }}>
        <label>
          <input type="checkbox" checked={formState.agreed} onChange={handleAgreeChange} />
          <a
            href="/policy"
            style={{ marginLeft: '8px', textDecoration: 'underline', color: '#E86912' }}
          >
            개인정보취급방침에 동의합니다
          </a>
        </label>
      </div>
      {formState.error && <div className="error-message">{formState.error}</div>}
      <button
        className="subscribe-btn"
        onClick={handleSubscribe}
        disabled={formState.isSubmitting || !formState.agreed}
      >
        {formState.isSubmitting ? '처리 중...' : '구독하기'}
      </button>
    </div>
  );
};

export default Subscription;
