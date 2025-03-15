import { useState } from 'react';
import { useQueryParams } from '../../hooks/useQueryParams';
import { updateSubscriptionSettings } from '../../apis/userSubscriptionApi';
import SettingSectionForm from './SectionSectionForm';
import SettingSectionInfo from './SettingSectionInfo';
import './css/SettingSection.css';

const SettingSection = () => {
  const { email: emailParam, token: tokenParam } = useQueryParams();

  const [settings, setSettings] = useState({
    email: emailParam || '',
    token: tokenParam || '',
    isDaily: true,
    preferedTime: '오전 7시',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', isError: false });

  const handleChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!settings.email) {
      setMessage({ text: '이메일을 입력해주세요.', isError: true });
      return;
    }
    try {
      setLoading(true);
      const result = await updateSubscriptionSettings(settings);
      if (result.status === 200) {
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
    <div className="SettingSection">
      <h1 className="SettingTitle">뉴스레터 수신 설정</h1>

      {message.text && (
        <div className={`SettingMessage ${message.isError ? 'error' : 'success'}`}>
          {message.text}
        </div>
      )}

      <SettingSectionForm
        settings={settings}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
      />

      <SettingSectionInfo />
    </div>
  );
};

export default SettingSection;
