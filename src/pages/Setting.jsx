import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import '../components/css/Setting.css';
import { useSearchParams } from 'react-router-dom'; // 추가

const Setting = () => {
  const [searchParams] = useSearchParams(); // 추가
  const [email, setEmail] = useState('');
  const [isDaily, setIsDaily] = useState(true); // isSinglePost에서 isDaily로 변경
  const [preferedTime, setPreferedTime] = useState('오전 7시');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', isError: false });
  const [token, setToken] = useState('');
  
  useEffect(() => {
    // URL 쿼리 파라미터에서 이메일과 토큰 가져오기
    const urlEmail = searchParams.get('email');
    const urlToken = searchParams.get('token');
    
    // 로컬스토리지에서 사용자 정보 가져오기
    const savedEmail = localStorage.getItem('userEmail');
    const savedToken = localStorage.getItem('userToken');
    
    // URL 파라미터를 우선적으로 사용하고, 없으면 로컬스토리지 사용
    const emailToUse = urlEmail || savedEmail || '';
    const tokenToUse = urlToken || savedToken || '';
    
    // URL에서 가져온 값이 있으면 로컬스토리지에 저장
    if (urlEmail) localStorage.setItem('userEmail', urlEmail);
    if (urlToken) localStorage.setItem('userToken', urlToken);
    
    setEmail(emailToUse);
    setToken(tokenToUse);
    
    // 이메일과 토큰이 있으면 설정 정보 가져오기
    if (emailToUse && tokenToUse) {
      fetchUserSettings(emailToUse, tokenToUse);
    }
  }, [searchParams]); // searchParams가 변경될 때마다 실행
  
  const fetchUserSettings = async (userEmail, userToken) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/settings?email=${userEmail}`, {
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setIsDaily(data.isDaily);
        setPreferedTime(data.preferedTime);
      }
    } catch (error) {
      console.error('설정 가져오기 오류:', error);
    } finally {
      setLoading(false);
    }
  };
  
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
        token: token || '0f89e514-9a5a-444d-bdae-5a7581de02a7'
      };
      
      const response = await fetch('/api/settings/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      
      const result = await response.json();
      
      if (result.stateCode === 200) {
        setMessage({ text: '설정이 성공적으로 업데이트되었습니다.', isError: false });
        localStorage.setItem('userEmail', email);
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
    <Layout>
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
                  <div className="optionDescription">매일 매일 주5일제 지식 수신</div>
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
                  <div className="optionDescription">다섯 개 지식을 한꺼번에 수신</div>
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
          
          <button 
            type="submit" 
            className="submitButton" 
            disabled={loading}
          >
            {loading ? '처리 중...' : '설정 저장하기'}
          </button>
        </form>
        
        <div className="settingInfo">
          <h3>수신 빈도에 대한 안내</h3>
          <p>
            <strong>하루 1개 지식 받기</strong>: 매일 한 가지 주제에 대한 지식을 받아보세요.
          </p>
          <p>
            <strong>하루 5개 지식 받기</strong>: 한 주에 한 번 지식을 한꺼번에 받아보세요.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Setting;
