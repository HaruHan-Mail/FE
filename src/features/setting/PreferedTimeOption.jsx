import styled from '@emotion/styled';

const OptionLabel = styled.label`
  display: flex;
  padding: 1rem;
  border: 2px solid var(--white-grey);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--tint-3);
  }

  &.prefered-time-option--selected {
    border-color: var(--primary);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const RadioInput = styled.input`
  margin-right: 0.8rem;
  accent-color: var(--primary);
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-weight: 800;
`;

const PreferedTimeOption = ({ value, name, selected, onChange, label }) => {
  return (
    <OptionLabel
      className={selected ? 'prefered-time-option--selected' : ''}
      onClick={() => onChange(value)}
    >
      <RadioInput type="radio" name={name} checked={selected} onChange={() => onChange(value)} />
      <Content>
        <Title>{label}</Title>
      </Content>
    </OptionLabel>
  );
};

export default PreferedTimeOption;
