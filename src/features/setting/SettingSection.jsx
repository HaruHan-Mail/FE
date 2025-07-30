import styled from '@emotion/styled';
import { useState } from 'react';
import { useQueryParams } from '@hooks/useQueryParams';
import { updateSubscriptionSettings } from '@apis/userSubscriptionApi';
import SettingSectionForm from './SectionSectionForm';
import SettingSectionInfo from './SettingSectionInfo';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  max-width: 600px;
  margin: 1rem auto;
  padding: 2rem;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: var(--primary);
  margin-bottom: 10px;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Message = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  font-weight: 500;

  &.success {
    background-color: #e7f5eb;
    color: #2d8c4b;
    border: 1px solid #b8e6c7;
  }

  &.error {
    background-color: #fbe9e7;
    color: #d32f2f;
    border: 1px solid #f6ccc9;
  }
`;

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
      console.log('>> request payload:', settings);
      const data = await updateSubscriptionSettings(settings);
      if (data.status === 200) {
        setMessage({ text: '설정이 성공적으로 업데이트되었습니다.', isError: false });
      } else {
        setMessage({ text: data.message || '설정 업데이트에 실패했습니다.', isError: true });
      }
    } catch (error) {
      console.error('설정 업데이트 오류:', error);
      setMessage({ text: '서버 통신 중 오류가 발생했습니다.', isError: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>뉴스레터 수신 설정</Title>

        {message.text && (
          <Message className={message.isError ? 'error' : 'success'}>{message.text}</Message>
        )}

        <SettingSectionForm
          settings={settings}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />

        <SettingSectionInfo />
      </ContentWrapper>
    </Container>
  );
};

export default SettingSection;
