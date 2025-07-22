import './css/SubmitButton.css';

const SubmitButton = ({ onClick, text, size = "medium", width }) => {
  const inlineStyle = width ? { width } : {};

  return (
    <button
      onClick={onClick}
      style={inlineStyle}
      className={`submit-button ${size.toLowerCase()}`}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
