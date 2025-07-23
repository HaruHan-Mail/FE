import styled from '@emotion/styled';
import IsDailyOption from './IsDailyOption';
import PreferedTimeOption from './PreferedTimeOption';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: var(--d-grey);
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(232, 105, 18, 0.1);
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;

    &.time-options {
      justify-content: space-between;
    }
  }
`;

const OptionLabel = styled.label`
  margin-bottom: 0.8rem;
  font-weight: 600;
  color: var(--d-grey);
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;

  &:hover:not(:disabled) {
    background-color: var(--shade-2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SettingSectionForm = ({ settings, handleChange, handleSubmit, loading }) => {
  return (
    <Form onSubmit={handleSubmit}>
      {/* 이메일 입력 부분 */}
      <FormGroup>
        <Label htmlFor="email">이메일 주소</Label>
        <Input
          type="email"
          id="email"
          value={settings.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="이메일을 입력하세요"
          required
        />
      </FormGroup>

      {/* 수신 빈도 옵션 */}
      <FormGroup>
        <OptionLabel>수신 빈도</OptionLabel>
        <OptionsContainer>
          <IsDailyOption
            value={true}
            selected={settings.isDaily}
            onChange={(val) => handleChange('isDaily', val)}
            title="하루 1개 지식 받기"
            description="매일 한 가지 주제의 지식을 받아보세요."
          />
          <IsDailyOption
            value={false}
            selected={!settings.isDaily}
            onChange={(val) => handleChange('isDaily', val)}
            title="하루 5개 지식 받기"
            description="한 번에 여러 지식을 받아보세요."
          />
        </OptionsContainer>
      </FormGroup>

      {/* 수신 시간 옵션 */}
      <FormGroup>
        <OptionLabel>수신 시간</OptionLabel>
        <OptionsContainer className="time-options">
          <PreferedTimeOption
            value="오전 7시"
            name="time"
            selected={settings.preferedTime === '오전 7시'}
            onChange={(val) => handleChange('preferedTime', val)}
            label="오전 7시"
          />
          <PreferedTimeOption
            value="오후 12시"
            name="time"
            selected={settings.preferedTime === '오후 12시'}
            onChange={(val) => handleChange('preferedTime', val)}
            label="오후 12시"
          />
          <PreferedTimeOption
            value="오후 6시"
            name="time"
            selected={settings.preferedTime === '오후 6시'}
            onChange={(val) => handleChange('preferedTime', val)}
            label="오후 6시"
          />
        </OptionsContainer>
      </FormGroup>

      <SubmitButton type="submit" disabled={loading}>
        {loading ? '처리 중...' : '설정 저장하기'}
      </SubmitButton>
    </Form>
  );
};

export default SettingSectionForm;
