import './css/IsDailyOption.css';

const IsDailyOption = ({ value, selected, onChange, title, description }) => {
  return (
    <label
      className={`is-daily-option ${selected ? 'is-daily-option--selected' : ''}`}
      onClick={() => onChange(value)}
    >
      <input
        type="radio"
        name="is-daily"
        checked={selected}
        onChange={() => onChange(value)}
      />
      <div className="is-daily-option__content">
        <div className="is-daily-option__title">{title}</div>
        <div className="is-daily-option__description">{description}</div>
      </div>
    </label>
  );
};

export default IsDailyOption;
