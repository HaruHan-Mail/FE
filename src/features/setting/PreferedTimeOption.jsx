import './css/PreferedTimeOption.css';

const PreferedTimeOption = ({ value, name, selected, onChange, label }) => {
  return (
    <label
      className={`prefered-time-option ${selected ? 'prefered-time-option--selected' : ''}`}
      onClick={() => onChange(value)}
    >
      <input
        type="radio"
        name={name}
        checked={selected}
        onChange={() => onChange(value)}
      />
      <div className="prefered-time-option__content">
        <div className="prefered-time-option__title">{label}</div>
      </div>
    </label>
  );
};

export default PreferedTimeOption;
