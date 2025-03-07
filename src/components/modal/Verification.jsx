import React, { useState, useEffect } from 'react';
import { verifyCode } from '../../apis/subscriptionApi';
import '../css/Verification.css';

const Verification = ({ initialEmail, preferedTime, isDaily, onVerified, onTimeout }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5분 = 300초

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          onTimeout();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [onTimeout]);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    setError('');
  };

  const handleVerify = async () => {
    if (!code) {
      setError('인증 코드를 입력해주세요');
      return;
    }
    try {
      setIsSubmitting(true);
      const data = {
        email: initialEmail,
        preferedTime,
        isDaily,
        verificationCode: code,
      };
      const responseData = await verifyCode(data);
      if (responseData.stateCode === 200) {
        alert('인증에 성공하였습니다!');
        onVerified();
      }
    } catch (error) {
      console.error('인증 실패:', error);
      setError('인증 코드가 잘못되었습니다. 다시 시도해주세요');
    } finally {
      setIsSubmitting(false);
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="verification-container">
      <h2>인증 코드 입력</h2>
      <p>{initialEmail}로 전송된 인증 코드를 입력해주세요.</p>
      <p>
        남은 시간: {minutes}:{seconds}
      </p>
      <input type="text" placeholder="인증 코드" value={code} onChange={handleCodeChange} />
      {error && <div className="error-message">{error}</div>}
      <button onClick={handleVerify} disabled={isSubmitting}>
        {isSubmitting ? '처리 중...' : '인증하기'}
      </button>
    </div>
  );
};

export default Verification;
