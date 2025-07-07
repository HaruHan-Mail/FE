import React from 'react';
import styled from '@emotion/styled';
import useVerification from '../../hooks/useVerification';

const Container = styled.div`
  max-width: 420px;
  width: 90vw;
  margin: 0 auto;
  padding: 1.5rem;
  background: white;
  border-radius: 1.25rem;
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.08),
    0 4px 16px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    width: 95vw;
    max-width: 100%;
    padding: 1rem 1.25rem;
    border-radius: 1rem;
    margin: 0;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  color: black;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin: 0 0 0.25rem 0;
  }
  
  span {
    color: var(--primary);
    font-weight: 800;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin: 0 0 1rem 0;
  
  @media (max-width: 768px) {
    margin: 0 0 0.75rem 0;
    font-size: 0.875rem;
  }
  
  strong {
    color: var(--primary);
    font-weight: 600;
  }
`;

const TimerText = styled.p`
  font-size: 0.875rem;
  color: #666;
  text-align: center;
  margin: 0 0 1.5rem 0;
  
  @media (max-width: 768px) {
    margin: 0 0 1.25rem 0;
    font-size: 0.8125rem;
  }
  
  span {
    color: var(--primary);
    font-weight: 600;
    font-size: 1rem;
    
    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }
`;

const SectionGroup = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const SectionLabel = styled.label`
  display: block;
  font-size: 1rem;
  color: black;
  margin-bottom: 0.75rem;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
`;

const CodeInput = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid var(--white-grey);
  border-radius: 0.75rem;
  font-size: 1rem;
  background: var(--sliver);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
  min-height: 44px;
  outline: none;
  text-align: center;
  letter-spacing: 0.1em;
  font-weight: 500;
  
  @media (max-width: 768px) {
    padding: 0.875rem;
    font-size: 0.875rem;
    border-radius: 0.625rem;
    min-height: 48px;
  }
  
  &::placeholder {
    color: #999;
    letter-spacing: normal;
    font-weight: normal;
  }
  
  &:focus {
    border-color: var(--primary);
    background: #fff;
  }
  
  &.error {
    border-color: var(--error);
    background: var(--error-background);
  }
`;

const ErrorMessage = styled.div`
  color: var(--error);
  font-size: 0.75rem;
  margin-top: 0.375rem;
  padding: 0.375rem 0;
  font-weight: 500;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin-top: 0.25rem;
    padding: 0.25rem 0;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  max-width: 100%;
  padding: 0.875rem 1.25rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 0.75rem;
  min-height: 44px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9375rem;
    margin-top: 0.5rem;
    border-radius: 0.625rem;
    min-height: 48px;
    font-weight: 700;
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }
  
  @media (hover: none) and (pointer: coarse) {
    &:hover:not(:disabled) {
      transform: none;
    }
  }
  
  &:active:not(:disabled) {
    transform: scale(0.98);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    &:active:not(:disabled) {
      transform: scale(0.98);
    }
  }
`;

const Verification = ({ initialEmail, preferedTime, isDaily, onVerified, onTimeout }) => {
  const { formState, timeLeft, formatTime, handleChange, handleVerify } = useVerification(
    initialEmail, 
    preferedTime, 
    isDaily, 
    onVerified, 
    onTimeout
  );

  return (
    <Container>
      <Title>
        인증 코드 <span>입력</span>
      </Title>
      
      <Description>
        <strong>{initialEmail}</strong>로 전송된<br />
        인증 코드를 입력해주세요
      </Description>
      
      <TimerText>
        남은 시간: <span>{formatTime()}</span>
      </TimerText>
      
      <SectionGroup>
        <SectionLabel>4자리 인증 코드</SectionLabel>
        <CodeInput
          type="text"
          name="code"
          placeholder="0000"
          value={formState.code}
          onChange={handleChange}
          className={formState.error ? 'error' : ''}
          maxLength="4"
        />
        {formState.error && <ErrorMessage>{formState.error}</ErrorMessage>}
      </SectionGroup>

      <SubmitButton
        onClick={handleVerify}
        disabled={formState.isSubmitting || timeLeft === 0}
      >
        {formState.isSubmitting ? '처리 중...' : '인증하기'}
      </SubmitButton>
    </Container>
  );
};

export default Verification;
