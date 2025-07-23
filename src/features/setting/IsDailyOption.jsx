import styled from '@emotion/styled';

const OptionLabel = styled.label`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;

  &:hover {
    border-color: #ffbb8a;
    background-color: #fff9f5;
  }

  &.is-daily-option--selected {
    border-color: var(--primary);
    background-color: #fff9f5;
    box-shadow: 0 2px 8px rgba(232, 105, 18, 0.1);
  }
`;

const RadioInput = styled.input`
  margin-top: 0.2rem;
  margin-right: 0.8rem;
  accent-color: var(--primary);
  width: 18px;
  height: 18px;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
`;

const Description = styled.div`
  font-size: 0.85rem;
  color: #666;
`;

const IsDailyOption = ({ value, selected, onChange, title, description }) => {
  return (
    <OptionLabel
      className={selected ? 'is-daily-option--selected' : ''}
      onClick={() => onChange(value)}
    >
      <RadioInput
        type="radio"
        name="is-daily"
        checked={selected}
        onChange={() => onChange(value)}
      />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </OptionLabel>
  );
};

export default IsDailyOption;
