import React, { useState, useEffect } from 'react';
import MailLayout from '../components/Layout/MailLayout';
import '../components/css/Setting.css';
import { useSearchParams } from 'react-router-dom';
import { fetchUserSettings } from '../apis/settingApi';
import '../components/css/Setting.css';

const Setting = () => {
  const [searchParams] = useSearchParams();
  const emailParam = searchParams.get('email');
  const tokenParam = searchParams.get('token');

  // 초기값은 URL 쿼리에서 가져온 값으로 설정
  const [email, setEmail] = useState(emailParam || '');
  const [token, setToken] = useState(tokenParam || '');
  const [isDaily, setIsDaily] = useState(true);
  const [preferedTime, setPreferedTime] = useState('오전 7시');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', isError: false });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage({ text: '이메일을 입력해주세요.', isError: true });
      return;
    }

    try {
      setLoading(true);
      const requestBody = {
        email,
        isDaily,
        preferedTime,
        token: token || '',
      };
      const result = await fetchUserSettings(requestBody);

      if (result.stateCode === 200) {
        setMessage({ text: '설정이 성공적으로 업데이트되었습니다.', isError: false });
      } else {
        setMessage({ text: result.message || '설정 업데이트에 실패했습니다.', isError: true });
      }
    } catch (error) {
      console.error('설정 업데이트 오류:', error);
      setMessage({ text: '서버 통신 중 오류가 발생했습니다.', isError: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <MailLayout>
      <div className="settingContainer">
        <h1 className="settingTitle">뉴스레터 수신 설정</h1>

        {message.text && (
          <div className={`settingMessage ${message.isError ? 'error' : 'success'}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="settingForm">
          <div className="formGroup">
            <label htmlFor="email">이메일 주소</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
              className="inputField"
              required
            />
          </div>

          <div className="formGroup">
            <label className="optionLabel">수신 빈도</label>
            <div className="optionsContainer">
              <label
                className={`optionCard ${isDaily ? 'selected' : ''}`}
                onClick={() => setIsDaily(true)}
              >
                <input
                  type="radio"
                  name="frequency"
                  checked={isDaily}
                  onChange={() => setIsDaily(true)}
                />
                <div className="optionContent">
                  <div className="optionTitle">하루 1개 지식 받기</div>
                  <div className="optionDescription">매일 한 가지 주제의 지식을 받아보세요.</div>
                </div>
              </label>

              <label
                className={`optionCard ${!isDaily ? 'selected' : ''}`}
                onClick={() => setIsDaily(false)}
              >
                <input
                  type="radio"
                  name="frequency"
                  checked={!isDaily}
                  onChange={() => setIsDaily(false)}
                />
                <div className="optionContent">
                  <div className="optionTitle">하루 5개 지식 받기</div>
                  <div className="optionDescription">한 번에 여러 지식을 받아보세요.</div>
                </div>
              </label>
            </div>
          </div>

          <div className="formGroup">
            <label className="optionLabel">수신 시간</label>
            <div className="optionsContainer timeOptions">
              <label
                className={`optionCard ${preferedTime === '오전 7시' ? 'selected' : ''}`}
                onClick={() => setPreferedTime('오전 7시')}
              >
                <input
                  type="radio"
                  name="time"
                  checked={preferedTime === '오전 7시'}
                  onChange={() => setPreferedTime('오전 7시')}
                />
                <div className="optionContent">
                  <div className="optionTitle">오전 7시</div>
                </div>
              </label>

              <label
                className={`optionCard ${preferedTime === '오후 12시' ? 'selected' : ''}`}
                onClick={() => setPreferedTime('오후 12시')}
              >
                <input
                  type="radio"
                  name="time"
                  checked={preferedTime === '오후 12시'}
                  onChange={() => setPreferedTime('오후 12시')}
                />
                <div className="optionContent">
                  <div className="optionTitle">오후 12시</div>
                </div>
              </label>

              <label
                className={`optionCard ${preferedTime === '오후 6시' ? 'selected' : ''}`}
                onClick={() => setPreferedTime('오후 6시')}
              >
                <input
                  type="radio"
                  name="time"
                  checked={preferedTime === '오후 6시'}
                  onChange={() => setPreferedTime('오후 6시')}
                />
                <div className="optionContent">
                  <div className="optionTitle">오후 6시</div>
                </div>
              </label>
            </div>
          </div>

          <button type="submit" className="submitButton" disabled={loading}>
            {loading ? '처리 중...' : '설정 저장하기'}
          </button>
        </form>

        <div className="settingInfo">
          <h3>수신 빈도에 대한 안내</h3>
          <p>
            <strong>하루 1개 지식 받기</strong>: 매일 한 가지 주제의 지식을 받아보세요.
          </p>
          <p>
            <strong>하루 5개 지식 받기</strong>: 한 번에 여러 지식을 받아보세요.
          </p>
        </div>
      </div>
    </MailLayout>
  );
};

export default Setting;
