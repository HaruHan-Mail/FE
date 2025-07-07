import React from 'react';
import styled from '@emotion/styled';
import useSubscription from '../../hooks/useSubscription';

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
  
  /* 모바일 최적화 */
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

const Subtitle = styled.p`
  font-size: 1.rem;
  color: #666;
  text-align: center;
  margin: 0 0 1.75rem 0;
  
  @media (max-width: 768px) {
    margin: 0 0 1.25rem 0;
    font-size: 0.8125rem;
    line-height: 1.3;
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
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0.875rem 1rem;
  border: 1px solid var(--white-grey);
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  background: var(--sliver);
  min-height: 44px;
  box-sizing: border-box;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 0.75rem 0.875rem;
    border-radius: 0.625rem;
    min-height: 48px;
  }
  
  &:hover {
    border-color: var(--primary);
    background: #fff;
    transform: translateY(-1px);
  }
  
  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: none;
    }
  }
  
  &:has(input:checked) {
    border-color: var(--primary);
    background: linear-gradient(135deg, #fff5f0 0%, #fff 100%);
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;


const RadioText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;

// 오버플로우 문제 해결을 위한 이메일 입력 필드
const EmailInput = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid var(--white-grey);
  border-radius: 0.75rem;
  font-size: 0.875rem;
  background: var(--sliver);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
  min-height: 44px;
  outline: none;
  
  @media (max-width: 768px) {
    padding: 0.875rem;
    font-size: 0.875rem;
    border-radius: 0.625rem;
    min-height: 48px;
  }
  
  &::placeholder {
    color: #999;
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

const CheckboxGroup = styled.div`
  margin: 1.25rem 0;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  gap: 0.625rem;
  min-height: 44px;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    align-items: center;
    min-height: 48px;
  }
  
  @media (max-width: 480px) {
    gap: 0.375rem;
    min-height: 44px;
  }
  
  @media (max-height: 600px) {
    min-height: 40px;
  }
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

const CheckboxButton = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid #ddd;
  border-radius: 3px;
  position: relative;
  transition: all 0.2s ease;
  flex-shrink: 0;
  margin-top: 1px;
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin-top: 0;
  }
  
  ${CheckboxLabel}:has(input:checked) & {
    border-color: var(--primary);
    background: var(--shade-1);
    
    &::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 11px;
      font-weight: bold;
      
      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
`;

const CheckboxText = styled.span`
  font-size: 0.8125rem;
  color: #666;
  flex: 1;
  
  @media (max-width: 768px) {
    font-size: 0.8125rem;
    line-height: 1.3;
  }
  
  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
    
    @media (max-width: 768px) {
      padding: 0.125rem 0;
      margin: -0.125rem 0;
    }
  }
`;

const ErrorMessage = styled.div`
  color: var(--error);
  font-size: 0.75rem;
  margin-top: 0.375rem;
  padding: 0.375rem 0;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin-top: 0.25rem;
    padding: 0.25rem 0;
  }
`;

// 더 미니멀하고 접근성이 좋은 버튼 - 모바일 개선
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

const TIME_OPTIONS = {
  '오전 7시': '07:00',
  '오후 12시': '12:00',
  '오후 6시': '18:00',
}

const Subscription = ({ onSuccess }) => {
  const { formState, setFormState, handleChange, handleSubscribe } = useSubscription(onSuccess);

  return (
    <Container>
      <Title>
        <span>Haruhan</span> 지식 구독
      </Title>
      <Subtitle>
        매일 새로운 지식을 이메일로 받아보세요
      </Subtitle>
      
      <SectionGroup>
        <SectionLabel>수신 빈도</SectionLabel>
        <RadioGroup>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="frequency"
              value="daily"
              onChange={() => setFormState((prev) => ({ ...prev, isDaily: true }))}
              checked={formState.isDaily}
            />
            <RadioText>하루 하나 (월~금)</RadioText>
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="frequency"
              value="weekly"
              onChange={() => setFormState((prev) => ({ ...prev, isDaily: false }))}
              checked={!formState.isDaily}
            />
            <RadioText>하루 다섯 (월요일)</RadioText>
          </RadioLabel>
        </RadioGroup>
      </SectionGroup>

      <SectionGroup>
        <SectionLabel>수신 시간</SectionLabel>
        <RadioGroup>
          {Object.entries(TIME_OPTIONS).map(([label, value]) => (
            <RadioLabel key={value}>
              <RadioInput
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
              <RadioText>{label}</RadioText>
            </RadioLabel>
          ))}
        </RadioGroup>
      </SectionGroup>

      <SectionGroup>
        <SectionLabel>이메일</SectionLabel>
        <EmailInput
          type="email"
          name="email"
          placeholder="example@naver.com"
          value={formState.email}
          onChange={handleChange}
          className={formState.error ? 'error' : ''}
        />
        {formState.error && <ErrorMessage>{formState.error}</ErrorMessage>}
      </SectionGroup>

      <CheckboxGroup>
        <CheckboxLabel>
          <CheckboxInput 
            type="checkbox"
            name="agreed"
            checked={formState.agreed} 
            onChange={handleChange} 
          />
          <CheckboxButton />
          <CheckboxText>
            <a href="/policy" target="_blank" rel="noopener noreferrer">
              개인정보취급방침
            </a>에 동의합니다
          </CheckboxText>
        </CheckboxLabel>
      </CheckboxGroup>

      <SubmitButton
        onClick={handleSubscribe}
        disabled={formState.isSubmitting || !formState.agreed}
      >
        {formState.isSubmitting ? '처리 중...' : '구독하기'}
      </SubmitButton>
    </Container>
  );
};

export default Subscription;
